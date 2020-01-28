"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
    @class Parameter - this class represents a parameter as name-value pair
    
    Copyright 2019 Unvired Inc. All Rights Reserved.
    For commercial license details, please contact Unvired
*/
var Parameter = /** @class */ (function () {
    /**
        @constructor initialise the parmater
    */
    function Parameter(name, value) {
        this._name = name;
        this._value = value;
    }
    Object.defineProperty(Parameter.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Parameter.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
        @method isMedia - checks whether the message is an attachment or text;
    */
    Parameter.prototype.isMedia = function () {
        return false;
    };
    return Parameter;
}());
exports.Parameter = Parameter;
