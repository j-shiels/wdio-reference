/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Page from "./page.ts";
import { browser } from "@wdio/globals";

class TestHarnessPage extends Page {
  selectors = {
    pageTitle: '[data-ref-id= "test-harness-title"]',
    launchLink: '[data-ref-id= "launch-with-options"]',
    userDetails: '[data-ref-id= "user-details"]',
  };

  public async open(): Promise<void> {
    // @ts-ignore
    const url: string = browser.options.baseUrl;
    if ((await browser.getUrl()) === url) return;
    await browser.maximizeWindow();
    await browser.url(url);
    await $(this.selectors.pageTitle).waitForDisplayed();
    await this.waitForPageToBeReady();
  }

  public async verifyPageIsNotDisplayed(): Promise<void> {
    await expect($(this.selectors.pageTitle)).not.toBeDisplayed();
  }

  public async clickLaunchWithOptions(): Promise<void> {
    await $(this.selectors.launchLink).scrollIntoView();
    await $(this.selectors.launchLink).click();
    await this.verifyPageIsNotDisplayed();
    await this.waitForPageToBeReady();
  }

  public async selectUserDetails(optionText: string): Promise<void> {
    await $(this.selectors.userDetails).selectByVisibleText(optionText);
  }
}

export default new TestHarnessPage();
