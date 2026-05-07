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

    describe('Payment Terms', () => {

    });

});