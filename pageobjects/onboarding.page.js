import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class OnboardingPage extends Page {

    // Business Details
    get entityNameTextbox() { return $('input[name="business-name"]'); }
    get einTextbox() { return $('input[name="business-ein"]'); }
    get corporatePhoneNumberTextbox() { return $('input[name="corporate-phone-number"]'); }

    // Business Description
    get businessDescriptionTextbox() { return $('input[name="business-description"]'); }
    get merchantCategoryDropdown() { return $('input[name="business-mcc"]');  }
 
    // Business Address AND Business Leadership
    get streetAddressTextbox() { return $('input[name="streetLine1"]'); }

    // Business Leadership Details
    get titleTextbox() { return $('input[name="title"]'); }
    
    // Date of Birth
    get monthDropdown() { return $('input[name="birthdate--month"]'); }
    get dayDropdown() { return $('input[name="birthdate--day"]'); }
    get yearDropdown() { return $('input[name="birthdate--year"]'); }

    // Social Security Number
    get ssnTextbox() { return $('input[name="ssn"]'); }

    // Percentage Ownership
    get percentageOwnershipTextbox() { return $('input[name="percentage-ownership"]'); }

    // Next Button that appears on multiple pages
    get nextButton() { return $('button[type="submit"]'); }

    // Plaid Integration
    // plaid-link-iframe-1 - iFrame
    get continuePlaidButton() { return $('#aut-continue-button'); }
    get banksToChooseFrom() { return $('button.Touchable.InstitutionSearchResult__button.className'); }
    get plaidUsernameTextbox() { return $('#username'); }
    get passwordTextbox() { return $('#password'); }
    get submitButton() { return $('aut-submit-button'); }
    get accountsToChooseFrom() { return $('fieldset > ul > li'); }
    get continueButton() { return $('aut-continue-button'); }
    // Plaid END

    // Accounts Added + Add Balance
    get amountTextbox() { return $('input[name="amount"]'); }

}

export default new OnboardingPage();