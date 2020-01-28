"use strict";
/**
    @class FollowUp - this class can be used to provide input suggestions for the user
    
    Copyright 2019 Unvired Inc. All Rights Reserved.
    For commercial license details, please contact Unvired
*/
Object.defineProperty(exports, "__esModule", { value: true });
var FollowUp = /** @class */ (function () {
    /**
        @constructor - initialise the members
    */
    function FollowUp(title, payload) {
        this._title = title;
        this._payload = payload;
    }
    Object.defineProperty(FollowUp.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (title) {
            this._title = title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FollowUp.prototype, "payload", {
        get: function () {
            return this._payload;
        },
        set: function (payload) {
            this._payload = payload;
        },
        enumerable: true,
        configurable: true
    });
    return FollowUp;
}());
exports.FollowUp = FollowUp;
