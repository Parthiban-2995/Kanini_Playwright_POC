import { Locator, Page ,expect} from "@playwright/test";

export class DashboardPage{

private readonly page: Page;
    
constructor(page : Page){

 this.page=page

}
async navigateToDashboard(dashbaordTitle: string ): Promise<void>{

    await expect(this.page).toHaveTitle(dashbaordTitle)
}

}
