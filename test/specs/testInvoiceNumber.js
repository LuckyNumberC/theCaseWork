import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/pageLogin.js';
import CreateInvoicePage from '../pageobjects/pageCreateInvoice.js';

describe('Logs in and navigates to Create Invoice', () => {

    before(async () => {
        await LoginPage.startSession();
    });

    beforeEach(async () => {
        await LoginPage.navCreateInvoice();
    });

    describe('Invoice Number', () => {

        it('A: should pre-populate with a different number on each visit', async () => {
            await CreateInvoicePage.navForInvoiceNumberChange();
            await expect(CreateInvoicePage.newValue).not.toEqual(CreateInvoicePage.initialValue);
        });

        // Manual Test
        // B: should pre-populate with the pattern INV-{today}-###

        it('C: receives custom input', async () => {
            await CreateInvoicePage.fillInvoiceNumber(1);
            await expect(CreateInvoicePage.fieldInvoiceNumber).toHaveValue(CreateInvoicePage.lastFilledValue);
        });

        it('D: Alert appears upon input of more than 50 characters', async () => {
            await CreateInvoicePage.fillInvoiceNumber(6);
            await expect(CreateInvoicePage.visualAlert).toBeDisplayed();
        });

        it('E: Re-generate button generates a different invoice number with each click', async () => {
            await CreateInvoicePage.checkInvoiceNumberRegen();
            await expect(CreateInvoicePage.nextValue).not.toEqual(CreateInvoicePage.initialValue);
            await expect(CreateInvoicePage.newValue).not.toEqual(CreateInvoicePage.nextValue);
            await expect(CreateInvoicePage.initialValue).not.toEqual(CreateInvoicePage.newValue);
        });

        // Manual Test (This is background-type stuff that should just be happening from the website existing... right?)
        it('F: Alert appears upon erasure, required field', async () => {
            await CreateInvoicePage.clearInvoiceNumber();
            await expect(CreateInvoicePage.visualAlert).toBeDisplayed();
        });

        // Manual Test (This is background-type stuff that should just be happening from the website existing... right?)
        it('G: Placeholder "Enter invoice number" appears in field when empty', async () => {
            await CreateInvoicePage.clearInvoiceNumber();
            await expect(CreateInvoicePage.placeholderInvoiceNumber).toBeDisplayed();
        });

    });

});