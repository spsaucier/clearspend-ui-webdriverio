import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DashboardPage extends Page {
    /**
     * define selectors using getter methods
     */
    get headerHome() { return $('//span[contains(text(), "Welcome, ")]'); }
    get buttonAddBalance() { return $('#add-balance-button'); }
    get buttonAddNew() { return $('#add-new-button'); }
    get addNewOptions() { return $$('div[id=add-new-dropdown] li'); }

}

export default new DashboardPage();