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
Object.defineProperty(exports, "__esModule", { value: true });
var apiBase_1 = require("./apiBase");
/**
    @class OnBoarding-

    Copyright 2019 Unvired Inc. All Rights Reserved.
    For commercial license details, please contact Unvired
*/
var OnBoarding = /** @class */ (function (_super) {
    __extends(OnBoarding, _super);
    /**
        @constructor -
    */
    function OnBoarding(cache, runner) {
        return _super.call(this, cache, runner) || this;
    }
    return OnBoarding;
}(apiBase_1.ApiBase));
exports.OnBoarding = OnBoarding;
