import { type Locator, type Page } from '@playwright/test';
import { DatePicker } from '../actions/DatePicker';

export type patientDetails = {
name: string
guardianName: string
phone: number
gender: string
DateOfBirth: string 
bloodGroup: string
martialStatus: string
email: string
address: string
nationIdentificationMunber: number 
patientPhoto: string


}

export class PatientPage {
  private readonly page: Page;
  private readonly patientButton: Locator;
  private readonly patientName: Locator;
  private readonly guardianName: Locator;
private readonly phone: Locator;
  private readonly gender: Locator;
  private readonly dateOfBirth: Locator;
  private readonly datePicker: DatePicker;
  private readonly bloodGroup: Locator;
  private readonly maritalStatus: Locator;
 private readonly email: Locator;
  private readonly address: Locator;
  private readonly nationalIdentificationNumber: Locator;
  private readonly patientPhoto: Locator;
  private readonly addPatientButton: Locator;
  private readonly savebutton:Locator
  

  constructor(page: Page) {
    this.page = page;
    this.patientButton = page.locator('#sh-sidenav li.nav-item a.nav-link[data-tooltip="Patient"]');
    this.addPatientButton = page.locator('.card .newpatient');
    this.patientName = page.locator('#name');
    this.guardianName = page.locator("input.form-control[name='guardian_name']").last();
   this.phone = page.locator('#number');
    this.gender = page.locator('#addformgender');
    this.dateOfBirth = page.locator('#birth_date');
    this.datePicker = new DatePicker(page);
    this.bloodGroup = page.locator('select[name="blood_group"]').last();
    this.maritalStatus = page.locator('select[name="marital_status"]').last();
   this.email = page.locator('#addformemail');
    this.address = page.locator('input[name="address"]').last();
    this.nationalIdentificationNumber = page.locator('input[name="identification_number"]').last();
    this.patientPhoto = page.locator('input[type="file"]#file');
    this.savebutton=page.locator("#formaddpabtn")
  }

  async selectPatientMenu(): Promise<void> {
    await this.patientButton.click();
  }

    async clickAddPatientButton(): Promise<void> {
    await this.addPatientButton.click();
  }

    async addPatientDetails(details: patientDetails): Promise<void> {
      await this.patientName.fill(details.name);
      await this.guardianName.fill(details.guardianName);
    //  await this.phone.fill(String(details.phone));
      await this.gender.selectOption(details.gender);
      await this.dateOfBirth.click();
      await this.datePicker.selectDOB(details.DateOfBirth);
      await this.bloodGroup.selectOption(details.bloodGroup);
      await this.maritalStatus.selectOption(details.martialStatus);
     // await this.email.fill(details.email);
      await this.address.fill(details.address);
      await this.nationalIdentificationNumber.fill(String(details.nationIdentificationMunber));
      await this.patientPhoto.setInputFiles(details.patientPhoto);
      await this.savebutton.click()
    }



}