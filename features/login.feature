Feature: Login Functionality
		
  Scenario: As a user, I should be able to login with correct credentials.
		
	Given I am on the login page
		And I sign in to the application
	Then I expect to see the dashboard page