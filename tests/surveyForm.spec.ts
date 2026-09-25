import { test } from '../fixtures/surveyFormFixture';

test('Verify survey form mandatory audience warning', async ({ pages, surveyFormData }) => {
  await pages.surveyFormPage.navigateToSurveyFormsPage();
  await pages.surveyFormPage.verifyMandatoryAudienceWarning(surveyFormData.formTitle);
});

test('Publish patient survey form', async ({ pages, surveyFormData }) => {
  await pages.surveyFormPage.navigateToSurveyFormsPage();
  await pages.surveyFormPage.publishPatientFeedbackForm(
    surveyFormData.formTitle,
    surveyFormData.description,
    surveyFormData.fieldLabel
  );
});