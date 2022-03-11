import Page from './page';

class AccountSettingsPage extends Page {

    get headerAccountSettings() { return $('//div/span[@class="MzPU6"]'); }

    get buttonUpdateProfile() {return $('//span[contains(text(),"Update Profile")]'); }
    get buttonUpdatePassword() { return $('//span[contains(text(),"Update Password")]'); }
    get buttonUpdatePhoneNumber() { return $('//span[contains(text(),"Update Phone Number")]'); }
    get buttonSignOut() { return $('//span[contains(text(),"Sign Out")]'); }
    
   
    open() {
        return super.open('profile');
    }
}

export default new AccountSettingsPage();