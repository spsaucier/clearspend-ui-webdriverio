Feature: Creating New Employee with existing phone number

  Scenario: As a user, I should be able to create an employee with existing phone number
    Given I am on the login page
      And I sign in to the application with email "tests12@gmai.com"
      And I bypass the two factor authentication
    Then I expect to see the dashboard page
    Given I am on the employees page
    When I create a new employee with phone number "3213474518"
    Then I expect to not see the error notification