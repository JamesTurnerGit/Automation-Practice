Feature: Login Page
    Scenario: user has invalid credentials and tries to log in
        Given I have a user with the following information
            | Email Address | fake@fake.com |
            | Password      | password1     |
        When I navigate to the login page and try to login
        Then I get the following errors
            | Authentication failed. |
