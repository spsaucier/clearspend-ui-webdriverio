Feature: First time login experience as admin
		
  Scenario: As a user, I should be able to login first time as admin
		
	Given I am on the signup page
		And I sign up to the application
	Then I expect to see the onboarding page
	When I fill out business details
		And I fill out business leadership details
		And I connect plaid account
		And I add balance to the root allocation
	Then I expect to see the first time dashboard page