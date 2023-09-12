import { browser } from '@wdio/globals';
import { envData } from '../utils/data.utils.ts';
import Keyboard from "../utils/keyboard.utils.ts";

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
  /**
   * Opens a sub-page of the page
   * @param path path of the sub-page (e.g. /path/to/page.html)
   */

  public openPath(path: string) {
    return browser.url(`${envData.url}${path}`);
  }

  public currentUrl() {
    return browser.getUrl();
  }

  get waitForTimeout(): number {
    return browser.options.waitforTimeout || 10000;
  }

  public async verifyElementHasFocus(
      element: WebdriverIO.Element
  ): Promise<void> {
    await browser.waitUntil(() => element.isFocused(), {
      timeout: this.waitForTimeout,
      timeoutMsg: `Timeout while waiting for element: ${element.selector} to have focus`
    });
  }

  public async waitForPageToBeReady(): Promise<void> {
    await browser.waitUntil(
        async () => {
          return (await this.getPageReadyState()) === "complete";
        },
        {
          timeout: this.waitForTimeout,
          timeoutMsg: `Timeout while waiting for page ready state to be complete`
        }
    );
  }

  public async getPageReadyState(): Promise<string> {
    return await browser.execute(`{
      return document.readyState
    }`);
  }

  public async tabToFocusElement(
      element: WebdriverIO.Element
  ): Promise<void> {
    await element.waitForDisplayed({
      timeoutMsg: `Cannot tab to element, ${element.selector} was not found on page`
    });

    while (!(await element.isFocused())) {
      await Keyboard.sendKeys("Tab");
    }
  }

  public stringFormat = (str: string, ...args: string[]): string => {
    let formatted = str;
    for (let i = 0; i < args.length; i++) {
      const regexp = new RegExp("\\{" + i + "\\}", "gi");
      formatted = formatted.replace(regexp, args[i]);
    }
    return formatted;
  };

  public async setBrowserLocale(locale: string): Promise<void> {
    await browser.setTimeZone(locale);
    await browser.refresh();
  }
}
