import { expect } from '@playwright/test'
import path from "path";
import { test } from '../fixtures/baseFixture';
import type { VisitorDetails } from '../pageobjects/FrontOfficePage';




test("verify the succesfully login with valid crendentials", async ({ pages }) => {

    const username = "jason@gmail.com"
    const password = "password"
    const dashbaordTitle = "Dashboard · Smart Hospital"


    await pages.loginPage.goTo()
    await pages.loginPage.validlogin(username, password)
    await pages.dashboardPage.navigateToDashboard(dashbaordTitle)
    //console.log(await page.title())
    // await page.getByRole("button", {name: "Admin", exact: true}).click()
    // await page.locator("input#al-username").fill("jason@gmail.com")
    // await page.locator("input#al-password").fill("password")
    //  await page.locator(".lp-btn-submit").click()

    //await expect(page).toHaveTitle(dashbaordTitle)
})


test("Verify the Invalid login crendential error message", async ({ pages }) => {


    const username = "jason@gmail.com"
    const password = "passwod"
    const invalid_crendentials_error_message="Invalid Username or Password"
   


    await pages.loginPage.goTo()
    await pages.loginPage.validlogin(username, password)
    await pages.loginPage.invalidloginErrorMessaGE(invalid_crendentials_error_message)

   // await expect(page.locator(".alert.alert-danger.mt-3")).toContainText("Invalid Username or Password")

})

test("removing value in text box ", async ({ page }) => {

    await page.goto("https://demo.smart-hospital.in/site/login")
    const userName = page.locator("input#al-username")
    const Password = page.locator("input#al-password")
    const signIn = page.locator(".lp-btn-submit")

    await userName.fill("jason@gmail.com")
    await Password.fill("passwrd")
    await Password.fill("")
    await Password.fill("password")
    await signIn.click()
    await expect(page).toHaveTitle("Dashboard · Smart Hospital")

})


test("handling mutiple elements matched ", async ({ page }) => {


    await page.goto("https://demo.smart-hospital.in/site/login")

    const adminBtb = page.locator(".lp-demo-grid .lp-demo-btn").nth(1)  // first() , last()
    const signIn = page.locator(".lp-btn-submit")

    await adminBtb.click()
    await signIn.click()
    await expect(page).toHaveTitle("Dashboard · Smart Hospital")

})


test("geting all text content", async ({ page }) => {

    await page.goto("https://demo.smart-hospital.in/site/login")
    const userName = page.locator("input#al-username")
    const Password = page.locator("input#al-password")
    const signIn = page.locator(".lp-btn-submit")
    const dashboardText = page.locator(".dash-alerts a")

    await userName.fill("jason@gmail.com")
    await Password.fill("password")
    await signIn.click()
    await expect(page).toHaveTitle("Dashboard · Smart Hospital")
    // await page.waitForLoadState("networkidle")
    await dashboardText.nth(1).waitFor()
    const alldashboardtext = await dashboardText.allTextContents()
    console.log(alldashboardtext)


})

test("handling Select dropdowns", async ({ page }) => {

    await page.goto("https://demo.smart-hospital.in/site/login")
    const userName = page.locator("input#al-username")
    const Password = page.locator("input#al-password")
    const signIn = page.locator(".lp-btn-submit")
    const dashboardText = page.locator(".dash-alerts a")
    const sidemenuPatient = page.locator("[data-tooltip='Patient']")
    const patientBnt = page.locator("a.btn.btn-primary.btn-sm.newpatient")
    const genderDropdown = page.locator("#addformgender")

    await userName.fill("jason@gmail.com")
    await Password.fill("password")
    await signIn.click()
    await expect(page).toHaveTitle("Dashboard · Smart Hospital")
    await sidemenuPatient.click()
    await patientBnt.click()
    await genderDropdown.selectOption("Male")



})

test("handling radio buttons", async ({ page }) => {

    await page.goto("https://o3.openmrs.org/openmrs/spa/login")

    const userName = page.locator("#username")
    const continueBtn = page.locator("[type='submit']")
    const password = page.locator("#password")
    const loginBtn = page.locator("[type='submit']")
    const patientBtn = page.locator("[aria-label='Add patient']")
    const maleRadilBtn = page.locator(".cds--radio-button__appearance").first()

    await userName.fill("admin")
    await continueBtn.click()
    await password.fill("Admin123")
    await loginBtn.click()
    await patientBtn.click()
    await maleRadilBtn.click()

})

