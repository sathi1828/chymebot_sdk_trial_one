"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var preValidator_1 = require("./preValidator");
var validator_1 = require("./validator");
var command_1 = require("./command");
var event_1 = require("./event");
var onBoarding_1 = require("./onBoarding");
/**
    @class Chyme - this class is used for instanciating the sdk with suitable context(runner)
 */
var Chyme = /** @class */ (function () {
    /**
        @constructor initialises context/runner
    */
    function Chyme(apiBase) {
        switch (true) {
            case apiBase instanceof preValidator_1.PreValidator:
                this.preValidator = apiBase; // <PreValidator>apiBase              
                this.cache = this.preValidator.cache;
                break;
            case apiBase instanceof validator_1.Validator:
                this.validator = apiBase;
                this.cache = this.validator.cache;
                break;
            case apiBase instanceof command_1.Command:
                this.command = apiBase;
                this.cache = this.command.cache;
                break;
            case apiBase instanceof event_1.Event:
                this.event = apiBase;
                this.cache = this.event.cache;
                break;
            case apiBase instanceof onBoarding_1.OnBoarding:
                this.onBoarding = apiBase;
                this.cache = this.onBoarding.cache;
                break;
        }
    }
    Chyme.prototype.getValidator = function () {
        if (this.validator)
            return this.validator;
        throw new Error('Instance does not exists');
    };
    Chyme.prototype.getPreValidator = function () {
        if (this.preValidator)
            return this.preValidator;
        throw new Error('Instance does not exists');
    };
    Chyme.prototype.getCommand = function () {
        if (this.command)
            return this.command;
        throw new Error('Instance does not exists');
    };
    Chyme.prototype.getEvent = function () {
        if (this.event)
            return this.event;
        throw new Error('Instance does not exists');
    };
    Chyme.prototype.getOnBoarding = function () {
        if (this.onBoarding)
            return this.onBoarding;
        throw new Error('Instance does not exists');
    };
    return Chyme;
}());
exports.Chyme = Chyme;
