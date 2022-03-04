import Page from './page';

class CompanySettingsPage extends Page {

    get headerCompanySettings() { return $('//h1/span[contains(text(), "Company settings")]'); }
   
    open() {
        return super.open('settings');
    }
}

export default new CompanySettingsPage();