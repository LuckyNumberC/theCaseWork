import { $ } from '@wdio/globals';
import Base from './base.js';

class CaseList extends Base {

    get topCase () {
        return $('.fui-DataGridBody .fui-DataGridRow .fui-Link');
    }

    async startTopCase () {
        await this.topCase.click();
    }

}

export default new CaseList();
