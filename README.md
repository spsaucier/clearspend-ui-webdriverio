## Installation

Reqiuirements for Node JS - Node 14 and above.
`npm i` - install all the dependencies.


## Run Some Sample Tests Locally

`npm run wdio:local`. Executes all features in the [`./features/*.feature`] directory, executes features locally, on your own machine. (For debugging purposes)

## Run Some Sample Tests in Sauce Labs
`npm run wdio:sauce:web` - executes all features in Sauce Labs using Desktop.
`npm run wdio:sauce:mobile` - executes all features in Sauce Labs using Mobile browsers, just in case we would want to test web app on mobile devices.

## Config Files - config/wdio.conf.js, config/wdio.sauce.mobile.js, config/wdio.sauce.web.js.

config/wdio.conf.js - Configuration file for web to execute features locally. (Debugging)
config/wdio.sauce.mobile.js - Configuration file for mobile browsers, features executed in Sauce Labs.
config/wdio.sauce.web.js - Configuration file for desktop browsers, features executed in Sauce Labs.

## Logs  

Level of logging verbosity: trace | debug | info | warn | error | silent. Can be configured in config file.

## Reporters

WebdriverIO uses several different types of test reporters to communicate pass/failure.  

* Spec

Test reporter, that prints detailed results to console.

* JSON

The JSON reporter is especially versatile. Since it produces a literal in a key : value pair, help to read, translate execution results to any custom reporter / it can be used to transport reporter events to another process and format them there, or to store the execution results back to any standard RDBMS or to NoSQL like mongodb with very minimal effort.

## Develop automation scripts

You can write test by using Cucumber framework. You can choose javascript based design pattern or ES6-8 based. This project is ES6-8 friendly (via Babel)
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
