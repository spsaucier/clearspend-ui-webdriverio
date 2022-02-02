import Page from './page';


class AllocationsPage extends Page {

    get buttonNewAllocation() { return $('//button//span[text()="New Allocation"]'); }
    get inputSearchAllocations() { return $('//input[@placeholder="Search Allocations..."]'); }

    open() {
        return super.open('allocations');
    }
}

export default new AllocationsPage();