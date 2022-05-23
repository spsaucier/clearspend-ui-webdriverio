Feature: Creating New Employee with specific address

  Scenario: As a user, I should not be able to create an employee with specific address
    Given I am on the login page
      And I sign in to the application
      And I bypass the two factor authentication
    Then I expect to see the dashboard page
    Given I am on the employees page
    When I create a new employee with address "8849 Latrec Avenue"
    Then I expect to not see the error notification