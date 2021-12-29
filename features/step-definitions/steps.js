import { Given, When, Then } from '@wdio/cucumber-framework';
import dotenv from 'dotenv';
dotenv.config();

import LoginPage from '../pageobjects/login.page';

const pages = {
    login: LoginPage
};

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open();
});

When(/^I sign in to the application$/, async (email=process.env.EMAIL, password=process.env.PASS) => {
    await LoginPage.loginWith(email, password);
});