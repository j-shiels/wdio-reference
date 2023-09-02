/**
 * type to hold environment data read in from json files
 */
export type EnvType = {
    [key: string]: unknown
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
