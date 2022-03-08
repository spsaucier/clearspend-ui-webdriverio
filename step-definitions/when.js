import { When } from '@wdio/cucumber-framework';
import CardsPage from '../pageobjects/cards.page';
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

When("I create new card with {word} allocation", async (allocationType) => {
    await expect(CardsPage.addNewCardButton).toBeDisplayed();
    await CardsPage.addNewCardButton.click();
    await expect(NewCardPage.allocationInput).toBeDisplayed();
    await NewCardPage.selectAllocation(allocationType);
    await NewCardPage.selectEmployee("owner");
    await NewCardPage.cardType("virtual");
    await expect(NewCardPage.createCardButton).toBeEnabled();
    await NewCardPage.createCardButton.click();
    await expect(CardsPage.successNotification).toBeDisplayed();
});
