Feature: Creating New Virtual Card

  Scenario: As a user, I should be able to create a virtual card
    Given I am on the login page
      And I sign in to the application
    Then I expect to see the dashboard page
    Given I am on the cards page
    Then I expect to see the cards page
      And I expect to count all cards
    When I create virtual card
    Given I am on the cards page