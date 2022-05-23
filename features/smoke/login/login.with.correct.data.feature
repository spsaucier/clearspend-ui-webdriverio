Feature: Login Functionality - Login with correct credentials credentials.

  Scenario: [Positive] - As a user, I should be able to login with correct credentials.
	Given I am on the login page
		And I sign in to the application
		And I bypass the two factor authentication
	Then I expect to see the first-time login dashboard page