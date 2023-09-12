import Page from "./page.ts";
class HomePage extends Page {
  selectors = {
    applicationTitle: '[data-ref-id= "application-title"]',
    userFullNameLabel: '[data-ref-id= "user-full-name-label"]',
    errorLabel: '[data-ref-id= "error-label"]',
    getUserDetailsButton: '[data-ref-id= "get-user-details-button"]',
  };

  public async verifyMainContentIsDisplayed(): Promise<void> {
    await expect($(this.selectors.applicationTitle)).toBeDisplayed();
    await expect($(this.selectors.getUserDetailsButton)).toBeDisplayed();
  }

  async clickGetUserDetailsButton() {
    await $(this.selectors.getUserDetailsButton).click();
  }

  async verifyUserDetails(user: string) {
    await expect($(this.selectors.userFullNameLabel)).toHaveText(user);
  }

  async verifyError(errorMessage: string) {
    await expect($(this.selectors.errorLabel)).toHaveText(errorMessage);
  }
}

export default new HomePage();
