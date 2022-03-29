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

// Register new account and go through onboarding process.
Given('I register an account', async () => {
    await SignUpPage.signUp();
    await expect(OnboardingPage.entityNameTextbox).toBeDisplayed();
    await OnboardingPage.businessDetails();
    await expect(OnboardingPage.titleTextbox).toBeDisplayed();
    await OnboardingPage.businessLeadership();
    await expect(OnboardingPage.ownerName).toHaveText(global.fullName);
    await expect(OnboardingPage.nextButton).toBeDisplayed;
    await OnboardingPage.addNewLeader();
    await OnboardingPage.editAddress();
    await OnboardingPage.plaidConnect();
    await expect(OnboardingPage.amountTextbox).toBeDisplayed();
    await OnboardingPage.addBalance();
    await expect(DashboardPage.headerHome).toBeDisplayedInViewport();
});

// Sign up SD
Given('I sign up to the application', async () => {
    await expect(SignUpPage.firstNameTextbox).toBeDisplayed();
    await expect(SignUpPage.lastNameTextbox).toBeDisplayed();
    await expect(SignUpPage.workEmailTextbox).toBeDisplayed();
    await expect(SignUpPage.nextButton).toBeDisplayed();
    await SignUpPage.enterUserDetails();
    await expect(SignUpPage.nextButton).toBeEnabled();
    await SignUpPage.clickNextButton();
    await SignUpPage.enterConfirmationCode();
});

// Login with the user specified in .env file.
Given('I sign in to the application', async () => {
    await LoginPage.login();
    await LoginPage.twoFactorAuthentication();
    await expect(DashboardPage.headerHome).toBeDisplayedInViewport();
});