Feature: Sign Up Functionality
		
  Scenario: As a user, I should be able to register with correct test data.
	Given I am on the signup page
		And I sign up to the application
	Then I expect to see the onboarding page