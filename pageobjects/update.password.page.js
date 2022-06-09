import Page from './page';

class UpdatePasswordPage extends Page {

    get inputCurrentPassword() { return $('[data-name=password]'); }
    get inputNewPassword() {return $('[data-name=new-password]'); }
    get inputConfirmNewPassword() { return $('[data-name=confirm-password]'); }
    get buttonUpdatePassword() { return $('//button//span[text()="Update Password"]'); }
    get buttonCancel() { return $('//button//span[text()="Cancel"]'); }
    get successNotification() { return $('//h3[text()="Success"]'); }


    async updatePassword() {
        await this.inputCurrentPassword.setValue("password123");
        await this.inputNewPassword.setValue("password1234");
        await this.inputConfirmNewPassword.setValue("password1234");
        await this.buttonUpdatePassword.click();
    }

    open() {
        return super.open('profile/password');
    }
}

export default new UpdatePasswordPage();