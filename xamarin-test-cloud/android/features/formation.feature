Feature: Basic Formation testing

  Scenario: As a trainer i want to do a demo of xamrin test cloud
  I wait for "Welcome to React Native" to appear
  Then take picture

  Then I press "JSX"
  Then take picture

  Then I go back
  Then I wait for "Welcome to React Native" to appear

  Then I press "GREETINGS"
  Then take picture

  Then I go back
  Then I wait for "Welcome to React Native" to appear

  Then I press "STATE"
  Then take picture
  Then I wait for 2 seconds
  Then take picture

  Then I go back
  Then I wait for "Welcome to React Native" to appear




