import { Given, When, Then } from '@wdio/cucumber-framework';
import UpdatePasswordPage from "../pageobjects/update.password.page";

// Account Data - Updating password
When(/^I update password$/, async () => {
    await UpdatePasswordPage.open();
    expect(UpdatePasswordPage.inputCurrentPassword).toBeDisplayed();
    expect(UpdatePasswordPage.inputNewPassword).toBeDisplayed();
    expect(UpdatePasswordPage.inputConfirmNewPassword).toBeDisplayed();
    await UpdatePasswordPage.updatePassword();
});