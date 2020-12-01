const { When } = require("@cucumber/cucumber")
const {  radioButton, write, dropDown, click, into, near, textBox, button, below} = require("taiko")

When('I fill out the login form and submit it', async function () {
    await radioButton(below("Title"), near(this.user["Title"])).select()
    await write(this.user["First Name"], "First Name")
    await write(this.user["Last Name"], "Last Name")
    await write(this.user["Password"], "password")

    this.user["Date of Birth"] = this.user["Date of Birth"].split("/")
    await dropDown({ id: "days" }).select(this.user["Date of Birth"][0])
    await dropDown({ id: "months" }).select(this.user["Date of Birth"][1])
    await dropDown({ id: "years" }).select(this.user["Date of Birth"][2])

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
    await click(button("Register"))
});

When('I navigate to the login page and try to login', async function () {
    await click("Sign in")
    await write(this.user["Email Address"], into(textBox("Email Address", below("ALREADY REGISTERED?"))))
    await write(this.user["Password"], into("Password", near("ALREADY REGISTERED?")))
    await click(button("Sign In"))
})

When('I navigate to the create user page', async function () {
    await click("Sign in")
    await write(this.user["Email Address"], "Email Address", near("CREATE AN ACCOUNT"))
    await click(button("Create an account"))
});