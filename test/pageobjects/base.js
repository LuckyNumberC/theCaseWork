import { browser } from '@wdio/globals';

export default class Base {

    startChrome () {
        return browser.url('/');
    }

}