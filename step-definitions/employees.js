import { Given, When, Then } from '@wdio/cucumber-framework';
import EmployeesPage from '../pageobjects/employees.page';
import NewEmployeePage from '../pageobjects/new.employee.page';

// // Employees - Create new employee for the account - random name or you can provide specific one
// When(/^I create new employee with random name$/, async () => {
//     await EmployeesPage.buttonNewEmployee.waitForDisplayed();
//     await EmployeesPage.buttonNewEmployee.click();
//     await NewEmployeePage.inputFirstName.waitForDisplayed();
//     await NewEmployeePage.createEmployee();
//     await EmployeesPage.successNotification.waitForDisplayed({ reverse: true });
//     await EmployeesPage.buttonNewEmployee.waitForClickable();
// });

// // Employees - Create new employee for the account - with specific email
// When(/^I create new employee with specific name "([^"]*)"$/, async (employeeName) => {
//     await EmployeesPage.buttonNewEmployee.waitForDisplayed();
//     await EmployeesPage.buttonNewEmployee.click();
//     await NewEmployeePage.inputFirstName.waitForDisplayed();
//     await NewEmployeePage.createEmployee(employeeName);
//     await EmployeesPage.successNotification.waitForDisplayed({ reverse: true });
//     await EmployeesPage.buttonNewEmployee.waitForClickable();
// });

// When(/^I create new employee with email "([^"]*)"$/, async (email) => {
//     await EmployeesPage.buttonNewEmployee.waitForDisplayed();
//     await expect(EmployeesPage.buttonNewEmployee).toBeDisplayed();
//     await EmployeesPage.buttonNewEmployee.click();
//     await NewEmployeePage.inputFirstName.waitForDisplayed();
//     await NewEmployeePage.enterUserName();
//     await expect(NewEmployeePage.inputEmail).toBeDisplayed();
//     await NewEmployeePage.enterEmail(email);
//     await expect(NewEmployeePage.inputAddress).toBeDisplayed();
//     await NewEmployeePage.enterAddress();
//     await expect(NewEmployeePage.inputPhone).toBeDisplayed();
//     await NewEmployeePage.enterPhoneNumber();
//     await NewEmployeePage.clickCreateButton();
//     await expect(NewEmployeePage.errorNotification).not.toBeDisplayed();
// });

// Create new employee
When(/^I create a new employee(?: with email "([^"]*)")?(?: with name "([^"]*)")?(?: with phone number "([^"]*)")?(?: with address "([^"]*)")?$/, async (email, fullName, phoneNumber, address) => {
    await EmployeesPage.buttonNewEmployee.waitForDisplayed();
    await expect(EmployeesPage.buttonNewEmployee).toBeDisplayed();
    await EmployeesPage.buttonNewEmployee.click();
    await NewEmployeePage.inputFirstName.waitForDisplayed();
    await NewEmployeePage.enterUserName(fullName);
    await expect(NewEmployeePage.inputEmail).toBeDisplayed();
    await NewEmployeePage.enterEmail(email);
    await expect(NewEmployeePage.inputAddress).toBeDisplayed();
    await NewEmployeePage.enterAddress(address);
    await expect(NewEmployeePage.inputPhone).toBeDisplayed();
    await NewEmployeePage.enterPhoneNumber(phoneNumber);
    await NewEmployeePage.clickCreateButton();
});

// Validate that error notification displayed in New Employee Page
Then(/^I expect to see the error notification$/, async () => {
    await expect(NewEmployeePage.errorNotification).toBeDisplayed();
});

// Validate that error notification displayed in New Employee Page
Then(/^I expect to see the required field$/, async () => {
    await expect(NewEmployeePage.requiredField).toBeDisplayed();
});

// Validate that error notification displayed in New Employee Page
Then(/^I expect to not see the required field$/, async () => {
    await expect(NewEmployeePage.requiredField).not.toBeDisplayed();
});

// Validate that error notification displayed in New Employee Page
Then(/^I expect to not see the error notification$/, async () => {
    await expect(NewEmployeePage.errorNotification).not.toBeDisplayed();
});