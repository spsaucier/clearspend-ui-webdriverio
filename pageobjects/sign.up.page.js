import Page from './page';
import OnboardingPage from '../pageobjects/onboarding.page';
import faker from '@faker-js/faker';


const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
global.fullName = firstName + " " + lastName;
const email = faker.internet.email();
global.email = email;
const phoneNumber = faker.phone.phoneNumber('321#######');
const password = faker.internet.password();
global.password = password;


class SignUpPage extends Page {

    get firstNameTextbox() { return $('input[name="first-name"]'); }
    get lastNameTextbox() { return $('input[name="last-name"]'); }
    get workEmailTextbox() { return $('input[name="email"]'); }
    get termsCheckbox() { return $('input[type=checkbox]'); }
    get nextButton() { return $('button[type=submit]'); }

    get confirmationCodeTextbox() { return $$('div[data-name="code"] input'); }
    
    get businessTypeCheckbox() { return $$('input[name=business-type]'); }
    get businessStructureDropdown() { return $('input[name="business-structure"]'); }
    get ownershipCheckbox() { return $$('input[name=is-owner]'); }
    get executiveCheckbox() { return $$('input[name=is-executive]'); }

    get phoneNumberTextbox() { return $('input[name="phone"]'); }

    get passwordTextbox() { return $('input[name="new-password"]'); }
    get confirmPasswordTextbox() { return $('input[name="confirm-password"]'); }

    /**
    * Method to go through registration process.
    * @author   Nikita Bogdanov
    * @param    NO PARAMS YET
    */  
    async signUp() {
        // Entering firstName, lastName, Email and clicking next button.
        await this.firstNameTextbox.waitForDisplayed();
        await this.firstNameTextbox.setValue(firstName);
        await this.lastNameTextbox.setValue(lastName);
        await this.workEmailTextbox.setValue(email);
        browser.execute( `document.querySelector("${await this.termsCheckbox.selector}").click()`);
        await browser.pause(3000);
        await this.nextButton.click();
        console.log(global.fullName);
        // Expect to see the confrimation code page
        await this.confirmationCodeTextbox[0].waitForExist();

        // Entering confirmation code
        for (let i = 0; i <= 5; i++) {
            await this.confirmationCodeTextbox[i].setValue("1");
            await browser.pause(500);
        }

        // Selecting business type, business structure and ownership.
        await this.businessTypeCheckbox[1].waitForExist();
        browser.execute( `document.querySelectorAll("${await this.businessTypeCheckbox.selector}")[1].click()`);
        await this.businessStructureDropdown.waitForDisplayed();
        await this.businessStructureDropdown.setValue("Single-member");
        await browser.keys("ArrowDown");
        await browser.keys("Enter");
        browser.execute( `document.querySelectorAll("${await this.ownershipCheckbox.selector}")[0].click()`);
        await this.executiveCheckbox[0].waitForExist();
        browser.execute( `document.querySelectorAll("${await this.executiveCheckbox.selector}")[0].click()`);
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

    async enterUserDetails() {
        await this.firstNameTextbox.waitForDisplayed();
        await this.firstNameTextbox.setValue(firstName);
        await this.lastNameTextbox.setValue(lastName);
        await this.workEmailTextbox.setValue(email);
        browser.execute( `document.querySelector("${await this.termsCheckbox.selector}").click()`);
    }

    async enterConfirmationCode() {
        await this.confirmationCodeTextbox[0].waitForDisplayed();
        // Entering confirmation code
        for (let i = 0; i <= 5; i++) {
            await this.confirmationCodeTextbox[i].setValue("1");
            await browser.pause(500);
        }
    }

    async selectBusinessType(type) {
        await this.businessTypeCheckbox[0].waitForExist();
        switch(type) {
            case "individual": {
                browser.execute( `document.querySelectorAll("${await this.businessTypeCheckbox.selector}")[0].click()`);
                break;
            }
            case "company": {
                browser.execute( `document.querySelectorAll("${await this.businessTypeCheckbox.selector}")[1].click()`);
                break;
            }
            case "nonprofit organization": {
                browser.execute( `document.querySelectorAll("${await this.businessTypeCheckbox.selector}")[2].click()`);
                break;
            }
        }
    }

    async selectBusinessStructureType(type) {
        await this.businessStructureDropdown.waitForExist();
        switch(type) {
            case "single-member": {
                await this.businessStructureDropdown.waitForDisplayed();
                await this.businessStructureDropdown.setValue("Single-member");
                await browser.keys("ArrowDown");
                await browser.keys("Enter");
                break;
            }
            case "multi-member": {
                await this.businessStructureDropdown.waitForDisplayed();
                await this.businessStructureDropdown.setValue("Multi-member");
                await browser.keys("ArrowDown");
                await browser.keys("Enter");
                break;
            }
            case "private partnership": {
                await this.businessStructureDropdown.waitForDisplayed();
                await this.businessStructureDropdown.setValue("Private partnership");
                await browser.keys("ArrowDown");
                await browser.keys("Enter");
                break;
            }
            case "public partnership": {
                await this.businessStructureDropdown.waitForDisplayed();
                await this.businessStructureDropdown.setValue("Private corporation");
                await browser.keys("ArrowDown");
                await browser.keys("Enter");
                break;
            }
            case "private corporation": {
                await this.businessStructureDropdown.waitForDisplayed();
                await this.businessStructureDropdown.setValue("Public corporation");
                await browser.keys("ArrowDown");
                await browser.keys("Enter");
                break;
            }
            case "other": {
                await this.businessStructureDropdown.waitForDisplayed();
                await this.businessStructureDropdown.setValue("Other");
                await browser.keys("ArrowDown");
                await browser.keys("Enter");
                break;
            }
        }
    }

    async areYouOwnerWithOwnership(param) {
        await this.ownershipCheckbox[0].waitForExist();
        switch(param) {
            case "yes": {
                browser.execute( `document.querySelectorAll("${await this.ownershipCheckbox.selector}")[0].click()`);
                break;
            }
            case "no": {
                browser.execute( `document.querySelectorAll("${await this.ownershipCheckbox.selector}")[1].click()`);
                break;
            }
            default: {
                break;
            }
        }
    }

    async areYouExecutive(param) {
        await this.executiveCheckbox[0].waitForExist();
        switch(param) {
            case "yes": {
                browser.execute( `document.querySelectorAll("${await this.executiveCheckbox.selector}")[0].click()`);
                break;
            }
            case "no": {
                browser.execute( `document.querySelectorAll("${await this.executiveCheckbox.selector}")[1].click()`);
                break;
            }
            default: {
                break;
            }
        }
    }

    async enterPhoneNumber() {
        // Entering phone number
        await this.phoneNumberTextbox.waitForDisplayed();
        await this.phoneNumberTextbox.setValue(phoneNumber);
        await this.nextButton.click();
        await this.phoneNumberTextbox.waitForDisplayed({ reverse: true});
    }

    async enterPassword() {
        await this.passwordTextbox.waitForExist();
        await this.passwordTextbox.setValue(password);
        await this.confirmPasswordTextbox.setValue(password);
    }

    async clickNextButton() {
        await this.nextButton.waitForDisplayed();
        if (this.nextButton.isDisplayed() === true) {
            await this.nextButton.click();
        } else {
            await browser.keys("Enter");
        }
        await this.nextButton.waitForDisplayed({reverse: true});
    }

    open() {
        return super.open('signup');
    }

}

export default new SignUpPage();