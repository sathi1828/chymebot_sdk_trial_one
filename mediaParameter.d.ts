import { Media } from './media';
import { Parameter } from './parameter';
/**
    @class MediaParameter - this class is used to handle attachment parameters
    
    Copyright 2019 Unvired Inc. All Rights Reserved.
    For commercial license details, please contact Unvired
*/
declare class MediaParameter extends Parameter {
    /**
        @member media - holds multiple attachments sent by the user
    */
    media: Array<Media>;
    /**
        @constructor -
    */
    constructor(name: string, value: string);
    /**
        @method isMedia - this method is used to check whether the message is an attachment or text.
        @returns true - if message is an attachment else false.
    */
    isMedia(): boolean;
    get(index: number): Media | null;
    getAll(): Media[];
    add(media: Media): void;
}
export { MediaParameter };
