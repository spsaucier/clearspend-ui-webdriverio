import { Given, When, Then } from '@wdio/cucumber-framework';
import SignUpPage from '../pageobjects/sign.up.page';

// Sign up SD
Given(/^I sign up to the application(?: with email "([^"]*)")?$/, async (email) => {
    await expect(SignUpPage.firstNameTextbox).toBeDisplayed();
    await expect(SignUpPage.lastNameTextbox).toBeDisplayed();
    await expect(SignUpPage.workEmailTextbox).toBeDisplayed();
    await expect(SignUpPage.nextButton).toBeDisplayed();
    await SignUpPage.enterUserDetails(email);
    await expect(SignUpPage.nextButton).toBeEnabled();
    await SignUpPage.nextButton.click();
});

// Sing Up Step - Create new employee for the account
When("I enter confirmation code", async () => {
    await SignUpPage.enterConfirmationCode();
});

// Validate the Business Type page is opened
Then(/^I expect to see the notification - already have an account$/, async () => {
    await expect(SignUpPage.alreadyHaveAnAccount).toBeDisplayed();
});

// Validate the Business Type page is opened
Then(/^I expect to see the business type page$/, async () => {
    await expect(SignUpPage.businessTypeCheckbox).toBeElementsArrayOfSize(3);
});

// Sing Up Step - Create new employee for the account
When("I click use different email", async () => {
    await SignUpPage.useDifferentEmailButton.waitForExist();
    await expect(SignUpPage.useDifferentEmailButton).toBeDisplayed();
    await SignUpPage.useDifferentEmailButton.click();
    await SignUpPage.firstNameTextbox.waitForExist();
});

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