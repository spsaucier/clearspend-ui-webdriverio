Feature: Creating New Employee

  Scenario: As a user, I should not be able to create an employee with random data
    Given I am on the login page
      And I sign in to the application with email "tests12@gmai.com"
      And I bypass the two factor authentication
    Then I expect to see the dashboard page
    Given I am on the employees page
    When I create a new employee
    Then I expect to not see the error notification
      And I expect to not see the required field