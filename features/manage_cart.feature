Feature: I can change what's in my cart

    Scenario: I can remove items from my cart
        Given I'm on the womens clothing shopfront

        When I add 'Faded Short Sleeve T-shirts' to my cart
        And I click 'Continue shopping'
        And I add 'Blouse' to my cart
        And I click 'Proceed to checkout' 

        And I remove 'Faded Short Sleeve T-shirts' from my cart

        Then I see 'Your shopping cart contains: 1 Product' on the page
        
        

