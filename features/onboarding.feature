Feature: Onboarding Process
		
  Scenario: As a admin, I should be able to go through onboarding process.
		
	Given I am on the signup page
		And I sign up to the application
    When I select business type - "company"
      And I select business structure - "single-member"
      And I check yes for ownership
      And I check yes for executive
      And I verify phone number and enter confirmation code
      And I enter password and confirm password
    Then I expect to see the onboarding page
    When I fill out business details
        And I fill out business leadership details
        And I add new leader
        And I check verification status
        And I upload documents
        And I add new leader
        And I connect plaid account
        And I add balance to the root allocation
    Then I expect to see the dashboard page