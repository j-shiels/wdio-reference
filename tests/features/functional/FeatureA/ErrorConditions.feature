@ignore
Feature: FeatureA - Error Conditions

  Scenario: User details retrieved and displayed
    When user launches the application for user 'Error: 500'
    Then the application is displayed
    And an error is displayed when application fails to retrieve user details












