import LoginPage from  '../pageobjects/login.page';
import HomePage from '../pageobjects/home.page';

describe('Testing login functionality', () => {
    it('should not login with invalid credentials', async () => {
        await LoginPage.open();

        await LoginPage.loginWith('test@clearspend.com', '12345678');
        await expect(LoginPage.errorNotification).toBeDisplayed();
        await expect(HomePage.homeHeader).not.toBeDisplayed();
    });

    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login();
        await HomePage.homeHeader.waitForDisplayed();
        await expect(HomePage.homeHeader).toBeDisplayed();
    });
});