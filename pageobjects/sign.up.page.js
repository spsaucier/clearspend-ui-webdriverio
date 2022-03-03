import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignUpPage extends Page {
    /**
     * define selectors using getter methods
     */
    get firstNameTextbox() { return $('input[name="first-name"]'); }
    get lastNameTextbox() { return $('input[name="last-name"]'); }
    get termsCheckbox() { return $('input[name="agree"]'); }
    get nextButton() { return $('button[type="submit"]'); }

    get confirmationCodeTextbox() { return $('input[inputmode="numeric"]'); }
    
    get businessTypeCheckbox() { return $$('input[name="business-type"]'); }
    get businessStructureDropdown() { return $('input[name="business-structure"]'); }
    get ownershipCheckbox() { return $$('input[name="is-owner"]'); }
    get executiveCheckbox() { return $$('input[name="is-executive"]'); }    

}

export default new SignUpPage();