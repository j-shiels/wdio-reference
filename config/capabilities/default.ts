/**
 * Capabilities for default browser/OS to be run in pipelines
 */
const headless: boolean = process.env.HEADLESS as unknown as boolean || true;
const browserOptions = {
    args: headless
        ? ['--disable-web-security', '--headless', '--disable-dev-shm-usage', '--no-sandbox', '--window-size=1920,1080']
        : ['--disable-web-security', '--disable-dev-shm-usage', '--no-sandbox', '--window-size=1920,1080']
};

export const capabilities = {
    chrome: {
        maxInstances: 1,
        browserName: 'chrome',
        'goog:chromeOptions': browserOptions,
        acceptInsecureCerts: true
    }
}
