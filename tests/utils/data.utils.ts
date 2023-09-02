/* eslint-disable @typescript-eslint/ban-ts-comment */
import Arguments from './arguments.utils.ts';
import { EnvType } from '../types/env.type.ts';
import { StaticType } from '../types/static.type.ts';

const environment: string = Arguments.getEnvironmentValue();

const envDataJson = await import(`../../test_data/environments/${environment}.json`, {
  assert: { type: 'json' }
});

const staticDataJson = await import(`../../test_data/static.json`, {
  assert: { type: 'json' }
});

/**
 * class to handle the importing of static and environment data read in from json files and environment variables
 */
class DataUtils {
  /**
   * Get environment specific test data and prep it for use. PLACEHOLDER values get replaced with environment variables
   * Environment choice should be passed in as a cmd line argument e.g  'wdio run ./wdio.conf.ts --Env=local'
   */
  static getEnvData() {
    const updatedEnvData: EnvType = envDataJson.default;

    for (const [key, value] of Object.entries(updatedEnvData)) {
      if (value === 'PLACEHOLDER') {
        updatedEnvData[key] = process.env[`${key}`];
        // updatedEnvData[key] = "THIS HAS BEEN UPDATED";
      }
    }
    return updatedEnvData;
  }
}

/**
 * environment data read in from json files and environment variables
 */
export const envData: EnvType = DataUtils.getEnvData();

/**
 * static data read in from json file
 */
export const staticData: StaticType = staticDataJson.default as StaticType;
