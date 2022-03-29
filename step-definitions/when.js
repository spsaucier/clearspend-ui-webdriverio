import { When } from '@wdio/cucumber-framework';

import CardsPage from '../pageobjects/cards.page';
import NewCardPage from '../pageobjects/new.card.page';
import AllocationsPage from '../pageobjects/allocations.page';
import NewAllocationPage from '../pageobjects/new.allocation.page';
import EmployeesPage from '../pageobjects/employees.page';
import NewEmployeePage from '../pageobjects/new.employee.page';
import OnboardingPage from '../pageobjects/onboarding.page';
import SignUpPage from '../pageobjects/sign.up.page';

// Sing Up Step - Create new employee for the account
When("I select business type - {string}", async (type) => {
    await expect(SignUpPage.businessTypeCheckbox).toBeElementsArrayOfSize(3);
    await SignUpPage.selectBusinessType(type);
});

// Sign Up Step - Create new employee for the account
When("I select business structure - {string}", async (type) => {
    await expect(SignUpPage.businessStructureDropdown).toBeDisplayed();
    await SignUpPage.selectBusinessStructureType(type);
});

// Sign Up Step - Are you owner with at least 25% ownership?
When(/^I check (yes|no) for ownership$/, async (option) => {
    await expect(SignUpPage.ownershipCheckbox).toBeElementsArrayOfSize(2);
    await SignUpPage.areYouOwnerWithOwnership(option);
});

// Sign Up Step - Does your title or role allow you to sign contracts for your business?
When(/^I check (yes|no) for executive$/, async (type) => {
    await expect(SignUpPage.executiveCheckbox).toBeElementsArrayOfSize(2);
    await SignUpPage.areYouExecutive(type);
    await expect(SignUpPage.nextButton).toBeEnabled();
    await SignUpPage.nextButton.click();
});

// Sign Up Step - Where should we send a text to verify your mobile phone number?
When(/^I verify phone number and enter confirmation code$/, async () => {
    await expect(SignUpPage.phoneNumberTextbox).toBeDisplayed();
    await SignUpPage.enterPhoneNumber();
    await expect(SignUpPage.confirmationCodeTextbox).toBeElementsArrayOfSize(6);
    await SignUpPage.enterConfirmationCode();
});

// Sign Up Step - Enter password and enter new password again
When(/^I enter password and confirm password$/, async () => {
    await expect(SignUpPage.passwordTextbox).toBeDisplayed();
    await expect(SignUpPage.confirmPasswordTextbox).toBeDisplayed();
    await SignUpPage.enterPassword();
    await expect(SignUpPage.nextButton).toBeEnabled();
    await SignUpPage.nextButton.click();
});

// Onboarding Step - where you fill out business details
When(/^I fill out business details$/, async () => {
    await OnboardingPage.businessDetails();
});

// Onboarding Step - where you fill out business leadership details
When(/^I fill out business leadership details$/, async () => {
    await OnboardingPage.businessLeadership();
});

// Onboarding Step - Add new leader or leave as it is
When(/^I add new leader$/, async () => {
    await OnboardingPage.addNewLeader();
});

// Onboarding Step - Check Verification Status - Navigate to Uploading Documents
When(/^I check verification status$/, async () => {
    await OnboardingPage.checkVerificationStatus();
});

// Onboarding Step - Upload Identity Documents
When(/^I upload documents$/, async () => {
    await OnboardingPage.documentFrontInput.waitForExist({timeout: 30000});
    await browser.debug();
    await OnboardingPage.addDocuments();
});

// Onboarding Step - Connect Plaid Account
When(/^I connect plaid account$/, async () => {
    await OnboardingPage.plaidConnect();
});

// Onboarding Step - Adding balance to root allocation
When(/^I add balance to the root allocation$/, async () => {
    await OnboardingPage.addBalance();
});

// Onboarding Step - Might be covered by Mukhamad's code
When(/^I add balance to root allocation$/, async () => {
    await NewAllocationPage.createAllocation();
});

// Employees - Create new employee for the account - random name or you can provide specific one
When(/^I create new employee with random name$/, async () => {
    await EmployeesPage.buttonNewEmployee.waitForDisplayed();
    await EmployeesPage.buttonNewEmployee.click();
    await NewEmployeePage.inputFirstName.waitForDisplayed();
    await NewEmployeePage.createEmployee();
    await EmployeesPage.successNotification.waitForDisplayed({ reverse: true });
    await EmployeesPage.buttonNewEmployee.waitForClickable();
});

