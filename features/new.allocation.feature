Feature: Creating New Allocation

  Scenario: As a user, I should be able to create an allocation
    Given I am on the login page
      And I sign in to the application
    Then I expect to see the dashboard page
    Given I am on the allocations page
    Then I expect to see the allocations page
    When I create new allocation with specific name "Automation"

  Scenario: As a user, I should be able to create an allocation
    Given I am on the login page
      And I sign in to the application
    Then I expect to see the dashboard page
    Given I am on the allocations page
    Then I expect to see the allocations page
    When I create new allocation with specific name "Marketing"

  Scenario: As a user, I should be able to create an allocation
    Given I am on the login page
      And I sign in to the application
    Then I expect to see the dashboard page
    Given I am on the allocations page
    Then I expect to see the allocations page
    When I create new allocation with specific name "Nikita"

  Scenario: As a user, I should be able to create an allocation
    Given I am on the login page
      And I sign in to the application
    Then I expect to see the dashboard page
    Given I am on the allocations page
    Then I expect to see the allocations page
    When I create new allocation with random name

  Scenario: As a user, I should be able to create an allocation
    Given I am on the login page
      And I sign in to the application
    Then I expect to see the dashboard page
    Given I am on the allocations page
    Then I expect to see the allocations page
    When I create new allocation with random name
      And I create new allocation with random name