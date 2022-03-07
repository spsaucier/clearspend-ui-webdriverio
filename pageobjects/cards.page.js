import Page from './page';
import NewCardPage from './new.card.page';


class CardsPage extends Page {

    get cardsHeader() { return $('//h1/span[text()="Cards"]'); }
    get addNewCardButton() { return $('//button//span[text()="New Card"]'); }
    get cardsCounter() { return $$('//tbody/tr'); }
    get firstPage() { return $('button[data-name="Page 1"]'); }
    get paginationNextButton() { return $('button[data-name="Next page"]'); }
    get virtualCards() { return $$('//span[text()="Virtual card"]'); }
    get physicalCards() { return $$('//span[text()="Physical card"]'); }
    get allCards() { return $$('//span[contains(text(), "card")]'); }
    get successNotification() { return $('//div[text()="Changes successfully saved."]'); }


    /**
    * Method to count Virtual OR Physical cards.
    * @author   Nikita Bogdanov
    * @param    {String} cardType - either "physical" or "virtual"
    */  
    async countCards(cardType) {
        let cardCount = 0;

        if(cardType === "physical") {
            cardCount = await this.physicalCards.length;
        } else {
            cardCount = await this.virtualCards.length;
        }

        while (await this.paginationNextButton.isClickable() === true) {
            switch (cardType) {
                case "physical": {
                    await this.paginationNextButton.click();
                    await browser.pause(700);
                    cardCount += await this.physicalCards.length;
                    break;
                }
                case "virtual": {
                    await this.paginationNextButton.click();
                    await browser.pause(700);
                    cardCount = cardCount + await this.virtualCards.length;
                    console.log("Count in loop: " + cardCount);
                    break;
                }
                default: {
                    break;
                }
            }
        }
        return cardCount;
    }

    open() {
        return super.open('cards');
    }

}

export default new CardsPage();