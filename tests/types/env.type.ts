/**
 * type to hold environment data read in from json files
 */
export type EnvType = {
  [key: string]: unknown;
  /**
   * test config options which can change per environment or tests to run on this environment
   */
  config: {
    /**
     * spec option within wdio.conf. this tells the suite which tests to run
     */
    tests: './tests/features/functional/**/example.feature';
    /**
     * boolean option to tell the suite to run on our cross browser configs (i.e lambdaTest)
     */
    cross_browser: true;
  };
  /**
     /**
     * Environment URL. Should not have a trailing forward slash as this will be applied by the path.
     */
  url: string;
  /**
   * Normal user for App
   */
  user: string;
  /**
   * Password for normal user. This should be PLACEHOLDER in environments above the line
   */
  password: string;
};
