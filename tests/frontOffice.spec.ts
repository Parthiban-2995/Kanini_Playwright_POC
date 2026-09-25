import { test } from '../fixtures/frontOfficeFixture';



test.describe.configure({mode:'serial'})
test(" @smoke verify add visitor patient sucessfully ", async ({ pages, frontOfficeData }) => {

    // test.setTimeout(12000) // test timeout 
    // const customerExpect=expect.configure({timeout:60000}) // test level assertion timeout 
    // page.setDefaultTimeout(30000) // test level action timeout 

    await pages.frontOfficePage.navigateToFrontOfficePage();
    await pages.frontOfficePage.addVisitor(frontOfficeData.addVisitor);


})

test("Verify whether visitor is deleted succesfully ", async ({ pages, frontOfficeData }) => {

    await pages.frontOfficePage.navigateToFrontOfficePage();
    await pages.frontOfficePage.deleteVisitorLog(frontOfficeData.deleteVisitor.name);

})