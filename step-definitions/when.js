import { When } from '@wdio/cucumber-framework';
import DashboardPage from '../pageobjects/dashboard.page';
import CardsPage from '../pageobjects/cards.page';


When(/^I add new (virtual|physical) card to the account$/, async (type) => {
    await CardsPage.addNewCard(type);
});