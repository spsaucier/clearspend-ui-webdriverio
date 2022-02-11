Feature: Creating New Employee

  Scenario: As a user, I should be able to create an employee

    Given I am on the login page
      And I sign in to the application
    Then I expect to see the dashboard page
    Given I am on the employees page
    When I create an employee