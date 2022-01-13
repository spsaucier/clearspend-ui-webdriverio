import { Then } from '@wdio/cucumber-framework';
import DashboardPage from '../pageobjects/dashboard.page';
import CardsPage from '../pageobjects/cards.page';


// TODO:
Then(/^I expect to see the dashboard page$/, async () => {
    await DashboardPage.headerHome.waitForDisplayed();
    await expect(DashboardPage.headerHome).toBeDisplayed();
});

// TODO:
Then(/^I expect to see the allocations page$/, async () => {

});

// TODO:
Then(/^I expect to see the employees page$/, async () => {

});

// Validate the cards page is opened
Then(/^I expect to see the cards page$/, async () => {
    await expect(CardsPage.cardsHeader).toBeDisplayed();
});