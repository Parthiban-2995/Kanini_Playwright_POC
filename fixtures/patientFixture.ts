import { test as base } from './authenticatedFixture';
import type { patientDetails } from '../pageobjects/PatientPage';
import path from 'path';

type PatientFixtures = {
  patientData: patientDetails;
};

export const test = base.extend<PatientFixtures>({
  patientData: async ({}, use) => {
    await use({
      name: 'SARATH',
      guardianName: 'SURS',
      phone: 123456789,
      gender: 'Male',
      DateOfBirth: '10/01/1995',
      bloodGroup: 'A+',
      martialStatus: 'married',
    email: 'patient@gmail.com',
      address: 'PATIENT_ADDRESS',
      nationIdentificationMunber: 123456789,
      patientPhoto: path.join(
                          process.cwd(),
                          "test-data",
                          "OIP.jpeg"
                        )
    });
  },
});

export { expect } from '@playwright/test';


