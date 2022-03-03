import Page from './page';


class BusinessDetails extends Page {

    get headerBusninessDetails() { return $('//h3[contains(text(),"Business details")]'); }
    get inputLegalEntityName() {return $('//div/input[@name="business-name"]'); }
    get inputBusinessEIN() {return $('//div/input[@name="business-ein"]'); }
    get inputCorpPhoneNumber() {return $('//div/input[@name="corporate-phone-number"]'); }
    get inputDescribeYourBusiness() {return $('//div/input[@name="business-description"]'); }
    get dropdownMerchantCategory() {return $('//div/input[@name="business-mcc"]'); }
    /**
     * get list of merchant categories
     */
    get inputStreetAddress() {return $('//div/input[@name="streetLine1"]'); }
    get inputAptUnit() {return $('//div/input[@name="streetLine2"]'); }
    get inputCity() {return $('//div/input[@name="locality"]'); }
    get dropdownState() {return $('//div/input[@name="state"]'); }
    /**
     * get list of states
     */
    get inputZipCode() {return $('//div/input[@name="postalCode"]'); }
    get buttonNext() {return $('//button[@class="LDgtd K4lLS ZXfpb"]'); }
    


   
    open() {
        return super.open('onboarding');
    }
}

export default new BusinessDetails();