import { When } from '@wdio/cucumber-framework';
import DashboardPage from '../pageobjects/dashboard.page';
import NewCardPage from '../pageobjects/new.card.page';
import AllocationsPage from '../pageobjects/allocations.page';
import NewAllocationPage from '../pageobjects/new.allocation.page';
import EmployeesPage from '../pageobjects/employees.page';
import NewEmployeePage from '../pageobjects/new.employee.page';

When(/^I create new allocation$/, async () => {
    await NewAllocationPage.createAllocation();
    await expect(AllocationsPage.successNotification).toBeExisting();
});

// TO DO
When(/^I add balance to root allocation$/, async () => {
    await NewAllocationPage.createAllocation();
});

When(/^I create an employee$/, async () => {
    await EmployeesPage.buttonNewEmployee.waitForDisplayed();
    await EmployeesPage.buttonNewEmployee.click();
    await NewEmployeePage.inputFirstName.waitForDisplayed();
    await NewEmployeePage.createEmployee();
    await expect(EmployeesPage.successNotification).toBeDisplayed();
});

When(/^I add new (virtual|physical) card(?: with the categories "([^"]*)")?(?: with "([^"]*)" limit)?(?: with payment types "([^"]*)")?$/, async (type, categoryType, limit, paymentType) => {
    await NewCardPage.addNewCard(type, categoryType, limit, paymentType);
});

When(/^I pause execution for (\d+) seconds$/, async (seconds) => {
    await browser.pause(seconds * 1000);
});

When(/^I navigate and click on Allocation button$/, async()=>{
    await DashboardPage.buttonAllocation.click();

});

When (/^I navigate and click on Card button$/, async() => {
    await DashboardPage.buttonCard.click();
});

When (/^I navigate and click on Accoounting button$/, async() => {
    await DashboardPage.buttonAccounting.click();
});

