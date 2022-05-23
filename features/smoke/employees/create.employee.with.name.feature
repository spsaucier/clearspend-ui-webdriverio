Feature: Creating New Employee with name

  Scenario: As a user, I should be able to create an employee with name
    Given I am on the login page
      And I sign in to the application
      And I bypass the two factor authentication
    Then I expect to see the dashboard page
    Given I am on the employees page
    When I create a new employee with name "Nikita Kedrov"
    Then I expect to not see the error notification