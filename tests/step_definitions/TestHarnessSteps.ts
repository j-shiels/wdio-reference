import { Given } from "@cucumber/cucumber";
import TestHarnessPage from "../pages/test_harness.page.ts";
import MainPage from "../pages/home.page.ts";

Given("user launches the application", async () => {
  await TestHarnessPage.open();
  await TestHarnessPage.clickLaunchWithOptions();
  await MainPage.verifyMainContentIsDisplayed();
});

Given("user launches the application for user {string}", async (username) => {
  await TestHarnessPage.open();
  await TestHarnessPage.selectUserDetails(username);
  await TestHarnessPage.clickLaunchWithOptions();
  await MainPage.verifyMainContentIsDisplayed();
});
