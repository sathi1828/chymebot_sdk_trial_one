"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var media_1 = require("./media");
/**
    @class Message - The Message class provides an abstraction to represent a
        single message in a conversation between a User and a Bot.

    Copyright 2019 Unvired Inc. All Rights Reserved.
    For commercial license details, please contact Unvired
*/
var Message = /** @class */ (function () {
    function Message(text, referenceId) {
        this._message = text;
        if (referenceId)
            this._referenceId = referenceId;
    }
    Object.defineProperty(Message.prototype, "message", {
        get: function () {
            //Returns the response to the user in a conversation
            return this._message;
        },
        set: function (message) {
            //Sets the response to the user in a conversation
            this._message = message;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Message.prototype, "referenceId", {
        get: function () {
            return this._referenceId;
        },
        set: function (referenceId) {
            //Sets the reference ID to group related messages in a conversation
            this._referenceId = referenceId;
        },
        enumerable: true,
        configurable: true
    });
    Message.prototype.addFollowup = function (followUp) {
    };
    Message.prototype.addData = function (data) {
        //Collects the results of a command or event to send back to the user as response from the Bot.
    };
    Message.prototype.getData = function () {
        return [];
    };
    Message.prototype.getMedia = function () {
        //Adds a file as attachment in the Bot response
        return new media_1.Media('', '', '');
    };
    Message.prototype.setMedia = function (mediaId) {
        new media_1.Media('', '', '').mediaId = mediaId;
    };
    return Message;
}());
exports.Message = Message;
