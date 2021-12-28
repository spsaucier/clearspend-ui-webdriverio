import LoginPage from  '../pageobjects/login.page';
import HomePage from '../pageobjects/home.page';

describe('Testing login functionality', () => {
    it('should not login with invalid credentials', async () => {
        await LoginPage.open();

        await LoginPage.loginWith('test@clearspend.com', '123456');
        await expect(HomePage.homeHeader).not.toBeDisplayed();
        await expect(LoginPage.errorNotification).toBeDisplayed();
    });

    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login();
        await expect(HomePage.homeHeader).toBeDisplayed();
    });
});