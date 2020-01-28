"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Keys;
(function (Keys) {
    Keys["assistant"] = "ASSISTANT";
    Keys["assistantName"] = "assistantName";
    Keys["bundleName"] = "bundleName";
    Keys["conversationId"] = "CONVERSATION_ID";
    Keys["language"] = "LANGUAGE";
    Keys["lastExecutedBot"] = "lastExecutedBot";
    Keys["latitude"] = "LATITUDE";
    Keys["longitude"] = "LONGITUDE";
    Keys["messageId"] = "MESSAGE_ID";
    Keys["messengerType"] = "messengerType";
    Keys["parameterName"] = "parameterName";
    Keys["parameterSource"] = "parameterSource";
    Keys["parameterValue"] = "parameterValue";
    Keys["systemAlias"] = "SYSTEM_ALIAS";
})(Keys || (Keys = {}));
/**
    @class Context-

    Copyright 2019 Unvired Inc. All Rights Reserved.
    For commercial license details, please contact Unvired
*/
var Context = /** @class */ (function () {
    /**
        @constructor initialise the context
    */
    function Context(key, value) {
        this.context = new Map();
        this.context.set(key, value);
    }
    Context.prototype.getKey = function (key) {
        return Keys[key] ? Keys[key] : null;
    };
    return Context;
}());
exports.Context = Context;
