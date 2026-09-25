# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: appointment.spec.ts >> Add Appointment
- Location: tests\appointment.spec.ts:4:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: locator('table#DataTables_Table_0').locator('tbody tr').filter({ hasText: 'SARATH (1234)' }).first()
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('table#DataTables_Table_0').locator('tbody tr').filter({ hasText: 'SARATH (1234)' }).first() with timeout 30000ms
  - waiting for locator('table#DataTables_Table_0').locator('tbody tr').filter({ hasText: 'SARATH (1234)' }).first()
    - waiting for "https://demo.smart-hospital.in/admin/onlineappointment/patientqueue" navigation to finish...
    - navigated to "https://demo.smart-hospital.in/admin/onlineappointment/patientqueue"
  - Test timeout of 30000ms exceeded.

```

```yaml
- navigation:
  - link "Logo Smart Hospital & Research Center":
    - /url: https://demo.smart-hospital.in/admin/admin/dashboard
    - img "Logo"
    - text: Smart Hospital & Research Center
  - text: 
  - textbox "Filter Menu"
  - list:
    - listitem: Core Operations
    - listitem:
      - link " Dashboard":
        - /url: https://demo.smart-hospital.in/admin/admin/dashboard
    - listitem:
      - link " Patient":
        - /url: https://demo.smart-hospital.in/admin/admin/search
    - listitem:
      - link " Billing":
        - /url: https://demo.smart-hospital.in/admin/bill/dashboard
    - listitem:
      - link " Appointment":
        - /url: https://demo.smart-hospital.in/admin/appointment/index
    - listitem:
      - link " OPD - Out Patient":
        - /url: https://demo.smart-hospital.in/admin/patient/search
    - listitem:
      - link "IPD - In Patient":
        - /url: https://demo.smart-hospital.in/admin/patient/ipdsearch
    - listitem: Clinical
    - listitem:
      - link " Pharmacy":
        - /url: https://demo.smart-hospital.in/admin/pharmacy/bill
    - listitem:
      - link " Pathology":
        - /url: https://demo.smart-hospital.in/admin/pathology/gettestreportbatch
    - listitem:
      - link " Radiology":
        - /url: https://demo.smart-hospital.in/admin/radio/gettestreportbatch
    - listitem:
      - link " Blood Bank":
        - /url: https://demo.smart-hospital.in/admin/bloodbankstatus/
    - listitem:
      - link "Ambulance":
        - /url: https://demo.smart-hospital.in/admin/vehicle/getcallambulance
    - listitem:
      - link " Front Office":
        - /url: https://demo.smart-hospital.in/admin/visitors
    - listitem: Administration
    - listitem:
      - link "Birth & Death Record ":
        - /url: https://demo.smart-hospital.in/admin/birthordeath
    - listitem:
      - button " Multi Branch "
    - listitem:
      - link " Human Resource":
        - /url: https://demo.smart-hospital.in/admin/staff
    - listitem:
      - link "QR Code Attendance ":
        - /url: https://demo.smart-hospital.in/admin/qrattendance/setting/index
    - listitem:
      - link " Duty Roster":
        - /url: https://demo.smart-hospital.in/admin/dutyroster/roster_report
    - listitem:
      - link " Annual Calendar":
        - /url: https://demo.smart-hospital.in/admin/holiday/index
    - listitem:
      - link " Referral":
        - /url: https://demo.smart-hospital.in/admin/referral/payment
    - listitem:
      - link " TPA Management":
        - /url: https://demo.smart-hospital.in/admin/tpamanagement
    - listitem:
      - link " Finance ":
        - /url: "#"
    - listitem: Tools & Content
    - listitem:
      - link " Survey Forms ":
        - /url: https://demo.smart-hospital.in/admin/survey
    - listitem:
      - link " Messaging":
        - /url: https://demo.smart-hospital.in/admin/notification
    - listitem:
      - link " Inventory":
        - /url: https://demo.smart-hospital.in/admin/itemstock
    - listitem
    - listitem:
      - button " Download Center "
    - listitem:
      - button " Certificate "
    - listitem:
      - link " Front CMS":
        - /url: https://demo.smart-hospital.in/admin/front/page
    - listitem:
      - button " Live Consultation "
    - listitem: Reports & Setup
    - listitem:
      - button " Reports "
    - listitem:
      - link " Setup ":
        - /url: "#"
