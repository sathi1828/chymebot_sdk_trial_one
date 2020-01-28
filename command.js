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
var event_1 = require("./event");
/**

    @class Command-

    Copyright 2019 Unvired Inc. All Rights Reserved.
    For commercial license details, please contact Unvired
*/
var Command = /** @class */ (function (_super) {
    __extends(Command, _super);
    /**
        @constructor - initialise the cache
    */
    function Command(cache, runner) {
        return _super.call(this, cache, runner) || this;
    }
    /**
        @method reply - this method is used to reply back to the user
    */
    Command.prototype.reply = function (message) {
        var obj = {
            reply: 'yes',
            message: message
        };
        _super.prototype.setResult.call(this, JSON.stringify(obj));
    };
    return Command;
}(event_1.Event));
exports.Command = Command;
