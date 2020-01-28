"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var validatorBase_1 = require("./validatorBase");
/**

    @class Validator- This class is used to validate the input for the parameter and returns validated result back to user
    Copyright 2019 Unvired Inc. All Rights Reserved.
    For commercial license details, please contact Unvired
*/
var Validator = /** @class */ (function (_super) {
    __extends(Validator, _super);
    /**
        @constructor calls the base class and instantiates the cache
    */
    function Validator(cache, runner) {
        return _super.call(this, cache, runner) || this;
    }
    /**
        @method accept this method is used to indicate that the input is acceptable.
    */
    Validator.prototype.accept = function () {
        var obj = {
            accept: 'yes'
        };
        _super.prototype.setResult.call(this, JSON.stringify(obj));
    };
    /**
        @method acceptAs this method is used to indicate that the input is acceptable and
        if the method is called with a <value> then it will be overriden with a equivalent value for subsequent
        use in the business process

        @param value this value will be overriden with a equivalent value for subsequent use in the business process.
        i.e Alternate/equivalent value for the users input
    */
    Validator.prototype.acceptAs = function (value) {
        var obj = {
            accept: 'yes',
            value: value
        };
        _super.prototype.setResult.call(this, JSON.stringify(obj));
    };
    /**
        @method acceptMedia
        @param flag
        @param promptText
        @param followUp
    */
    Validator.prototype.acceptMedia = function (flag, promptText, followUp) {
        var _a;
        var obj = {
            accept: 'yes',
            flag: flag
        };
        if (promptText)
            obj = __assign(__assign({}, obj), { promptText: promptText });
        if ((_a = followUp) === null || _a === void 0 ? void 0 : _a.length)
            obj = __assign(__assign({}, obj), { followUp: followUp });
        _super.prototype.setResult.call(this, JSON.stringify(obj));
    };
    /**
        @method reject this method is used to indicate that the input is not acceptable.
        The method returns a rejection  message to the user .
        It can also suggest the acceptable inputs to the user

        @param promptText This contains rejection message.
        @param followUp This contains  an array of suggestions that a user can choose from
    */
    Validator.prototype.reject = function (promptText, followUp) {
        var _a;
        var obj = {
            accept: 'no',
            promptText: promptText
        };
        if ((_a = followUp) === null || _a === void 0 ? void 0 : _a.length)
            obj = __assign(__assign({}, obj), { followUp: followUp });
        _super.prototype.setResult.call(this, JSON.stringify(obj));
    };
    /**
        @method abort This method is used to abort the validation process.
        Returns cancellation message
        @param text This contains abort messsage
    */
    Validator.prototype.abort = function (message) {
        var obj = {
            accept: 'abort',
            message: message
        };
        _super.prototype.setResult.call(this, JSON.stringify(obj));
    };
    return Validator;
}(validatorBase_1.ValidatorBase));
exports.Validator = Validator;
