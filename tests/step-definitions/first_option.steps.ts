/**
 * step-definition files are the implementation of the steps in the .feature files
 *
 * Consider them a list of actions to carry out the step from the feature file
 */

import {Given} from '@wdio/cucumber-framework';
import {expect} from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.ts';

import { First_optionUtils, staticData } from '../utils/first_option.utils.ts';

const pages = {
    login: LoginPage
}

Given(/^I print out the test data from option 1$/, async () => {
    await pages.login.open()
    await expect(await pages.login.currentUrl()).toMatch(`${First_optionUtils.getUrl()}/login`)

    console.log("Option 1");
    console.log("-------------------");
    console.log(First_optionUtils.getUrl());
    console.log(First_optionUtils.getUser());
    console.log(First_optionUtils.getPassword());
    console.log(staticData.example);
    console.log("-------------------");

});