Feature: Dashboard elements functionalities

  Scenario: As a user, I should be able to have access to filter trancestions
    Given I am on the login page
        And I sign in to the application
        And I expect to see the dashboard page
    When I navigate and select filter button
        And choose filter options from right bar    
    Then I expect to see the result message appeared    

  Scenario: As a user, I should be able to have access to all elements on left bar
    Given I am on the login page
        And I sign in to the application
        And I expect to see the dashboard page
    When I click on allocation button
    Then I expect to see allocaton page appeared
    When I click on Card button 
    Then I expect to see card page appeared
    When I click on Accounting button
    Then I expect to see accounting page appeared
    When I click on Employees button
        And I expect to see employees page   
        And I click on Company Settings button
     Then I expect to see company profile page
     When I click on Account Settings button   
     Then I expect to see account owner details  

  Scenario: As a user, I should be able to get transactions from search transactions input box
    Given I am in the login page 
        And I sign in to the application
    Then I expect to see the dashboard page
    When I navigate and click on Search transactions input
        And I input the transaction amout 
        And I expect to see the all transections with the same amount
    When I navigate and click on Search transactions input 
        And I input the merchant name
        And I expect to see all transactions related with merchant name
    When I navigate and click on Search transaction input
        And I input the last four digits of a card
    Then I expect to see the transections related to that card

  Scenario: As a user, I should be able to do outbound transfer
    Given I am in the login page 
        And I sign in to the application
        And I expect to see the dashboard page
    When I navigate and click on Manage balance button
    Then I expect to see the add balance by default selected
    When I enter an amout of money to wire from source accout
        And I confirm the transefer 
    Then I expect to see confirmation message appeared 