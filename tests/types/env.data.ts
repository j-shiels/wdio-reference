/**
 * type to hold environment data read in from json files
 */
export type EnvData = {
    /**
     * Environment URL
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
