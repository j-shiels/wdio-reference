import { Given } from '@wdio/cucumber-framework';

import { envData, staticData } from '../utils/data.utils.ts';
import { visualValidationCheck } from '../utils/visual_validation.utils.ts';
import ExamplePage from '../pages/example.page.ts';

const pages = {
  example: ExamplePage
};
Given(/^the project allows them to print out the test data$/, async () => {
  await pages.example.open();
  await expect(await pages.example.currentUrl()).toMatch(`${envData.url}/`);

  console.log('Test Data');
  console.log('-------------------');
  console.log(envData.url);
  console.log(envData.user);
  console.log(envData.password);
  console.log(staticData.getVisualValidationBaselines);
  console.log('-------------------');
});
Given(/^the project can do visual validation$/, async function () {
  await expect(await visualValidationCheck('./test_data/visual_validation/expected.png')).toBeTruthy();
});
