import TestData from "../services/testdata";
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    // onboarding Steps
    get nextButton() { return $('//button//span[text()="Next"]'); }

    async generateTestData() {
        global.email = await TestData.createBusinessAndOwner();
    }

    open(path) {
        return browser.url(`/${path}`);
    }
}