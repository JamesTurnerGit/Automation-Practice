# Automation Practice

## Setup
type `npm i` in a command prompt
rename `example.env` to `.env`
Inside your `.env` file add a valid user and password

## Running
type `npm test` in a command prompt


## notes
### why these tests?
In this scenario I was only allowed to make five tests without a given focus, So my five tests focus on trying to cover what would probably be the business requirements. They don't do it perfectly and there's a lot more testing that would have to be done before this could be considered a decent test suite

### why taiko? 
I've been using it a bit lately, It's got all the functionality of selenium (critically though it is missing a lot of browser support still so still not that viable for commercial use), and does a great job of producing readable code. I particularly like the proxity selectors ("near", "below", "to right of") as they do a great approximation of how you'd talk a human through the tasks.

### other comments
One of the scenario fails is on purpose, as the filtering on the page is not functional
 
Some of these "passes" would be raised as the wording on a lot of the failure messages is very very poor.

I've deliberatly included several "styles" of writing gerkin(verbose and reusable, Terse and more business friendly) as I consider this to be something worked out with product owners