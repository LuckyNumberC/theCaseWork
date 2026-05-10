import { expect } from '@wdio/globals';
import Login from '../pageobjects/login.js';
import CreateInvoice from '../pageobjects/createInvoice.js';

describe('Logs in and navigates to Create Invoice', () => {

    before(async () => {
        await Login.startSession();
    });

    beforeEach(async () => {
        await CreateInvoice.navThere();
    });

    describe('Billing Period', () => {

        it('A: Pre-populates with empty box', async () => {
            await expect(CreateInvoice.dropdownBillingPeriod).toHaveValue('');
        });

        it('B: lists the billing period options correctly', async () => {
            await CreateInvoice.dropdownBillingPeriod.click();
            const options = await CreateInvoice.optionsBillingPeriod
            expect(options).toHaveLength(8);
            const textLastMonth = (await options[5].getText()).trim();
            const textThisMonth = (await options[6].getText()).trim();
            const textCustom = (await options[7].getText()).trim();
            expect(textLastMonth).toContain('(Last Month)');
            expect(textThisMonth).toContain('(This Month)');
            expect(textCustom).toHaveText('Custom');
        });

        it('C: Displays the chosen option as the billing period', async () => {
            for (let i = 0; i < 7; i++) {
                await CreateInvoice.dropdownBillingPeriod.click();
                const options = await CreateInvoice.optionsBillingPeriod
                const optionText = (await options[i].getText()).trim();
                await options[i].click();
                const displayed = (await CreateInvoice.dropdownBillingPeriod.getText()).trim();
                expect(displayed).toHaveValue(optionText);
            };
        });

        it('D: Custom option shows calendar dropdowns for Start and End dates', async () => {
            await CreateInvoice.startBillingPeriodCustom();
            await expect(CreateInvoice.calendarBillingPeriodStart).toBeDisplayed();
            await expect(CreateInvoice.calendarBillingPeriodEnd).toBeDisplayed();
        });

    });

});