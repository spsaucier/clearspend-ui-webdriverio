import Page from './page';


class NewCardPage extends Page {

    get pageHeader() { return $('//h1/span[text()="New Card"]'); }
    get allocationInput() { return $('//input[@name="allocation"]'); }
    get employeeInput() { return $('//input[@name="employee"]'); }
    get inputOptions() { return $('//ul'); }
    get virtualCardCheckbox() { return $('//span[text()="Virtual card"]'); }
    get physicalCardCheckbox() { return $('//span[text()="Physical card"]'); }
    get deliveryAddressCheckbox() { return $('(//label//span[text()="Business"])[1]'); }
    get showEmployeeNameCheckbox() { return $('//input[@name="name-on-card"]/following-sibling::span'); }
    get createCardButton() { return $('//button//span[text()="Create Card"]'); }

    open() {
        return super.open('cards/edit');
    }

}

export default new NewCardPage();