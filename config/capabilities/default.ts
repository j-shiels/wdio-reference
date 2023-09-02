/**
 * Capabilities for default browser/OS to be run in pipelines
 */
const headless: boolean = (process.env.HEADLESS as unknown as boolean) || true;
const browserOptions = {
  args: headless
    ? ['--disable-web-security', '--headless', '--disable-dev-shm-usage', '--no-sandbox', '--window-size=1920,1080']
    : ['--disable-web-security', '--disable-dev-shm-usage', '--no-sandbox', '--window-size=1920,1080']
};
const reportMetaData = {
  browser: {
    name: 'chrome',
    version: '58'
  },
  device: 'Local Machine',
  platform: {
    name: 'Windows',
    version: '11'
  }
};

/**
 * capabilities object. Pull out the browser via its name as a key. e.g capabilities[browserName]
 */
export const capabilities = {
  chrome: {
    maxInstances: 1,
    browserName: 'chrome',
    'goog:chromeOptions': browserOptions,
    acceptInsecureCerts: true,
    // metadata for reporting
    'cjson:metadata': reportMetaData
  }
};
