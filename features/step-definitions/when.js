import { When } from '@wdio/cucumber-framework';
import DashboardPage from '../pageobjects/dashboard.page';

// Navigate to specific page, for example Login Page, Sign Up Page etc.
When(/^I add new employee$/, async () => {
    await DashboardPage.buttonAddNew.waitForDisplayed();
    await DashboardPage.buttonAddNew.click();
    await DashboardPage.addNewOptions[0].click();
});