"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var apiBase_1 = require("./apiBase");
/**
    @class Event-

    Copyright 2019 Unvired Inc. All Rights Reserved.
    For commercial license details, please contact Unvired
*/
var Event = /** @class */ (function (_super) {
    __extends(Event, _super);
    /**
        @constructor initialise redis cache
    */
    function Event(cache, runner) {
        return _super.call(this, cache, runner) || this;
    }
    /**
        @method getInput - this method is used to get the input
        @param param -
    */
    Event.prototype.getInput = function (param) {
        return '';
    };
    /**
        @method getContext - this method is used to get the context
        @param context -
    */
    Event.prototype.getContext = function (context) {
        return '';
    };
    /**
        @method sendMessage - this method is used to send message to the user
        @param message -
    */
    Event.prototype.sendMessage = function (message) {
    };
    return Event;
}(apiBase_1.ApiBase));
exports.Event = Event;
