import { Redis as IORedis } from 'ioredis';
declare type contains = string | number | null | Error;
/**
    @class Cache - This class acts as redis client and can perform all the redis operations such as get/srt/delete etc.
*/
declare class Cache {
    /**
        @member client - redis client
        @member defaultExpireTimeInSeconds - default expiry time used for redis key when the key has not been set expire time
        @member messengerType -  messenger name used for determinig the key structure
        @member chymeUser -  user name used for determinig the key structure
        @member domain -  domain/company name used for determinig the key structure
        @member conversationId -  message conversation id used for determinig the key structure in case of webchat message.
    */
    private readonly client;
    private readonly defaultExpireTimeInSeconds;
    messengerType: string;
    conversationId: string;
    chymeUser: string;
    domain: string;
    /**
        @constructor creates a new redis client in the sandbox context using the client from chyme context.
    */
    constructor(client: IORedis);
    /**
        @method get - this method returns the value stored for the key passed as parameter
        @param key - key used to search in redis
        @param cacheType - type of redis cache(global/local).
        @returns returns a promise containig the value of the key if it exists ,else returns null.
    */
    get(key: string, cacheType: boolean): Promise<contains>;
    /**
        @method set - this method is used to insert a key value pair into redis and also sets the expire time for the key
        @param key - key used to insert into redis
        @param value - value mapped for the key used for inserting
        @param expireTimeInSeconds - expiry time for the key
        @param cacheType - type of redis cache(global/local).
    */
    set(key: string, value: any, expireTimeInSeconds: number, cacheType: boolean): void;
    /**
        @method delete - this method is used to delete a particulat key-value pair from redis
        @param key - redis key to be deleted.
        @param cacheType - type of redis cache(global/local).
    */
    delete(key: string, cacheType: boolean): void;
    /**
        @method getKey - this method is used to format the key to required structure.
        @param key - unformatted form of key name.
        @param cacheType - type of redis cache(global/local).
        @returns formatted form of key.
    */
    private getKey;
}
export { Cache };
