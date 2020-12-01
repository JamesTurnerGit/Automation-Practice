Feature: Users can buy items
    Scenario: user adds an item to shopping cart and tries to log out
        Given I load valid login credentials
        When I navigate to the login page and try to login
        And I'm on the womens clothing shopfront
        And I add 'Faded Short Sleeve T-shirts' to my cart
        # note : Could group all these into one step but i think this is a good way to highlight a
        #        suboptimal part of the user experience
        And I click 'proceed to checkout'
        And I click 'proceed to checkout'
        And I click 'proceed to checkout'
        And I click 'proceed to checkout'
        And I agree to the terms of service
        And I click 'proceed to checkout'
        And I click 'Pay by bank Wire'
        And I click 'I confirm my order'
        Then I see 'Your order on My Store is complete.' on the page