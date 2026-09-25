# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: appointment.spec.ts >> Add Appointment
- Location: tests\appointment.spec.ts:4:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#select2-addpatient_id-results li.select2-results__option:visible').filter({ hasText: 'SARATH' }).first() to be visible

```

# Page snapshot

```yaml
- generic [ref=f2e1]:
  - navigation [ref=f2e2]:
    - link "Logo Smart Hospital & Research Center" [ref=f2e4] [cursor=pointer]:
      - /url: https://demo.smart-hospital.in/admin/admin/dashboard
      - img "Logo" [ref=f2e5]
      - generic [ref=f2e6]: Smart Hospital & Research Center
    - generic [ref=f2e8]:
      - generic [ref=f2e9]: 
      - textbox "Filter Menu" [ref=f2e11]
      - text: 
    - list [ref=f2e13]:
      - listitem: Core Operations
      - listitem [ref=f2e14]:
        - link " Dashboard" [ref=f2e15] [cursor=pointer]:
          - /url: https://demo.smart-hospital.in/admin/admin/dashboard
          - generic [ref=f2e16]: 
          - generic [ref=f2e17]: Dashboard
      - listitem [ref=f2e18]:
        - link " Patient" [ref=f2e19] [cursor=pointer]:
          - /url: https://demo.smart-hospital.in/admin/admin/search
          - generic [ref=f2e20]: 
          - generic [ref=f2e21]: Patient
      - listitem [ref=f2e22]:
        - link " Billing" [ref=f2e23] [cursor=pointer]:
          - /url: https://demo.smart-hospital.in/admin/bill/dashboard
          - generic [ref=f2e24]: 
          - generic [ref=f2e25]: Billing
      - listitem [ref=f2e26]:
        - link " Appointment" [ref=f2e27] [cursor=pointer]:
          - /url: https://demo.smart-hospital.in/admin/appointment/index
          - generic [ref=f2e28]: 
          - generic [ref=f2e29]: Appointment
      - listitem [ref=f2e30]:
        - link " OPD - Out Patient" [ref=f2e31] [cursor=pointer]:
          - /url: https://demo.smart-hospital.in/admin/patient/search
          - generic [ref=f2e32]: 
          - generic [ref=f2e33]: OPD - Out Patient
      - listitem [ref=f2e34]:
        - link "IPD - In Patient" [ref=f2e35] [cursor=pointer]:
          - /url: https://demo.smart-hospital.in/admin/patient/ipdsearch
          - generic [aria-hidden] [ref=f2e36]: 
      - listitem: Clinical
      - listitem [ref=f2e38]:
        - link " Pharmacy" [ref=f2e39] [cursor=pointer]:
          - /url: https://demo.smart-hospital.in/admin/pharmacy/bill
          - generic [ref=f2e40]: 
          - generic [ref=f2e41]: Pharmacy
      - listitem [ref=f2e42]:
        - link " Pathology" [ref=f2e43] [cursor=pointer]:
          - /url: https://demo.smart-hospital.in/admin/pathology/gettestreportbatch
          - generic [ref=f2e44]: 
          - generic [ref=f2e45]: Pathology
      - listitem [ref=f2e46]:
        - link " Radiology" [ref=f2e47] [cursor=pointer]:
          - /url: https://demo.smart-hospital.in/admin/radio/gettestreportbatch
          - generic [ref=f2e48]: 
          - generic [ref=f2e49]: Radiology
      - listitem [ref=f2e50]:
        - link " Blood Bank" [ref=f2e51] [cursor=pointer]:
          - /url: https://demo.smart-hospital.in/admin/bloodbankstatus/
          - generic [ref=f2e52]: 
          - generic [ref=f2e53]: Blood Bank
      - listitem [ref=f2e54]:
        - link "Ambulance" [ref=f2e55] [cursor=pointer]:
          - /url: https://demo.smart-hospital.in/admin/vehicle/getcallambulance
          - generic [aria-hidden] [ref=f2e56]: 
      - listitem [ref=f2e58]:
        - link " Front Office" [ref=f2e59] [cursor=pointer]:
          - /url: https://demo.smart-hospital.in/admin/visitors
          - generic [ref=f2e60]: 
          - generic [ref=f2e61]: Front Office
      - listitem: Administration
      - listitem [ref=f2e62]:
        - link "Birth & Death Record " [ref=f2e63] [cursor=pointer]:
          - /url: https://demo.smart-hospital.in/admin/birthordeath
          - generic [aria-hidden] [ref=f2e64]: 
          - generic [ref=f2e65]: Birth & Death Record
          - generic [ref=f2e66]: 
        - text:  
      - listitem [ref=f2e67]:
        - button " Multi Branch " [ref=f2e68] [cursor=pointer]:
          - generic [ref=f2e69]: 
          - generic [ref=f2e70]: Multi Branch
          - generic [ref=f2e71]: 
        - text:   
      - listitem [ref=f2e72]:
        - link " Human Resource" [ref=f2e73] [cursor=pointer]:
          - /url: https://demo.smart-hospital.in/admin/staff
          - generic [ref=f2e74]: 
          - generic [ref=f2e75]: Human Resource
      - listitem [ref=f2e76]:
        - link "QR Code Attendance " [ref=f2e77] [cursor=pointer]:
          - /url: https://demo.smart-hospital.in/admin/qrattendance/setting/index
          - generic [aria-hidden] [ref=f2e78]: 
          - generic [ref=f2e79]: QR Code Attendance
          - generic [ref=f2e80]: 
        - text:  
      - listitem [ref=f2e81]:
        - link " Duty Roster" [ref=f2e82] [cursor=pointer]:
          - /url: https://demo.smart-hospital.in/admin/dutyroster/roster_report
          - generic [ref=f2e83]: 
          - generic [ref=f2e84]: Duty Roster
      - listitem [ref=f2e85]:
        - link " Annual Calendar" [ref=f2e86] [cursor=pointer]:
          - /url: https://demo.smart-hospital.in/admin/holiday/index
          - generic [ref=f2e87]: 
          - generic [ref=f2e88]: Annual Calendar
      - listitem [ref=f2e89]:
        - link " Referral" [ref=f2e90] [cursor=pointer]:
          - /url: https://demo.smart-hospital.in/admin/referral/payment
          - generic [ref=f2e91]: 
          - generic [ref=f2e92]: Referral
      - listitem [ref=f2e93]:
        - link " TPA Management" [ref=f2e94] [cursor=pointer]:
          - /url: https://demo.smart-hospital.in/admin/tpamanagement
          - generic [ref=f2e95]: 
          - generic [ref=f2e96]: TPA Management
      - listitem [ref=f2e97]:
        - link " Finance " [ref=f2e98] [cursor=pointer]:
          - /url: "#"
          - generic [ref=f2e99]: 
          - generic [ref=f2e100]: Finance
          - generic [ref=f2e101]: 
        - text:  
      - listitem: Tools & Content
      - listitem [ref=f2e102]:
        - link " Survey Forms " [ref=f2e103] [cursor=pointer]:
          - /url: https://demo.smart-hospital.in/admin/survey
          - generic [ref=f2e104]: 
          - generic [ref=f2e105]: Survey Forms
          - generic [ref=f2e106]: 
        - text:  
      - listitem [ref=f2e107]:
        - link " Messaging" [ref=f2e108] [cursor=pointer]:
          - /url: https://demo.smart-hospital.in/admin/notification
          - generic [ref=f2e109]: 
          - generic [ref=f2e110]: Messaging
      - listitem [ref=f2e111]:
        - link " Inventory" [ref=f2e112] [cursor=pointer]:
          - /url: https://demo.smart-hospital.in/admin/itemstock
          - generic [ref=f2e113]: 
          - generic [ref=f2e114]: Inventory
      - listitem
      - listitem [ref=f2e115]:
        - button " Download Center " [ref=f2e116] [cursor=pointer]:
          - generic [ref=f2e117]: 
          - generic [ref=f2e118]: Download Center
          - generic [ref=f2e119]: 
        - text:   
      - listitem [ref=f2e120]:
        - button " Certificate " [ref=f2e121] [cursor=pointer]:
          - generic [ref=f2e122]: 
          - generic [ref=f2e123]: Certificate
          - generic [ref=f2e124]: 
        - text:   
      - listitem [ref=f2e125]:
        - link " Front CMS" [ref=f2e126] [cursor=pointer]:
          - /url: https://demo.smart-hospital.in/admin/front/page
          - generic [ref=f2e127]: 
          - generic [ref=f2e128]: Front CMS
      - listitem [ref=f2e129]:
        - button " Live Consultation " [ref=f2e130] [cursor=pointer]:
          - generic [ref=f2e131]: 
          - generic [ref=f2e132]: Live Consultation
          - generic [ref=f2e133]: 
        - text:  
      - listitem: Reports & Setup
      - listitem [ref=f2e134]:
        - button " Reports " [ref=f2e135] [cursor=pointer]:
          - generic [ref=f2e136]: 
          - generic [ref=f2e137]: Reports
          - generic [ref=f2e138]: 
        - text:                 
      - listitem [ref=f2e139]:
        - link " Setup " [ref=f2e140] [cursor=pointer]:
          - /url: "#"
          - generic [ref=f2e141]: 
          - generic [ref=f2e142]: Setup
          - generic [ref=f2e143]: 
        - text:                   
  - banner [ref=f2e144]:
    - button "Toggle sidebar" [ref=f2e145] [cursor=pointer]:
      - generic [ref=f2e146]: 
    - generic [ref=f2e147] [cursor=pointer]:
      - generic [ref=f2e148]: 
      - text: Appointment
    - search [ref=f2e150]:
      - generic [ref=f2e151]:
        - textbox [ref=f2e152]:
          - /placeholder: Search By Patient Name
        - button [ref=f2e153] [cursor=pointer]
    - generic [ref=f2e157]:
      - button "Quick Add" [ref=f2e158] [cursor=pointer]:
        - generic [ref=f2e159]: 
      - text:                
    - generic [ref=f2e160]:
      - generic [ref=f2e161]:
        - text:    
        - generic [ref=f2e162]:
          - button [ref=f2e163] [cursor=pointer]:
            - img "US" [ref=f2e164]
          - text: 
        - button "" [ref=f2e165] [cursor=pointer]
        - link "" [ref=f2e167] [cursor=pointer]:
          - /url: https://demo.smart-hospital.in/admin/chat
        - link "" [ref=f2e170] [cursor=pointer]:
          - /url: https://demo.smart-hospital.in/admin/calendar/events
        - generic [ref=f2e172]:
          - button " 2" [ref=f2e173] [cursor=pointer]:
            - generic [ref=f2e174]: 
            - generic: "2"
          - text:  
        - link " 99+" [ref=f2e175] [cursor=pointer]:
          - /url: https://demo.smart-hospital.in/admin/systemnotification
          - generic [ref=f2e176]: 
          - generic: 99+
      - generic [ref=f2e177]:
        - link "Jason Admin " [ref=f2e178] [cursor=pointer]:
          - /url: "#"
          - generic [ref=f2e179]:
            - generic [ref=f2e180]: Jason
            - generic [ref=f2e181]: Admin
          - generic [ref=f2e182]: 
        - text:    
  - main [ref=f2e183]:
    - generic [ref=f2e186]:
      - generic [ref=f2e187]:
        - tablist [ref=f2e188]:
          - tab "Today Appointment" [selected] [ref=f2e189] [cursor=pointer]
          - tab "Upcoming Appointment" [ref=f2e190] [cursor=pointer]
          - tab "Old Appointment" [ref=f2e191] [cursor=pointer]
        - generic [ref=f2e192]:
          - generic [ref=f2e193] [cursor=pointer]:
            - generic [ref=f2e194]: 
            - text: Add Appointment
          - link " Doctor Wise" [ref=f2e195] [cursor=pointer]:
            - /url: https://demo.smart-hospital.in/admin/onlineappointment/patientschedule
            - generic [ref=f2e196]: 
            - text: Doctor Wise
          - link " Queue" [ref=f2e197] [cursor=pointer]:
            - /url: https://demo.smart-hospital.in/admin/onlineappointment/patientqueue
            - generic [ref=f2e198]: 
            - text: Queue
      - generic [ref=f2e199]:
        - tabpanel [ref=f2e200]:
          - generic [ref=f2e203]:
            - generic [ref=f2e204]:
              - searchbox [ref=f2e207]
              - generic [ref=f2e208]:
                - combobox [ref=f2e211] [cursor=pointer]:
                  - option "100" [selected]
                  - option "All"
                - generic [ref=f2e212]:
                  - link "" [ref=f2e213] [cursor=pointer]:
                    - /url: "#"
                  - link "" [ref=f2e216] [cursor=pointer]:
                    - /url: "#"
                  - link "" [ref=f2e219] [cursor=pointer]:
                    - /url: "#"
                  - link "" [ref=f2e222] [cursor=pointer]:
                    - /url: "#"
                  - link "" [ref=f2e225] [cursor=pointer]:
                    - /url: "#"
            - text: 
            - grid [ref=f2e229]:
              - rowgroup [ref=f2e230]:
                - row [ref=f2e231]:
                  - 'columnheader "Patient Name: activate to sort column ascending" [ref=f2e232] [cursor=pointer]': Patient Name ↕
                  - 'columnheader "Appointment No: activate to sort column ascending" [ref=f2e233] [cursor=pointer]': Appointment No ↕
                  - 'columnheader "Date: activate to sort column ascending" [ref=f2e234] [cursor=pointer]': Date ↕
                  - 'columnheader "Phone: activate to sort column ascending" [ref=f2e235] [cursor=pointer]': Phone ↕
                  - 'columnheader "Gender: activate to sort column ascending" [ref=f2e236] [cursor=pointer]': Gender ↕
                  - 'columnheader "Doctor: activate to sort column ascending" [ref=f2e237] [cursor=pointer]': Doctor ↕
                  - 'columnheader "Source: activate to sort column ascending" [ref=f2e238] [cursor=pointer]': Source ↕
                  - 'columnheader "Priority: activate to sort column ascending" [ref=f2e239] [cursor=pointer]': Priority ↕
                  - 'columnheader "Live Consultant: activate to sort column ascending" [ref=f2e240] [cursor=pointer]': Live Consultant ↕
                  - 'columnheader "Alternate Address: activate to sort column ascending" [ref=f2e241] [cursor=pointer]': Alternate Address ↕
                  - 'columnheader "Created By: activate to sort column ascending" [ref=f2e242] [cursor=pointer]': Created By ↕
                  - 'columnheader "Status: activate to sort column ascending" [ref=f2e243] [cursor=pointer]': Status ↕
                  - 'columnheader "Fees (₹): activate to sort column ascending" [ref=f2e244] [cursor=pointer]': Fees (₹) ↕
                  - 'columnheader "Discount (%): activate to sort column ascending" [ref=f2e245] [cursor=pointer]': Discount (%) ↕
                  - columnheader "Paid (₹)" [ref=f2e246]
              - rowgroup [ref=f2e247]:
                - row [ref=f2e248]:
                  - gridcell [ref=f2e249]:
                    - link "MAIREENA GOMAZ (1005)" [ref=f2e250] [cursor=pointer]:
                      - /url: https://demo.smart-hospital.in/admin/patient/profile/1005
                  - gridcell [ref=f2e251]:
                    - link "APPNO7837" [ref=f2e252] [cursor=pointer]:
                      - /url: https://demo.smart-hospital.in/admin/patient/profile/1005
                  - gridcell "24/09/2026 02:23 PM" [ref=f2e253]
                  - gridcell "9807567456" [ref=f2e254]
                  - gridcell "Female" [ref=f2e255]
                  - gridcell "Sonia Bush (9002)" [ref=f2e256]
                  - gridcell "Offline" [ref=f2e257]
                  - gridcell "Normal" [ref=f2e258]
                  - gridcell "No" [ref=f2e259]
                  - gridcell [ref=f2e260]
                  - gridcell "Super Admin (9001)" [ref=f2e261]
                  - gridcell "Approved" [ref=f2e262]
                  - gridcell "147.60" [ref=f2e264]
                  - gridcell "0.00 (0.00 %)" [ref=f2e265]
                  - gridcell "177.12 Show Print Reschedule" [ref=f2e266]:
                    - text: "177.12"
                    - generic:
                      - link "Show":
                        - /url: "#"
                        - generic: 
                      - link "Print":
                        - /url: "#"
                        - generic: 
                      - link "Reschedule":
                        - /url: "#"
                        - generic: 
            - status [ref=f2e267]: "Records: 1 to 1 of 1"
            - list [ref=f2e269]:
              - listitem [ref=f2e270]:
                - link "" [disabled]
              - listitem [ref=f2e271] [cursor=pointer]:
                - link "1" [ref=f2e272]:
                  - /url: "#"
              - listitem [ref=f2e273]:
                - link "" [disabled]
        - text:       ↕ ↕ ↕ ↕ ↕ ↕ ↕ ↕ ↕ ↕ ↕ ↕ ↕ ↕                                                ↕ ↕ ↕ ↕ ↕ ↕ ↕ ↕ ↕ ↕ ↕ ↕ ↕ ↕                                                                                                                                                                                                                                                                                                              
    - dialog [ref=f2e274]:
      - generic [ref=f2e276]:
        - generic [ref=f2e277]:
          - heading "Add Appointment" [level=5] [ref=f2e278]
          - generic [ref=f2e279]:
            - generic [ref=f2e280]:
              - combobox [aria-hidden] [ref=f2e281]
              - combobox [expanded] [ref=f2e284] [cursor=pointer]:
                - tree [ref=f2e285]:
                  - treeitem "No results found" [ref=f2e286]
            - generic [ref=f2e287] [cursor=pointer]:
              - generic [ref=f2e288]: 
              - generic [ref=f2e289]: New Patient
          - button "Close" [ref=f2e290] [cursor=pointer]
        - generic [ref=f2e293]:
          - generic [ref=f2e294]: Appointment Details
          - generic [ref=f2e297]:
            - generic [ref=f2e298]:
              - generic [ref=f2e299]: Doctor
              - text: "*"
              - combobox [aria-hidden] [ref=f2e300]
              - combobox "Select" [ref=f2e303] [cursor=pointer]
            - generic [ref=f2e305]:
              - generic [ref=f2e306]: Doctor Fees (₹)
              - text: "*"
              - textbox [ref=f2e307]
            - generic [ref=f2e308]:
              - generic [ref=f2e309]: Shift
              - text: "*"
              - combobox [aria-hidden] [ref=f2e310]
              - combobox "Select" [ref=f2e313] [cursor=pointer]
            - generic [ref=f2e315]:
              - generic [ref=f2e316]: Appointment Date
              - text: "*"
              - textbox [ref=f2e317] [cursor=pointer]
            - generic [ref=f2e318]:
              - generic [ref=f2e319]: Slot
              - text: "*"
              - combobox [ref=f2e320]:
                - option "Select" [selected]
            - generic [ref=f2e321]:
              - generic [ref=f2e322]: Appointment Priority
              - combobox [aria-hidden] [ref=f2e323]
              - combobox "Normal" [ref=f2e326] [cursor=pointer]
            - generic [ref=f2e328]:
              - generic [ref=f2e329]: Status *
              - combobox [ref=f2e330]:
                - option "Select" [selected]
                - option "Pending"
                - option "Approved"
                - option "Cancel"
            - generic [ref=f2e331]:
              - generic [ref=f2e332]: Discount Percentage
              - textbox [ref=f2e333]
            - generic [ref=f2e334]:
              - generic [ref=f2e335]: Live Consultant (On Video Conference)
              - text: "*"
              - combobox [ref=f2e336]:
                - option "No" [selected]
                - option "Yes"
            - generic [ref=f2e337]:
              - generic [ref=f2e338]: Payment Mode
              - combobox [ref=f2e339]:
                - option "Cash" [selected]
                - option "Cheque"
                - option "Transfer to Bank Account"
                - option "UPI"
                - option "Online"
                - option "Other"
            - generic [ref=f2e340]:
              - generic [ref=f2e341]: Message
              - textbox [ref=f2e342]
            - text: 
            - generic [ref=f2e345]:
              - generic [ref=f2e346]: Alternate Address
              - textbox "Alternate Address" [ref=f2e347]
        - generic [ref=f2e348]:
          - button "Cancel" [ref=f2e349] [cursor=pointer]
          - button " Save & Print" [ref=f2e350] [cursor=pointer]:
            - generic [ref=f2e351]: 
            - text: Save & Print
          - button " Save" [ref=f2e352] [cursor=pointer]:
            - generic [ref=f2e353]: 
            - text: Save
      - textbox [active] [ref=f2e356]: SARATH
    - text:       
  - text: 
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
> 88  |     await matchingPatient.waitFor({ state: 'visible' });
      |                           ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
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
  121 |     await expect(appointmentRow).toBeVisible();
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