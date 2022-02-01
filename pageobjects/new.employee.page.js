import Page from './page';
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

    /*
     * overwrite specific options to adapt it to page object
     */

    open() {
        return super.open('employees/edit');
    }
}

export default new NewEmployeePage();