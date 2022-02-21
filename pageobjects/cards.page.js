import Page from './page';
import NewCardPage from './new.card.page';


class CardsPage extends Page {

    get cardsHeader() { return $('//h1/span[text()="Cards"]'); }
    get addNewCardButton() { return $('//button//span[text()="New Card"]'); }
    get cardsCounter() { return $$('//tbody/tr'); }
    get successNotification() { return $('//div[text()="Changes successfully saved."]'); }

    open() {
        return super.open('cards');
    }

}

export default new CardsPage();