import * as ExcelJS from 'exceljs';
import { expect, test } from '@playwright/test'

type CellChange = {
    rowChange: number;
    colChange: number;
};

type CellPosition = {
    row: number;
    column: number;
};

async function writeExcel(
    searchText: string,
    replaceText: string,
    change: CellChange,
    filePath: string
): Promise<void> {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet('Sheet1');

    if (!worksheet) {
        console.log('Worksheet not found');
        return;
    }

    const output = readExcel(worksheet, searchText);
    if (!output) {
        console.log(`Cell containing "${searchText}" was not found`);
        return;
    }

    const cell = worksheet.getCell(
        output.row + change.rowChange,
        output.column + change.colChange
    );
    cell.value = replaceText
    await workbook.xlsx.writeFile(filePath)
}

function readExcel(
    worksheet: ExcelJS.Worksheet,
    searchText: string
): CellPosition | undefined {
    let output: CellPosition | undefined;
    worksheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, colNumber) => {
            if (cell.value === searchText && !output) {
                output = { row: rowNumber, column: colNumber };
            }
        });
    });
    return output
}


//writeExcel("Summer", "August", { rowChange: 0, colChange: 0 }, 'C:/Users/ParthibanSelvakumar/download.xlsx');

test('Upload download excel validation', async ({ page }) => {

    const textSearch = 'Mango';
    const updateValue = '350';

    await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html");

    const downloadPromise = page.waitForEvent('download');

    await page.getByRole('button', { name: 'Download' }).click();

    await downloadPromise;

    await writeExcel(
        "Summer", "August", { rowChange: 0, colChange: 0 }, 'C:/Users/ParthibanSelvakumar/download.xlsx'
    );

    await page.locator("#fileinput").click();
    await page.locator("#fileinput").setInputFiles("/Users/rahulshetty/downloads/download.xlsx");

    const textLocator = page.getByText(textSearch);
    const desiredRow = await page.getByRole('row').filter({ has: textLocator });

    await expect(
        desiredRow.locator("#cell-4-undefined")
    ).toContainText(updateValue);
});
``