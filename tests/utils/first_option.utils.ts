/* eslint-disable @typescript-eslint/ban-ts-comment */
/**
 * option 1 - variable at top level of type structure, environment beneath
 */
import Arguments from './arguments.utils.ts';
import { StaticData } from '../types/static.data.ts';

const environment: string = Arguments.getEnvironmentValue();

const envDataJson = await import(`../testdata/first_option.json`, {
  assert: { type: 'json' }
});

const staticDataJson = await import(`../testdata/static_data.json`, {
  assert: { type: 'json' }
});

/**
 * class to handle the importing of static and environment data read in from json files and environment variables
 */
export class First_optionUtils {
  /**
   * Removes PLACEHOLDER with environment variables
   * @param {string} key key from a key value pair
   * @param {string} value value from a key value pair
   * @return {string} returns the updated value if an update is required
   */
  static removePlaceholders(key: string, value: string): string {
    // @ts-ignore
    if (value === 'PLACEHOLDER') {
      // @ts-ignore
      value = process.env[key];
    }
    return value;
  }

  /**
   * Get url from environment data
   * @return {string} returns value as type string
   */
  static getUrl(): string {
    // @ts-ignore
    return envDataJson.default['url'][environment];
  }

  /**
   * Get user from environment data
   * @return {string} returns value as type string
   */
  static getUser(): string {
    // @ts-ignore
    return envDataJson.default['user'][environment];
  }

  /**
   * Get password from environment data. If PLACEHOLDER is found this will be replaced by environment variable of the same key
   * @return {string} returns value as type string
   */
  static getPassword(): string {
    // @ts-ignore
    let password = envDataJson.default['password'][environment];
    password = this.removePlaceholders('password', password);
    return password;
  }
}

/**
 * static data read in from json file
 */
export const staticData: StaticData = staticDataJson.default as StaticData;
