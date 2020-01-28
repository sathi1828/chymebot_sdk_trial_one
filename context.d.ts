declare enum Keys {
    assistant = "ASSISTANT",
    assistantName = "assistantName",
    bundleName = "bundleName",
    conversationId = "CONVERSATION_ID",
    language = "LANGUAGE",
    lastExecutedBot = "lastExecutedBot",
    latitude = "LATITUDE",
    longitude = "LONGITUDE",
    messageId = "MESSAGE_ID",
    messengerType = "messengerType",
    parameterName = "parameterName",
    parameterSource = "parameterSource",
    parameterValue = "parameterValue",
    systemAlias = "SYSTEM_ALIAS"
}
/**
    @class Context-

    Copyright 2019 Unvired Inc. All Rights Reserved.
    For commercial license details, please contact Unvired
*/
declare class Context {
    context: Map<string, string>;
    /**
        @constructor initialise the context
    */
    constructor(key: string, value: string);
    getKey(key: keyof typeof Keys): string | null;
}
export { Context };
