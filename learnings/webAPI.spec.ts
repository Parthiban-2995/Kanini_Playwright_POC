import { expect, test } from '@playwright/test';
import { environment } from '../utils/env';
import { loginViaApi } from '../utils/apiAuth';

test('login through the API and print the ci_session cookie', async () => {
    const apiContext = await loginViaApi();
    try {
        const { cookies } = await apiContext.storageState();
        const sessionCookie = cookies.find((cookie) => cookie.name === 'ci_session');
        expect(sessionCookie).toBeDefined();
        console.log(`ci_session=${sessionCookie!.value}`);
    } finally {
        await apiContext.dispose();
    }
});

test('use API login cookie to access the dashboard', async ({ page }) => {
    const apiContext = await loginViaApi();
    try {
        const { cookies } = await apiContext.storageState();
        const sessionCookie = cookies.find((cookie) => cookie.name === 'ci_session');
        expect(sessionCookie).toBeDefined();

        // Transfer the actual HTTP cookie to the browser before navigating.
        await page.context().addCookies([sessionCookie!]);
        const dashboardUrl = new URL('/admin/admin/dashboard', environment.baseUrl).toString();
        await page.goto(dashboardUrl);

        await expect(page).toHaveTitle('Dashboard · Smart Hospital');
        const dashboardText = page.locator('.dash-alerts a');
        await dashboardText.nth(1).waitFor();
        console.log(await dashboardText.allTextContents());
    } finally {
        await apiContext.dispose();
    }
});






