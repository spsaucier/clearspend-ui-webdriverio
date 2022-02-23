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

    get buttonAllocation() {return $('//a/span[contains (text(), "Allocations")]'); }
    get buttonCard() {return $('//a/span[contains (text(), "Card")]'); }
    get buttonAccounting() {return $('//a/span[contains (text(), "Accounting")]'); }
    get buttonEmployees() {return $('//a/span[contains (text(), "Employees")]'); }
    get buttonCompanySettings() {return $('//a/span[contains (text(), "Company Settings")]'); }
    get buttonAccountSettings() {return $('//a/span[contains (text(), "Account Settings")]'); }
    get buttonMoreFilters() {return $(''); }
    get inputBoxSearchTransaction() {return $(''); }
    


}

export default new DashboardPage();