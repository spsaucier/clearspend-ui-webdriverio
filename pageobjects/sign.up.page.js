import Page from './page';
import faker from '@faker-js/faker';


const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
global.fullName = firstName + " " + lastName;
const email = faker.internet.email();
const phoneNumber = faker.phone.phoneNumber('321#######');
const password = faker.internet.password();
global.password = password;


class SignUpPage extends Page {

    // ? Sign Up Page - firstName, lastName, email, terms checkbox and next button
    get firstNameTextbox() { return $('input[name="first-name"]'); }
    get lastNameTextbox() { return $('input[name="last-name"]'); }
    get workEmailTextbox() { return $('input[name="email"]'); }
    get termsCheckbox() { return $('input[type=checkbox]'); }
    get nextButton() { return $('button[type=submit]'); }
    get alreadyHaveAnAccount() { return $('//h3[text()="You already have an account"]'); }

    // ? Confirmation code textbox
    get confirmationCodeTextbox() { return $$('div[data-name="code"] input'); }

    // ? Choose Business Type and Business Structure
    get businessTypeCheckbox() { return $$('input[name=business-type]'); }
    get businessStructureDropdown() { return $('input[name="business-structure"]'); }
    get ownershipCheckbox() { return $$('input[name=is-owner]'); }
    get executiveCheckbox() { return $$('input[name=is-executive]'); }

    // ? Phone Number textbox
    get phoneNumberTextbox() { return $('input[name="phone"]'); }

    // ? Password textbox
    get passwordTextbox() { return $('input[name="new-password"]'); }
    get confirmPasswordTextbox() { return $('input[name="confirm-password"]'); }

    // ! Errors
    get accountAlreadyExistsError() { return $('//div[text()="Account already exists with this email."]'); }

    // ? Use different email button, after you entered email.
    get useDifferentEmailButton() { return $('//span[text()="Use different email"]'); }


    /**
    * * Method to enter user details - firstName, lastName and email and click terms checkbox
    * @author   Nikita Bogdanov
    * @parameter - email - used random one or the oe you provide in feature file.
    */  
    async enterUserDetails(email) {
        await this.firstNameTextbox.waitForDisplayed();
        await this.firstNameTextbox.setValue(firstName);
        await this.lastNameTextbox.setValue(lastName);
        console.log(email);
        if (email == undefined) {
            email = faker.internet.email();
            await this.workEmailTextbox.setValue(email);
        } else {
            await this.workEmailTextbox.setValue(email);
        }
        browser.execute( `document.querySelector("${await this.termsCheckbox.selector}").click()`);
    }

    /**
    * * Method to enter confirmation code
    * @author   Nikita Bogdanov
    */ 
    async enterConfirmationCode() {
        await this.confirmationCodeTextbox[0].waitForDisplayed();
        // Entering confirmation code
        for (let i = 0; i <= 5; i++) {
            await this.confirmationCodeTextbox[i].setValue("1");
            await browser.pause(500);
        }
    }

    /**
    * * Method to select businessType - individual, company and nonprofit organization
    * @author   Nikita Bogdanov
    */ 
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

    /**
    * * Method to select businessStructure - single-member, multi-member, private partneship, public partnership, private corporation and other.
    * @author   Nikita Bogdanov
    */ 
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

    /**
    * * Method to click on are you owner with ownership - yes or no.
    * @author   Nikita Bogdanov
    */ 
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

    /**
    * * Method to click on are you executive - yes or no.
    * @author   Nikita Bogdanov
    */
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

    /**
    * * Method to enter phone number - phoneNumber is generated by Faker.
    * @author   Nikita Bogdanov
    */
    async enterPhoneNumber() {
        // Entering phone number
        await this.phoneNumberTextbox.waitForDisplayed();
        await this.phoneNumberTextbox.setValue(phoneNumber);
        await this.nextButton.click();
        await this.phoneNumberTextbox.waitForDisplayed({ reverse: true});
    }

    /**
    * * Method to enter password.
    * @author   Nikita Bogdanov
    */
    async enterPassword() {
        await this.passwordTextbox.waitForExist();
        await this.passwordTextbox.setValue(password);
        await this.confirmPasswordTextbox.setValue(password);
    }


    /**
    * * Method to open Sign-Up page.
    * @author   Nikita Bogdanov
    */
    open() {
        return super.open('signup');
    }

}

export default new SignUpPage();