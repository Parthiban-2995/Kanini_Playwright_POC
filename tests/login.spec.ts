import { test } from '../fixtures/loginFixture';

test.describe.configure({mode:'parallel'})
test("@smoke verify the succesfully login with valid crendentials", async ({ pages, loginData }) => {
    await pages.loginPage.goTo()
    await pages.loginPage.validlogin(
        loginData.validLogin.username,
        loginData.validLogin.password
    )
    await pages.dashboardPage.navigateToDashboard(loginData.validLogin.dashboardTitle!)

})

test("@smoke Verify the Invalid login crendential error message", async ({ pages, loginData }) => {
    await pages.loginPage.goTo()
    await pages.loginPage.validlogin(
        loginData.invalidLogin.username,
        loginData.invalidLogin.password
    )
    await pages.loginPage.invalidloginErrorMessaGE(loginData.invalidLogin.errorMessage!)


})