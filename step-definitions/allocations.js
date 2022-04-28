import { Given, When, Then } from '@wdio/cucumber-framework';
import AllocationsPage from '../pageobjects/allocations.page';
import NewAllocationPage from '../pageobjects/new.allocation.page';

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

// Validate Allocations page is opened
Then(/^I expect to see the allocations page$/, async () => {
    await AllocationsPage.buttonNewAllocation.waitForDisplayed();
    await expect(AllocationsPage.buttonNewAllocation).toBeDisplayed();
});