- banner:
  - button "Toggle sidebar": 
  - text:  Appointment
  - search:
    - textbox:
      - /placeholder: Search By Patient Name
    - button:
      - img
  - button "Quick Add": 
  - button "US":
    - img "US"
  - button ""
  - link "":
    - /url: https://demo.smart-hospital.in/admin/chat
  - link "":
    - /url: https://demo.smart-hospital.in/admin/calendar/events
  - button " 2"
  - link " 99+":
    - /url: https://demo.smart-hospital.in/admin/systemnotification
  - link "Jason Admin ":
    - /url: "#"
- main:
  - heading "Patient Queue" [level=3]
  - text: Doctor *
  - combobox:
    - option "Select"
    - option "Amit Singh (9009)"
    - option "Reyan Jain (9011)"
    - option "Sansa Gomez (9008)" [selected]
    - option "Sonia Bush (9002)"
  - text: Shift *
  - combobox:
    - option "Select" [selected]
    - option "Morning"
    - option "Evening"
  - text: Date *
  - textbox
  - text:  Slot
  - combobox "Slot":
    - option "Select" [selected]
  - button "Search"
```

# Test source

```ts
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
  91  |   async addAppointmentDetails(
  92  |     details: appointmentDetails,
  93  |     patientName: string,
  94  |     patientId: string
  95  |   ): Promise<void> {
  96  |     await this.doctor.selectOption({ label: details.doctor });
  97  |     await this.shift.selectOption({ label: details.shift });
  98  |     await this.appointmentDate.click();
  99  |     await this.appointmentDate.fill('');
  100 |     await this.appointmentDate.fill(details.appointmentDate);
  101 |     await this.appoitmentDateClsBtn.click();
  102 |     await this.slot.locator(`option[value="${details.slot}"]`).waitFor({ state: 'attached' });
  103 |     await this.slot.selectOption({ value: details.slot });
  104 |     await expect(this.slot).toHaveValue(details.slot);
  105 |     await this.appointmentPriority.selectOption({ label: details.appointmentPriority });
  106 |     await this.status.selectOption(details.status);
  107 |     await this.discountPercentage.fill(details.discountPercentage);
  108 |     await this.liveConsultant.selectOption(details.liveConsultant);
  109 |     await this.paymentMode.selectOption(details.paymentMode);
  110 |     await this.message.fill(details.message);
  111 |     await this.alternateAddress.fill(details.alternateAddress);
  112 |     await expect(this.slot).toHaveValue(details.slot);
  113 |     await this.appoitmentSaveBtn.click();
  114 |     await expect(this.successMessage).toBeVisible();
  115 |     await expect(this.successMessage).toHaveText('Record Saved Successfully');
  116 | 
  117 |     const appointmentRow = this.appointmentRows
  118 |       .filter({ hasText: `${patientName} (${patientId})` })
  119 |       .first();
  120 |     await expect(this.appointmentTable).toBeVisible();
> 121 |     await expect(appointmentRow).toBeVisible();
      |                                  ^ Error: expect(locator).toBeVisible() failed
  122 |   }
  123 | 
  124 |   async deleteAppointment(patientName: string, patientId: string): Promise<void> {
  125 |     const appointmentRow = this.appointmentRows
  126 |       .filter({ hasText: `${patientName} (${patientId})` })
  127 |       .first();
  128 | 
  129 |     await expect(appointmentRow).toBeVisible();
  130 |     await expect(appointmentRow.locator('td').first()).toContainText(`${patientName} (${patientId})`);
  131 | 
  132 |     const appointmentActions = appointmentRow.locator('.rowoptionview');
  133 |     await appointmentActions.hover();
  134 |     await appointmentActions.locator('a[aria-label="Show"]').click();
  135 | 
  136 |     await expect(this.deleteButton).toBeVisible();
  137 |     this.page.once('dialog', dialog => dialog.accept());
  138 |     await this.deleteButton.click();
  139 | 
  140 |     await expect(this.successMessage).toBeVisible();
  141 |     await expect(this.successMessage).toHaveText('Record Deleted Successfully');
  142 |   }
  143 | }
  144 | 
```