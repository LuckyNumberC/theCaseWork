import { $ } from '@wdio/globals';
import Base from './base.js';

class sideBar extends Base {

    get cases () {
        return $('[data-testid="vert-nav-cases"]');
    }

    async startCases () {
        await this.cases.click();
    }

}

export default new sideBar();
