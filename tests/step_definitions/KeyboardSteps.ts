import { When } from "@cucumber/cucumber";
import Keyboard from "../utils/keyboard.utils.ts";

When("user presses {string} key", async (keys: string) => {
  await Keyboard.sendKeys(keys);
});

When(
  "user presses {string} key {string} times",
  async (keys: string, times: number) => {
    await Keyboard.sendKeys(keys, times);
  }
);
