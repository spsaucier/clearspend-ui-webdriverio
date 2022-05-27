import Page from '../page';

class AuthorizeDepositPage extends Page {

    get amountTextbox() { return $('[data-name=amount]'); }
    get accountOption() { return $('[data-name=account]'); }
    get authorizeDepositButton() { return $('[data-name=authorize-deposit]'); }

    async enterAmount(amount) {
        await this.amountTextbox.waitForDisplayed({timeout: 25000});
        await this.amountTextbox.setValue(amount);
    }

    async chooseAccount() {
        await this.accountOption.waitForDisplayed();
        await this.accountOption.click();
    }

    async clickAuthorizeDeposit() {
        await this.authorizeDepositButton.waitForExist();
        await this.authorizeDepositButton.click();
    }

}

export default new AuthorizeDepositPage();