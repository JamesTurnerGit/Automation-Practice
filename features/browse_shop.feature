Feature: User can browse the shop
    Scenario Outline: User uses filters to view a specific dress
        Given I'm on the womens clothing shopfront
        When I select the filters '<filter 1>' and '<filter 2>'
        Then I should only see '<correct item>'

        Examples:
            | filter 1 | filter 2    | correct item          |
            | Dressy   | Short Dress | Printed Dress         |
            | Girly    | Midi Dress  | Printed Chiffon Dress |
