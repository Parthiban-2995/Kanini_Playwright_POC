import { expect, type Locator, type Page } from '@playwright/test';

export class SurveyFormPage {
  private readonly page: Page;
  private readonly surveyFormsMenu: Locator;
  private readonly surveyFormsSubmenu: Locator;
  private readonly createSurveyFormButton: Locator;
  private readonly saveAsDraftButton: Locator;
  private readonly warningMessage: Locator;
  private readonly surveyFormsTitle: Locator;
  private readonly formTitle: Locator;
  private readonly description: Locator;
  private readonly patientAudience: Locator;
  private readonly addFieldButton: Locator;
  private readonly fieldLabel: Locator;
  private readonly saveFieldButton: Locator;
  private readonly publishButton: Locator;
  private readonly savedMessage: Locator;
  private readonly publishedLabel: Locator;

  constructor(page: Page) {
    this.page = page;
    this.surveyFormsMenu = page.locator(
      '#sh-sidenav a.nav-link[data-tooltip="Survey Forms"]'
    );
    this.surveyFormsSubmenu = page.locator(
      '#sub-11 a.nav-link[href$="/admin/survey"]'
    );
    this.createSurveyFormButton = page.locator("a[href*='survey/create']");
    this.saveAsDraftButton = page.locator(".cf-panel .cf-btn-save");
    this.warningMessage = page.getByText(
      'Please select at least one target audience.',
      { exact: true }
    );
    this.surveyFormsTitle = page.locator('h3.card-title.titlefix.mb-0');
    this.formTitle = page.locator('.form-group input[name="title"]');
    this.description = page.locator('.form-group textarea[name="description"]');
    this.patientAudience = page.locator('#aud_patient');
    this.addFieldButton = page.locator('#btn-open-add-field');
    this.fieldLabel = page.locator('#f_label');
    this.saveFieldButton = page.locator('#btn-save-field');
    this.publishButton = page.locator('.cf-panel .cf-btn-action');
    this.savedMessage = page.getByText('Record Saved Successfully', { exact: true });
    this.publishedLabel = page.locator('span.label.label-success').filter({ hasText: 'Published' });
  }

  async navigateToSurveyFormsPage(): Promise<void> {
    await this.surveyFormsMenu.click();
    await this.surveyFormsSubmenu.click();
    await expect(this.surveyFormsTitle).toHaveText('Survey Forms');
  }

  async verifyMandatoryAudienceWarning(formTitle: string): Promise<void> {
    await this.createSurveyFormButton.click();
    await expect(this.page).toHaveURL(/\/admin\/survey\/create$/);
    await this.formTitle.fill(formTitle);
    await this.saveAsDraftButton.click();
    await expect(this.warningMessage).toBeVisible();
  }

  async publishPatientFeedbackForm(formTitle: string, description: string, fieldLabel: string): Promise<void> {
    await this.createSurveyFormButton.click();
    await expect(this.page).toHaveURL(/\/admin\/survey\/create$/);
    await this.formTitle.fill(formTitle);
    await this.description.fill(description);
    await this.patientAudience.check();
    await this.saveAsDraftButton.click();
    await expect(this.savedMessage).toBeVisible();
    await expect(this.savedMessage).toHaveText('Record Saved Successfully');
    await this.addFieldButton.click();
    await this.fieldLabel.fill(fieldLabel);
    await this.saveFieldButton.click();
    await this.publishButton.click();
    await expect(this.publishedLabel).toBeVisible();
    await expect(this.publishedLabel).toContainText('Published');
  }
}
