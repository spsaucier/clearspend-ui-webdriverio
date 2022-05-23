Feature: Creating New Employee with specific email

  Scenario: As a user, I should not be able to create an employee with existing email
    Given I am on the login page
      And I sign in to the application
      And I bypass the two factor authentication
    Then I expect to see the dashboard page
    Given I am on the employees page
    When I create a new employee with email "tests12@gmai.com"
    Then I expect to see the error notification