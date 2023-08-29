/**
 * Capabilities for each browser/OS to be run in LambdaTest can be configured here
 * Generate other configurations: https://www.lambdatest.com/capabilities-generator/
 */

const build = "TestExamples";

export const capabilities = {
    chrome: {
        maxInstances: 10,
        browserName: "Chrome",
        "LT:Options": {
            build: build + " - Chrome",
            platform: "Windows 10",
            version: "latest",
        },
    },
    firefox: {
        maxInstances: 10,
        browserName: "Firefox",
        "LT:Options": {
            build: build + " - Firefox",
            platform: "Windows 10",
            version: "latest",
        },
    },
    microsoftedge: {
        maxInstances: 10,
        browserName: "MicrosoftEdge",
        "LT:Options": {
            build: build + " - Edge",
            platform: "Windows 10",
            version: "latest",
        },
    },
    safari: {
        maxInstances: 5,
        browserName: "Safari",
        "LT:Options": {
            build: build + " - Safari",
            platform: "MacOS Monterey",
            version: "15.0",
            "safari.cookies": true,
            network: "true",
        },
    },
};
