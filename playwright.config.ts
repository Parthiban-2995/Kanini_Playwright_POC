import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 0,
  workers : 1 ,
  
  expect:{
  timeout: 30000
  
  },
reporter: [
    ['html'],['line'],
    ['allure-playwright']
],
  projects: [
    {
      name: 'chrome',
      use: {
        browserName: 'chromium',
        channel: 'chrome',
        headless: false,
        actionTimeout: 30000,
        navigationTimeout: 30000,
        screenshot: 'on',
        trace: 'retain-on-failure'
        // viewport: {widht : 720 , height 720 }
      }
    },
    // {
    //   name: 'edge',
    //   use: {
    //     browserName: 'chromium',
    //     channel: 'msedge',
    //     headless: false,
    //     actionTimeout: 30000,
    //     navigationTimeout: 30000,
    //     screenshot: 'on',
    //     trace: 'retain-on-failure',
    //     // ignoreHTTPSErrors: true,
    //     // permissions:['Geolocation']
    //   }
    // },
    // {
    //   name: 'iphone14',
    //   use: {
    //     ...devices['iPhone 14'],
    //     headless: false,
    //     actionTimeout: 30000,
    //     navigationTimeout: 30000,
    //     screenshot: 'on',
    //     trace: 'retain-on-failure',
    //     video : 'retain-on-failure'
    //   }
    // },
    //     {
    //   name: 'webkit',
    //   use: {
    //     headless: false,
    //     actionTimeout: 30000,
    //     navigationTimeout: 30000,
    //     screenshot: 'on',
    //     trace: 'retain-on-failure'
    //   }
   // }
  ]
  
  

 


});
