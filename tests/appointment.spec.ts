import { test } from '../fixtures/appointmentFixture';

test.describe.configure({mode:'serial'})
test.only('Add Appointment', async ({ pages, appointmentData }) => {

  
  await pages.appointmentPage.selectAppointmentMenu();
  await pages.appointmentPage.clickAddAppointmentButton();
  await pages.appointmentPage.selectPatient(appointmentData.patientName);
  await pages.appointmentPage.addAppointmentDetails(appointmentData.appointmentDetails);
});


test('Delete appointment', async ({ pages, appointmentData }) => {
  await pages.appointmentPage.selectAppointmentMenu();
  await pages.appointmentPage.deleteAppointment(appointmentData.patientName, appointmentData.patientId);
});
