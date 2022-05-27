Feature: Sign Up Functionality

  Scenario: As a user, I should not be able to register with existing email
	Given I am on the signup page
	  And I sign up to the application with email "nikita.bogdanov@clearspend.com"
	Then I expect to see the notification - already have an account