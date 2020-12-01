const { When } = require("@cucumber/cucumber")
const { click, toRightOf, $ } = require("taiko")

When('I agree to the terms of service', async function () {
    await click('I agree to the terms of service and will adhere to them unconditionally.')
});

When('I remove {string} from my cart', async function (string) {
    await click($('.icon-trash', toRightOf(string)))
})