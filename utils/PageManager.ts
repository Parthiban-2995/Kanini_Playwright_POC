import { LoginPage } from '../pageobjects/LoginPage';
import { DashboardPage } from '../pageobjects/DashboardPage';
import { FrontOfficePage } from '../pageobjects/FrontOfficePage';
import { Page } from '@playwright/test';
import { PatientPage } from '../pageobjects/PatientPage';
import { AppointmentPage } from '../pageobjects/AppointmentPage';
import { SurveyFormPage } from '../pageobjects/SurveyFormPage';

export class PageManager {
  readonly loginPage: LoginPage;
  readonly dashboardPage: DashboardPage;
  readonly frontOfficePage: FrontOfficePage;
  readonly patientPage: PatientPage;
  readonly appointmentPage: AppointmentPage;
  readonly surveyFormPage: SurveyFormPage;

  constructor(page: Page) {
    this.loginPage = new LoginPage(page);
    this.dashboardPage = new DashboardPage(page);
    this.frontOfficePage = new FrontOfficePage(page);
    this.patientPage=new PatientPage(page);
    this.appointmentPage = new AppointmentPage(page);
    this.surveyFormPage = new SurveyFormPage(page);
  }
}
