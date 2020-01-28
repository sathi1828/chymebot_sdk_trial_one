"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
    @class ApiBase - This class is root class for the sdk and initialises all the necessary params
*/
var ApiBase = /** @class */ (function () {
    /**
        @constructor initialise all the necessary params and redis cache
    */
    function ApiBase(cache, runner) {
        this._runner = runner;
        this._cache = cache;
    }
    Object.defineProperty(ApiBase.prototype, "cache", {
        get: function () {
            return this._cache;
        },
        set: function (cache) {
            this._cache = cache;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiBase.prototype, "result", {
        get: function () {
            return this._result;
        },
        set: function (result) {
            this._result = result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiBase.prototype, "botName", {
        get: function () {
            return this._botName;
        },
        set: function (name) {
            this._botName = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiBase.prototype, "userName", {
        get: function () {
            return this._userName;
        },
        set: function (name) {
            this._userName = name;
            this._cache.chymeUser = this._userName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiBase.prototype, "domain", {
        get: function () {
            return this._domain;
        },
        set: function (name) {
            this._domain = name;
            this._cache.domain = this._domain;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiBase.prototype, "conversation", {
        get: function () {
            return this._conversation;
        },
        set: function (conversation) {
            this._conversation = conversation;
            this._cache.conversationId = this._conversationId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiBase.prototype, "conversationId", {
        get: function () {
            return this._conversationId;
        },
        set: function (id) {
            this._conversationId = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiBase.prototype, "context", {
        get: function () {
            return this._context;
        },
        set: function (context) {
            this._context = context;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiBase.prototype, "messenger", {
        get: function () {
            return this._messenger;
        },
        set: function (name) {
            this._messenger = name;
            this._cache.messengerType = this._messenger;
        },
        enumerable: true,
        configurable: true
    });
    ApiBase.prototype.add = function () {
        this._runner.add();
    };
    ApiBase.prototype.get = function () {
        this._runner.get();
    };
    ApiBase.prototype.delete = function () {
        this._runner.delete();
    };
    /**
        @method setResult - this method is called to set the result into a json
        @param json - json which holds the final result.
        @returns JSON
    */
    ApiBase.prototype.setResult = function (json) {
        this._result = json;
    };
    return ApiBase;
}());
exports.ApiBase = ApiBase;
