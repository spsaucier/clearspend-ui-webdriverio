import Page from './page';


class BusinessLeadership extends Page {

    get headerBusninessLeadership() { return $('//h1/span[contains(text(), "Business leadership")]"]'); }
    
   
    open() {
        return super.open('onboarding');
    }
}

export default new BusinessLeadership();