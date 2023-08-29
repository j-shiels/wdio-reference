import {Given} from '@wdio/cucumber-framework';

import { envData, staticData } from '../utils/second_option.utils.ts';
Given(/^I print out the test data from option 2$/, async () => {

    console.log("Option 2");
    console.log("-------------------");
    console.log(envData.url);
    console.log(envData.user);
    console.log(envData.password);
    console.log(staticData.example);
    console.log("-------------------");

});