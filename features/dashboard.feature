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
         And I expect to see allocaton page appeared
     When I click on Card button 
         And I expect to see card page appeared
     When I click on Accounting button
         And I expect to see accounting page appeared
     When I click on Employees button
         And I expect to see employees page   
     When I click on Company Settings button
         And I expect to see company profile page
     When I click on Account Settings button   
     Then I expect to see account owner details  

     Scenario: As a user, I should be able to get transactions from search transactions input box
      Given I am in the login page 
         And I sign in to the application
         And I expect to see the dashboard page
      When I navigate and click on Search transactions input
         And I input the transaction amout 
         And I expect to see the all transections with the same amount
      When I navigate and click on Search transactions input 
         And I input the merchant name
         And I expect to see all transactions related with merchant name






   



