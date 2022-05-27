import Page from '../page';


class AddBankAccountPage extends Page {

    // Plaid Integration
    get iframe() { return $('#plaid-link-iframe-1'); }
    get checkVerificationStatusButton() { return $('button[data-name=check-verification-status]'); }
    get linkBankButton() { return $('//button//span[text()="Link Bank"]'); }
    get skipBankVerificaionButton() { return $('//button//span[text()="Skip bank verification"]'); }

    // Plaid iFrame elements
    get plaidContinueButton() { return $('#aut-button'); }
    get banksToChooseFrom() { return $('#aut-ins_3'); }
    get plaidUsernameTextbox() { return $('#aut-input-0'); }
    get plaidPasswordTextbox() { return $('#aut-input-1'); }
    get plaidSubmitButton() { return $('#aut-button'); }
    get accountsToChooseFrom() { return $$('ul > li.ListItem > div'); }
    get plaidtitle() { return $('#a11   y-title'); }
    get continueButton() { return $('#aut-button'); }

    /**
    * Method to connect to plaid
    * @author   Nikita Bogdanov
    */
     async linkBankAccount() {
        await this.linkBankButton.waitForDisplayed({ timeout: 30000});
        await this.linkBankButton.click();
        await browser.pause(5000);
        await browser.switchToFrame(await this.iframe);
        await this.plaidContinueButton.waitForExist();
        await this.plaidContinueButton.click();
        await this.banksToChooseFrom.waitForDisplayed();
        await this.banksToChooseFrom.click();
        await this.plaidUsernameTextbox.waitForDisplayed();
        await this.plaidUsernameTextbox.setValue("user_good");
        await this.plaidPasswordTextbox.setValue("pass_good");
        await this.plaidSubmitButton.click();
        await this.plaidContinueButton.waitForExist({ timeout: 10000 });
        await this.accountsToChooseFrom[0].click();
        await this.plaidContinueButton.click();
        await this.plaidContinueButton.waitForDisplayed();
        await this.plaidContinueButton.click();
        await browser.switchToParentFrame();
    }

    /**
    * Method to skip bank verification  
    * @author   Nikita Bogdanov
    */
    async skipBankVerification() {
        await this.skipBankVerificaionButton.waitForDisplayed();
        await this.skipBankVerificaionButton.click();
        await this.skipBankVerificaionButton.waitForDisplayed({ reverse: true});
    }
}

export default new AddBankAccountPage();