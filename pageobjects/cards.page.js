import Page from './page';
import NewCardPage from './new.card.page';


class CardsPage extends Page {

    get cardsHeader() { return $('//h1/span[text()="Cards"]'); }
    get addNewCardButton() { return $('//header//button'); }
    get cardsCounter() { return $$('//tbody/tr'); }
    get firstPage() { return $('button[data-name="Page 1"]'); }
    get paginationNextButton() { return $('button[data-name="Next page"]'); }
    get virtualCards() { return $$('//span[text()="Virtual card"]'); }
    get physicalCards() { return $$('//span[text()="Physical card"]'); }
    get allCards() { return $$('//span[contains(text(), "card")]'); }
    get cardsPerPageDropdown() { return $("[autocomplete=chrome-off]"); }
    get cardsPerPageOptions() { return $$("li[data-value]"); }
    get successNotification() { return $('//div/h3[contains(text(), "card created")]'); }


    /**
    * Method to count Virtual OR Physical cards.
    * @author   Nikita Bogdanov
    */  
    async countCards() {
        let cardCount = 0;
        await this.addNewCardButton.waitForDisplayed();
        cardCount += await this.allCards.length;
        if (await this.nextButton.isDisplayed() === true) {
            while(await this.nextButton.isEnabled() === true) {
                await this.nextButton.click();
                cardCount += await this.allCards.length;
            }
        }
        else { 
            return cardCount; 
        }
        console.log("RETURN: " + cardCount);
    }

    /**
    * Method to switch how many cards displayed per page.
    * @author   Nikita Bogdanov
    */
    async cardsPerPage(quanity) {
        await this.cardsPerPageDropdown.click();
        await this.cardsPerPageOptions[0].waitForDisplayed();
        switch(quanity) {
            case "10":
                await this.cardsPerPageOptions[0].click();
                break;
            case "20":
                await this.cardsPerPageOptions[1].click();
                break;
            case "50":
                await this.cardsPerPageOptions[2].click();
                break;
            case "100":
                await this.cardsPerPageOptions[3].click();
                break;
        }
        await browser.pause(1500);
    }

    open() {
        return super.open('cards');
    }

}

export default new CardsPage();