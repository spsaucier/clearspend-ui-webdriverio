import Page from './page';


class AccountingPage extends Page {

    get headerAccounting() { return $('//h1/span[contains(text(), "Accounting")]"]'); }
   
    open() {
        return super.open('accounting');
    }
}

export default new AccountingPage();