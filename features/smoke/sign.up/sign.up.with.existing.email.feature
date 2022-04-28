Feature: Sign Up Functionality

  Scenario: As a user, I should be able to go through sign up process and land on business type page.
	Given I am on the signup page
		And I sign up to the application
	When I enter confirmation code
	Then I expect to see the business type page