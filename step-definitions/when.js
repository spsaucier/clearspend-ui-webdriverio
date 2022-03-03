import { When } from '@wdio/cucumber-framework';
import NewCardPage from '../pageobjects/new.card.page';
import AllocationsPage from '../pageobjects/allocations.page';
import NewAllocationPage from '../pageobjects/new.allocation.page';
import EmployeesPage from '../pageobjects/employees.page';
import NewEmployeePage from '../pageobjects/new.employee.page';

When(/^I create new allocation$/, async () => {
    await NewAllocationPage.createAllocation();
    await expect(AllocationsPage.successNotification).toBeExisting();
});

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