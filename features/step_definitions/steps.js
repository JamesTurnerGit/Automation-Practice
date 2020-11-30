const { setDefaultTimeout, Before ,Given, When, Then, After } = require("@cucumber/cucumber")
const { openBrowser, below, near, goto, closeBrowser, click, write, button, radioButton, dropDown, highlight, text } = require("taiko")

setDefaultTimeout(30 * 1000);

Before(async function(){
  await openBrowser()//{headless: false, observeTime: 0});  
  await goto("http://automationpractice.com/")
})

After(async function(){
 await closeBrowser();
})

Given('I have a user with the following information', function (dataTable) {
  this.user = dataTable.rowsHash()
});

Given('the postal address', function (dataTable) {
  this.user.address = dataTable.rowsHash()
});

When('I navigate to the create user page', async function () {
  await click("Sign in")
  await write(this.user["Email Address"], "Email Address", below("CREATE AN ACCOUNT"))
  await click(button("Create an account"))
});

When('I fill out the login form', async function () {
  await radioButton(below("Title"), near(this.user["Title"])).select()
  await write(this.user["First Name"], "First Name")
  await write(this.user["Last Name"], "Last Name")
  await write(this.user["Password"], "password")

  this.user["Date of Birth"] = this.user["Date of Birth"].split("/")
  await dropDown({id:"days"}).select(this.user["Date of Birth"][0])
  await dropDown({id:"months"}).select(this.user["Date of Birth"][1])
  await dropDown({id:"years"}).select(this.user["Date of Birth"][2])

  await write(this.user.address["Company"], "Company")
  await write(this.user.address["Address"], "Address")
  await write(this.user.address["Address (Line2)"], "Address (Line 2)")
  await write(this.user.address["City"], "City")
  await write(this.user.address["Zip/Postal Code"], "Zip/Postal Code")
  await dropDown("Country").select(this.user.address["Country"])
  await dropDown("State").select(this.user.address["State"])
  await write(this.user.address["Additional information"], "Additional information"); 
  await write(this.user.address["Address Alias"], "Assign an address alias for future reference")
  await write(this.user["Home Phone Number"], "Home Phone")
  await write(this.user["Mobile Phone Number"], "Mobile Phone")
});

Then('I get the following errors when I press Submit', async function (dataTable) {
  await click(button("Register"))
  dataTable.raw().forEach( async error => {
    await text(error[0]).exists();
  });
});

