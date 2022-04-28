import { Given, When, Then } from '@wdio/cucumber-framework';
import OnboardingPage from '../pageobjects/onboarding.page';
import BusinessDetailsPage from '../pageobjects/onboarding/business.details.page';
import BusinessLeadershipPage from '../pageobjects/onboarding/business.leadership.page';
import AddBankAccountPage from '../pageobjects/onboarding/add.bank.account.page';
import AuthorizeDepositPage from '../pageobjects/onboarding/authorize.deposit.page';

// Business Details - Entering entity name
When(/^I enter entity name$/, async () => {
    await BusinessDetailsPage.enterEntityName();
});

// Business Details - Enter EIN number
When(/^I enter EIN$/, async () => {
    await BusinessDetailsPage.enterEin();
});

// Business Details - Enter phone number
When(/^I enter phone number$/, async () => {
    await BusinessDetailsPage.enterPhoneNumber();
});

// Business Details - Enter business description
When("I enter business description with length {int}", async (quantity) => {
    await BusinessDetailsPage.enterBusinessDescription(quantity);
});

// Business Details - Enter business description
When(/^I select merchant category$/, async () => {
    await BusinessDetailsPage.chooseCategory();
});

// Business Details - Enter business description
When(/^I enter random address$/, async () => {
    await Address.enterAddress();
});

// Business Leadership - Enter title
When(/^I enter random title$/, async () => {
    await BusinessLeadershipPage.enterTitle();
});

// Business Leadership - Enter date of birth
When(/^I select date of birth$/, async () => {
    await BusinessLeadershipPage.pickDate();
});

// Business Leadership - Enter SSN
When(/^I enter SSN$/, async () => {
    await BusinessLeadershipPage.enterSocial();
});

// Business Leadership - Enter percentage ownership
When(/^I enter percentage ownership(?: - "([^"]*)")?$/, async (number) => {
    await BusinessLeadershipPage.enterPercentageOwnership(number);
});

// Business Leadership - Connect bank account via Plaid
When(/^I connect my bank account$/, async () => {
    await AddBankAccountPage.linkBankAccount();
});

// Business Leadership - Connect bank account via Plaid
When(/^I skip bank verification$/, async () => {
    await AddBankAccountPage.skipBankVerification();
});

// Business Leadership - Connect bank account via Plaid
When("I authorize deposit for {string} dollars", async (amount) => {
    await AuthorizeDepositPage.enterAmount(amount);
    expect(AuthorizeDepositPage.amountTextbox).toHaveValue(amount);
    expect(AuthorizeDepositPage.accountOption).toBeSelected();
    expect(AuthorizeDepositPage.authorizeDepositButton).toBeEnabled();
    await AuthorizeDepositPage.clickAuthorizeDeposit();
});

// Validate the Business Details page
Then(/^I expect to see the business details page$/, async () => {
    await expect(BusinessDetailsPage.entityNameTextbox).toBeDisplayed();
    await expect(BusinessDetailsPage.einTextbox).toBeDisplayed();
    await expect(BusinessDetailsPage.corporatePhoneNumberTextbox).toBeDisplayed();
    await expect(BusinessDetailsPage.describeYourBusinessTextarea).toBeDisplayed();
    await expect(BusinessDetailsPage.merchantCategoryTextbox).toBeDisplayed();
    await expect(BusinessDetailsPage.streetAddressTextbox).toBeDisplayed();
});

// Validate the Business Details page
Then(/^I expect to see the business leadership page$/, async () => {
    await expect(BusinessLeadershipPage.titleTextbox).toBeDisplayed();
    await expect(BusinessLeadershipPage.monthDropdown).toBeDisplayed();
    await expect(BusinessLeadershipPage.ssnTextbox).toBeDisplayed();
    await expect(BusinessLeadershipPage.percentageOwnershipTextbox).toBeDisplayed();
});

// Validate the Add Bank Account page
Then(/^I expect to see the add bank account page$/, async () => {
    await AddBankAccountPage.linkBankButton.waitForDisplayed({ timeout: 25000});
    await expect(AddBankAccountPage.linkBankButton).toBeDisplayed();
    await expect(AddBankAccountPage.skipBankVerificaionButton).toBeDisplayed();
});

// Validate the Transfer Money page
Then(/^I expect to see the authorize deposit page$/, async () => {
    await AuthorizeDepositPage.amountTextbox.waitForDisplayed({ timeout: 25000});
    await expect(AuthorizeDepositPage.amountTextbox).toBeExisting();
    await expect(AuthorizeDepositPage.accountOption).toBeExisting();
    expect(AuthorizeDepositPage.authorizeDepositButton).toBeExisting();
});

// Validate the Onboarding page is opened - NOTE: To be deprecated
Then(/^I expect to see the onboarding page$/, async () => {
    await expect(OnboardingPage.entityNameTextbox).toBeDisplayed();
    await expect(OnboardingPage.einTextbox).toBeDisplayed();
    await expect(OnboardingPage.corporatePhoneNumberTextbox).toBeDisplayed();
    await expect(OnboardingPage.businessDbaTextbox).toBeDisplayed();
    await expect(OnboardingPage.describeYourBusinessTextarea).toBeDisplayed();
    await expect(OnboardingPage.merchantCategoryDropdown).toBeDisplayed();
    await expect(OnboardingPage.streetAddressTextbox).toBeDisplayed();

});

// Click Next Button
When(/^I click the next button$/, async () => {
    await BusinessLeadershipPage.nextButton.waitForDisplayed();
    await BusinessLeadershipPage.nextButton.click();
    await BusinessLeadershipPage.nextButton.waitForDisplayed({ reverse: true});
});