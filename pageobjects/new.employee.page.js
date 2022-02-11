import Page from './page';
import { faker } from '@faker-js/faker';


const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const email = faker.internet.email();
const phone = faker.phone.phoneNumber('321#######');
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
    get buttonCreateEmployee() { return $('//button//span[text()="Create Employee"]'); }
    get errorNotification() { return $('to be defined'); }

    async createEmployee() {
        await this.inputFirstName.setValue(firstName);
        await this.inputLastName.setValue(lastName);
        await this.inputEmail.setValue(email);
        await this.inputPhone.setValue(phone);
        await this.inputAddress.setValue("2510 ");
        await browser.pause(2000);
        await browser.keys("ArrowDown");
        await browser.keys("Enter");
        await expect(this.buttonCreateEmployee).toBeEnabled();
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