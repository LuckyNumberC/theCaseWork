import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/pageLogin.js';
import CreateInvoicePage from '../pageobjects/pageCreateInvoice.js';

describe('Logs in and navigates to Create Invoice', () => {

    beforeEach(async () => {
        await LoginPage.open();
        await LoginPage.startLogin(
            process.env.THECASEWORK_USERNAME,
            process.env.THECASEWORK_PASSWORD
        );
        await CreateInvoicePage.navigateTo();
    });

    describe('Invoice Date', () => {
        
    });

});