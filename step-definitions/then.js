import { Then } from '@wdio/cucumber-framework';
import DashboardPage from '../pageobjects/dashboard.page';
import CardsPage from '../pageobjects/cards.page';
import AllocationsPage from '../pageobjects/allocations.page';

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

// Counting all the physical or virtual cards. Saves the count to variable global.cardCount
Then("I expect to count all {word} cards", async (cardType) => {
    await CardsPage.open();
    if (cardType === "physical") {
        global.cardCount = await CardsPage.countCards(cardType);
    } else {
        global.cardCount = await CardsPage.countCards(cardType);
    }
    console.log("Initial count: " + global.cardCount);
});

// Counting all the virtual or physical cards and expects new cards to be displayed.
Then("I expect the {string} cards count to be increased by {int}", async (cardType, createdCards) => {
    let newCount = await CardsPage.countCards(cardType);
    console.log("New Count before expect: " + newCount);
    await browser.pause(500);
    expect(newCount).toBe(global.cardCount + createdCards);
    console.log("Final Count: " + newCount);
});