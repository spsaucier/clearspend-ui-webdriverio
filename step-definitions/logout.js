import { Given, When, Then } from '@wdio/cucumber-framework';
import AccountSettingsPage from "../pageobjects/account.settings.page";
import LoginPage from "../pageobjects/login.page";

// Login with the user
When(/^I sign out of the application$/, async () => {
    await AccountSettingsPage.open();
    expect(AccountSettingsPage.buttonSignOut).toBeDisplayed();
    await AccountSettingsPage.logout();
    expect(LoginPage.inputEmail).toBeDisplayed();
    expect(LoginPage.inputPassword).toBeDisplayed();
    expect(LoginPage.buttonLogin).toBeDisplayed();
});