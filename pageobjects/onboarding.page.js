import Page from './page';

import faker from '@faker-js/faker';
import * as path from 'path';

const entityName = faker.company.catchPhraseAdjective();
const ein = faker.datatype.number({ min: 100000000, max: 999999999 });
const phoneNumber = faker.phone.phoneNumber('321#######');
let streetAddress = faker.address.streetName();
const addressNumber = faker.datatype.number({min: 1000, max: 9999});
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
    get businessDbaTextbox() { return $('input[name="business-dba-name"]'); }
    get describeYourBusinessTextarea() { return $('textarea[name="business-description"]'); }
    get merchantCategoryDropdown() { return $('input[name="business-mcc"]');  }
 
    // Business Address AND Business Leadership
    get streetAddressTextbox() { return $('input[name="streetLine1"]'); }
    get streetAddressDropdown() { return $$('div[role=dialog] > ul > li'); }

    // Business Leadership Details
    get titleTextbox() { return $('input[name=title]'); }
    
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
    get nextButton2() { return $('//button//span[text()="Next"]'); }

    // Error with address
    get invalidValueLabel() { return $('//div[text()="Invalid value"]'); }

    // Plaid Integration
    get iframe() { return $('#plaid-link-iframe-1'); }
    get checkVerificationStatusButton() { return $('button[data-name=check-verification-status]'); }
    get linkBankButton() { return $('//button//span[text()="Link Bank"]'); }
    get skipBankButton() { return $('//button//span[text()="Skip bank verification"]'); }

    get plaidIframe() { return $('#plaid-link-iframe-1'); }

    get plaidContinueButton() { return $('#aut-continue-button'); }
    get banksToChooseFrom() { return $$('button.Touchable.InstitutionSearchResult__button.className'); }
    get plaidUsernameTextbox() { return $('#username'); }
    get plaidPasswordTextbox() { return $('#password'); }
    get plaidSubmitButton() { return $('#aut-submit-button'); }
    get accountsToChooseFrom() { return $$('ul > li > label'); }
    get plaidtitle() { return $('#a11y-title'); }
    get continueButton() { return $('#aut-continue-button'); }
    // Plaid END

    // Accounts Added + Add Balance
    get amountTextbox() { return $('input[name="amount"]'); }
    get selectAccount() { return $('input ~ div'); }
    get authorizeDepositButton() { return $('button[data-name=authorize-deposit]'); }

    // Plaid 
    // get continuePlaidButton() { return $('//button//span[text()="Continue"]'); }

    // Uploading documents
    get documentsInput() { return $$('input[type=file]'); }
    get documentFrontInput() { return $('//input[contains(@name, "IDENTITY_DOCUMENT_FRONT")]'); }
    get documentBackInput() { return $('//input[contains(@name, "IDENTITY_DOCUMENT_BACK")]'); }


    /**
    * Method to go through business details section.
    * @author   Nikita Bogdanov
    */
    async businessDetails() {
        await this.entityNameTextbox.waitForDisplayed();
        await this.entityNameTextbox.setValue(entityName + addressNumber);
        await this.einTextbox.setValue(ein);
        await this.corporatePhoneNumberTextbox.setValue(phoneNumber);
        await this.businessDbaTextbox.setValue(entityName);
        await this.describeYourBusinessTextarea.setValue(entityName);
        await this.merchantCategoryDropdown.setValue('Peripherals and Software');
        await browser.keys("ArrowDown");
        await browser.keys("Enter");

        // Street Address fails sometimes...
        await this.streetAddressTextbox.waitForExist();
        await this.streetAddressTextbox.setValue("8849 Latrec" + " ");
        await browser.pause(3000);
        await this.streetAddressDropdown[0].waitForExist();
        await this.streetAddressDropdown[0].click();
        await this.nextButton.waitForEnabled();
        await this.nextButton.click();
        await this.titleTextbox.waitForExist({ timeout: 30000 });
    }

    /**
    * Method to go through business leadership section.
    * @author   Nikita Bogdanov
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
        await this.streetAddressTextbox.setValue("8849 Latrec" + " ");
        await browser.pause(3000);
        await this.streetAddressDropdown[0].waitForExist();
        await this.streetAddressDropdown[0].click();
        await this.ssnTextbox.setValue(ssn);
        await this.percentageOwnershipTextbox.setValue("100");
        await this.nextButton.click();
    }

    /**
    * Method to go add new leader or leave as it is
    * @author   Nikita Bogdanov
    */
    async addNewLeader(leader) {
        switch (leader) {
            case "1": {
                break;
            }
            default: {
                await this.nextButton2.waitForDisplayed({ timeout: 30000});
                await this.nextButton2.click();
                console.log("No additional leaders will be added.");
            }

        }
    }

    // Click is not happening on each platform. TO DO: Replace click with jQuery, maybe it'll help.
    async checkVerificationStatus() {
        await browser.pause(5000);
        await this.checkVerificationStatusButton.waitForClickable({timeout: 60000});
        await this.checkVerificationStatusButton.click();
    }

   /**
    * Method to go edit address, in case the address used was not accepted
    * @author   Nikita Bogdanov
    */
    async editAddress() {
        if (await this.invalidValueLabel.isDisplayed() === true) {
            streetAddress = faker.address.streetAddress();
            await this.streetAddressTextbox.setValue("8849 Latrec Ave" + " ");
            await browser.keys("ArrowDown");
            await browser.keys("Enter");
            await this.nextButton.click();
        } else { console.log("No need to change address."); }
    }

    /**
    * Method to upload documents
    * @author   Nikita Bogdanov
    */
    async addDocuments() {
            await this.documentsInput[0].waitForExist();
            const filePath = path.join("/Users/chef/", 'success.png');
            await browser.execute(`document.querySelectorAll("${await this.documentsInput.selector}")[0].style.display = "block"`);
            await this.documentsInput[0].setValue(filePath);
            await browser.execute(`document.querySelectorAll("${await this.documentsInput.selector}")[1].style.display = "block"`);
            await this.documentsInput[1].setValue(filePath);
            await browser.pause(2500);
            await browser.execute(`document.querySelectorAll("${await this.documentsInput.selector}")[0].style.display = "none"`);
            await browser.execute(`document.querySelectorAll("${await this.documentsInput.selector}")[1].style.display = "none"`);
            await this.nextButton.waitForClickable();
            await this.nextButton.click();
    }

    /**
    * Method to connect to Plaid
    * @author   Nikita Bogdanov
    */
    async plaidConnect() {
        await this.linkBankButton.waitForDisplayed({ timeout: 30000});
        await this.linkBankButton.click();
        await browser.switchToFrame(await this.iframe);
        await this.plaidContinueButton.click();
        await this.banksToChooseFrom[0].waitForDisplayed();
        await this.banksToChooseFrom[0].click();
        await this.plaidUsernameTextbox.waitForDisplayed();
        await this.plaidUsernameTextbox.setValue("user_good");
        await this.plaidPasswordTextbox.setValue("pass_good");
        await this.plaidSubmitButton.click();
        await this.plaidContinueButton.waitForExist({ timeout: 10000 });
        await this.accountsToChooseFrom[0].click();
        await this.plaidContinueButton.click();
        await this.plaidtitle.waitForExist();
        await this.plaidContinueButton.click();
        await browser.switchToParentFrame();
    }

    /**
    * Method to add balance to account
    * @author   Nikita Bogdanov
    */
    async addBalance() {
        await this.amountTextbox.waitForExist();
        await this.amountTextbox.setValue(100);
        await this.authorizeDepositButton.waitForExist({ timeout: 10000 });
        await this.authorizeDepositButton.click();
    }
}

export default new OnboardingPage();