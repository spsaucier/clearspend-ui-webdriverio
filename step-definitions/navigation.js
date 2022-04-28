import { Given, When, Then } from '@wdio/cucumber-framework';
import AllocationsPage from '../pageobjects/allocations.page';
import CardsPage from '../pageobjects/cards.page';
import EmployeesPage from '../pageobjects/employees.page';
import LoginPage from '../pageobjects/login.page';
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