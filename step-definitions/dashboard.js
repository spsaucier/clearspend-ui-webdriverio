import { Given, When, Then } from '@wdio/cucumber-framework';
import DashboardPage from '../pageobjects/dashboard.page';


// Validate First-Time Login Dashboard page is opened
Then(/^I expect to see the first-time login dashboard page$/, async () => {
    await DashboardPage.headerHome.waitForDisplayed();
    await expect(DashboardPage.goToDashboardButton).toBeDisplayed();
    await expect(DashboardPage.onboardYourEmployeesButton).toBeDisplayed();
    await expect(DashboardPage.createAllocationButton).toBeDisplayed();
    await expect(DashboardPage.issueCardButton).toBeDisplayed();
});

// Validate Dashboard page is opened
Then(/^I expect to see the dashboard page$/, async () => {
    await DashboardPage.headerHome.waitForDisplayed();
    await expect(DashboardPage.rootAllocationFunds).toBeDisplayed();
    await expect(DashboardPage.buttonAddBalance).toBeDisplayed();
    await expect(DashboardPage.headerHome).toBeDisplayed();
});

// Validate the amount after authorizing a deposit
Then("I expect to see {int} dollars in root allocation", async (amount) => {
    await DashboardPage.rootAllocationFunds.waitForDisplayed();
    await expect(DashboardPage.rootAllocationFunds).toHaveText("$" + amount + ".00");
});