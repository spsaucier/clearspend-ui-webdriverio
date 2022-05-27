import Page from './page';


class AllocationsPage extends Page {

    get buttonNewAllocation() { return $('button[data-name="Create allocation"]'); }
    get inputSearchAllocations() { return $('input[placeholder="Search Allocations..."]'); }
    get successNotification() { return $('//div/h3[text()="Changes successfully saved."]'); }

    open() {
        return super.open('allocations');
    }
}

export default new AllocationsPage();