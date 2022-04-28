import Page from './page';
import { faker } from '@faker-js/faker';

/**
 * sub page containing specific selectors and methods for a specific page
 */

class NewEmployeePage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputFirstName() { return $('[data-name=first-name]'); }
    get inputLastName() { return $('[data-name=last-name]'); }
    get inputEmail() { return $('[data-name=email]'); }
    get inputPhone() { return $('[data-name=phone]'); }
    get inputAddress() { return $('[data-name=streetLine1]'); }
    get addressOptions() { return $$('ul li span'); }
    get inputCity() { return $('//input[@name="locality"]'); }
    get inputZipCode() { return $('//input[@name="postalCode"]'); }
    get buttonCreateEmployee() { return $('//button//span[contains(text(), " Employee")]'); }
    get requiredField() { return $('//div[text()="Required field"]'); }
    get errorNotification() { return $('svg[aria-label="icon: warning-rounded"] ~ div h3'); }

    async enterUserName(employeeName) {
        if (employeeName == undefined) {
            const firstName = faker.name.firstName();
            const lastName = faker.name.lastName();
            await this.inputFirstName.setValue(firstName);
            await this.inputLastName.setValue(lastName);
        } else {
            let firstName = fullName.split(" ")[0];
            let lastName = fullName.split(" ")[1];
            await this.inputFirstName.setValue(firstName);
            await this.inputLastName.setValue(lastName);
        }
    }

    async enterEmail(email) {
        // await this.inputEmail.waitForDisplayed();
        if (email == undefined) {
            const email = faker.internet.email();
            await this.inputEmail.setValue(email);
        } else {
            await this.inputEmail.setValue(email);
        }
    }

    async enterAddress(address) {
        await this.inputAddress.waitForDisplayed();
        if (address == undefined) {
            const addressNumber = Math.floor(1000 + Math.random() * 9000);
            await this.inputAddress.setValue(addressNumber + " ");
        } else {
            await this.inputAddress.setValue(address);
        }
        await browser.pause(4000);
        await browser.keys("ArrowDown");
        await browser.keys("Enter");
    }

    async enterPhoneNumber(number) {
        await this.inputPhone.waitForDisplayed();
        if (number == undefined) {
            const phoneNumber = faker.phone.phoneNumber('321#######');
            await this.inputPhone.setValue(phoneNumber);
        } else {
            await this.inputPhone.setValue(number);
        }
    }

    async clickCreateButton() {
        await this.buttonCreateEmployee.waitForExist();
        await this.buttonCreateEmployee.click();
    }

    /*
     * overwrite specific options to adapt it to page object
     */

    open() {
        return super.open('employees/edit');
    }
}

export default new NewEmployeePage();