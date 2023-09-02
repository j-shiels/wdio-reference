import Arguments from './arguments.utils.ts';

const environment: string = Arguments.getEnvironmentValue();

const envDataJson = await import(`../../test_data/${environment}.json`, {
  assert: { type: 'json' }
});

const staticDataJson = await import(`../../test_data/static.json`, {
  assert: { type: 'json' }
});

/**
 * Interface for Env Data structure
 */
interface IEnvData {
  url: string;
  user: string;
  password: string;
}

/**
 * Interface for Static data
 */
interface IStaticData {
  getVisualValidationBaselines: boolean;
}

class DataUtils {
  /**
   * Get environment specific test data and prep it for use. PLACEHOLDER values get replaced with environment variables
   * Environment choice should be passed in as a cmd line argument e.g  'wdio run ./wdio.conf.ts --Env=local'
   */
  static getEnvData() {
    const updatedEnvData = envDataJson.default;

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
export const envData = DataUtils.getEnvData() as IEnvData;

/**
 * static data read in from json file
 */
export const staticData = staticDataJson.default as IStaticData;