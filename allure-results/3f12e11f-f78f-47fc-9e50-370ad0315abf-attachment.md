# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: appointment.spec.ts >> Add Appointment
- Location: tests\appointment.spec.ts:4:6

# Error details

```
Error: locator.selectOption: Target page, context or browser has been closed
Call log:
  - waiting for locator('select#slot')
    - locator resolved to <select id="slot" name="slot" onchange="validateTime(this)" class="form-control form-control-sm">…</select>
  - attempting select option action
    2 × waiting for element to be visible and enabled
      - did not find some options
    - retrying select option action
    - waiting 20ms
    2 × waiting for element to be visible and enabled
      - did not find some options
    - retrying select option action
      - waiting 100ms
    17 × waiting for element to be visible and enabled
       - did not find some options
     - retrying select option action
       - waiting 500ms

```

# Test source

```ts
  1   | import { expect, type Locator, type Page } from '@playwright/test';
  2   | import { DatePicker } from '../actions/DatePicker';
  3   | 
  4   | export type appointmentDetails = {
  5   |   doctor: string;
  6   |   shift: string;
  7   |   appointmentDate: string;
  8   |   slot: string;
  9   |   appointmentPriority: string;
  10  |   status: string;
  11  |   discountPercentage: string;
  12  |   liveConsultant: string;
  13  |   paymentMode: string;
  14  |   message: string;
  15  |   alternateAddress: string;
  16  | };
  17  | 
  18  | export class AppointmentPage {
  19  |   private readonly page: Page;
  20  |   private readonly appointmentMenu: Locator;
  21  |   private readonly addAppointmentButton: Locator;
  22  |   private readonly patientDropdown: Locator;
  23  |   private readonly patientSearchInput: Locator;
  24  |   private readonly patientResults: Locator;
  25  |   private readonly doctor: Locator;
  26  |   private readonly shift: Locator;
  27  |   private readonly appointmentDate: Locator;
  28  |   private readonly appoitmentDateClsBtn: Locator;
  29  |   private readonly slot: Locator;
  30  |   private readonly appointmentPriority: Locator;
  31  |   private readonly status: Locator;
  32  |   private readonly discountPercentage: Locator;
  33  |   private readonly liveConsultant: Locator;
  34  |   private readonly paymentMode: Locator;
  35  |   private readonly message: Locator;
  36  |   private readonly alternateAddress: Locator;
  37  |   private readonly appoitmentSaveBtn: Locator
  38  |   private readonly successMessage: Locator;
  39  |   private readonly appointmentTable: Locator;
  40  |   private readonly appointmentRows: Locator;
  41  |   private readonly deleteButton: Locator;
  42  | 
  43  |   constructor(page: Page) {
  44  |     this.page = page;
  45  |     this.appointmentMenu = page.locator(
  46  |       '#sh-sidenav a.nav-link[data-tooltip="Appointment"]'
  47  |     );
  48  |     this.addAppointmentButton = page.locator('a.addappointment');
  49  |     this.patientDropdown = page.locator('span[aria-labelledby="select2-addpatient_id-container"]');
  50  |     this.patientSearchInput = page.locator('input.select2-search__field:visible');
  51  |     this.patientResults = page.locator(
  52  |       '#select2-addpatient_id-results li.select2-results__option:visible'
  53  |     );
  54  |     this.doctor = page.locator('#doctorid');
  55  |     this.shift = page.locator('#global_shift');
  56  |     this.appointmentDate = page.locator('input#datetimepicker');
  57  |     this.appoitmentDateClsBtn = page.locator("div[title='Close the picker']")
  58  |     this.slot = page.locator('select#slot');
  59  |     this.appointmentPriority = page.locator('select[name="priority"]').first();
  60  |     this.status = page.locator('#appointment_status');
  61  |     this.discountPercentage = page.locator('#discount_percentage');
  62  |     this.liveConsultant = page.locator('#live_consult');
  63  |     this.paymentMode = page.locator('select[name="payment_mode"]');
  64  |     this.message = page.locator('.col-12 #note');
  65  |     this.alternateAddress = page.locator('textarea[name="custom_fields[appointment][4]"]');
  66  |     this.appoitmentSaveBtn = page.locator("#formaddbtn");
  67  |     this.successMessage = page.locator('.sh-bubble-body .sh-bubble-msg');
  68  |     this.appointmentTable = page.locator('table#DataTables_Table_0');
  69  |     this.appointmentRows = this.appointmentTable.locator('tbody tr');
  70  |     this.deleteButton = page.locator('a[aria-label="Delete"]:visible');
  71  |   }
  72  | 
  73  |   async selectAppointmentMenu(): Promise<void> {
  74  |     await this.appointmentMenu.click();
  75  |   }
  76  | 
  77  |   async clickAddAppointmentButton(): Promise<void> {
  78  |     await this.addAppointmentButton.click();
  79  |   }
  80  | 
  81  |   async selectPatient(patientName: string): Promise<void> {
  82  |     await this.patientDropdown.click();
  83  |     await this.patientSearchInput.waitFor({ state: 'visible' });
  84  |     await this.patientSearchInput.fill(patientName);
  85  | 
  86  |     const matchingPatient = this.patientResults.filter({ hasText: patientName }).first();
  87  |     await matchingPatient.waitFor({ state: 'visible' });
  88  |     await matchingPatient.click();
  89  |   }
  90  | 
  91  |   async addAppointmentDetails(details: appointmentDetails): Promise<void> {
  92  |     await this.doctor.selectOption({ label: details.doctor });
  93  |     await this.shift.selectOption({ label: details.shift });
  94  |     await this.appointmentDate.click();
  95  |     await this.appointmentDate.fill('');
  96  |     await this.appointmentDate.fill(details.appointmentDate);
  97  |     await this.appoitmentDateClsBtn.click();
> 98  |     await this.slot.selectOption({ label: details.slot });
      |                     ^ Error: locator.selectOption: Target page, context or browser has been closed
  99  |     await expect(this.slot.locator('option:checked')).toHaveText(details.slot);
  100 |     await this.appointmentPriority.selectOption({ label: details.appointmentPriority });
  101 |     await this.status.selectOption(details.status);
  102 |     await this.discountPercentage.fill(details.discountPercentage);
  103 |     await this.liveConsultant.selectOption(details.liveConsultant);
  104 |     await this.paymentMode.selectOption(details.paymentMode);
  105 |     await this.message.fill(details.message);
  106 |     await this.alternateAddress.fill(details.alternateAddress);
  107 |     await this.appoitmentSaveBtn.click();
  108 |     await expect(this.successMessage).toBeVisible();
  109 |     await expect(this.successMessage).toHaveText('Record Saved Successfully');
  110 |   }
  111 | 
  112 |   async deleteAppointment(patientName: string, patientId: string): Promise<void> {
  113 |     const appointmentRow = this.appointmentRows
  114 |       .filter({ hasText: `${patientName} (${patientId})` })
  115 |       .first();
  116 | 
  117 |     await expect(appointmentRow).toBeVisible();
  118 |     await expect(appointmentRow.locator('td').first()).toContainText(`${patientName} (${patientId})`);
  119 | 
  120 |     const appointmentActions = appointmentRow.locator('.rowoptionview');
  121 |     await appointmentActions.hover();
  122 |     await appointmentActions.locator('a[aria-label="Show"]').click();
  123 | 
  124 |     await expect(this.deleteButton).toBeVisible();
  125 |     this.page.once('dialog', dialog => dialog.accept());
  126 |     await this.deleteButton.click();
  127 | 
  128 |     await expect(this.successMessage).toBeVisible();
  129 |     await expect(this.successMessage).toHaveText('Record Deleted Successfully');
  130 |   }
  131 | }
  132 | 
```