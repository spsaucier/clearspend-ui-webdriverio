import Page from './page';
import dotenv from 'dotenv';
dotenv.config();
/**
 * sub page containing specific selectors and methods for a specific page
 */

class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputEmail() { return $('//input[@name="login"]'); }

    get inputPassword() { return $('//input[@name="password"]'); }

    get buttonLogin() { return $('//button[@type="submit"]'); }

    get errorNotification() { return $('//h3[text()="Something went wrong"]'); }

    /*
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async login (email=process.env.EMAIL, password=process.env.PASS) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.buttonLogin.click();
    }

    async loginWith (email, password=process.env.TEST_PASS) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.buttonLogin.click();
        await browser.pause(3000);
    }

    /*
     * overwrite specific options to adapt it to page object
     */

    open() {
        return super.open('login');
    }
}

export default new LoginPage();