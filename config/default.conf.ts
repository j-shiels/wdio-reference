/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * cross-browser config. This is an override of the wdio.conf.ts file where we change
 * any wdio/cucumber config options that apply to a cross-browser run.
 *
 * e.g. this is where we would change browser capabilities and apply the LambdaTest config
 */

import {Options} from '@wdio/types';
import { capabilities } from './capabilities/default.ts';

const browserName: string = process.env.browser || 'chrome';

export const dynamicConfig: Options.Testrunner = {

    cucumberOpts: {
        tags: `not @exclude-${browserName} and not @ignore`,
        require: ['./tests/step_definitions/*.ts'],
    },
    //@ts-ignore
    capabilities: [capabilities[browserName]]
}

