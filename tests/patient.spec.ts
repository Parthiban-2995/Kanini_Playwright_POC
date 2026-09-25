import { test } from '../fixtures/patientFixture';

test('Add Patient', async ({ pages, patientData }) => {
  await pages.patientPage.selectPatientMenu();
  await pages.patientPage.clickAddPatientButton();
  await pages.patientPage.addPatientDetails(patientData);
});