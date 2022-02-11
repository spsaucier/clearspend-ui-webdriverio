import { Given } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page';
import DashboardPage from '../pageobjects/dashboard.page';
import CardsPage from '../pageobjects/cards.page';
import AllocationsPage from '../pageobjects/allocations.page';
import EmployeesPage from '../pageobjects/employees.page';

const pages = {
    login: LoginPage,
    cards: CardsPage,
    allocations: AllocationsPage,
    employees: EmployeesPage
};

// Navigate to specific page, for example Login Page, Sign Up Page etc.
Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open(); 

});

// TO DO: Write steps for creating a new account and going though KYC/KYB.
Given('I register an account', async () => {

});

// Login with the user specified in .env file.
Given('I sign in to the application', async () => {
    await LoginPage.login();
    await expect(DashboardPage.headerHome).toBeDisplayedInViewport();
});

// Login with the user specified in feature file
Given('I sign in to the application with {string}', async (email) => {
    await LoginPage.loginWith(email);
});