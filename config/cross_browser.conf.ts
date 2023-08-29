/**
 * cross-browser config. This is an override of the wdio.conf.ts file where we change
 * any wdio/cucumber config options that apply to a cross-browser run.
 *
 * e.g. this is where we would change browser capabilities and apply the LambdaTest config
 */
import { config as baseConfig } from '../wdio.conf.ts';
import { Options } from '@wdio/types';

const headless = (process.env.HEADLESS as unknown as boolean) || false;
const browserOptions = {
  args: headless
    ? ['--disable-web-security', '--headless', '--disable-dev-shm-usage', '--no-sandbox', '--window-size=1920,1080']
    : ['--disable-web-security', '--disable-dev-shm-usage', '--no-sandbox', 'window-size=1920,1080']
};

export const config: Options.Testrunner = {
  ...baseConfig,
  ...{
    capabilities: [
      {
        maxInstances: 1,
        browserName: 'chrome',
        'goog:chromeOptions': browserOptions,
        acceptInsecureCerts: true
      }
    ]
  }
};
