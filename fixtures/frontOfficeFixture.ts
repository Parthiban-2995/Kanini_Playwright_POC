import path from 'path';
import { test as base } from './authenticatedFixture';
import type { VisitorDetails } from '../pageobjects/FrontOfficePage';

type FrontOfficeData = {
    addVisitor: VisitorDetails;
    deleteVisitor: {
        name: string;
    };
};

type FrontOfficeFixtures = {
    frontOfficeData: FrontOfficeData;
};

export const test = base.extend<FrontOfficeFixtures>({
    frontOfficeData: async ({}, use) => {
        await use({
            addVisitor: {
                purpose: "Seminar ",
                name: "SELVA",
                phoneNumber: "9846477894",
                idCard: "1234",
                visitTo: "staff",
                roleSearchText: "San",
                numberOfPeople: "3",
                date: "15/09/2026",
                inTime: "01:24 AM",
                outTime: "07:00 PM",
                note: "I am Tetsing in production environemnt",
                uploadPath: path.join(
                    process.cwd(),
                    "test-data",
                    "Requiring Attention (1).xlsx"
                )
            },
            deleteVisitor: {
                name: "SELVA"
            }
        });
    }
});
