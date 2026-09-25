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
                  - 'columnheader "Fees ($): activate to sort column ascending" [ref=f2e244] [cursor=pointer]': Fees ($) ↕
                  - 'columnheader "Discount (%): activate to sort column ascending" [ref=f2e245] [cursor=pointer]': Discount (%) ↕
                  - columnheader "Paid ($)" [ref=f2e246]
              - rowgroup [ref=f2e247]:
                - row [ref=f2e248]:
                  - gridcell [ref=f2e249]:
                    - link "Nishant Kadakia (980)" [ref=f2e250] [cursor=pointer]:
                      - /url: https://demo.smart-hospital.in/admin/patient/profile/980
                  - gridcell [ref=f2e251]:
                    - link "APPNO7810" [ref=f2e252] [cursor=pointer]:
                      - /url: https://demo.smart-hospital.in/admin/patient/profile/980
                  - gridcell "25/09/2026 03:30 PM" [ref=f2e253]
                  - gridcell "94564651414" [ref=f2e254]
                  - gridcell "Male" [ref=f2e255]
                  - gridcell "Sansa Gomez (9008)" [ref=f2e256]
                  - gridcell "Offline" [ref=f2e257]
                  - gridcell "Normal" [ref=f2e258]
                  - gridcell "No" [ref=f2e259]
                  - gridcell [ref=f2e260]
                  - gridcell [ref=f2e261]
                  - gridcell "Approved" [ref=f2e262]
                  - gridcell "147.60" [ref=f2e264]
                  - gridcell "0.00 (0.00 %)" [ref=f2e265]
                  - gridcell "147.60 Show Print Reschedule" [ref=f2e266]:
                    - text: "147.60"
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
                - row [ref=f2e267]:
                  - gridcell [ref=f2e268]:
                    - link "Harpreet Varkey (884)" [ref=f2e269] [cursor=pointer]:
                      - /url: https://demo.smart-hospital.in/admin/patient/profile/884
                  - gridcell [ref=f2e270]:
                    - link "APPNO7809" [ref=f2e271] [cursor=pointer]:
                      - /url: https://demo.smart-hospital.in/admin/patient/profile/884
                  - gridcell "25/09/2026 01:30 PM" [ref=f2e272]
                  - gridcell "9522545121" [ref=f2e273]
                  - gridcell "Male" [ref=f2e274]
                  - gridcell "Reyan Jain (9011)" [ref=f2e275]
                  - gridcell "Offline" [ref=f2e276]
                  - gridcell "Normal" [ref=f2e277]
                  - gridcell "No" [ref=f2e278]
                  - gridcell [ref=f2e279]
                  - gridcell [ref=f2e280]
                  - gridcell "Approved" [ref=f2e281]
                  - gridcell "147.60" [ref=f2e283]
                  - gridcell "0.00 (0.00 %)" [ref=f2e284]
                  - gridcell "147.60 Show Print Reschedule" [ref=f2e285]:
                    - text: "147.60"
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
                - row [ref=f2e286]:
                  - gridcell [ref=f2e287]:
                    - link "Marcus Jacobsen (1141)" [ref=f2e288] [cursor=pointer]:
                      - /url: https://demo.smart-hospital.in/admin/patient/profile/1141
                  - gridcell [ref=f2e289]:
                    - link "APPNO7808" [ref=f2e290] [cursor=pointer]:
                      - /url: https://demo.smart-hospital.in/admin/patient/profile/1141
                  - gridcell "25/09/2026 12:30 PM" [ref=f2e291]
                  - gridcell "089978968" [ref=f2e292]
                  - gridcell "Male" [ref=f2e293]
                  - gridcell "Amit Singh (9009)" [ref=f2e294]
                  - gridcell "Offline" [ref=f2e295]
                  - gridcell "Normal" [ref=f2e296]
                  - gridcell "No" [ref=f2e297]
                  - gridcell [ref=f2e298]
                  - gridcell [ref=f2e299]
                  - gridcell "Approved" [ref=f2e300]
                  - gridcell "147.60" [ref=f2e302]
                  - gridcell "0.00 (0.00 %)" [ref=f2e303]
                  - gridcell "147.60 Show Print Reschedule" [ref=f2e304]:
                    - text: "147.60"
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
                - row [ref=f2e305]:
                  - gridcell [ref=f2e306]:
                    - link "Aaron Hardie (1145)" [ref=f2e307] [cursor=pointer]:
                      - /url: https://demo.smart-hospital.in/admin/patient/profile/1145
                  - gridcell [ref=f2e308]:
                    - link "APPNO7826" [ref=f2e309] [cursor=pointer]:
                      - /url: https://demo.smart-hospital.in/admin/patient/profile/1145
                  - gridcell "25/09/2026 12:00 PM" [ref=f2e310]
                  - gridcell "8009078678" [ref=f2e311]
                  - gridcell "Male" [ref=f2e312]
                  - gridcell "Amit Singh (9009)" [ref=f2e313]
                  - gridcell "Online" [ref=f2e314]
                  - gridcell "Normal" [ref=f2e315]
                  - gridcell [ref=f2e316]
                  - gridcell [ref=f2e317]
                  - gridcell [ref=f2e318]
                  - gridcell "Approved" [ref=f2e319]
                  - gridcell "123.00" [ref=f2e321]
                  - gridcell "0.00 (0.00 %)" [ref=f2e322]
                  - gridcell "147.60 Show Print Reschedule" [ref=f2e323]:
                    - text: "147.60"
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
                - row [ref=f2e324]:
                  - gridcell [ref=f2e325]:
                    - link "William Thorby (1138)" [ref=f2e326] [cursor=pointer]:
                      - /url: https://demo.smart-hospital.in/admin/patient/profile/1138
                  - gridcell [ref=f2e327]:
                    - link "APPNO7819" [ref=f2e328] [cursor=pointer]:
                      - /url: https://demo.smart-hospital.in/admin/patient/profile/1138
                  - gridcell "25/09/2026 11:15 AM" [ref=f2e329]
                  - gridcell "0890797877" [ref=f2e330]
                  - gridcell "Male" [ref=f2e331]
                  - gridcell "Sansa Gomez (9008)" [ref=f2e332]
                  - gridcell "Online" [ref=f2e333]
                  - gridcell "Normal" [ref=f2e334]
                  - gridcell [ref=f2e335]
                  - gridcell [ref=f2e336]
                  - gridcell [ref=f2e337]
                  - gridcell "Approved" [ref=f2e338]
                  - gridcell "123.00" [ref=f2e340]
                  - gridcell "0.00 (0.00 %)" [ref=f2e341]
                  - gridcell "147.60 Show Print Reschedule" [ref=f2e342]:
                    - text: "147.60"
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
                - row [ref=f2e343]:
                  - gridcell [ref=f2e344]:
                    - link "Jonathan Hibbins (1107)" [ref=f2e345] [cursor=pointer]:
                      - /url: https://demo.smart-hospital.in/admin/patient/profile/1107
                  - gridcell [ref=f2e346]:
                    - link "APPNO7830" [ref=f2e347] [cursor=pointer]:
                      - /url: https://demo.smart-hospital.in/admin/patient/profile/1107
                  - gridcell "25/09/2026 11:15 AM" [ref=f2e348]
                  - gridcell "9086788567" [ref=f2e349]
                  - gridcell "Male" [ref=f2e350]
                  - gridcell "Reyan Jain (9011)" [ref=f2e351]
                  - gridcell "Online" [ref=f2e352]
                  - gridcell "Normal" [ref=f2e353]
                  - gridcell [ref=f2e354]
                  - gridcell [ref=f2e355]
                  - gridcell [ref=f2e356]
                  - gridcell "Approved" [ref=f2e357]
                  - gridcell "123.00" [ref=f2e359]
                  - gridcell "0.00 (0.00 %)" [ref=f2e360]
                  - gridcell "147.60 Show Print Reschedule" [ref=f2e361]:
                    - text: "147.60"
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
            - status [ref=f2e362]: "Records: 1 to 6 of 6"
            - list [ref=f2e364]:
              - listitem [ref=f2e365]:
                - link "" [disabled]
              - listitem [ref=f2e366] [cursor=pointer]:
                - link "1" [ref=f2e367]:
                  - /url: "#"
              - listitem [ref=f2e368]:
                - link "" [disabled]
        - text:       ↕ ↕ ↕ ↕ ↕ ↕ ↕ ↕ ↕ ↕ ↕ ↕ ↕ ↕                              ↕ ↕ ↕ ↕ ↕ ↕ ↕ ↕ ↕ ↕ ↕ ↕ ↕ ↕                                                                                                                                                                                                                                                                                                              
    - dialog [ref=f2e369]:
      - generic [ref=f2e371]:
        - generic [ref=f2e372]:
          - heading "Add Appointment" [level=5] [ref=f2e373]
          - generic [ref=f2e374]:
            - generic [ref=f2e375]:
              - combobox [aria-hidden] [ref=f2e376]
              - combobox [expanded] [ref=f2e379] [cursor=pointer]:
                - tree [ref=f2e380]:
                  - treeitem "No results found" [ref=f2e381]
            - generic [ref=f2e382] [cursor=pointer]:
              - generic [ref=f2e383]: 
              - generic [ref=f2e384]: New Patient
          - button "Close" [ref=f2e385] [cursor=pointer]
        - generic [ref=f2e388]:
          - generic [ref=f2e389]: Appointment Details
          - generic [ref=f2e392]:
            - generic [ref=f2e393]:
              - generic [ref=f2e394]: Doctor
              - text: "*"
              - combobox [aria-hidden] [ref=f2e395]
              - combobox "Select" [ref=f2e398] [cursor=pointer]
            - generic [ref=f2e400]:
              - generic [ref=f2e401]: Doctor Fees ($)
              - text: "*"
              - textbox [ref=f2e402]
            - generic [ref=f2e403]:
              - generic [ref=f2e404]: Shift
              - text: "*"
              - combobox [aria-hidden] [ref=f2e405]
              - combobox "Select" [ref=f2e408] [cursor=pointer]
            - generic [ref=f2e410]:
              - generic [ref=f2e411]: Appointment Date
              - text: "*"
              - textbox [ref=f2e412] [cursor=pointer]
            - generic [ref=f2e413]:
              - generic [ref=f2e414]: Slot
              - text: "*"
              - combobox [ref=f2e415]:
                - option "Select" [selected]
            - generic [ref=f2e416]:
              - generic [ref=f2e417]: Appointment Priority
              - combobox [aria-hidden] [ref=f2e418]
              - combobox "Normal" [ref=f2e421] [cursor=pointer]
            - generic [ref=f2e423]:
              - generic [ref=f2e424]: Status *
              - combobox [ref=f2e425]:
                - option "Select" [selected]
                - option "Pending"
                - option "Approved"
                - option "Cancel"
            - generic [ref=f2e426]:
              - generic [ref=f2e427]: Discount Percentage
              - textbox [ref=f2e428]
            - generic [ref=f2e429]:
              - generic [ref=f2e430]: Live Consultant (On Video Conference)
              - text: "*"
              - combobox [ref=f2e431]:
                - option "No" [selected]
                - option "Yes"
            - generic [ref=f2e432]:
              - generic [ref=f2e433]: Payment Mode
              - combobox [ref=f2e434]:
                - option "Cash" [selected]
                - option "Cheque"
                - option "Transfer to Bank Account"
                - option "UPI"
                - option "Online"
                - option "Other"
            - generic [ref=f2e435]:
              - generic [ref=f2e436]: Message
              - textbox [ref=f2e437]
            - text: 
            - generic [ref=f2e440]:
              - generic [ref=f2e441]: Alternate Address
              - textbox "Alternate Address" [ref=f2e442]
        - generic [ref=f2e443]:
          - button "Cancel" [ref=f2e444] [cursor=pointer]
          - button " Save & Print" [ref=f2e445] [cursor=pointer]:
            - generic [ref=f2e446]: 
            - text: Save & Print
          - button " Save" [ref=f2e447] [cursor=pointer]:
            - generic [ref=f2e448]: 
            - text: Save
      - textbox [active] [ref=f2e451]: SARATH
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
  8   |   appointmentPriority: string;
  9   |   status: string;
  10  |   discountPercentage: string;
  11  |   liveConsultant: string;
  12  |   paymentMode: string;
  13  |   message: string;
  14  |   alternateAddress: string;
  15  | };
  16  | 
  17  | export class AppointmentPage {
  18  |   private readonly page: Page;
  19  |   private readonly appointmentMenu: Locator;
  20  |   private readonly addAppointmentButton: Locator;
  21  |   private readonly patientDropdown: Locator;
  22  |   private readonly patientSearchInput: Locator;
  23  |   private readonly patientResults: Locator;
  24  |   private readonly doctor: Locator;
  25  |   private readonly shift: Locator;
  26  |   private readonly appointmentDate: Locator;
  27  |   private readonly appoitmentDateClsBtn: Locator;
  28  |   private readonly slot: Locator;
  29  |   private readonly appointmentPriority: Locator;
  30  |   private readonly status: Locator;
  31  |   private readonly discountPercentage: Locator;
  32  |   private readonly liveConsultant: Locator;
  33  |   private readonly paymentMode: Locator;
  34  |   private readonly message: Locator;
  35  |   private readonly alternateAddress: Locator;
  36  |   private readonly appoitmentSaveBtn: Locator
  37  |   private readonly successMessage: Locator;
  38  |   private readonly appointmentTable: Locator;
  39  |   private readonly appointmentRows: Locator;
  40  |   private readonly deleteButton: Locator;
  41  | 
  42  |   constructor(page: Page) {
  43  |     this.page = page;
  44  |     this.appointmentMenu = page.locator(
  45  |       '#sh-sidenav a.nav-link[data-tooltip="Appointment"]'
  46  |     );
  47  |     this.addAppointmentButton = page.locator('a.addappointment');
  48  |     this.patientDropdown = page.locator('span[aria-labelledby="select2-addpatient_id-container"]');
  49  |     this.patientSearchInput = page.locator('input.select2-search__field:visible');
  50  |     this.patientResults = page.locator(
  51  |       '#select2-addpatient_id-results li.select2-results__option:visible'
  52  |     );
  53  |     this.doctor = page.locator('#doctorid');
  54  |     this.shift = page.locator('#global_shift');
  55  |     this.appointmentDate = page.locator('input#datetimepicker');
  56  |     this.appoitmentDateClsBtn = page.locator("div[title='Close the picker']")
  57  |     this.slot = page.locator('select#slot');
  58  |     this.appointmentPriority = page.locator('select[name="priority"]').first();
  59  |     this.status = page.locator('#appointment_status');
  60  |     this.discountPercentage = page.locator('#discount_percentage');
  61  |     this.liveConsultant = page.locator('#live_consult');
  62  |     this.paymentMode = page.locator('select[name="payment_mode"]');
  63  |     this.message = page.locator('.col-12 #note');
  64  |     this.alternateAddress = page.locator('textarea[name="custom_fields[appointment][4]"]');
  65  |     this.appoitmentSaveBtn = page.locator("#formaddbtn");
  66  |     this.successMessage = page.locator('.sh-bubble-body .sh-bubble-msg');
  67  |     this.appointmentTable = page.locator('table#DataTables_Table_0');
  68  |     this.appointmentRows = this.appointmentTable.locator('tbody tr');
  69  |     this.deleteButton = page.locator('a[aria-label="Delete"]:visible');
  70  |   }
  71  | 
  72  |   async selectAppointmentMenu(): Promise<void> {
  73  |     await this.appointmentMenu.click();
  74  |   }
  75  | 
  76  |   async clickAddAppointmentButton(): Promise<void> {
  77  |     await this.addAppointmentButton.click();
  78  |   }
  79  | 
  80  |   async selectPatient(patientName: string): Promise<void> {
  81  |     await this.patientDropdown.click();
  82  |     await this.patientSearchInput.waitFor({ state: 'visible' });
  83  |     await this.patientSearchInput.fill(patientName);
  84  | 
  85  |     const matchingPatient = this.patientResults.filter({ hasText: patientName }).first();
> 86  |     await matchingPatient.waitFor({ state: 'visible' });
      |                           ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  87  |     await matchingPatient.click();
  88  |   }
  89  | 
  90  |   async addAppointmentDetails(details: appointmentDetails): Promise<void> {
  91  |     await this.doctor.selectOption({ label: details.doctor });
  92  |     await this.shift.selectOption({ label: details.shift });
  93  |     await this.appointmentDate.click();
  94  |     await expect(this.appointmentDate).not.toHaveValue('');
  95  |     await expect(this.appoitmentDateClsBtn).toBeVisible();
  96  |     await this.appoitmentDateClsBtn.click();
  97  |     await this.page.waitForTimeout(1000);
  98  |     const availableSlots = this.slot.locator('option:not([value=""])');
  99  |     await expect.poll(async () => {
  100 |       if (await availableSlots.count() === 0) {
  101 |         return '';
  102 |       }
  103 | 
  104 |       const slotLabel = (await availableSlots.first().textContent())?.trim();
  105 |       if (!slotLabel) {
  106 |         return '';
  107 |       }
  108 | 
  109 |       await this.slot.selectOption({ label: slotLabel });
  110 |       await this.page.waitForTimeout(500);
  111 |       return this.slot.inputValue();
  112 |     }, { timeout: 10000 }).not.toBe('');
  113 |     await this.appointmentPriority.selectOption({ label: details.appointmentPriority });
  114 |     await this.status.selectOption(details.status);
  115 |     await this.discountPercentage.fill(details.discountPercentage);
  116 |     await this.liveConsultant.selectOption(details.liveConsultant);
  117 |     await this.paymentMode.selectOption(details.paymentMode);
  118 |     await this.message.fill(details.message);
  119 |     await this.alternateAddress.fill(details.alternateAddress);
  120 |     await this.appoitmentSaveBtn.click();
  121 |     await expect(this.successMessage).toBeVisible();
  122 |     await expect(this.successMessage).toHaveText('Record Saved Successfully');
  123 |   }
  124 | 
  125 |   async deleteAppointment(patientName: string, patientId: string): Promise<void> {
  126 |     const appointmentRow = this.appointmentRows
  127 |       .filter({ hasText: `${patientName} (${patientId})` })
  128 |       .first();
  129 | 
  130 |     await expect(appointmentRow).toBeVisible();
  131 |     await expect(appointmentRow.locator('td').first()).toContainText(`${patientName} (${patientId})`);
  132 | 
  133 |     const appointmentActions = appointmentRow.locator('.rowoptionview');
  134 |     await appointmentActions.hover();
  135 |     await appointmentActions.locator('a[aria-label="Show"]').click();
  136 | 
  137 |     await expect(this.deleteButton).toBeVisible();
  138 |     this.page.once('dialog', dialog => dialog.accept());
  139 |     await this.deleteButton.click();
  140 | 
  141 |     await expect(this.successMessage).toBeVisible();
  142 |     await expect(this.successMessage).toHaveText('Record Deleted Successfully');
  143 |   }
  144 | }
  145 | 
```