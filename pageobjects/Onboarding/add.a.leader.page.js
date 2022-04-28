import Page from './page';


class AddLeader extends Page {

    get ownerName() { return $('//table//tr/td'); }
    get nextButton() { return $('//button//span[text()="Next"]'); }

}

export default new AddLeader();