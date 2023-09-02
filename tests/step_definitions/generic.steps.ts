import { Given } from '@wdio/cucumber-framework';

import { envData, staticData } from '../utils/data.utils.ts';
import { visualValidationCheck } from '../utils/visual_validation.utils.ts';
import LoginPage from '../pages/login.page.ts';

const pages = {
  login: LoginPage
};
Given(/^I print out the test data$/, async () => {
  await pages.login.open();
  await expect(await pages.login.currentUrl()).toMatch(`${envData.url}/`);

  console.log('Test Data');
  console.log('-------------------');
  console.log(envData.url);
  console.log(envData.user);
  console.log(envData.password);
  console.log(staticData.example);
  console.log('-------------------');
});
Given(/^I perform visual validation$/, async function () {
  await expect(await visualValidationCheck('./tests/visual_validation/expected.png')).toBeTruthy();
});
