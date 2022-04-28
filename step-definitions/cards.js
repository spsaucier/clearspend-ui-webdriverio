import { Given, When, Then } from '@wdio/cucumber-framework';
import CardsPage from '../pageobjects/cards.page';
import NewCardPage from '../pageobjects/new.card.page';

// Cards Creation - Create physical/virtual crd or both for new employee or existing one.
// TODO: select allocations to use different parameters
When(/^I create (virtual|physical|both) card for the "([^"]*)"$/, async (cardType, name) => {
    await expect(CardsPage.addNewCardButton).toBeClickable();
    await CardsPage.addNewCardButton.click();
    await expect(NewCardPage.allocationInput).toBeExisting();
    await NewCardPage.selectAllocation(); // needs to be replaced
    await NewCardPage.selectEmployee("owner");
    await NewCardPage.cardType(cardType);
    await expect(NewCardPage.createCardButton).toBeEnabled();
    await NewCardPage.createCardButton.click();
    await expect(CardsPage.successNotification).toBeDisplayed();
    await CardsPage.open();
});

// Add new virtual or physical card with/without transaction categories and/or daily/monthly/transaction limit and/or payment types pos/online/manual entry.
// TODO: Combine it with the one above
When(/^I create (virtual|physical) card for the owner$/, async (cardType) => {
    await expect(CardsPage.addNewCardButton).toBeClickable();
    await CardsPage.addNewCardButton.click();
    await expect(NewCardPage.allocationInput).toBeExisting();
    await NewCardPage.selectAllocation();
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

// ADD ONE
When("I change to {string} cards per page", async (quantity) => {
    await CardsPage.cardsPerPageDropdown.waitForExist();
    await expect(CardsPage.cardsPerPageDropdown).toBeExisting();
    await CardsPage.cardsPerPage(quantity);
    await expect(CardsPage.cardsPerPageDropdown).toHaveValue(quantity + " / page");
});

// Counting all the physical or virtual cards.
Then("I expect to count all cards", async () => {
    await CardsPage.cardsPerPage("100");
    global.cardCount = await CardsPage.countCards();
    console.log("RETURN: " + global.cardCount);
});

// Counting all the virtual or physical cards and expects new cards to be displayed.
Then("I expect the cards count to be increased by {int}", async (createdCards) => {
    let newCount = await CardsPage.countCards();
    console.log("New Count before expect: " + newCount);
    expect(newCount).toBe(global.cardCount + createdCards);
    console.log("Final Count: " + newCount);
});

// Validate the Cards page is opened
Then(/^I expect to see the cards page$/, async () => {
    await expect(CardsPage.cardsHeader).toBeDisplayed();
});

