import { browser } from '@wdio/globals';
import { envData } from '../utils/data.utils.ts';

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
  /**
   * Opens a sub-page of the page
   * @param path path of the sub-page (e.g. /path/to/page.html)
   */

  public open(path: string) {
    return browser.url(`${envData.url}/${path}`);
  }

  public currentUrl() {
    return browser.getUrl();
  }
}
