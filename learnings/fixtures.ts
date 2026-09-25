
import { expect, test as base, type Page, Response } from '@playwright/test'

type Fixtures = {
    authenticationPage: Page , 
    createOrder : Response
}

export const customtest = base.extend<Fixtures>({

    authenticationPage: async ({ browser }, use) => {

    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://demo.smart-hospital.in/site/login")
    console.log(await page.title())
    // await page.getByRole("button", {name: "Admin", exact: true}).click()
    await page.locator("input#al-username").fill("jason@gmail.com")
    await page.locator("input#al-password").fill("password")
    await page.locator(".lp-btn-submit").click()
    await use(page)

    await context.close()  // tear down test it will after the test code executed 

}, 

createOrder: async ({browser},use )=>{

//  await use(Response)
}

})
