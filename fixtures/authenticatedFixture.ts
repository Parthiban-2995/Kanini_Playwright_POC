import { test as base } from './loginFixture';
import { PageManager } from '../utils/PageManager';

type AuthenticatedFixtures = {
    pages: PageManager;
};

export const test = base.extend<AuthenticatedFixtures>({
    pages: async ({ page, loginData }, use) => {
        const pages = new PageManager(page);
        await pages.loginPage.goTo();
        await pages.loginPage.validlogin(
            loginData.validLogin.username,
            loginData.validLogin.password
        );
        await use(pages);
    }
});
