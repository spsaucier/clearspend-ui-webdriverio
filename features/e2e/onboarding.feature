#Feature: Onboarding Process
#
#  Scenario: As a admin, I should be able to go through onboarding process.
#
#  Given I am on the signup page
#    And I sign up to the application
#    When I select business type - "company"
#      And I select business structure - "single-member"
#      And I check yes for ownership
#      And I check yes for executive
#      And I verify phone number and enter confirmation code
#      And I enter password and confirm password
#    Then I expect to see the onboarding page
#    Then I expect to see the business details page
#    When I enter entity name
#      And I enter EIN
#      And I enter phone number
#      And I enter business description with length 100
#      And I select merchant category
#      And I enter random address
#      And I click the next button
#    Then I expect to see the business leadership page
#    When I enter random title
#      And I select date of birth
#      And I enter SSN
#      And I enter random address
#      And I enter percentage ownership - "100"
#      And I click the next button
#      And I click the next button
#    Then I expect to see the add bank account page
#    When I connect my bank account
#    Then I expect to see the authorize deposit page
#    When I authorize deposit for "100" dollars
#    Then I expect to see the first-time login dashboard page
#    When I click go to dashboard page
#    Then I expect to see 100 dollars in root allocation