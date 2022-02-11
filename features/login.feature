Feature: Ad-hoc execution for CAP-373
		
  Scenario: As a user, I should be able to login with correct credentials.
		
	Given I am on the login page
		And I sign in to the application
	Then I expect to see the dashboard page