import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page';
import DashboardPage from '../pageobjects/dashboard.page';

// Login with the user
Given(/^I sign in to the application$/, async () => {
    await LoginPage.login(global.email);
});

// Login with the user
Given(/^I sign in to the application with email "([^"]*)"$/, async (email) => {
    await LoginPage.login(email);
});

// Login with the user
Given(/^I sign in to the application with password "([^"]*)"$/, async (password) => {
    await LoginPage.login(global.email, password);
});

// 2FA Step
Given(/^I bypass the two factor authentication$/, async () => {
    await LoginPage.twoFactorAuthentication();
    await expect(DashboardPage.headerHome).toBeDisplayedInViewport();
});

Then(/^I expect to see the login page$/, async () => {
    await expect(LoginPage.inputEmail).toBeDisplayed();
    await expect(LoginPage.inputPassword).toBeDisplayed();
    await expect(LoginPage.buttonLogin).toBeDisplayed();
});

Then(/^I expect to see the error notification on login page$/, async () => {
    await expect(LoginPage.errorNotification).toBeDisplayed();
});

Then(/^I expect to see the error border - required field$/, async () => {
    await LoginPage.isRequiredFieldTextDisplayed();
    await expect(LoginPage.requiredField).toBeDisplayed();
});