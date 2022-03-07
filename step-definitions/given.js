import { Given } from '@wdio/cucumber-framework';
import AllocationsPage from '../pageobjects/allocations.page';
import CardsPage from '../pageobjects/cards.page';
import DashboardPage from '../pageobjects/dashboard.page';
import EmployeesPage from '../pageobjects/employees.page';
import LoginPage from '../pageobjects/login.page';
import OnboardingPage from '../pageobjects/onboarding.page';
import SignUpPage from '../pageobjects/sign.up.page';

const pages = {
    login: LoginPage,
    signup: SignUpPage,
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
    await SignUpPage.signUp();
    await expect(OnboardingPage.entityNameTextbox).toBeDisplayed();
    await OnboardingPage.businessDetails();
    await expect(OnboardingPage.titleTextbox).toBeDisplayed();
    await OnboardingPage.businessLeadership();
    await expect(OnboardingPage.ownerName).toHaveText(global.fullName);
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