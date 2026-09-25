# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: appointment.spec.ts >> Add Appointment
- Location: tests\appointment.spec.ts:4:6

# Error details

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://demo.smart-hospital.in/site/login", waiting until "load"

```

# Test source

```ts
  1  | import { Locator, Page, expect } from "@playwright/test";
  2  | 
  3  | export class LoginPage {
  4  |     private readonly page: Page;
  5  |     private readonly userName: Locator;
  6  |     private readonly password: Locator;
  7  |     private readonly signInbutton: Locator;
  8  |     private readonly invalidCrendentialsErrorMessage: Locator
  9  | 
  10 | constructor(page: Page){
  11 | 
  12 |     this.page = page
  13 |     this.userName = page.locator("input#al-username")
  14 |     this.password = page.locator("input#al-password")
  15 |     this.signInbutton = page.locator(".lp-btn-submit")
  16 |     this.invalidCrendentialsErrorMessage=page.locator(".alert.alert-danger.mt-3")
  17 | 
  18 | }
  19 | 
  20 | async goTo(): Promise<void>{
  21 | 
> 22 |     await this.page.goto("https://demo.smart-hospital.in/site/login")
     |                     ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  23 | }
  24 | 
  25 | 
  26 | async validlogin(username: string, password: string): Promise<void>{
  27 |   
  28 |     await this.userName.fill(username)
  29 |     await this.password.fill(password)
  30 |     await this.signInbutton.click()
  31 | }
  32 | 
  33 | async invalidloginErrorMessaGE(invalid_crendentials_error_message: string): Promise<void>
  34 | {
  35 |     await expect(this.invalidCrendentialsErrorMessage).toContainText(invalid_crendentials_error_message)
  36 | }
  37 | 
  38 | }
```