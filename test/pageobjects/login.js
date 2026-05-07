import { $ } from '@wdio/globals';
import Base from './base.js';

class Login extends Base {

    get fieldUsername () {
        return $('[data-testid="login-username"]');
    }

    get fieldPassword () {
        return $('[data-testid="login-password"]');
    }

    get buttonLogin () {
        return $('[data-testid="login-submit"]');
    }

    async startSession () {
        await this.startChrome();
        await this.startLogin(
            process.env.THECASEWORK_USERNAME,
            process.env.THECASEWORK_PASSWORD
        );
    }
    
    async startLogin (username, password) {
        await this.fieldUsername.setValue(username);
        await this.fieldPassword.setValue(password);
        await this.buttonLogin.click();
    }

}

export default new Login();