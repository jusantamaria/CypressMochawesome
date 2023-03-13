@Login
Feature: Login page will work depending on the user credencials.

    Background:
        Given a user opens a SauceLabs website

    Scenario: Success login
    When a user enters the username "standard_user"
    And a user enters the password "secret_sauce"
    And a user clicks on the login button
    Then the url will contain the inventory subdirectory