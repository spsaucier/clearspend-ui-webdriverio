import Page from './page';


class BusinessDetails extends Page {

    get headerBusninessDetails() { return $('//h1/span[contains(text(), "Business details")]"]'); }

   
    open() {
        return super.open('onboarding');
    }
}

export default new BusinessDetails();