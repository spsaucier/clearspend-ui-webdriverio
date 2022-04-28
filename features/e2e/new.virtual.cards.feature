Feature: Creating New Virtual Card with Spend Controls

  Scenario: As a user, I should be able to create a virtual card
    Given I am on the login page
      And I sign in to the application with email "tests12@gmai.com"
      And I bypass the two factor authentication
    Then I expect to see the dashboard page
    Given I am on the cards page
    Then I expect to count all cards
    When I create virtual card for the "owner"
    Then I expect to see the cards page
      And I expect the cards count to be increased by 1

  Scenario: As a user, I should be able to create multiple virtual cards
    Given I am on the cards page
    Then I expect to count all cards
    When I create virtual card for the "owner"
      And I create virtual card for the "owner"
      And I create virtual card for the "owner"
    Then I expect to see the cards page
      And I expect the cards count to be increased by 3

  Scenario: As a user, I should be able to create a virtual card
    Given I am on the cards page
    When I change to "100" cards per page
      And I change to "10" cards per page
      And I change to "20" cards per page
      And I change to "50" cards per page