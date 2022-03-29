import Page from './page';
import dotenv from 'dotenv';
dotenv.config();


class LoginPage extends Page {

    get inputEmail() { return $('//input[@name="login"]'); }
    get inputPassword() { return $('//input[@name="password"]'); }
    get buttonLogin() { return $('//button[@type="submit"]'); }
    get phoneNumberTextbox() { return $('input[name="phone"]'); }
    get nextButton() { return $('button[type="submit"]'); }
    get errorNotification() { return $('//h3[text()="Something went wrong"]'); }


    async login (email=process.env.EMAIL, password=process.env.PASS) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.buttonLogin.click();
        await browser.pause(3000);
        await expect(LoginPage.errorNotification).not.toBeDisplayed();
    }

    async twoFactorAuthentication() {
        await this.phoneNumberTextbox.waitForDisplayed();
        await this.phoneNumberTextbox.setValue("1111111111");
        await this.nextButton.click();
    }

    async loginWith (email, password=process.env.TEST_PASS) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.buttonLogin.click();
        await browser.pause(3000);
    }

    open() {
        return super.open('login');
    }
}

export default new LoginPage();