// Employees - Create new employee for the account - with specific email
When(/^I create new employee with specific name "([^"]*)"$/, async (employeeName) => {
    await EmployeesPage.buttonNewEmployee.waitForDisplayed();
    await EmployeesPage.buttonNewEmployee.click();
    await NewEmployeePage.inputFirstName.waitForDisplayed();
    await NewEmployeePage.createEmployee(employeeName);
    await EmployeesPage.successNotification.waitForDisplayed({ reverse: true });
    await EmployeesPage.buttonNewEmployee.waitForClickable();
});

// Cards Creation - Create physical/virtual crd or both for new employee or existing one.
When(/^I create (virtual|physical|both) card for the "([^"]*)"$/, async (cardType, name) => {
    await expect(CardsPage.addNewCardButton).toBeClickable();
    await CardsPage.addNewCardButton.click();
    await expect(NewCardPage.allocationInput).toBeExisting();
    await NewCardPage.selectAllocation("root");
    await NewCardPage.employeeWithName(name); // needs to be replaced
    await NewCardPage.cardType(cardType);
    await expect(NewCardPage.createCardButton).toBeEnabled();
    await NewCardPage.createCardButton.click();
    await expect(CardsPage.successNotification).toBeDisplayed();
});

// Add new virtual or physical card with/without transaction categories and/or daily/monthly/transaction limit and/or payment types pos/online/manual entry.
When(/^I create (virtual|physical) card for the owner$/, async (cardType) => {
    await expect(CardsPage.addNewCardButton).toBeClickable();
    await CardsPage.addNewCardButton.click();
    await expect(NewCardPage.allocationInput).toBeExisting();
    await NewCardPage.selectAllocation("root");
    await NewCardPage.selectEmployee("owner");
    await NewCardPage.cardType(cardType);
    await expect(NewCardPage.createCardButton).toBeEnabled();
    await NewCardPage.createCardButton.click();
    await expect(CardsPage.successNotification).toBeDisplayed();
});

// Add new virtual or physical card with/without transaction categories and/or daily/monthly/transaction limit and/or payment types pos/online/manual entry.
When(/^I create (virtual|physical) card(?: with the categories "([^"]*)")?(?: with "([^"]*)" limit and amount "([^"]*)")?(?: with payment types "([^"]*)")?$/, async (cardType, categoryType, limit, amount, paymentType) => {
    await expect(CardsPage.addNewCardButton).toBeClickable();
    await CardsPage.addNewCardButton.click();
    await expect(NewCardPage.allocationInput).toBeExisting();
    await NewCardPage.selectAllocation("root");
    await NewCardPage.selectEmployee("owner");
    await NewCardPage.cardType(cardType);
    await NewCardPage.setCategories(categoryType);
    await NewCardPage.setlimit(limit, amount);
    await NewCardPage.setPaymentTypes(paymentType);
    await expect(NewCardPage.createCardButton).toBeEnabled();
    await NewCardPage.createCardButton.click();
    await expect(CardsPage.successNotification).toBeDisplayed();
});

// New card for specific allocation.
When("I create new card with {word} allocation", async (allocationType) => {
    await expect(CardsPage.addNewCardButton).toBeClickable();
    await CardsPage.addNewCardButton.click();
    await expect(NewCardPage.allocationInput).toBeExisting();
    await NewCardPage.selectAllocation(allocationType);
    await NewCardPage.selectEmployee("owner");
    await NewCardPage.cardType("virtual");
    await expect(NewCardPage.createCardButton).toBeEnabled();
    await NewCardPage.createCardButton.click();
    await expect(CardsPage.successNotification).toBeDisplayed();
});

// Allocations - Create new allocation the the name provided or with random name
When(/^I create new allocation with random name$/, async () => {
    await AllocationsPage.buttonNewAllocation.waitForDisplayed();
    await NewAllocationPage.createAllocation();
    await expect(AllocationsPage.buttonNewAllocation).toBeDisplayed();
});

// Allocations - Create new allocation the the name provided or with random name
When(/^I create new allocation with specific name "([^"]*)"$/, async (allocationName) => {
    await AllocationsPage.buttonNewAllocation.waitForDisplayed();
    await NewAllocationPage.createAllocation(allocationName);
    await expect(AllocationsPage.buttonNewAllocation).toBeDisplayed();
});
