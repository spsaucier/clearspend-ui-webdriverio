import Page from './page';


class NewAllocationPage extends Page {

    get inputParentAllocation() { return $('//input[@name="allocation"]'); }
    get inputAllocationLabel() { return $('//input[@name="allocation-label"]'); }
    get inputAmount() { return $('//input[@name="amount"]'); }
    get inputAllocationOwner() { return $('//input[@name="employee"]'); }
    get virtualCardCheckbox() { return $('//span[text()="Virtual card"]'); }
    get physicalCardCheckbox() { return $('//span[text()="Physical card"]'); }
    get deliveryAddressCheckbox() { return $('(//label//span[text()="Business"])[1]'); }
    get showEmployeeNameCheckbox() { return $('//input[@name="name-on-card"]/following-sibling::span'); }
    get createCardButton() { return $('//button//span[text()="Create Card"]'); }

    open() {
        return super.open('cards/edit');
    }

}

export default new NewAllocationPage();