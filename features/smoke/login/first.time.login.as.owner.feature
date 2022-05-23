Feature: Login Functionality - First-time login as owner.

  Scenario: [Positive] - As a owner, I should be able to login when I just completed the onboarding process.
    Given I am on the login page
      And I sign in to the application
      And I bypass the two factor authentication
    Then I expect to see the first-time login dashboard page