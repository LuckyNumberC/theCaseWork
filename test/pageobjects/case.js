import { $ } from '@wdio/globals';
import Base from './base.js';

class Case extends Base {

    get tabInvoices () {
        return $('[data-testid="view-edit-case-tab-invoices"]');
    }

    async startInvoices () {
        await this.tabInvoices.click();
    }

}

export default new Case();
