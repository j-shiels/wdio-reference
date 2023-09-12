import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';
import { browser } from '@wdio/globals';
import * as fs from 'fs';
import { randomUUID } from 'crypto';
import { staticData } from './data.utils.ts';
import cucumberJson from 'wdio-cucumberjs-json-reporter';

/**
 * Function to carry out a Visual Validation Check. It will read in the expected image from expectedPath and take a current screenshot to compare.
 * @param expectedImage This is the file of the expected screenshot Image for comparison
 */
export async function visualValidationCheck(expectedImage: string) {
  //output location of the actual image taken during validation. The Diff image will also be output to this location.
  const actualImageOutput: string = './.tmp/visual_validation';

  // if expectedImage does not exist AND use has indicated via getVisualValidationBaselines to take new baselines.
  // The user should commit any new expected images to source control for future checks.
  if (!fs.existsSync(expectedImage) && staticData.getVisualValidationBaselines) {
    await browser.saveScreenshot(expectedImage);
    console.log('NEW BASELINE TAKEN');
  }

  //setup various needed items for the comparison to work.
  const uuid = randomUUID();
  const actual = PNG.sync.read(await browser.saveScreenshot(`${actualImageOutput}/actual-${uuid}.png`));
  const expected = PNG.sync.read(fs.readFileSync(expectedImage));
  const { width, height } = expected;
  const diff = new PNG({ width, height });

  //carry out the comparison
  const diffCount = pixelmatch(expected.data, actual.data, diff.data, width, height, { threshold: 0.1 });

  //write the debug image to reporting if needed.
  if (diffCount > 0) {
    fs.writeFileSync(`${actualImageOutput}/diff-${uuid}.png`, PNG.sync.write(diff));
    console.log('Images do not match');
    cucumberJson.attach('Actual -> Expected -> Diff');
    cucumberJson.attach(fs.readFileSync(`${actualImageOutput}/actual-${uuid}.png`).toString('base64'), 'image/png');
    cucumberJson.attach(fs.readFileSync(expectedImage).toString('base64'), 'image/png');
    cucumberJson.attach(fs.readFileSync(`${actualImageOutput}/diff-${uuid}.png`).toString('base64'), 'image/png');
  }

  return diffCount <= 0;
}
