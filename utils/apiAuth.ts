import { expect, request, type APIRequestContext } from '@playwright/test';
import { environment } from './env';

/** Creates an API request context authenticated with the application's login cookie. */
export async function loginViaApi(): Promise<APIRequestContext> {
  const apiContext = await request.newContext();

  try {
    // Initialize the session before submitting credentials.
    await apiContext.get(environment.baseUrl);
    const loginResponse = await apiContext.post(environment.baseUrl, {
      form: {
        username: environment.username,
        password: environment.password,
      },
    });

    expect(loginResponse.ok(), 'API login request should succeed').toBeTruthy();
    const { cookies } = await apiContext.storageState();
    expect(
      cookies.some((cookie) => cookie.name === 'ci_session'),
      'API login should set the ci_session cookie',
    ).toBeTruthy();

    // Playwright retains Set-Cookie values in this context for subsequent requests.
    return apiContext;
  } catch (error) {
    await apiContext.dispose();
    throw error;
  }
}