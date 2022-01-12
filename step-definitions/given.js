import { Given } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page';
import log from 'loglevel';

const pages = {
    login: LoginPage
};

// Navigate to specific page, for example Login Page, Sign Up Page etc.
Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open(); 
    await log.info(`Page ${page} is opened.`);

});

// Login with the user specified in .env file.
Given('I sign in to the application', async () => {
    await LoginPage.login();
});

// Login with the user specified in feature file
Given('I sign in to the application with {string}', async (email) => {
    await LoginPage.loginWith(email);
});