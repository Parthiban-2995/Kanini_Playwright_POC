import { expect, request, test } from '@playwright/test';
import { environment } from '../utils/env';

async function loginViaApi() {
    const apiContext = await request.newContext();
    try {
        await apiContext.get(environment.baseUrl);

        const loginResponse = await apiContext.post(environment.baseUrl, {
            form: {
                username: environment.username,
                password: environment.password,
            },
        });

        expect(loginResponse.ok()).toBeTruthy();

        const { cookies } = await apiContext.storageState();
        const sessionCookie = cookies.find((cookie) => cookie.name === 'ci_session');
        expect(sessionCookie, 'Expected the login response to set a ci_session cookie').toBeDefined();
        if (!sessionCookie) {
            throw new Error('API login did not return a ci_session cookie');
        }

        return sessionCookie;
    } finally {
        await apiContext.dispose();
    }
}

test('login through the API and print the ci_session cookie', async () => {
    const sessionCookie = await loginViaApi();
    console.log(`ci_session=${sessionCookie.value}`);
});

test('use API login cookie to access the dashboard', async ({ page }) => {
    const sessionCookie = await loginViaApi();

    // Add the actual HTTP cookie to the browser context before making the dashboard request.
    await page.context().addCookies([sessionCookie]);
    const dashboardUrl = new URL('/admin/admin/dashboard', environment.baseUrl).toString();
    await page.goto(dashboardUrl);

    await expect(page).toHaveTitle('Dashboard · Smart Hospital');
    const dashboardText = page.locator('.dash-alerts a');
    await dashboardText.nth(1).waitFor();
    console.log(await dashboardText.allTextContents());
});


