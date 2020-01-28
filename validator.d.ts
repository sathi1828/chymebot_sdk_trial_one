import { FollowUp } from './followUp';
import { ValidatorBase } from './validatorBase';
import { Cache } from './cache';
import { Runner } from './runner';
/**

    @class Validator- This class is used to validate the input for the parameter and returns validated result back to user
    Copyright 2019 Unvired Inc. All Rights Reserved.
    For commercial license details, please contact Unvired
*/
declare class Validator extends ValidatorBase {
    /**
        @constructor calls the base class and instantiates the cache
    */
    constructor(cache: Cache, runner: Runner);
    /**
        @method accept this method is used to indicate that the input is acceptable.
    */
    accept(): void;
    /**
        @method acceptAs this method is used to indicate that the input is acceptable and
        if the method is called with a <value> then it will be overriden with a equivalent value for subsequent
        use in the business process

        @param value this value will be overriden with a equivalent value for subsequent use in the business process.
        i.e Alternate/equivalent value for the users input
    */
    acceptAs(value: string): void;
    /**
        @method acceptMedia
        @param flag
        @param promptText
        @param followUp
    */
    acceptMedia(flag: boolean, promptText?: string, followUp?: Array<FollowUp>): void;
    /**
        @method reject this method is used to indicate that the input is not acceptable.
        The method returns a rejection  message to the user .
        It can also suggest the acceptable inputs to the user

        @param promptText This contains rejection message.
        @param followUp This contains  an array of suggestions that a user can choose from
    */
    reject(promptText: string, followUp?: Array<FollowUp>): void;
    /**
        @method abort This method is used to abort the validation process.
        Returns cancellation message
        @param text This contains abort messsage
    */
    abort(message: string): void;
}
export { Validator };
