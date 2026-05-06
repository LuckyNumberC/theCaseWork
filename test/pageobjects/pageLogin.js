import { $ } from '@wdio/globals';
import Base from './pageBase.js';

class LoginPage extends Base {

    get fieldUsername () {
        return $('[data-testid="login-username"]');
    }

    get fieldPassword () {
        return $('[data-testid="login-password"]');
    }

    get buttonLogin () {
        return $('[data-testid="login-submit"]');
    }

    get buttonCases () {
        return $('[data-testid="vert-nav-cases"]');
    }

    get buttonCaseFirst () {
        return $('.fui-DataGridBody .fui-DataGridRow .fui-Link');
    }

    get tabInvoices () {
        return $('[data-testid="view-edit-case-tab-invoices"]');
    }

    get tabCreateInvoice () {
        return $('[data-testid="case-invoices-create-invoice-tab"]');
    }

    async startSession () {
        await this.open();
        await this.inputLogin(
            process.env.THECASEWORK_USERNAME,
            process.env.THECASEWORK_PASSWORD
        );
    }

    open () {
        return super.open();
    }
    
    async inputLogin (username, password) {
        await this.fieldUsername.setValue(username);
        await this.fieldPassword.setValue(password);
        await this.buttonLogin.click();
    }

    async navCreateInvoice () {
        await this.buttonCases.click();
        await this.buttonCaseFirst.click();
        await this.tabInvoices.click();
        await this.tabCreateInvoice.click();
    }

}

export default new LoginPage();
       