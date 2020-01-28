import { Cache } from './cache';
import { Message } from './message';
import { Context } from './context';
import { Runner } from './runner';
/**
    @class ApiBase - This class is root class for the sdk and initialises all the necessary params
*/
declare abstract class ApiBase {
    /**
        @member _cache -  cache instance
        @member _result - final result to be sent back to the user
        @member _botName - name of the bot used for conversation
        @member _userName - name of the user having the conversation
        @member _domain - company name
        @member _conversation - messages
        @member _conversationId - unique ID associated with the message
        @member _context -
        @member _messenger - messenger used for chatting
    */
    private _cache;
    private _result;
    private _botName;
    private _userName;
    private _domain;
    private _conversation;
    private _conversationId;
    private _context;
    private _messenger;
    private _runner;
    /**
        @constructor initialise all the necessary params and redis cache
    */
    constructor(cache: Cache, runner: Runner);
    get cache(): Cache;
    set cache(cache: Cache);
    get result(): string;
    set result(result: string);
    get botName(): string;
    set botName(name: string);
    get userName(): string;
    set userName(name: string);
    get domain(): string;
    set domain(name: string);
    get conversation(): Message[];
    set conversation(conversation: Message[]);
    get conversationId(): string;
    set conversationId(id: string);
    get context(): Context[];
    set context(context: Context[]);
    get messenger(): string;
    set messenger(name: string);
    add(): void;
    get(): void;
    delete(): void;
    /**
        @method setResult - this method is called to set the result into a json
        @param json - json which holds the final result.
        @returns JSON
    */
    setResult(json: string): void;
}
export { ApiBase };
