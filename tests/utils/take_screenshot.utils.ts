import cucumberJson from "wdio-cucumberjs-json-reporter";

export async function takeScreenshot(): Promise<void> {
  cucumberJson.attach(await browser.takeScreenshot(), "image/png");
}
