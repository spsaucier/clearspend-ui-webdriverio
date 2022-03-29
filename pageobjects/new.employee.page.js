import Page from './page';
import { faker } from '@faker-js/faker';

/**
 * sub page containing specific selectors and methods for a specific page
 */

class NewEmployeePage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputFirstName() { return $('//input[@name="first-name"]'); }
    get inputLastName() { return $('//input[@name="last-name"]'); }
    get inputEmail() { return $('//input[@name="email"]'); }
    get inputPhone() { return $('//input[@name="phone"]'); }
    get inputAddress() { return $('//input[@name="streetLine1"]'); }
    get inputCity() { return $('//input[@name="locality"]'); }
    get inputZipCode() { return $('//input[@name="postalCode"]'); }
    get buttonCreateEmployee() { return $('//button//span[contains(text(), " Employee")]'); }
    get errorNotification() { return $('svg[aria-label="icon: warning-rounded"] ~ div h3'); }

    /**
    * Method to create Employee with specific .
    * @author   Nikita Bogdanov
    * @param    {String} cardType - either "physical" or "virtual"
    */  
    async createEmployee(type, employeeName) {
        const email = faker.internet.email();
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const phone = faker.phone.phoneNumber('321#######');
        const addressNumber = Math.floor(1000 + Math.random() * 9000);
        if (employeeName === undefined) {
            await this.inputFirstName.setValue(firstName);
            await this.inputLastName.setValue(lastName);
        } else {
            let name1 = employeeName.split(" ")[0];
            let name2 = employeeName.split(" ")[1];
            await this.inputFirstName.setValue(name1);
            await this.inputLastName.setValue(name2);
        }
        await this.inputEmail.setValue(email);
        await this.inputPhone.setValue(phone);
        await this.inputAddress.setValue(addressNumber);
        await browser.pause(2000);
        await browser.keys("ArrowDown");
        await browser.keys("Enter");
        await this.buttonCreateEmployee.waitForExist();
        await this.buttonCreateEmployee.click();
        await this.buttonCreateEmployee.waitForDisplayed({ reverse:true});
        global.fullName = firstName + " " + lastName;
    }

    async enterEmail(email) {
        await this.inputEmail.waitForDisplayed();
        if (type === "random") {
            const email = faker.internet.email();
            await this.inputEmail.setValue(email);
        } else {
            await this.inputEmail.setValue(dataType);
        }
    }

    async enterAddress(address) {
        await this.inputAddress.waitForDisplayed();
        if (address === undefined) {
            const addressNumber = Math.floor(1000 + Math.random() * 9000);
            await this.inputEmail.setValue(addressNumber);
        } else {
            await this.inputEmail.setValue(dataType);
        }
        await browser.pause(2000);
        await browser.keys("ArrowDown");
        await browser.keys("Enter");
    }

    async enterPhoneNumber(number) {
        await this.inputPhone.waitForDisplayed();
        if (number === undefined) {
            const phoneNumber = faker.phone.phoneNumber('321#######');
            await this.inputPhone.setValue(phoneNumber);
        } else {
            await this.inputEmail.setValue(number);
        }
    }

    async clickCreateButton() {
        await this.buttonCreateEmployee.waitForExist();
        await this.buttonCreateEmployee.click();
    }

    async isErrorNotificationDisplayed() {
            await NewEmployeePage.errorNotification.waitForDisplayed();
            await expect(NewEmployeePage.errorNotification).toBeDisplayed();
    }

    /*
     * overwrite specific options to adapt it to page object
     */

    open() {
        return super.open('employees/edit');
    }
}

export default new NewEmployeePage();