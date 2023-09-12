@ignore
Feature: FeatureA

  Scenario: FeatureA loads
    When user launches the application
    Then the application is displayed

  Scenario: User details retrieved and displayed
    When user launches the application for user 'User 1'
    Then the application is displayed
    And user details can be retrieved and displayed for user 'User 1'












