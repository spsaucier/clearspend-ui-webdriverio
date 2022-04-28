Feature: Test Feature
		
  Scenario: As a user, I should be able to login with correct credentials.
		
	Given I am on the login page
		And I sign in to the application
	Then I expect to see the dashboard page
    Given I am on the cards page
    When I create virtual card for the "Domingo Ward"