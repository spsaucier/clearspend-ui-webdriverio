Feature: Login Functionality - Login with correct credentials credentials.

#   Background: Generating Test Data
# 	Given I generate test data

  Scenario: [Positive] - As a user, I should be able to login with correct credentials.
	Given I am on the login page
		And I sign in to the application
		And I bypass the two factor authentication
	Then I expect to see the first-time login dashboard page
	# 	And I sign in to the application with email "tests12@gmai.com"
	# 	And I bypass the two factor authentication
	# Then I expect to see the dashboard page