const { setDefaultTimeout, Before, Given, When, Then, After } = require("@cucumber/cucumber")
const { highlight, openBrowser, goto, closeBrowser, click, text, $ } = require("taiko")
const assert = require('assert')

require('dotenv').config()
setDefaultTimeout(30 * 1000);

Before(async function () {
  await openBrowser({ navigationTimeout: 10,headless:false, observeTime: 0 });
  await goto("http://automationpractice.com/")
})

After(async function () {
  //await closeBrowser();
})

Given('I have a user with the following information', function (dataTable) {
  this.user = dataTable.rowsHash()
});

Given('the postal address', function (dataTable) {
  this.user.address = dataTable.rowsHash()
});

Given('I load valid login credentials', function () {
  assert.notStrictEqual(process.env.VALID_USER_EMAIL, undefined, ".env file not setup correctly")
  this.user = Object
  this.user["Email Address"] = process.env.VALID_USER_EMAIL
  this.user["Password"] = process.env.VALID_USER_PASS
})

When('I click {string}', async function (string) {
  await click(string)
});

Then('I get the following errors', async function (dataTable) {

  for (item of dataTable.raw()){
    await text(item[0]).exists()
  }
});

Then('I see {string} on the page', async function (string) {
  await text(string).exists()
})

