import { test as base } from './authenticatedFixture';

type SurveyFormData = {
  formTitle: string;
  description: string;
  fieldLabel: string;
};

type SurveyFormFixtures = {
  surveyFormData: SurveyFormData;
};

export const test = base.extend<SurveyFormFixtures>({
  surveyFormData: async ({}, use) => {
    await use({
      formTitle: `Patient Feedback ${Date.now()}`,
      description: 'Patient feedback form',
      fieldLabel: 'Patient Feedback',
    });
  },
});
