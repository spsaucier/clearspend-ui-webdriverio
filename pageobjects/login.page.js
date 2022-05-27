import Page from './page';
import dotenv from 'dotenv';
dotenv.config();

class LoginPage extends Page {

    get inputEmail() { return $('//input[@name="login"]'); }
    get inputPassword() { return $('//input[@name="password"]'); }
    get buttonLogin() { return $('//button[@type="submit"]'); }
    get phoneNumberTextbox() { return $('input[name="phone"]'); }
    get nextButton() { return $('button[type="submit"]'); }
    get errorNotification() { return $('//h3[text()="Could not log in"]'); }
    get requiredField() { return $("//div[text()='Required field']"); }


    async login (email, password) {
        await this.inputEmail.setValue(email || global.email);
        await this.inputPassword.setValue(password || process.env.PASS);
        await this.buttonLogin.click();
        await browser.pause(3000);
        await expect(LoginPage.errorNotification).not.toBeDisplayed();
    }

    async twoFactorAuthentication() {
        await this.phoneNumberTextbox.waitForDisplayed();
        await this.phoneNumberTextbox.setValue("1111111111");
        await this.nextButton.click();
    }

    async isRequiredFieldTextDisplayed() {
        await this.requiredField.waitForDisplayed();
    }

    generateTestData() {
        return super.generateTestData();
    }

    open() {
        return super.open('login');
    }
}

export default new LoginPage();