import { $ } from '@wdio/globals';
import Base from './base.js';

class CaseInvoices extends Base {

    get tabCreateInvoice () {
        return $('[data-testid="case-invoices-create-invoice-tab"]');
    }

    async startCreateInvoice () {
        await this.tabCreateInvoice.click();
    }

}

export default new CaseInvoices();
