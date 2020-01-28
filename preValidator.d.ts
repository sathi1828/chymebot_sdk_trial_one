import { FollowUp } from './followUp';
import { ValidatorBase } from './validatorBase';
import { Cache } from './cache';
import { Runner } from './runner';
/**

    @class PreValidator- This class is used to determine whether the user needs to provide input for the parameter.

    Copyright 2019 Unvired Inc. All Rights Reserved.
    For commercial license details, please contact Unvired
*/
declare class PreValidator extends ValidatorBase {
    /**
        @constructor calls the base class and instantiates the cache
    */
    constructor(cache: Cache, runner: Runner);
    /**
        @method required this method is called when the user needs to enter a value for a parameter.
        The bot can also suggest the list of values for the user to choose.

        @param prompt text used to ask the user for an input
        @param followUp is the array of suggested input/parameter values the bot can ask the user to choose .
    */
    required(prompt: string, followUp?: Array<FollowUp>): void;
    /**
        @method requiredAs
        @param value text passed
    */
    requiredAs(value: string): void;
    /**
        @method skip this method is called when the parameter is optional
        @returns JSON with required property set to 'no'
    */
    skip(): void;
    /**
        @method abort
        @param message abort message
    */
    abort(message: string): void;
}
export { PreValidator };
