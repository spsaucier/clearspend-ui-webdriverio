Feature: Login Functionality

  Scenario: As a user, I should be able to login with correct credentials.

    Given I am on the login page
    When I sign in to the application with "nikita@kedrov.com"
      And I add new employee