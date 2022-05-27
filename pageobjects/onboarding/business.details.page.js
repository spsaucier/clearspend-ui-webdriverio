import Page from '../page';
import Address from '../components/address.page';

import faker from '@faker-js/faker';


class BusinessDetails extends Page {

    // Business Details
    get entityNameTextbox() { return $('input[name="business-name"]'); }
    get businessTypeTextbox() { return $('[data-name=business-name]'); }
    get einTextbox() { return $('input[name="business-ein"]'); }
    get corporatePhoneNumberTextbox() { return $('input[name="corporate-phone-number"]'); }

    // Business Description
    get businessDbaTextbox() { return $('input[name="business-dba-name"]'); }
    get describeYourBusinessTextarea() { return $('textarea[name="business-description"]'); }
    get merchantCategoryTextbox () { return $('input[name="business-mcc"]'); }
    get merchantCategoryOptions() { return $$('[role=dialog] ul li'); }
 
    // Business Address
    get streetAddressTextbox() { return $('input[name="streetLine1"]'); }
    get streetAddressOptions() { return $$('div[role=dialog] > ul > li'); }

    async enterEntityName() {
        const entityName = faker.company.catchPhraseAdjective() + faker.datatype.number({ min: 1000, max: 9999});
        await this.entityNameTextbox.waitForDisplayed();
        await this.entityNameTextbox.setValue(entityName);
    }

    async enterEin() {
        const einNumber = faker.finance.account(9);
        await this.einTextbox.waitForDisplayed();
        await this.einTextbox.setValue(einNumber);
    }

    async enterPhoneNumber() {
        const phoneNumber = faker.phone.phoneNumber('407#######');
        await this.corporatePhoneNumberTextbox.waitForDisplayed();
        await this.corporatePhoneNumberTextbox.setValue(phoneNumber);
    }

    async enterBusinessDescription(quantity) {
        let randomDescription;

        await this.describeYourBusinessTextarea.waitForDisplayed();
        if (quantity !== undefined) {
            randomDescription = faker.random.alpha(quantity);
        } else {
            randomDescription = faker.random.alpha(25);
        }
        await this.describeYourBusinessTextarea.setValue(randomDescription);
    }

    async chooseCategory() {
        await this.merchantCategoryTextbox.waitForDisplayed();
        await this.merchantCategoryTextbox.click();
        await this.merchantCategoryOptions[0].waitForDisplayed();
        const quantity = await this.merchantCategoryOptions.length;
        const randomNumber = faker.datatype.number({ min: 0, max: quantity});
        await this.merchantCategoryOptions[randomNumber].click();
    }


}

export default new BusinessDetails();