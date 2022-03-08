import Page from './page';

import faker from '@faker-js/faker';

const entityName = faker.company.catchPhraseAdjective();
const ein = faker.datatype.number({ min: 100000000, max: 999999999 });
const phoneNumber = faker.phone.phoneNumber('321#######');
const addressNumber = faker.datatype.number({min: 100, max: 999});
const title = faker.name.title();
const ssn = faker.finance.routingNumber();


/**
 * sub page containing specific selectors and methods for a specific page
 */
class OnboardingPage extends Page {

    // Business Details
    get entityNameTextbox() { return $('input[name="business-name"]'); }
    get einTextbox() { return $('input[name="business-ein"]'); }
    get corporatePhoneNumberTextbox() { return $('input[name="corporate-phone-number"]'); }

    // Business Description
    get businessDescriptionTextbox() { return $('input[name="business-description"]'); }
    get merchantCategoryDropdown() { return $('input[name="business-mcc"]');  }
 
    // Business Address AND Business Leadership
    get streetAddressTextbox() { return $('input[name="streetLine1"]'); }

    // Business Leadership Details
    get titleTextbox() { return $('input[name="title"]'); }
    
    // Date of Birth
    get monthDropdown() { return $('input[name="birthdate--month"]'); }
    get dayDropdown() { return $('input[name="birthdate--day"]'); }
    get yearDropdown() { return $('input[name="birthdate--year"]'); }

    // Social Security Number
    get ssnTextbox() { return $('input[name="ssn"]'); }

    // Percentage Ownership
    get percentageOwnershipTextbox() { return $('input[name="percentage-ownership"]'); }

    // Next Button that appears on multiple pages
    get nextButton() { return $('button[type="submit"]'); }

    // Is there anyone else that manages {COMPANY_NAME}}?
    get ownerName() { return $('//table//tr/td'); }

    // Plaid Integration
    // plaid-link-iframe-1 - iFrame
    get continuePlaidButton() { return $('#aut-continue-button'); }
    get banksToChooseFrom() { return $('button.Touchable.InstitutionSearchResult__button.className'); }
    get plaidUsernameTextbox() { return $('#username'); }
    get passwordTextbox() { return $('#password'); }
    get submitButton() { return $('aut-submit-button'); }
    get accountsToChooseFrom() { return $('fieldset > ul > li'); }
    get continueButton() { return $('aut-continue-button'); }
    // Plaid END

    // Accounts Added + Add Balance
    get amountTextbox() { return $('input[name="amount"]'); }


    /**
    * Method to go through business details section.
    * @author   Nikita Bogdanov
    * @param    NO PARAMS YET
    */
    async businessDetails() {
        await this.entityNameTextbox.waitForDisplayed();
        await this.entityNameTextbox.setValue(entityName);
        await this.einTextbox.setValue(ein);
        await this.corporatePhoneNumberTextbox.setValue(phoneNumber);
        await this.businessDescriptionTextbox.setValue(entityName);
        await this.merchantCategoryDropdown.setValue('Peripherals and Software');
        await browser.keys("ArrowDown");
        await browser.keys("Enter");
        await this.streetAddressTextbox.waitForExist();
        await this.streetAddressTextbox.setValue(addressNumber + " ");
        await browser.pause(3000);
        await browser.keys("ArrowDown");
        await browser.keys("Enter");
        await this.nextButton.waitForEnabled();
        await this.nextButton.click();
        await this.titleTextbox.waitForExist();
        await browser.debug();
    }

    /**
    * Method to go through business leadership section.
    * @author   Nikita Bogdanov
    * @param    NO PARAMS YET
    */
    async businessLeadership() {
        await this.titleTextbox.setValue(title);
        await this.monthDropdown.setValue("March");
        await browser.keys("ArrowDown");
        await browser.keys("Enter");
        await this.dayDropdown.setValue("5");
        await browser.keys("ArrowDown");
        await browser.keys("Enter");
        await this.yearDropdown.setValue("1997");
        await this.streetAddressTextbox.setValue(addressNumber + " ");
        await browser.pause(3000);
        await browser.keys("ArrowDown");
        await browser.keys("Enter");
        await this.ssnTextbox.setValue(ssn);
        await this.percentageOwnershipTextbox.setValue("100");
        await this.nextButton.click();
        await browser.debug();
    }
}

export default new OnboardingPage();