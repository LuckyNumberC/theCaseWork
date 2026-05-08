import { $, browser, expect } from '@wdio/globals';
import Base from './base.js';
import sideBar from './sideBar.js'
import CaseList from './caseList.js';
import Case from './case.js';
import CaseInvoices from './caseInvoices.js';

class CreateInvoice extends Base {

    //// Invoice Info ////

    get fieldInvoiceNumber () {
        return $('[data-testid="create-invoice-number-input"]');
    }

    get visualAlert () {
        return $('//div[@role="alert" and contains(@class, "fui-Field__validationMessage")]');
    }

    get buttonRegenerate () {
        return $('[data-testid="create-invoice-regenerate-number-button"]');
    }

    get fieldInvoiceDate () {
        return $('[data-testid="create-invoice-date-picker"]');
    }

    get buttonToday () {
        return $('[data-testid="create-invoice-today-button"]');
    }

    get placeholderInvoiceNumber () {
        return $('[placeholder="Enter invoice number"]')
    }

    get lastFilledValue () {
        return this._lastFilledValue
    }

    async navThere () {
        await sideBar.startCases();
        await CaseList.startTopCase();
        await Case.startInvoices();
        await CaseInvoices.startCreateInvoice();
    }

    async changeInvoiceNumberByNav () {
        this.initialValue = await this.fieldInvoiceNumber.getValue();
        await Case.startInvoices();
        await CaseInvoices.startCreateInvoice();
        this.newValue = await this.fieldInvoiceNumber.getValue();
    }

    async clearInvoiceNumber () {
        await this.fieldInvoiceNumber.click();
        await browser.keys(['Meta', 'a']);
        await browser.keys('Backspace');
        await expect(this.fieldInvoiceNumber).toHaveValue('');
    }

    async fillInvoiceNumber (count) {
        await this.clearInvoiceNumber();
        this._lastFilledValue = '1234567890'.repeat(count);
        await this.fieldInvoiceNumber.setValue(this._lastFilledValue);
    }

    async checkInvoiceNumberRegen () {
        this.initialValue = await this.fieldInvoiceNumber.getValue();
        await this.buttonRegenerate.click();
        this.nextValue = await this.fieldInvoiceNumber.getValue();
        await this.buttonRegenerate.click();
        this.newValue = await this.fieldInvoiceNumber.getValue();
    }

    //// Billing Period and Terms ////

    get dropdownBillingPeriod () {
        return $('[data-testid="create-invoice-billing-period-dropdown"]');
    }

    get optionsBillingPeriod () {
        return $$('[data-testid^="create-invoice-billing-period-option-"]')
    }

        get optionLastMonth () {
            return $('*=(Last Month)');
        }

        get optionThisMonth () {
            return $('*=(This Month)');
        }

        get optionCustom () {
            return $('[data-testid="create-invoice-billing-period-option-custom"]');
        }

    get visualBillingPeriod () {
        return $('//span[text()="Billing Period:"]');
    }

    get fieldBillingPeriodStart () {
        return $('[data-testid="create-invoice-billing-period-start-picker"]');
    }

    get fieldBillingPeriodEnd () {
        return $('[data-testid="create-invoice-billing-period-end-picker"]');
    }

    get dropdownPaymentTerms () {
        return $('[data-testid="create-invoice-payment-terms-dropdown"]');
    }

    get optionNet30 () {
        return $('[data-testid="create-invoice-payment-terms-option-Net 30"]');
    }

    get optionNet60 () {
        return $('[data-testid="create-invoice-payment-terms-option-Net 60"]');
    }

    get optionNet90 () {
        return $('[data-testid="create-invoice-payment-terms-option-Net 90"]');
    }

    get optionUponReceipt () {
        return $('[data-testid="create-invoice-payment-terms-option-Upon Receipt"]');
    }

    get optionPaymentTermsCustom () {
        return $('[data-testid="create-invoice-payment-terms-option-Custom"]');
    }

    get visualDueDate () {
        return $('//label[normalize-space(text())="Due Date"]/following-sibling::span');
    }

    get fieldDueDateCustom () {
        return $('[data-testid="create-invoice-due-date-picker"]');
    }

    // For checking each option under Billing Period dropdown, I think I need to:
    // array of 8 strings to check each option button
    // make a loop (what kind?)
    // make sure the selectors are good and whatever... oh wait, I don't have them.
    // 

    async listBillingPeriodOptions () {
        
    }

}

export default new CreateInvoice();
