import { Then } from '@wdio/cucumber-framework';
import DashboardPage from '../pageobjects/dashboard.page';
import CardsPage from '../pageobjects/cards.page';
import AllocationsPage from '../pageobjects/allocations.page';
import OnboardingPage from '../pageobjects/onboarding.page';
import NewEmployeePage from '../pageobjects/new.employee.page';

// Validate Dashboard page is opened
Then(/^I expect to see the dashboard page$/, async () => {
    await DashboardPage.headerHome.waitForDisplayed();
    await expect(DashboardPage.headerHome).toBeDisplayed();
});

// Validate Allocations page is opened
Then(/^I expect to see the allocations page$/, async () => {
    await AllocationsPage.buttonNewAllocation.waitForDisplayed();
    await expect(AllocationsPage.buttonNewAllocation).toBeDisplayed();
});

// Validate the Cards page is opened
Then(/^I expect to see the cards page$/, async () => {
    await expect(CardsPage.cardsHeader).toBeDisplayed();
});

// Validate the Onboarding page is opened
// Then(/^I expect to see the onboarding page$/, async () => {
//     await expect(OnboardingPage.entityNameTextbox).toBeDisplayed();
//     await expect(OnboardingPage.einTextbox).toBeDisplayed();
//     await expect(OnboardingPage.corporatePhoneNumberTextbox).toBeDisplayed();
//     await expect(OnboardingPage.businessDbaTextbox).toBeDisplayed();
//     await expect(OnboardingPage.describeYourBusinessTextarea).toBeDisplayed();
//     await expect(OnboardingPage.merchantCategoryDropdown).toBeDisplayed();
//     await expect(OnboardingPage.streetAddressTextbox).toBeDisplayed();
// });

// Validate the Onboarding page is opened
Then(/^I expect to see the onboarding page$/, async () => {
    await expect(OnboardingPage.entityNameTextbox).toBeDisplayed();
    await expect(OnboardingPage.einTextbox).toBeDisplayed();
    await expect(OnboardingPage.corporatePhoneNumberTextbox).toBeDisplayed();
    await expect(OnboardingPage.businessDbaTextbox).toBeDisplayed();
    await expect(OnboardingPage.describeYourBusinessTextarea).toBeDisplayed();
    await expect(OnboardingPage.merchantCategoryDropdown).toBeDisplayed();
    await expect(OnboardingPage.streetAddressTextbox).toBeDisplayed();

});

// Counting all the physical or virtual cards.
Then("I expect to count all {word} cards", async (cardType) => {
    await CardsPage.open();
    global.cardCount = await CardsPage.countCards(cardType);
    console.log("Initial count: " + global.cardCount);
});

// Counting all the virtual or physical cards and expects new cards to be displayed.
Then("I expect the {string} cards count to be increased by {int}", async (cardType, createdCards) => {
    await CardsPage.open();
    let newCount = await CardsPage.countCards(cardType);
    console.log("New Count before expect: " + newCount);
    await browser.pause(500);
    console.log(global.cardCount);
    expect(newCount).toBe(global.cardCount + createdCards);
    console.log("Final Count: " + newCount);
});

// Validate that error notification displayed in New Employee Page
Then("I expect to see the error notification", async () => {
    await NewEmployeePage.errorNotification();
    await expect(NewEmployeePage.errorNotification).toBeDisplayed();
});
