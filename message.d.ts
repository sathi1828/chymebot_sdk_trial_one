import { FollowUp } from "./followUp";
import { Media } from "./media";
/**
    @class Message - The Message class provides an abstraction to represent a
        single message in a conversation between a User and a Bot.

    Copyright 2019 Unvired Inc. All Rights Reserved.
    For commercial license details, please contact Unvired
*/
declare class Message {
    private _message;
    private _referenceId?;
    constructor(text: string, referenceId?: string);
    get message(): string;
    set message(message: string);
    get referenceId(): string | undefined;
    set referenceId(referenceId: string | undefined);
    addFollowup(followUp: FollowUp): void;
    addData(data: object): void;
    getData(): object[];
    getMedia(): Media;
    setMedia(mediaId: string): void;
}
export { Message };
