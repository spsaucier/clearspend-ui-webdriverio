import Page from './page';

class AccountSettingsPage extends Page {

    get headerAccountSettings() { return $('//div/span[@class="MzPU6"]'); }
   
    open() {
        return super.open('profile');
    }
}

export default new AccountSettingsPage();