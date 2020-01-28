/**
    @class Media - this class is used to handle attachments sent by the user
    
    Copyright 2019 Unvired Inc. All Rights Reserved.
    For commercial license details, please contact Unvired
*/
declare class Media {
    /**
        @member _mediaId - attachment id
        @member _fileName - attachment name
        @member _mimeType - attachment type
    */
    private _mediaId;
    private _fileName;
    private _mimeType;
    /**
        @constructor - initialise all the attachment details
    */
    constructor(media: string, fileName: string, mimeType: string);
    get mediaId(): string;
    set mediaId(id: string);
    get fileName(): string;
    set fileName(name: string);
    get mimeType(): string;
    set mimeType(type: string);
}
export { Media };
