import Page from './page';
import OnboardingPage from '../pageobjects/onboarding.page';
import faker from '@faker-js/faker';


const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
global.fullName = firstName + " " + lastName;
const email = faker.internet.email();
const phoneNumber = faker.phone.phoneNumber('321#######');
const password = faker.internet.password();


class SignUpPage extends Page {

    get firstNameTextbox() { return $('input[name="first-name"]'); }
    get lastNameTextbox() { return $('input[name="last-name"]'); }
    get workEmailTextbox() { return $('input[name="email"]'); }
    get termsCheckbox() { return $$('input[name="agree"] ~ span'); }
    get nextButton() { return $('button[type="submit"]'); }

    get confirmationCodeTextbox() { return $$('input[inputmode="numeric"]'); }
    
    get businessTypeCheckbox() { return $$('input[name="business-type"]'); }
    get businessStructureDropdown() { return $('input[name="business-structure"]'); }
    get ownershipCheckbox() { return $$('input[name="is-owner"]'); }
    get executiveCheckbox() { return $$('input[name="is-executive"]'); }

    get phoneNumberTextbox() { return $('input[name="phone"]'); }

    get passwordTextbox() { return $('input[name="new-password"]'); }
    get confirmPasswordTextbox() { return $('input[name="confirm-password"]'); }

    /**
    * Method to go through registration process.
    * @author   Nikita Bogdanov
    * @param    NO PARAMS YET
    */  
    async signUp() {
        await browser.debug();
        // Entering firstName, lastName, Email and clicking next button.
        await this.firstNameTextbox.waitForDisplayed();
        await this.firstNameTextbox.setValue(firstName);
        await this.lastNameTextbox.setValue(lastName);
        await this.workEmailTextbox.setValue(email);
        await this.termsCheckbox[1].click();
        await this.nextButton.waitForEnabled();
        await this.nextButton.click();

        // Expect to see the confrimation code page
        await this.confirmationCodeTextbox[0].waitForDisplayed();

        // Entering confirmation code
        for (let i = 0; i <= 5; i++) {
            await this.confirmationCodeTextbox[i].setValue("1");
            await browser.pause(500);
        }

        // Selecting business type, business structure and ownership.
        await this.businessTypeCheckbox[1].waitForExist();
        await this.businessTypeCheckbox[1].click();
        await this.businessStructureDropdown.waitForDisplayed();
        await this.businessStructureDropdown.setValue("Single-member");
        await browser.keys("ArrowDown");
        await browser.keys("Enter");
        await browser.debug();
        await this.ownershipCheckbox[0].click();
        await this.executiveCheckbox[0].waitForExist();
        await this.executiveCheckbox[0].click();
        await this.nextButton.waitForEnabled();
        await this.nextButton.click();

        // Entering phone number
        await this.phoneNumberTextbox.waitForDisplayed();
        await this.phoneNumberTextbox.setValue(phoneNumber);
        await this.nextButton.click();
        await browser.pause(1500);

        // Entering confirmation code
        for (let i = 0; i <= 5; i++) {
            await this.confirmationCodeTextbox[i].setValue("1");
            await browser.pause(500);
        }

        // Entering password, confirm password and a clicking create an account
        await this.passwordTextbox.waitForExist();
        await this.passwordTextbox.setValue(password);
        await this.confirmPasswordTextbox.setValue(password);
        await this.nextButton.waitForEnabled();
        await this.nextButton.click();

        // Wait for Onboarding Page to be displayed
        await OnboardingPage.entityNameTextbox.waitForExist();

        // Logging the created account to the console.
        console.log("New Account is created" + "\nEmail: " + email + "\nPassword: " + password);
    }

    open() {
        return super.open('signup');
    }

}

export default new SignUpPage();