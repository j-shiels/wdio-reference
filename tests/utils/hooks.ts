import { AfterStep } from "@cucumber/cucumber";
import { takeScreenshot } from "./take_screenshot.utils.ts";
import { TestStepResultStatus } from "@cucumber/messages";

// This is the first hook to be executed; the hooks are executed in the reverse order
// https://github.com/cucumber/cucumber-js/blob/master/docs/support_files/hooks.md
AfterStep(async (step) => {
  if (step.result?.status === TestStepResultStatus.FAILED) {
    await takeScreenshot();
  }

  return step.result?.status;
});