test("handling radio buttons and checkboxex", async ({ page }) => {

    page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const userName = page.locator("#username")
    const password = page.locator("#password")
    const radioBtn = page.locator("span.radiotextsty").last()
    const okayBtn = page.locator("#okayBtn")
    const dropdwon = page.locator("select.form-control")
    const checkbox = page.locator("#terms")

    await userName.fill("rahulshettyacademy")
    await password.fill("Learning@830$3mK2")
    await radioBtn.click()
    await okayBtn.click()
    await expect(radioBtn).toBeChecked()
    await checkbox.click()
    await expect(checkbox).toBeChecked()
    await checkbox.uncheck()
    expect(await checkbox.isChecked()).toBeFalsy()


})

test("verify the attribute value", async ({ page }) => {
    await page.goto("https://demo.smart-hospital.in/site/login")
    const userName = page.locator("input#al-username")
    const Password = page.locator("input#al-password")
    const signIn = page.locator(".lp-btn-submit")
    const plusBtn = page.locator("#shQuickAddBtn")

    await userName.fill("jason@gmail.com")
    await Password.fill("password")
    await signIn.click()
    await expect(plusBtn).toHaveAttribute("aria-label", "Quick Add")

})

test("verify child window", async ({ browser }) => {

    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const userName = page.locator("#username")

    const link = page.locator("[href*=documents-request]")


    const [newpage] = await Promise.all([
        context.waitForEvent('page'),
        link.click()])

    const text = await newpage.locator("p.red").textContent()
    console.log(text)
    const emailText = text?.split("@")[1]?.split(" ")[0]
    console.log(emailText)

    if (!emailText) {
        throw new Error("Email text not found in the new window")
    }

    await userName.fill(emailText)

    console.log(await userName.inputValue())

})


test("verify add visitor patient sucessfully ", async ({ pages }) => {

    // test.setTimeout(12000) // test timeout 
    // const customerExpect=expect.configure({timeout:60000}) // test level assertion timeout 
    // page.setDefaultTimeout(30000) // test level action timeout 

    const visitor: VisitorDetails = {
        purpose: "Seminar ",
        name: "SELVA",
        phoneNumber: "9846477894",
        idCard: "1234",
        visitTo: "staff",
        roleSearchText: "San",
        numberOfPeople: "3",
        date: "15/09/2026",
        inTime: "01:24 AM",
        outTime: "07:00 PM",
        note: "I am Tetsing in production environemnt",
        uploadPath: path.join(process.cwd(), "test-data", "Requiring Attention (1).xlsx")
    };

    await pages.loginPage.goTo();
    await pages.loginPage.validlogin("jason@gmail.com", "password");
    await pages.dashboardPage.navigateToFrontOfficePage();
    await pages.frontOfficePage.addVisitor(visitor);


})

test.only("Verify whether visitor is deleted succesfully ", async ({ pages }) => {

    const visitorName = "SELVA"

    await pages.loginPage.goTo();
    await pages.loginPage.validlogin("jason@gmail.com", "password");
    await pages.dashboardPage.navigateToFrontOfficePage();
    await pages.frontOfficePage.deleteVisitorLog(visitorName);

})


test("take screenshot", async ({ browser }) => {

    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://demo.smart-hospital.in/site/login")
    console.log(await page.title())
    // await page.getByRole("button", {name: "Admin", exact: true}).click()
    await page.locator("input#al-username").fill("jason@gmail.com")
    await page.locator("input#al-username").screenshot({ path: path.join(process.cwd(), "screenshot", "username.png") })
    await page.locator("input#al-password").fill("password")
    await page.locator(".lp-btn-submit").click()
    await page.screenshot({ path: path.join(process.cwd(), "screenshot", "login.png") })

    await expect(page).toHaveTitle("Dashboard · Smart Hospital")

})

test("visual testing", async ({ page }) => {

    await page.goto("https://www.google.com/")
    expect(await page.screenshot()).toMatchSnapshot("google.png")
})


