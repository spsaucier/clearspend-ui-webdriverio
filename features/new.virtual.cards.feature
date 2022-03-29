Feature: Creating New Virtual Card with Spend Controls

  Scenario: As a user, I should be able to create a virtual card
    Given I am on the login page
      And I sign in to the application
    Then I expect to see the dashboard page
    Given I am on the cards page
    Then I expect to see the cards page
      And I expect to count all virtual cards
    When I create virtual card for the owner
    Then I expect the "virtual" cards count to be increased by 1

  Scenario: As a user, I should be able to create virtual card.
    Given I am on the cards page
    Then I expect to see the cards page
      And I expect to count all virtual cards
    When I create virtual card for the owner
      And I create virtual card for the owner
    Given I am on the cards page
    Then I expect to see the cards page
      And I expect the "virtual" cards count to be increased by 2

  Scenario: As a user, I should be able to create virtual card with specific categories for transactions.
    Given I am on the cards page
    Then I expect to see the cards page
      And I expect to count all virtual cards
    When I create virtual card with the categories "all categories"
      And I create virtual card with the categories "child care"
      And I create virtual card with the categories "education"
      And I create virtual card with the categories "digital goods"
      And I create virtual card with the categories "entertainment"
    Given I am on the cards page
    Then I expect to see the cards page
      And I expect the "virtual" cards count to be increased by 5

  Scenario: As a user, I should be able to create virtual card with daily, monthly and transaction limits.
    Then I expect to see the cards page
      And I expect to count all virtual cards
    When I create virtual card for the owner
      And I create virtual card with "daily" limit and amount "200"
      And I create virtual card with "transaction" limit and amount "5000"
    Given I am on the cards page
    Then I expect to see the cards page
      And I expect the "virtual" cards count to be increased by 3

  Scenario: As a user, I should be able to create virtual card with different payment types - all, POS, online and manual entry.
    Then I expect to see the cards page
      And I expect to count all virtual cards
    When I create virtual card with payment types "all"
      And I create virtual card with payment types "pos"
      And I create virtual card with payment types "online"
      And I create virtual card with payment types "manual entry"
    Given I am on the cards page
    Then I expect to see the cards page
      And I expect the "virtual" cards count to be increased by 4