import { expect, type Locator, type Page } from '@playwright/test';
import { DatePicker } from '../actions/DatePicker';

export type appointmentDetails = {
  doctor: string;
  shift: string;
  appointmentPriority: string;
  status: string;
  discountPercentage: string;
  liveConsultant: string;
  paymentMode: string;
  message: string;
  alternateAddress: string;
};

export class AppointmentPage {
  private readonly page: Page;
  private readonly appointmentMenu: Locator;
  private readonly addAppointmentButton: Locator;
  private readonly patientDropdown: Locator;
  private readonly patientSearchInput: Locator;
  private readonly patientResults: Locator;
  private readonly doctor: Locator;
  private readonly shift: Locator;
  private readonly appointmentDate: Locator;
  private readonly appoitmentDateClsBtn: Locator;
  private readonly slot: Locator;
  private readonly appointmentPriority: Locator;
  private readonly status: Locator;
  private readonly discountPercentage: Locator;
  private readonly liveConsultant: Locator;
  private readonly paymentMode: Locator;
  private readonly message: Locator;
  private readonly alternateAddress: Locator;
  private readonly appoitmentSaveBtn: Locator
  private readonly successMessage: Locator;
  private readonly appointmentTable: Locator;
  private readonly appointmentRows: Locator;
  private readonly deleteButton: Locator;
  private readonly detailPatientName: Locator;

  constructor(page: Page) {
    this.page = page;
    this.appointmentMenu = page.locator(
      '#sh-sidenav a.nav-link[data-tooltip="Appointment"]'
    );
    this.addAppointmentButton = page.locator('a.addappointment');
    this.patientDropdown = page.locator('span[aria-labelledby="select2-addpatient_id-container"]');
    this.patientSearchInput = page.locator('input.select2-search__field:visible');
    this.patientResults = page.locator(
      '#select2-addpatient_id-results li.select2-results__option:visible'
    );
    this.doctor = page.locator('#doctorid');
    this.shift = page.locator('#global_shift');
    this.appointmentDate = page.locator('input#datetimepicker');
    this.appoitmentDateClsBtn = page.locator("div[title='Close the picker']")
    this.slot = page.locator('select#slot');
    this.appointmentPriority = page.locator('select[name="priority"]').first();
    this.status = page.locator('#appointment_status');
    this.discountPercentage = page.locator('#discount_percentage');
    this.liveConsultant = page.locator('#live_consult');
    this.paymentMode = page.locator('select[name="payment_mode"]');
    this.message = page.locator('.col-12 #note');
    this.alternateAddress = page.locator('textarea[name="custom_fields[appointment][4]"]');
    this.appoitmentSaveBtn = page.locator("#formaddbtn");
    this.successMessage = page.locator('.sh-bubble-body .sh-bubble-msg');
    this.appointmentTable = page.locator('table#DataTables_Table_0');
    this.appointmentRows = this.appointmentTable.locator('tbody tr');
    this.deleteButton = page.locator('#viewModal a[onclick^="delete_record("]:visible');
    this.detailPatientName = page.locator('#patient_names');
  }

  async selectAppointmentMenu(): Promise<void> {
    await this.appointmentMenu.click();
  }

  async clickAddAppointmentButton(): Promise<void> {
    await this.addAppointmentButton.click();
  }

  async selectPatient(patientName: string): Promise<void> {
    await this.patientDropdown.click();
    await this.patientSearchInput.waitFor({ state: 'visible' });
    await this.patientSearchInput.fill(patientName);

    const matchingPatient = this.patientResults.filter({ hasText: patientName }).first();
    await matchingPatient.waitFor({ state: 'visible' });
    await matchingPatient.click();
  }

  async addAppointmentDetails(details: appointmentDetails): Promise<void> {
    await this.doctor.selectOption({ label: details.doctor });
    await this.shift.selectOption({ label: details.shift });
    await this.appointmentDate.click();
    await expect(this.appointmentDate).not.toHaveValue('');
    await expect(this.appoitmentDateClsBtn).toBeVisible();
    await this.appoitmentDateClsBtn.click();
    await this.page.waitForTimeout(1000);
    const availableSlots = this.slot.locator('option:not([value=""])');
    await expect.poll(async () => {
      if (await availableSlots.count() === 0) {
        return '';
      }

      const slotLabel = (await availableSlots.first().textContent())?.trim();
      if (!slotLabel) {
        return '';
      }

      await this.slot.selectOption({ label: slotLabel });
      await this.page.waitForTimeout(500);
      return this.slot.inputValue();
    }, { timeout: 10000 }).not.toBe('');
    await this.appointmentPriority.selectOption({ label: details.appointmentPriority });
    await this.status.selectOption(details.status);
    await this.discountPercentage.fill(details.discountPercentage);
    await this.liveConsultant.selectOption(details.liveConsultant);
    await this.paymentMode.selectOption(details.paymentMode);
    await this.message.fill(details.message);
    await this.alternateAddress.fill(details.alternateAddress);
    await this.appoitmentSaveBtn.click();
    await expect(this.successMessage).toBeVisible();
    await expect(this.successMessage).toHaveText('Record Saved Successfully');
  }

  async deleteAppointment(patientName: string, patientId: string): Promise<void> {
    const appointmentRow = this.appointmentRows
      .filter({ hasText: `${patientName} (${patientId})` })
      .first();

    await expect(appointmentRow).toBeVisible();
    await expect(appointmentRow.locator('td').first()).toContainText(`${patientName} (${patientId})`);

    const appointmentDetailsCell = appointmentRow.locator('td').last();
    await appointmentDetailsCell.scrollIntoViewIfNeeded();
    await appointmentDetailsCell.hover();
    await appointmentDetailsCell.locator('a[aria-label="Show"]').click();

    await expect(this.detailPatientName).toHaveText(`${patientName} (${patientId})`);
    await expect(this.deleteButton).toBeVisible();
    this.page.once('dialog', dialog => dialog.accept());
    await this.deleteButton.click();

    await expect(this.successMessage).toBeVisible();
    await expect(this.successMessage).toHaveText('Record Deleted Successfully');
  }
}
