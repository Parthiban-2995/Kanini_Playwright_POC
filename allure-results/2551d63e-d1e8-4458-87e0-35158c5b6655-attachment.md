# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: appointment.spec.ts >> Delete appointment
- Location: tests\appointment.spec.ts:12:5

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
  - tablist:
    - tab "Today Appointment" [selected]
    - tab "Upcoming Appointment"
    - tab "Old Appointment"
  - text:  Add Appointment
  - link " Doctor Wise":
    - /url: https://demo.smart-hospital.in/admin/onlineappointment/patientschedule
  - link " Queue":
    - /url: https://demo.smart-hospital.in/admin/onlineappointment/patientqueue
  - tabpanel:
    - searchbox
    - combobox:
      - option "100" [selected]
      - option "All"
    - link "":
      - /url: "#"
    - link "":
      - /url: "#"
    - link "":
      - /url: "#"
    - link "":
      - /url: "#"
    - link "":
      - /url: "#"
    - grid:
      - rowgroup:
        - 'row "Patient Name: activate to sort column ascending Appointment No: activate to sort column ascending Date: activate to sort column ascending Phone: activate to sort column ascending Gender: activate to sort column ascending Doctor: activate to sort column ascending Source: activate to sort column ascending Priority: activate to sort column ascending Live Consultant: activate to sort column ascending Alternate Address: activate to sort column ascending Created By: activate to sort column ascending Status: activate to sort column ascending Fees ($): activate to sort column ascending Discount (%): activate to sort column ascending Paid ($)"':
          - 'columnheader "Patient Name: activate to sort column ascending"': Patient Name ↕
          - 'columnheader "Appointment No: activate to sort column ascending"': Appointment No ↕
          - 'columnheader "Date: activate to sort column ascending"': Date ↕
          - 'columnheader "Phone: activate to sort column ascending"': Phone ↕
          - 'columnheader "Gender: activate to sort column ascending"': Gender ↕
          - 'columnheader "Doctor: activate to sort column ascending"': Doctor ↕
          - 'columnheader "Source: activate to sort column ascending"': Source ↕
          - 'columnheader "Priority: activate to sort column ascending"': Priority ↕
          - 'columnheader "Live Consultant: activate to sort column ascending"': Live Consultant ↕
          - 'columnheader "Alternate Address: activate to sort column ascending"': Alternate Address ↕
          - 'columnheader "Created By: activate to sort column ascending"': Created By ↕
          - 'columnheader "Status: activate to sort column ascending"': Status ↕
          - 'columnheader "Fees ($): activate to sort column ascending"': Fees ($) ↕
          - 'columnheader "Discount (%): activate to sort column ascending"': Discount (%) ↕
          - columnheader "Paid ($)"
      - rowgroup:
        - row "No data available in table  Add new record or search with different criteria.":
          - gridcell "No data available in table  Add new record or search with different criteria.":
            - text: No data available in table
            - img
            - text:  Add new record or search with different criteria.
    - status: "Records: 0 to 0 of 0"
    - list:
      - listitem:
        - link "" [disabled]
      - listitem:
        - link "" [disabled]
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
  37  |   private readonly appoitmentSaveBtn:Locator
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
  57  |    // this.datePicker = new DatePicker(page);
  58  |    this.appoitmentDateClsBtn=page.locator("div[title='Close the picker']")
  59  |     this.slot = page.locator('select#slot');
  60  |     this.appointmentPriority = page.locator('select[name="priority"]').first();
  61  |     this.status = page.locator('#appointment_status');
  62  |     this.discountPercentage = page.locator('#discount_percentage');
  63  |     this.liveConsultant = page.locator('#live_consult');
  64  |     this.paymentMode = page.locator('select[name="payment_mode"]');
  65  |     this.message = page.locator('.col-12 #note');
  66  |     this.alternateAddress = page.locator('textarea[name="custom_fields[appointment][4]"]');
  67  |     this.appoitmentSaveBtn=page.locator("#formaddbtn");
  68  |     this.successMessage = page.locator('.sh-bubble-body .sh-bubble-msg');
  69  |     this.appointmentTable = page.locator('table#DataTables_Table_0');
  70  |     this.appointmentRows = this.appointmentTable.locator('tbody tr');
  71  |     this.deleteButton = page.locator('a[aria-label="Delete"]:visible');
  72  |   }
  73  | 
  74  |   async selectAppointmentMenu(): Promise<void> {
  75  |     await this.appointmentMenu.click();
  76  |   }
  77  | 
  78  |   async clickAddAppointmentButton(): Promise<void> {
  79  |     await this.addAppointmentButton.click();
  80  |   }
  81  | 
  82  |   async selectPatient(patientName: string): Promise<void> {
  83  |     await this.patientDropdown.click();
  84  |     await this.patientSearchInput.waitFor({ state: 'visible' });
  85  |     await this.patientSearchInput.fill(patientName);
  86  | 
  87  |     const matchingPatient = this.patientResults.filter({ hasText: patientName }).first();
  88  |     await matchingPatient.waitFor({ state: 'visible' });
  89  |     await matchingPatient.click();
  90  |   }
  91  | 
  92  |   async addAppointmentDetails(details: appointmentDetails): Promise<void> {
  93  |     await this.doctor.selectOption({ label: details.doctor });
  94  |     await this.shift.selectOption({ label: details.shift });
  95  |     await this.appointmentDate.click();
  96  |     await this.appointmentDate.fill('');
  97  |     await this.appointmentDate.fill(details.appointmentDate);
  98  |     await this.appointmentDate.press('Tab');
  99  |     await this.appoitmentDateClsBtn.click();
  100 |     await this.slot.locator(`option[value="${details.slot}"]`).waitFor({ state: 'attached' });
  101 |     await this.slot.selectOption({ value: details.slot });
  102 |     await expect(this.slot).toHaveValue(details.slot);
  103 |     await this.appointmentPriority.selectOption({ label: details.appointmentPriority });
  104 |     await this.status.selectOption(details.status);
  105 |     await this.discountPercentage.fill(details.discountPercentage);
  106 |     await this.liveConsultant.selectOption(details.liveConsultant);
  107 |     await this.paymentMode.selectOption(details.paymentMode);
  108 |     await this.message.fill(details.message);
  109 |     await this.alternateAddress.fill(details.alternateAddress);
  110 |     await expect(this.slot).toHaveValue(details.slot);
  111 |     await this.appoitmentSaveBtn.click();
  112 |     await expect(this.successMessage).toBeVisible();
  113 |     await expect(this.successMessage).toHaveText('Record Saved Successfully');
  114 |   }
  115 | 
  116 |   async deleteAppointment(patientName: string, patientId: string): Promise<void> {
  117 |     const appointmentRow = this.appointmentRows
  118 |       .filter({ hasText: `${patientName} (${patientId})` })
  119 |       .first();
  120 | 
> 121 |     await expect(appointmentRow).toBeVisible();
      |                                  ^ Error: expect(locator).toBeVisible() failed
  122 |     await expect(appointmentRow.locator('td').first()).toContainText(`${patientName} (${patientId})`);
  123 | 
  124 |     const appointmentActions = appointmentRow.locator('.rowoptionview');
  125 |     await appointmentActions.hover();
  126 |     await appointmentActions.locator('a[aria-label="Show"]').click();
  127 | 
  128 |     await expect(this.deleteButton).toBeVisible();
  129 |     this.page.once('dialog', dialog => dialog.accept());
  130 |     await this.deleteButton.click();
  131 | 
  132 |     await expect(this.successMessage).toBeVisible();
  133 |     await expect(this.successMessage).toHaveText('Record Deleted Successfully');
  134 |   }
  135 | }
  136 | 
```