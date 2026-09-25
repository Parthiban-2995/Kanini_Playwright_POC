import { type Page } from '@playwright/test';

export class DatePicker {
  constructor(private readonly page: Page) {}

  async selectDOB(date: string): Promise<void> {
    const [dayText, monthText, yearText] = date.split('/');
    const day = Number(dayText);
    const month = Number(monthText);
    const year = Number(yearText);

    if (!dayText || !monthText || !yearText || !Number.isInteger(day) || !Number.isInteger(month) || !Number.isInteger(year)) {
      throw new Error(`Invalid date '${date}'. Expected DD/MM/YYYY.`);
    }

    if (day < 1 || day > 31 || month < 1 || month > 12 || year < 1) {
      throw new Error(`Invalid date '${date}'. Expected DD/MM/YYYY.`);
    }

    await this.page.locator('.picker-switch[title="Select Month"]').click();
    await this.page.locator('.picker-switch[title="Select Year"]').click();

    const previousButton = this.page.locator('[data-action="previous"]');
    const nextButton = this.page.locator('[data-action="next"]');
    const visibleYears = this.page.locator('.date-container-years [data-action="selectYear"]');
    let yearSelected = false;

    for (let attempt = 0; attempt < 120; attempt++) {
      const years = await visibleYears.evaluateAll((elements) =>
        elements.map((element) => Number(element.getAttribute('data-value')))
      );

      if (years.includes(year)) {
        await visibleYears.filter({ hasText: String(year) }).click();
        yearSelected = true;
        break;
      }

      const firstYear = Math.min(...years);
      const lastYear = Math.max(...years);

      if (year < firstYear) {
        await previousButton.click();
      } else if (year > lastYear) {
        await nextButton.click();
        
      } else {
        throw new Error(`Year '${year}' is not available in the datepicker.`);
      }
    }

    if (!yearSelected) {
      throw new Error(`Unable to find year '${year}' in the datepicker.`);
    }

    await this.page
      .locator(`.date-container-months [data-action="selectMonth"][data-value="${month - 1}"]`)
      .click();

    const formattedDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    await this.page
      .locator(`.date-container-days [data-action="selectDay"][data-value="${formattedDate}"]`)
      .click();
  }
}
