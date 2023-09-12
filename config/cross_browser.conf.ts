/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * cross-browser config. This is an override of the wdio.conf.ts file where we change
 * any wdio/cucumber config options that apply to a cross-browser run.
 *
 * e.g. this is where we would change browser capabilities and apply the LambdaTest config
 */

import {Options} from '@wdio/types';
import {capabilities} from './capabilities/crossbrowser.ts';

const browserName: string = process.env.browser || 'firefox';

//TODO: update these with the service account credentials
const lambdaTestUser: string = 'UpdateLambdaTestUserHere';
const lambdaTestKey: string = 'UpdateLambdaTestKeyHere';

export const dynamicConfig: Options.Testrunner = {

    cucumberOpts: {
        tagExpression: `@cross-browser and not @exclude-${browserName} and not @ignore`,
        timeout: 30000,
        require: ['./tests/step_definitions/*.ts'],
    },
    waitforTimeout: 30000,

    services: [
        [
            'lambdatest',
            {
                tunnel: true
            }
        ]
    ],
    path: '/wd/hub',
    hostname: 'hub.lambdatest.com',
    port: 80,
    //@ts-ignore
    beforeSession(config, capabilities, specs) {
        // @ts-ignore
        capabilities['LT:Options'].name = specs[0].split(/(\\|\/)/g).pop() || undefined;
    },

    //@ts-ignore
    after: async function (result, capabilities, specs) {
        await driver.execute('lambda-status='.concat(result == 0 ? 'passed' : 'failed'), undefined);
    },

    user: lambdaTestUser,
    key: lambdaTestKey,

    //@ts-ignore
    capabilities: [capabilities[browserName]]
}

