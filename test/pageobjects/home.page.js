import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get homeHeader() { return $('//span[contains(text(), "Welcome, ")]'); }
}

export default new HomePage();
