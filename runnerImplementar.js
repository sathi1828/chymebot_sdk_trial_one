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
var runner_1 = require("./runner");
var RunnerImplementar = /** @class */ (function (_super) {
    __extends(RunnerImplementar, _super);
    function RunnerImplementar() {
        return _super.call(this) || this;
    }
    RunnerImplementar.prototype.add = function () {
        console.log('method add is called');
    };
    RunnerImplementar.prototype.get = function () {
        console.log('method get is called');
    };
    RunnerImplementar.prototype.delete = function () {
        console.log('method delete is called');
    };
    return RunnerImplementar;
}(runner_1.Runner));
exports.RunnerImplementar = RunnerImplementar;
