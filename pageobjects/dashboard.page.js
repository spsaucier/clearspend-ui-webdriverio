import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DashboardPage extends Page {
    /**
     * define selectors using getter methods
     */
    get headerHome() { return $('//span[contains(text(), "Welcome, ")]'); }
    get goToDashboardButton() { return $('[data-name=go-to-dashboard]'); }
    get rootAllocationFunds() { return $('strong'); }
    get buttonAddBalance() { return $('#manage-balance-button'); }
    get buttonAddNew() { return $('#add-new-button'); }
    get addNewOptions() { return $$('div[id=add-new-dropdown] li'); }

    get buttonAllocation() {return $('//a/span[contains (text(), "Allocations")]'); }
    get buttonCard() {return $('//a/span[contains (text(), "Card")]'); }
    get buttonAccounting() {return $('//a/span[contains (text(), "Accounting")]'); }
    get buttonEmployees() {return $('//a/span[contains (text(), "Employees")]'); }
    get buttonCompanySettings() {return $('//a/span[contains (text(), "Company Settings")]'); }
    get buttonAccountSettings() {return $('//a/span[contains (text(), "Account Settings")]'); }
    get buttonMoreFilters() {return $('//span[contains(text(),"More Filters")]'); }
    get inputBoxSearchTransaction() {return $('//div/input[@class="fDzhe"]'); }

    // Landing - Maybe better to be moved to a separate file.
    get onboardYourEmployeesButton() { return $('[data-name=landing-add-employee]'); }
    get createAllocationButton() { return $('[data-name=landing-create-allocation]'); }
    get issueCardButton() { return $('[data-name=landing-issue-card]'); }


}

export default new DashboardPage();