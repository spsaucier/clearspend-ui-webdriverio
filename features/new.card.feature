Feature: Creating New Virtual/Physical Card

  Scenario: As a user, I should be able to create a virtual card

    Given I am on the login page
      And I sign in to the application
    Then I expect to see the dashboard page
    Given I am on the cards page
    When I add new virtual card to the account

  Scenario: As a user, I should be able to create a physical card

    Given I am on the cards page
    When I add new physical card to the account