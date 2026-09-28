import fs from 'node:fs';
import path from 'node:path';

export default function globalSetup() {
  const allureResultsDirectory = path.resolve('allure-results');
  const allureReportDirectory = path.resolve('allure-report');

  fs.rmSync(allureResultsDirectory, { recursive: true, force: true });
  fs.mkdirSync(allureResultsDirectory, { recursive: true });
  fs.rmSync(allureReportDirectory, { recursive: true, force: true });
}