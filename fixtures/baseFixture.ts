import { test as base } from '@playwright/test';
import { PageManager } from '../utils/PageManager';

type MyFixtures = {
    pages: PageManager;
};

export const test = base.extend<MyFixtures>({
    pages: async ({ page }, use) => {
	await use(new PageManager(page));
    },
});