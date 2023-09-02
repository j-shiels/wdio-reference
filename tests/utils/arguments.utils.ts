import yargs from 'yargs';

// eslint-disable-next-line
const argv: any = yargs(process.argv.slice(2)).argv;

// console.log(argv);

/**
 * Class to parse any arguments passed in on the cmd line
 * e.g 'wdio run ./wdio.conf.ts --Env=local'
 * This would parse in the --Env argument and assign its value.
 */
class Arguments {
  /**
   * returns an argument value based on param key
   * @param  {String} key key for the key value argument
   * @return {String} value from the key value pair argument
   */
  getArgumentValue(key: string): string {
    return argv[`${key}`];
  }

  /**
   * returns the Env argument supplied at runtime
   * @return {String} value from the "Env" argument
   */
  getEnvironmentValue(): string {
    if (argv.Env === undefined) {
      console.log("Env argument is Undefined. Please pass in your Env via cmd line e.g '--Env=dev'");
      console.log('defaulting to use local test_data');
      return 'local';
    }
    return argv.Env;
  }
}

export default new Arguments();
