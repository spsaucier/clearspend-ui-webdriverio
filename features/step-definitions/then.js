import { Then } from '@wdio/cucumber-framework';
import DashboardPage from '../pageobjects/dashboard.page';


// TODO:
Then(/^I expect to see the dashboard page$/, async () => {
    DashboardPage.headerHome.waitForDisplayed();
    DashboardPage.headerHome.isDisplayed();
    DashboardPage.buttonAddBalance.isDisplayed();
});

// TODO:
Then(/^I expect to see the allocations page$/, async (page) => {

});

// TODO:
Then(/^I expect to see the employees page$/, async (page) => {

});

// TODO:
Then(/^I expect to see the cards page$/, async (page) => {

});