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
    

}

export default new ManageBalancePage();