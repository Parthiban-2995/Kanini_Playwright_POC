import { test as base } from './authenticatedFixture';
import type { appointmentDetails } from '../pageobjects/AppointmentPage';

type AppointmentData = {
  patientName: string;
  patientId: string;
  appointmentDetails: appointmentDetails;
};

type AppointmentFixtures = {
  appointmentData: AppointmentData;
};

export const test = base.extend<AppointmentFixtures>({
  appointmentData: async ({}, use) => {
    await use({
      patientName: 'SARATH',
      patientId: '1234',
      appointmentDetails: {
        doctor: 'Sansa Gomez (9008)',
        shift: 'Evening',
        appointmentDate: '25/09/2026 12:43 PM',
        appointmentPriority: 'Normal',
        status: 'approved',
        discountPercentage: '10',
        liveConsultant: 'no',
        paymentMode: 'Cash',
        message: 'Appointment message',
        alternateAddress: 'PATIENT_ADDRESS'
      }
    });
  },
});

export { expect } from '@playwright/test';
