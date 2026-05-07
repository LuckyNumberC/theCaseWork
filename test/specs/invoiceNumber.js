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

    describe('Invoice Number', () => {

        it('A: should pre-populate with a different number on each visit', async () => {
            await CreateInvoice.changeInvoiceNumberByNav();
            await expect(CreateInvoice.newValue).not.toEqual(CreateInvoice.initialValue);
        });

        // Manual Test (or use regex to automate)
        // B: should pre-populate with the pattern INV-{today}-###

        it('C: receives custom input', async () => {
            await CreateInvoice.fillInvoiceNumber(1);
            await expect(CreateInvoice.fieldInvoiceNumber).toHaveValue(CreateInvoice.lastFilledValue);
        });

        it('D: Alert appears upon input of more than 50 characters', async () => {
            await CreateInvoice.fillInvoiceNumber(6);
            await expect(CreateInvoice.visualAlert).toBeDisplayed();
        });

        it('E: Re-generate button generates a different invoice number with each click', async () => {
            await CreateInvoice.checkInvoiceNumberRegen();
            await expect(CreateInvoice.nextValue).not.toEqual(CreateInvoice.initialValue);
            await expect(CreateInvoice.newValue).not.toEqual(CreateInvoice.nextValue);
            await expect(CreateInvoice.initialValue).not.toEqual(CreateInvoice.newValue);
        });

        // Manual Test (This is background-type stuff that should just be happening from the website existing... right?)
        it('F: Alert appears upon erasure, required field', async () => {
            await CreateInvoice.clearInvoiceNumber();
            await expect(CreateInvoice.visualAlert).toBeDisplayed();
        });

        // Manual Test (This is background-type stuff that should just be happening from the website existing... right?)
        it('G: Placeholder "Enter invoice number" appears in field when empty', async () => {
            await CreateInvoice.clearInvoiceNumber();
            await expect(CreateInvoice.placeholderInvoiceNumber).toBeDisplayed();
        });

    });

});