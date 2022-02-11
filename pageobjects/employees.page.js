import Page from './page';
/**
 * sub page containing specific selectors and methods for a specific page
 */

class EmployeesPage extends Page {
    /**
     * define selectors using getter methods
     */
    get buttonNewEmployee() { return $('//button//span[text()="New employee"]'); }
    get successNotification() { return $('h3 ~ div'); }
    get employeesCount() { return $$('thead ~ tbody tr'); }
    /*
     * overwrite specific options to adapt it to page object
     */

    open() {
        return super.open('employees');
    }
}

export default new EmployeesPage();