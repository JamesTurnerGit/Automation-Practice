const { Given, When, Then } = require("@cucumber/cucumber")
const { click, $, checkBox, evaluate, hover, waitFor } = require("taiko")
const assert = require('assert')

Given('I\'m on the womens clothing shopfront', async function () {
    await click("WOMEN")
})

Given('I select the filters {string} and {string}', async function (filter1, filter2) {
    await click(checkBox(filter1))
    await click(checkBox(filter2))
})

When('I add {string} to my cart', async function (item) {
    let elements = await $('.product-container').elements()
    for (element of elements){
        let text = await element.text()
        if (text.includes(item)) {
            await hover(element)
            await evaluate((element) => {
                element.querySelector('a.button[title="Add to cart"]').click()
            })
            waitFor(50) 
            // waiting for a css animation to finish
        }
    }
})

Then('I should only see {string}', async function (string) {
    let x = await $('.product-container').elements()
    assert.strictEqual(x.length, 1, "wrong number of results found")
});
