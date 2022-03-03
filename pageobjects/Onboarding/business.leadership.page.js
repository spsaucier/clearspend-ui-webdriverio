import Page from './page';


class BusinessLeadership extends Page {

    get headerYourDetails() { return $('//header/h3[contains(text(), "Your details")]'); }
    get inputFirstName() {return $('//input[@name="first-name"]'); }
    get inputLastName() {return $('//input[@name="last-name"]'); }
    get inputTitle() {return $('//input[@name="title"]'); }
    /**
     * get the lists of month, day, year
     */
    get dropdownMonth() {return $('//input[@name="birthdate--month"]'); }
    get dropdownDay() {return $('//input[@name="birthdate--day"]'); }
    get dropdownYear() {return $('//input[@name="birthdate--year"]'); }

    get inputSSN() {return $('//input[@name="ssn"]'); }
    get inputEmail() {return $('//input[@name="email"]'); }
    get inputStreetAddress() {return $('//div/input[@name="streetLine1"]'); }
    get inputAptUnit() {return $('//div/input[@name="streetLine2"]'); }
    get inputCity() {return $('//div/input[@name="locality"]'); }
    get dropdownState() {return $('//div/input[@name="state"]'); }
    /**
     * get list of states
     */
    get inputZipCode() {return $('//div/input[@name="postalCode"]'); }
    get buttonNext() {return $('//button[@class="LDgtd ZXfpb K4lLS"]'); }

    get buttonAddLeader() {return $('//span[contains(text(),"Add a leader")]'); }
    get radioYes() {return $('//span[contains(text(),"Yes")]'); }
    get radioNo() {return $('//span[@class="KNeF9"]/span[contains(text(),"No")]'); }
    get buttonNext() {return $('//button[@class="LDgtd ZXfpb K4lLS"]'); }
    



    
   
    open() {
        return super.open('onboarding');
    }
}

export default new BusinessLeadership();