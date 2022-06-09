Feature: Update User's Password

  Scenario: As a user, I should be able to update the password
    Given I am on the login page
      And I sign in to the application
      And I bypass the two factor authentication
    Then I expect to see the first-time login dashboard page
    When I update password
      And I sign out of the application
    Then I expect to see the login page
    Given I sign in to the application with password "password1234"
      And I bypass the two factor authentication
    Then I expect to see the dashboard page
