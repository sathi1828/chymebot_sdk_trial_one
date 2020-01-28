"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CACHE_TYPE;
(function (CACHE_TYPE) {
    CACHE_TYPE[CACHE_TYPE["LOCAL"] = 0] = "LOCAL";
    CACHE_TYPE[CACHE_TYPE["GLOBAL"] = 1] = "GLOBAL";
})(CACHE_TYPE || (CACHE_TYPE = {}));
/**
    @class Cache - This class acts as redis client and can perform all the redis operations such as get/srt/delete etc.
*/
var Cache = /** @class */ (function () {
    /**
        @constructor creates a new redis client in the sandbox context using the client from chyme context.
    */
    function Cache(client) {
        this.messengerType = '';
        this.conversationId = '';
        this.chymeUser = '';
        this.domain = '';
        this.client = client;
        this.defaultExpireTimeInSeconds = 60 * 1; //1 minute        
    }
    /**
        @method get - this method returns the value stored for the key passed as parameter
        @param key - key used to search in redis
        @param cacheType - type of redis cache(global/local).
        @returns returns a promise containig the value of the key if it exists ,else returns null.
    */
    Cache.prototype.get = function (key, cacheType) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (key) {
                key = _this.getKey(key, cacheType);
                _this.client.get(key, function (err, val) {
                    if (err)
                        reject('error while getting key- ' + err);
                    else
                        resolve(val);
                });
            }
            else
                reject('redis key is undefined');
        });
        //using rxjs 
        // return new Observable<contains>((observer)=>{
        //     this.client.get(key,(err,val)=>{
        //         if(err) observer.error(err);
        //         observer.next(val);
        //     }) 
        // }) 
    };
    /**
        @method set - this method is used to insert a key value pair into redis and also sets the expire time for the key
        @param key - key used to insert into redis
        @param value - value mapped for the key used for inserting
        @param expireTimeInSeconds - expiry time for the key
        @param cacheType - type of redis cache(global/local).
    */
    Cache.prototype.set = function (key, value, expireTimeInSeconds, cacheType) {
        key = this.getKey(key, cacheType);
        if (expireTimeInSeconds == -1) {
            this.client.set(key, value, "EX", this.defaultExpireTimeInSeconds);
        }
        else {
            this.client.set(key, value, "EX", expireTimeInSeconds);
        }
    };
    /**
        @method delete - this method is used to delete a particulat key-value pair from redis
        @param key - redis key to be deleted.
        @param cacheType - type of redis cache(global/local).
    */
    Cache.prototype.delete = function (key, cacheType) {
        key = this.getKey(key, cacheType);
        this.client.del(key);
    };
    /**
        @method getKey - this method is used to format the key to required structure.
        @param key - unformatted form of key name.
        @param cacheType - type of redis cache(global/local).
        @returns formatted form of key.
    */
    Cache.prototype.getKey = function (key, cacheType) {
        switch (+cacheType) { //(Number)cacheType. true-1,false-0
            case CACHE_TYPE.LOCAL:
                // Adapt the key in case of web chat
                if ("webchat".toLowerCase() == this.messengerType.toLowerCase())
                    key += "-" + this.conversationId;
                else {
                    key = "cache:" + this.domain.toLowerCase() + ":"
                        + this.chymeUser.toLowerCase() + ":" + key;
                }
                break;
            case CACHE_TYPE.GLOBAL:
                key += "cache:" + this.domain.toLowerCase();
                break;
        }
        return key;
    };
    return Cache;
}());
exports.Cache = Cache;
