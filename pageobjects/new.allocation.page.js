import Page from './page';
import AllocationsPage from './allocations.page';
import faker from '@faker-js/faker';

const randomWord = faker.random.word();


class NewAllocationPage extends Page {

    get inputParentAllocation() { return $('//input[@name="allocation"]'); }
    get inputAllocationLabel() { return $('//input[@name="allocation-label"]'); }
    get inputAmount() { return $('//input[@name="amount"]'); }
    get inputAllocationOwner() { return $('//input[@name="employee"]'); }
    get buttonCreateAllocation() { return $('//button//span[text()="Create Allocation"]'); }

    async createAllocation(allocationName) {
        await AllocationsPage.buttonNewAllocation.click();
        await this.inputParentAllocation.click();
        await browser.keys("ArrowDown");
        await browser.keys("Enter");
        await this.inputAllocationLabel.setValue(allocationName || randomWord);
        await this.inputAmount.setValue("1");
        await this.inputAllocationOwner.click();
        await browser.keys("ArrowDown");
        await browser.keys("Enter");
        await this.buttonCreateAllocation.click();
        await this.buttonCreateAllocation.waitForDisplayed({ reverse: true});
    }

    open() {
        return super.open('cards/edit');
    }

}

export default new NewAllocationPage();