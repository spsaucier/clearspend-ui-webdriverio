import { Then } from '@wdio/cucumber-framework';
import DashboardPage from '../pageobjects/dashboard.page';
import CardsPage from '../pageobjects/cards.page';
import AllocationsPage from '../pageobjects/allocations.page';
import AccountingPage from '../pageobjects/accounting.page';
import EmployeesPage from '../pageobjects/employees.page';
import CompanySettingsPage from '../pageobjects/companySettings.page';
import AccountSettingsPage from '../pageobjects/accountSettings.page';


// TODO:
Then(/^I expect to see the dashboard page$/, async () => {
    await DashboardPage.headerHome.waitForDisplayed();
    await expect(DashboardPage.headerHome).toBeDisplayed();
});

// TODO:
Then(/^I expect to see the allocations page$/, async () => {
    await AllocationsPage.buttonNewAllocation.waitForDisplayed();
    await expect(AllocationsPage.buttonNewAllocation).toBeDisplayed();
});

// TODO:
Then(/^I expect to see the employees page$/, async () => {

});

// Validate the cards page is opened
Then(/^I expect to see the cards page$/, async () => {
    await expect(CardsPage.cardsHeader).toBeDisplayed();
});


Then (/^I expect to see the allocation page$/, async () => {
    await expect(AllocationsPage.buttonNewAllocation).toBeDisplayed();
});


Then (/^I expect to see the card page$/, async() => {
    await expect(CardsPage.cardsHeader).toBeDisplayed();
});


Then (/^I expect to see the accounting page$/, async() => {
    await expect (AccountingPage.headerAccounting).toBeDisplayed();

});

Then (/^I expect to see the acccouting page $/, async() => {
    await (EmployeesPage.buttonNewEmployee).toBeDisplayed();
});

Then (/^I expect to see the companySettings page$/, async () => {
    await expect (CompanySettingsPage.headerCompanySettings).toBeDisplayed();
});

Then (/^I expect to see the accountSettings page$/, async() => {
    await expect (AccountSettingsPage.headerAccountSettings).toBeDisplayed();
});

