import { Given } from "@cucumber/cucumber";

import MainPage from "../pages/home.page.ts";

Given("the application is displayed", async () => {
  await MainPage.verifyMainContentIsDisplayed();
});

Given(
  "user details can be retrieved and displayed for user {string}",
  async (user: string) => {
    await MainPage.clickGetUserDetailsButton();
    await MainPage.verifyUserDetails(user);
  }
);

Given(
  "an error is displayed when application fails to retrieve user details",
  async () => {
    await MainPage.clickGetUserDetailsButton();
    await MainPage.verifyError("An error has occured");
  }
);
