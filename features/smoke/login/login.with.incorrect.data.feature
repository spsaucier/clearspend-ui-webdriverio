Feature: Login Functionality - Login with incorrect credentials.

  Scenario: [Negative] - As a user, I should be able to login with incorrect email.
	Given I am on the login page
		And I sign in to the application with email "test@clearspend.com"
	Then I expect to see the error notification on login page

  Scenario: [Negative] - As a user, I should be able to login with incorrect password.
	Given I am on the login page
		And I sign in to the application with email "test@clearspend.com" with password "qwerty123"
	Then I expect to see the error notification on login page