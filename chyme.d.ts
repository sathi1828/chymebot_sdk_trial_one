import { ApiBase } from './apiBase';
import { PreValidator } from './preValidator';
import { Validator } from './validator';
import { Command } from './command';
import { Event } from './event';
import { OnBoarding } from './onBoarding';
import { Cache } from './cache';
/**
    @class Chyme - this class is used for instanciating the sdk with suitable context(runner)
 */
declare class Chyme {
    /**
        @member cache - redis cache client
    */
    cache: Cache;
    private preValidator;
    private validator;
    private onBoarding;
    private command;
    private event;
    /**
        @constructor initialises context/runner
    */
    constructor(apiBase: ApiBase);
    getValidator(): Validator;
    getPreValidator(): PreValidator;
    getCommand(): Command;
    getEvent(): Event;
    getOnBoarding(): OnBoarding;
}
export { Chyme };
