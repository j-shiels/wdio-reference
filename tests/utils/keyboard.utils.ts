import pkg from 'lodash';
import "webdriverio";

const { compact } = pkg;

class Keyboard {
  public async sendKeys(keys: string, times: number = 1): Promise<void> {
    for (let i = 0; i < times; i += 1) {
      let modifier = "";
      const keyNames: string[] = [];

      keys
        .replace(" ", "")
        .split("+")
        .forEach((key) => {
          keyNames.push(key);
          if (["Shift", "Ctrl", "Alt", "Meta"].includes(key)) {
            modifier = key;
          } else {
            keyNames.push(modifier);
            modifier = "";
          }
        });

      await browser.keys(compact(keyNames));
      await browser.pause(30);
    }
  }
}

export default new Keyboard();
