import { Cache } from './cache';
import { ApiBase } from './apiBase';
import { Parameter } from './parameter';
import { Message } from './message';
import { Runner } from './runner';
/**
    @class Event-

    Copyright 2019 Unvired Inc. All Rights Reserved.
    For commercial license details, please contact Unvired
*/
declare class Event extends ApiBase {
    /**
        @member input -
    */
    input: Array<Parameter>;
    /**
        @constructor initialise redis cache
    */
    constructor(cache: Cache, runner: Runner);
    /**
        @method getInput - this method is used to get the input
        @param param -
    */
    getInput(param: string): string;
    /**
        @method getContext - this method is used to get the context
        @param context -
    */
    getContext(context: string): string;
    /**
        @method sendMessage - this method is used to send message to the user
        @param message -
    */
    sendMessage(message: Message): boolean | void;
}
export { Event };
