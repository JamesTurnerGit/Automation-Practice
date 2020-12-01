Feature: Users can create an account
    Scenario: User does not have a valid address for creating an account
        ## Create an account would be a very high priority test and would replace this one if the ability to delete accounts was available
        Given I have a user with the following information
            | Email Address       | fake@deleteme.com |
            | Title               | Mr.               |
            | First Name          |                   |
            | Last Name           |                   |
            | Password            | Pass              |
            | Date of Birth       | 30/1/1900         |
            | Home Phone Number   | 0123-456-789      |
            | Mobile Phone Number |                   |
        And the postal address
            | Company                | Acme.            |
            | Address                |                  |
            | Address (Line2)        | toonland complex |
            | City                   |                  |
            | State                  | -                |
            | Zip/Postal Code        | 9012088          |
            | Country                | -                |
            | Additional information |                  |
            | Address Alias          |                  |
        When I navigate to the create user page
        And I fill out the login form and submit it
        Then I get the following errors
            | firstname is required.                            |
            | passwd is invalid.                                |
            | id_country is required.                           |
            | address1 is required.                             |
            | city is required.                                 |
            | Country cannot be loaded with address->id_country |
            | Country is invalid                                |
