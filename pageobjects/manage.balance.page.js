import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ManageBalancePage extends Page {
    /**
     * define selectors using getter methods
     */
    get buttonAddBalance() { return $('//button/span[text()="Add Balance"]'); }
    get buttonRemoveBalance() { return $('//button/span[text()="Remove Balance"]'); }
    get inputEnterAmount() { return $('//input[@placeholder="0"]'); }
    get radioButtonSource() { return $$('//label/input'); }
    get buttonUpdateBalance() { return $('//button//span[text()="Update Balance"]'); }

}

export default new ManageBalancePage();