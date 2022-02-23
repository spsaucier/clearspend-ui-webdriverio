Feature: Dashboard elements functionalities
		
  Scenario: As a user, I should be able to have access to filter trancestions
		
	Given I am on the login page
		And I sign in to the application
	    And I expect to see the dashboard page
    When I navigate and select filter button
        And choose filter options from right bar    
    Then I expect to see the result message appeared    



  Scenaro: As a user, I should be able to have access to all elements on left bar
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


   



