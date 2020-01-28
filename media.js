"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
    @class Media - this class is used to handle attachments sent by the user
    
    Copyright 2019 Unvired Inc. All Rights Reserved.
    For commercial license details, please contact Unvired
*/
var Media = /** @class */ (function () {
    /**
        @constructor - initialise all the attachment details
    */
    function Media(media, fileName, mimeType) {
        this._mediaId = media;
        this._fileName = fileName;
        this._mimeType = mimeType;
    }
    Object.defineProperty(Media.prototype, "mediaId", {
        get: function () {
            return this._mediaId;
        },
        set: function (id) {
            this._mediaId = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Media.prototype, "fileName", {
        get: function () {
            return this._fileName;
        },
        set: function (name) {
            this._fileName = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Media.prototype, "mimeType", {
        get: function () {
            return this._mimeType;
        },
        set: function (type) {
            this._mimeType = type;
        },
        enumerable: true,
        configurable: true
    });
    return Media;
}());
exports.Media = Media;
