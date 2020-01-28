/**
    @class Parameter - this class represents a parameter as name-value pair
    
    Copyright 2019 Unvired Inc. All Rights Reserved.
    For commercial license details, please contact Unvired
*/
declare class Parameter {
    /**
        @member _name - name of the parameter
        @member _value - value of the parameter
    */
    private _name;
    private _value;
    /**
        @constructor initialise the parmater
    */
    constructor(name: string, value: string);
    get name(): string;
    set name(name: string);
    get value(): string;
    set value(value: string);
    /**
        @method isMedia - checks whether the message is an attachment or text;
    */
    isMedia(): boolean;
}
export { Parameter };
