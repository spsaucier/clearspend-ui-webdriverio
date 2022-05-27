Feature: Creating New Physical Card with Spend Controls

  Scenario: As a user, I should be able to create multiple physical cards
    Given I am on the login page
      And I sign in to the application
      And I bypass the two factor authentication
    Then I expect to see the dashboard page
    Given I am on the cards page
    Then I expect to count all cards
    When I create physical card for the owner
      And I create physical card for the owner
    Then I expect the cards count to be increased by 2

  Scenario: As a user, I should be able to create multiple physical cards
    Given I am on the login page
      And I sign in to the application
      And I bypass the two factor authentication
    Then I expect to see the dashboard page
    Given I am on the cards page
    Then I expect to count all cards
    When I create physical card for the owner
      And I create physical card for the owner
      And I create physical card for the owner
    Then I expect the cards count to be increased by 3

  Scenario: As a user, I should be able to create multiple physical cards
    Given I am on the login page
      And I sign in to the application
      And I bypass the two factor authentication
    Then I expect to see the dashboard page
    Given I am on the cards page
    Then I expect to count all cards
    When I create physical card for the owner
      And I create physical card for the owner
      And I create physical card for the owner
      And I create physical card for the owner
    Given I am on the cards page
    Then I expect the cards count to be increased by 4