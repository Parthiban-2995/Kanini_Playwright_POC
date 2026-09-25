import { Locator, Page, expect } from "@playwright/test";
import { environment } from '../utils/env';

export class LoginPage {
    private readonly page: Page;
    private readonly userName: Locator;
    private readonly password: Locator;
    private readonly signInbutton: Locator;
    private readonly invalidCrendentialsErrorMessage: Locator

constructor(page: Page){

    this.page = page
    this.userName = page.locator("input#al-username")
    this.password = page.locator("input#al-password")
    this.signInbutton = page.locator(".lp-btn-submit")
    this.invalidCrendentialsErrorMessage=page.locator(".alert.alert-danger.mt-3")

}

async goTo(): Promise<void>{

    await this.page.goto(environment.baseUrl)
}


async validlogin(username: string, password: string): Promise<void>{
  
    await this.userName.fill(username)
    await this.password.fill(password)
    await this.signInbutton.click()
}

async invalidloginErrorMessaGE(invalid_crendentials_error_message: string): Promise<void>
{
    await expect(this.invalidCrendentialsErrorMessage).toContainText(invalid_crendentials_error_message)
}

}