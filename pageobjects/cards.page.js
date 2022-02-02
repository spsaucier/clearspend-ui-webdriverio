import Page from './page';
import NewCardPage from './new.card.page';


class CardsPage extends Page {

    get cardsHeader() { return $('//h1/span[text()="Cards"]'); }
    get addNewCardButton() { return $('//button//span[text()="New Card"]'); }
    get cardsCounter() { return $$('//tbody/tr'); }

    async addNewCard(type) {

        // Click on Add New Card buttton
        await this.addNewCardButton.click();

        // Navigated to New Card page
        await expect(NewCardPage.pageHeader).toHaveText('New Card');

        // Filling out required fields
        await NewCardPage.allocationInput.click();
        await NewCardPage.inputOptions.waitForDisplayed();
        await NewCardPage.inputOptions.$$('li')[0].click();
        await NewCardPage.employeeInput.click();
        await NewCardPage.inputOptions.waitForDisplayed();
        await NewCardPage.inputOptions.$$('li')[0].click();

        if (type !== "physical") {
            await NewCardPage.virtualCardCheckbox.click();
        } else {
            await NewCardPage.physicalCardCheckbox.click();
            await NewCardPage.deliveryAddressCheckbox.click();
        }

        // Employee Name is checked
        await NewCardPage.showEmployeeNameCheckbox.click();

        // Wait for Create Card button is displayed/enabled
        await NewCardPage.createCardButton.waitForEnabled();

        // Clicking Create Card button
        await NewCardPage.createCardButton.click();

        // Card is created and validate notification
        await expect(super.successNotification).toBeDisplayed();

        // TO DO: Validate that the new card is displayed in the table
        await expect(this.cardsCounter).toBeDisplayed();

        console.info(`<<<<< INFO: NEW CARD HAS BEEN CREATED FOR ${process.env.EMAIL} >>>>>`);
    }

    open() {
        return super.open('cards');
    }

}

export default new CardsPage();