import Arguments from './arguments.utils.ts';

const environment: string = Arguments.getEnvironmentValue();

const envDataJson = await import(`../test_data/${environment}.json`, {
  assert: { type: 'json' }
});

const staticDataJson = await import(`../test_data/static_data.json`, {
  assert: { type: 'json' }
});

/**
 * class to handle static and environment data read in from json files
 */
interface IEnvData {
  /**
   * url test
   */
  url: string;
  user: string;
  password: string;
}

interface IStaticData {
  example: string;
}

export const data4 = envDataJson.default as IEnvData;
export const data4Static = staticDataJson.default as IStaticData;
