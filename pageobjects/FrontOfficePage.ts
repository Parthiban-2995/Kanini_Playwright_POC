import { expect, Locator, Page } from "@playwright/test";
import { DatePicker } from '../actions/DatePicker';

export type VisitorDetails = {
    purpose: string;
    name: string;
    phoneNumber: string;
    idCard: string;
    visitTo: string;
    roleSearchText: string;
    numberOfPeople: string;
    date: string;
    inTime: string;
    outTime: string;
    note: string;
    uploadPath: string;
};

export class FrontOfficePage{

private readonly page: Page;
private readonly leftSideMenu_FrontOffice: Locator;
private readonly addVisitorButton: Locator;
private readonly purposeDropdown: Locator;
private readonly name: Locator;
private readonly phoneNumber: Locator;
private readonly idCard: Locator;
private readonly visitToDropdown: Locator;
private readonly roleDropdown: Locator;
private readonly searchBox: Locator;
private readonly numberOfPeople: Locator;
private readonly datePicker: Locator;
private readonly inTime: Locator;
private readonly outTime: Locator;
private readonly note: Locator;
private readonly upload: Locator;
private readonly saveButton: Locator;
private readonly visitorRows: Locator;
private readonly deleteSuccessMessage: Locator;

    
constructor(page : Page){

 this.page = page;
 this.leftSideMenu_FrontOffice=page.locator("[data-tooltip='Front Office']")
 this.addVisitorButton = page.locator("[data-bs-toggle='modal']");
 this.purposeDropdown = page.locator("select[name='purpose']:visible").last();
 this.name = page.locator("input[name='name']").last();
 this.phoneNumber = page.locator("[name='contact']").last();
 this.idCard = page.locator("[name='id_proof']").last();
 this.visitToDropdown = page.locator("#visit_to").first();
 this.roleDropdown = page.locator("span[title='Select']").last();
 this.searchBox = page.locator("input.select2-search__field:visible").last();
 this.numberOfPeople = page.locator("input[name='pepples']").last();
 this.datePicker = page.locator("input#date");
 this.inTime = page.locator("#stime_");
 this.outTime = page.locator("#stime_out");
 this.note = page.locator("textarea#note").last();
 this.upload = page.locator("input[type='file']").last();
 this.saveButton = page.locator("button#formaddbtn");
 this.visitorRows = page.locator("tbody tr");
 this.deleteSuccessMessage = page.locator(".sh-bubble-msg");

}

async navigateToFrontOfficePage(): Promise<void>{
    await this.leftSideMenu_FrontOffice.click()
}

async clickAddVisitorButton(){
    await this.addVisitorButton.click();
}

async addVisitor(visitor: VisitorDetails): Promise<void> {
    await this.clickAddVisitorButton();
    await this.purposeDropdown.selectOption(visitor.purpose);
    await this.name.fill(visitor.name);
    await this.phoneNumber.fill(visitor.phoneNumber);
    await this.idCard.fill(visitor.idCard);
    await this.visitToDropdown.selectOption(visitor.visitTo);
    await this.page.waitForTimeout(1000);
    await this.roleDropdown.click();
    await this.searchBox.pressSequentially(visitor.roleSearchText, { delay: 500 });
    await this.page.locator("li.select2-results__option:visible", {
        hasText: "Sansa Gomez (9008)"
    }).click();
    await this.numberOfPeople.fill(visitor.numberOfPeople);
    await this.datePicker.fill(visitor.date);
    await this.inTime.fill(visitor.inTime);
    await this.outTime.fill(visitor.outTime);
    await this.note.fill(visitor.note);
    await this.upload.setInputFiles(visitor.uploadPath);
    await this.saveButton.click();
}

async deleteVisitorLog(visitorName: string): Promise<void> {
    await this.visitorRows.first().waitFor();

    for (let rowIndex = 0; rowIndex < await this.visitorRows.count(); rowIndex++) {
        const row = this.visitorRows.nth(rowIndex);
        const name = await row.locator("td").nth(1).textContent();

        if (name?.trim() === visitorName) {
            this.page.once("dialog", dialog => dialog.accept());
            await row.locator("[aria-label='Delete']").click();
            await expect(this.deleteSuccessMessage).toContainText("Record Deleted Successfully");
            return;
        }
    }

    throw new Error(`Visitor record "${visitorName}" was not found`);
}


}