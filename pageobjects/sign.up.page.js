import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePageTest extends Page {
    /**
     * define selectors using getter methods
     */

    get inputFirstName() {return $('//input[@name="first-name"]'); }
    get inputLastName() {return $('//input[@name="last-name"]'); }
    get inputEmail() {return $('//input[@name="email"]'); }
    get checkboxAge18() {return $('//label/input[@name="agree"]'); }
    get buttonNext() {return $('//button[@class="LDgtd lhpHE onkol K4lLS"]'); }

    // sign up  " Next, we need to know about your business " page 

    get radioIndividual() {return $('//label/span[contains(text(),"Individual/Sole Proprietorship")]'); }
    get radioCompany() {return $('//label/span[contains(text(),"Company")]'); }

    // business structure of Company legal entity

    get dropdownOption() {return $('//div/input[@name="business-structure"]'); }
    /**
      add more elements for Company legal entity and radio buttons
     */


    get radioNonProfitOrg() {return $('//label/span[contains(text(),"Nonprofit organization")]'); }

    // signUp > "Where should we send a text to verify your mobile phone number? " page

    get inputPhoneNumber() {return $('//div/input[@name="phone"]'); }

    // signUp > "Let's create a super secure, super secret password" page

    get inputpassword() {return $('//div/input[@name="new-password"]'); }
    get inputConfirmPassword() {return $('//div/input[@name="confirm-password"]'); }
    get buttonCreateAccount() {return $('//span[contains(text(),"Create Account")]'); }


}

export default new ManageBalancePage();