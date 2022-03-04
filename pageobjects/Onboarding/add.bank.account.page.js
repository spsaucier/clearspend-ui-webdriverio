import Page from './page';


class AddBankAccountPage extends Page {

    get headerConnectYourBank() { return $('//h3[contains(text(), "Connect your bank")]'); }
    get buttonLinkBank() {return $('//button[@class="LDgtd ZXfpb K4lLS"]'); }
    get buttonSkipBankVerification() {return $('//button[@class="LDgtd t5DjV"]'); }
    
    open() {
        return super.open('onboarding');
    }
}

export default new AddBankAccountPage();