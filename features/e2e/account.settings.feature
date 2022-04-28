Feature: Account Settings page elements update

  Scenario: As a user, I should be able to update my password
	Given I am on the login page
        And I sign in to the application
	    And I expect to see the dashboard page
    When I navigate and select account settings page
        And I click on update pasword button 
        And I renew my password to new credentials    
    Then I expect to see success message appeared  

  Scenario: As a user, I should be able to update phone number
    Given I am on the login page
        And I sign in to the application
        And I expect to see the dashboard page
    When I navigate and select account settings page
        And I click on update phone number button 
        And I enter my new phone number 
    When I verify the six digit verification code
        And I confirm the code to the application   
    Then I expect to see success message appeared  

  Scenario: As a user, I should be able to update my profile
    Given I am on the login page
        And I sign in to the application
        And I expect to see the dashboard page
    When I navigate and select account settings page
        And I click on update profile button 
        And I renew my address to new credentials    
    Then I expect to see success message appeared  

Scenario: As a user, I should be able to sign out from app
    Given I am on the login page
        And I sign in to the application
        And I expect to see the dashboard page
    When I navigate and select account settings page
        And I click on sign out button 
        And I login with new credentials    
    Then I expect to see dashboard page





