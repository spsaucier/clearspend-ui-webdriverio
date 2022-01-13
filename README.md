## Installation

This project is tested on **Node v16** and above.  While earlier versions of node may be compatible, but they have not been verified.

`Node.JS:` Install  from the site - https://nodejs.org/en/  take the LTS version based on your Operating system. Please make sure you install NodeJS globally.

## Run Some Sample Tests

To execute the entire test suite in local development, you can use any one of the options mentioned below

Option 1: `npm run wdio`. Executes all features in the [`./features/*.feature`] directory.

Option 2: `npm wun wdio TestSuiteName`. Executes features related to TestSuite specified. - TO DO: Can only be done when we have multiple test suites.

## Config Files

WebdriverIO uses configuration files to setup and execute tests in specific ways.  The configuration is fully customizable, and different functions can be invoked before, during and after each test or test suite.  Config files can be found in the `/config/` directory and all end with `*.conf.js`.
Currently have 3 separate configs - for local, sauce labs web and sauce labs mobile.

## Logs  

Level of logging verbosity: trace | debug | info | warn | error | silent. Can be configured in config file.

## Reporters

WebdriverIO uses several different types of test reporters to communicate pass/failure.  

* Dot

To use the dot reporter just add 'dot' to the reporters array in the config file. The dot reporter prints for each test spec a dot. If colors are enabled on your machine you will see three different colors for dots. Yellow dots mean that at least one browser has executed that spec. A green dot means all browser passed that spec and a red to means that at least one browser failed that spec. All config files have this turned on by default.

* Spec

Test reporter, that prints detailed results to console.

* Allure

The Allure Reporter creates [Allure](http://allure.qatools.ru/) test reports which is an HTML generated website with all necessary information to debug your test results and take a look on error screenshots. Add allure to the reporters array in config file and define the output directory of the allure reports.

Allure has several other reporting tools optimized for the CI server of your choice.  You can [view the documentation here](http://wiki.qatools.ru/display/AL/Reporting).

* junit/xunit

The JUnit reporter helps you to create xml reports for your CI server. Add it to the reports array in the config file and define the directory where the xml files should get stored. webdriverIO will create an xml file for each instance under test and the filename will contain the browser and OS.

To generate and view an junit/xunit report locally, run `npm run junit-report`. A typical junit/xunit report will look like this

* JSON

The JSON reporter is especially versatile. Since it produces a literal in a key : value pair, help to read, translate execution results to any custom reporter / it can be used to transport reporter events to another process and format them there, or to store the execution results back to any standard RDBMS or to NoSQL like mongodb with very minimal effort.

## Develop automation scripts

You can write test by using Jasmine framework. You can choose javascript based design pattern or ES6-8 based. This project is ES6-8 friendly (via Babel)
WebdriverIO Docs - https://webdriver.io/docs/api

## The Page Object Design Pattern

Within your web app's UI there are areas that your tests interact with. A Page Object simply models these as objects within the test code. This reduces the amount of duplicated code and means that if the UI changes, the fix need only be applied in one place. In other words one of the challenges of writing test automation is keeping your [selectors] (classes, id's, or xpath' etc.) up to date with the latest version of your code.  The next challenge is to keep the code you write nice and DRY (Don't Repeat Yourself).  The page object pattern helps us accomplish this in one solution.  Instead of including our selectors in our tests, we instead place them in a `<pagename>.js` file where we can manage all these selectors and methods together. Your test file should only call the test methods.

You can also place reusable functions or logic inside of these pages and call them from your step files. The page object serves as a layer of abstraction between tests and code.  When a test fails, it fails on a individual step.  That step may call a selector that is no longer valid, but that selector may be used by many other steps.  By having a single source of truth of what the selector is supposed to be, fixing one selector on the page object could repair a number of failing tests that were affected by the same selector.


```
	class LoginPage extends Page {
		/**
		 * define selectors using getter methods
		 */
		get inputEmail() { return $('//input[@type="email"]'); }

		get inputPassword() { return $('//input[@name="password"]'); }

		get buttonLogin() { return $('//button[@type="submit"]'); }

		get errorNotification() { return $('//h3[text()="Something went wrong"]'); }

		/**
		 * Page Methods
		 */

		async login () {
			await this.inputEmail.setValue(process.env.EMAIL);
			await this.inputPassword.setValue(process.env.PASS);
			await this.buttonLogin.click();
		}

		async loginWith (email, password) {
			await this.inputEmail.setValue(email);
			await this.inputPassword.setValue(password);
			await this.buttonLogin.click();
		}
		
		/*
		 * overwrite specific options to adapt it to page object
		 */

		open() {
			return super.open('login');
		}
	}

	export default new LoginPage();

```