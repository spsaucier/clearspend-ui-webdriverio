Feature: Creating New Virtual/Physical Card with Spend Controls

  Scenario: As a user, I should be able to create a physical card
    Given I am on the login page
      And I sign in to the application
    Then I expect to see the dashboard page
    Given I am on the cards page
    When I add new virtual card
    Then I expect to see the cards page

  Scenario: As a user, I should be able to create physical and virtual card.
    When I add new virtual card
      And I add new virtual card
    Then I expect to see the cards page

  Scenario: As a user, I should be able to create virtual card with specific categories for transactions.
    When I add new virtual card with the categories "all categories"
      And I add new virtual card with the categories "child care"
      And I add new virtual card with the categories "education"
      And I add new virtual card with the categories "digital goods"
      And I add new virtual card with the categories "entertainment"
    Then I expect to see the cards page

  Scenario: As a user, I should be able to create virtual card with daily, monthly and transaction limits.
    When I add new virtual card with "monthly" limit
      And I add new virtual card with "daily" limit
      And I add new virtual card with "transaction" limit
    Then I expect to see the cards page

  Scenario: As a user, I should be able to create virtual card with daily, monthly and transaction limits.
    When I add new virtual card with payment types "all"
      And I add new virtual card with payment types "pos"
      And I add new virtual card with payment types "online"
      And I add new virtual card with payment types "manual entry"
    Then I expect to see the cards page