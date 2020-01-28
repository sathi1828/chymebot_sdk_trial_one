/**
    @class FollowUp - this class can be used to provide input suggestions for the user
    
    Copyright 2019 Unvired Inc. All Rights Reserved.
    For commercial license details, please contact Unvired
*/
declare class FollowUp {
    /**
        @member title  name of the input
        @member payload value associated with the input
    */
    private _title;
    private _payload;
    /**
        @constructor - initialise the members
    */
    constructor(title: string, payload: string);
    get title(): string;
    set title(title: string);
    get payload(): string;
    set payload(payload: string);
}
export { FollowUp };
