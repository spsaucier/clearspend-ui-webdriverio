Feature: Creating New Employee

  Scenario: As a user, I should be able to create an employee
    Given I am on the login page
      And I sign in to the application
    Then I expect to see the dashboard page
    Given I am on the employees page
    When I create new employee with random name

  Scenario: As a user, I should be able to create an employee
    Given I am on the login page
      And I sign in to the application
    Then I expect to see the dashboard page
    Given I am on the employees page
    When I create new employee with specific name "John Connor"

  Scenario: As a user, I should be able to create an employee
    Given I am on the login page
      And I sign in to the application
    Then I expect to see the dashboard page
    Given I am on the employees page
    When I create new employee with specific name "Test User"

  Scenario: As a user, I should be able to create an employee
    Given I am on the login page
      And I sign in to the application
    Then I expect to see the dashboard page
    Given I am on the employees page
    When I create new employee with specific name "Test User"