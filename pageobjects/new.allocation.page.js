import Page from './page';
import AllocationsPage from './allocations.page';


class NewAllocationPage extends Page {

    get inputParentAllocation() { return $('//input[@name="allocation"]'); }
    get inputAllocationLabel() { return $('//input[@name="allocation-label"]'); }
    get inputAmount() { return $('//input[@name="amount"]'); }
    get inputAllocationOwner() { return $('//input[@name="employee"]'); }
    get buttonCreateAllocation() { return $('//button//span[text()="Create Allocation"]'); }

    async createAllocation() {
        await AllocationsPage.buttonNewAllocation.click();
        await expect(this.inputParentAllocation).toBeDisplayedInViewport();
        await this.inputParentAllocation.click();
        await browser.keys("ArrowDown");
        await browser.keys("Enter");
        await this.inputAllocationLabel.setValue("SubAllocation");
        await this. inputAmount.setValue("1");
        await this.inputAllocationOwner.click();
        await browser.keys("ArrowDown");
        await browser.keys("Enter");
        await expect(this.buttonCreateAllocation).toBeEnabled();
        await this.buttonCreateAllocation.click();
    }

    open() {
        return super.open('cards/edit');
    }

}

export default new NewAllocationPage();