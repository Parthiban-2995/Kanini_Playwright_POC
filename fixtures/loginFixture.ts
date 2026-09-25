import { test as base } from './baseFixture';
import { environment } from '../utils/env';

type LoginData = {
    username: string;
    password: string;
    dashboardTitle?: string;
    errorMessage?: string;
};

type LoginFixtures = {
    loginData: {
        validLogin: LoginData;
        invalidLogin: LoginData;
    };
};

export const test = base.extend<LoginFixtures>({
    loginData: async ({}, use) => {
        await use({
            validLogin: {
                username: environment.username,
                password: environment.password,
                dashboardTitle: "Dashboard · Smart Hospital"
            },
            invalidLogin: {
                username: environment.username,
                password: "passwod",
                errorMessage: "Invalid Username or Password"
            }
        });
    }
});
