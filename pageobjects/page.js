/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {

    get successNotification() { return $('//div/h3[text()="Success"]'); }

    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open(path) {
        return browser.url(`https://capital.dev.clearspend.com/${path}`);
    }
}