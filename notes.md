_____
Notes

* System should probably stop user from creating a skeleton invoice that has no data or should give notice of no data. Though users/clients may need a blank invoice for documentation...
* System should notify of duplicate invoices and updated invoices for same-date invoice creation.
* System should show the time an invoice was created to more easily differentiate invoices created on the same day.
* System should check for impossible/unlikely hours before generating an invoice.
* System should not allow Due Date to be a date that is before the date of Invoice Date.
* System should prevent unrealistic numbers as input for a user's expected hours per day in Account Settings > Users.
* Bugs submitted:
    * System replaces an invoice with a new invoice created using the same invoice number as the old one. Even paid invoices are replaced. (Paid invoices shouldn't be allowed to be deleted.) (Out of scope for capstone project.)

_________
Behaviors

CASES > any case > INVOICES > CREATE INVOICE > CREATE NEW INVOICE >
    INVOICE INFO
        Invoice Number:
            Pre-populates with generated number.
            Accepts custom input.
            Re-generate button generates a different invoice number with each click.
            User input is added to new invoice.
            Required field notice appears upon erasure of invoice number.
            Create Invoice button is unclickable while Invoice Number field is empty.
        Invoice Date:
            Pre-populates with today's date.
            Can be changed with calendar dropdown.
            Today button changes the invoice date to today's date.
            Ignores attempts to clear date.
            User input is added to new invoice.
    BILLING PERIOD and TERMS
        Billing Period:
            Pre-populates with empty box.
            Create Invoice button is unclickable while Billing Period field is empty.
            Lists options (recent months or custom).
            Displays chosen option as the billing period.
            Custom option allows user to change Billing Period Start and End dates with a calendar dropdown for each date.
            User input is added to new invoice.
        Payment Terms:
            Pre-populates with Upon Receipt.
            Lists options (Upon Receipt, Net 30, 60, 90).
            Due Date:
                Net 30, 60, 90 options update Due Date by adding 30, 60, or 90 days to Invoice Date.
                Changes to Invoice Date update Due Date when Upon Receipt or a Net 30/60/90 option is selected.
                Upon Receipt option updates Due Date to match Invoice Date.
                Custom option allows manual changes with calendar dropdown.
                Changing Invoice Date does not update Due Date when Custom option is used to manually assign Due Date.
            User input is added to new invoice.

__________
Test Cases

- Copy and paste this into a word processor to change it from markdown into copyable text to paste into Jira.
- Test titles marked with an asterisk are missing a work item in Jira.
- Naming scheme in Jira (minus the backslashes):
    \[theCaseWork\] \[Invoices\] \[Create Invoice\] Section: Behavior
    Example: Fill in the Section part with "Invoice Number" and use "Pre-populates with a different generated number" for the Behavior part.
    For the Due Date tests under Payment Terms, it would have "Due Date:" between the parts for Section and Behavior.
- The Invoice Date format looks like it could be changed in the future and was deprioritized for time/value. Consider the same treatment of Invoice Number: pre-pops with set pattern.

INVOICE NUMBER

*   Pre-populates with a different generated number
        Description:
            Verifies each visit to the Create Invoice form generates a fresh number rather than using the same one.
        Preconditions:
            User is logged in with all Invoices permissions and has navigated through Cases > any case > Invoices > Create Invoice.
        Test Steps: 
            1. Note the last three digits in the Invoice Number field.
            2. Navigate to the Invoices landing page by clicking Invoices and navigate back to Create Invoice.
            3. Verify the last three digits differ from those noted in Step 1.
        Expected Test Step Results:
            Upon a second visit, the last three digits in Invoice Number are different from the digits in the first visit.

*   Pre-populates with a set string pattern (INV-date-###)
        Description:
            Verifies the Invoice Number field is pre-filled with the intended string pattern. The pattern includes the letters "INV" followed by a hyphen and the current day's date in basic ISO 8601 format, then another hyphen followed by three digits.
        Preconditions:
            User is logged in with all Invoices permissions and has navigated through Cases > any case > Invoices > Create Invoice.
        Test Steps: 
            1. Verify the Invoice Number field starts with the "INV" string.
            2. Verify the Invoice Number field has the current date in basic ISO 8601 format.
            3. Verify the Invoice Number field has three digits at its end.
            4. Verify the Invoice Number field has a hyphen between the "INV" string and the date.
            5. Verify the Invoice Number field has a hyphen between the date and the three digits.
        Expected Test Step Results:
            The Invoice Number field is pre-populated with the pattern: INV-date-###.

*   Accepts custom input
        Description:
            Verifies the Invoice Number field can be customized.
        Preconditions:
            User is logged in with all Invoices permissions and has navigated through Cases > any case > Invoices > Create Invoice.
        Test Steps:
            1. Type no more than 50 characters into the Invoice Number field.
        Expected Test Steps Results:
            The Invoice Number field receives custom input.

*   Notice appears upon typing more than 50 characters
        Description:
            Verifies the "Max 50 characters" notice appears upon input of more than 50 characters into the Invoice Number field.
        Preconditions:
            User is logged in with all Invoices permissions and has navigated through Cases > any case > Invoices > Create Invoice.
        Test Steps:
            1. Type more than 50 characters into the Invoice Number field.
        Expected Test Steps Results:
            A notice appears: "50 max characters."

*   Re-generate button generates a different invoice number with each click
        Description:
            Verifies pressing the Re-Generate button replaces what is in the Invoice Number field with a newly generated invoice number.
        Preconditions:
            User is logged in with all Invoices permissions and has navigated through Cases > any case > Invoices > Create Invoice.
        Test Steps:
            1. Note the current invoice number.
            2. Click the Re-Generate button.
            3. Note the new invoice number
            4. Verify the new invoice number differs from the previous one.
            5. Click the Re-Generate button.
            6. Verify the new invoice number differs from both previous ones.
        Expected Test Steps Results:
            Contents of the Invoice Number field are replaced by a different invoice number with each click.

*    Required field notice appears upon erasure
        Description:
            Verifies the "Invoice Number is a required field." notice appears upon emptying the Invoice Number field.
        Preconditions:
            User is logged in with all Invoices permissions and has navigated through Cases > any case > Invoices > Create Invoice.
        Test Steps:
            1. Erase all characters from the Invoice Number field.
        Expected Test Steps Results:
            A notice appears: "Invoice Number is a required field."

*   Placeholder "Enter invoice number" appears in field when empty
        Description:
            Verifies hint text appears in the Invoice Number field when empty.
        Preconditions:
            User is logged in with all Invoices permissions and has navigated through Cases > any case > Invoices > Create Invoice.
        Test Steps:
            1. Erase all characters from the Invoice Number field.
        Expected Test Steps Results:
            Placeholder text appears in empty field: "Enter invoice number."

INVOICE DATE

*   Pre-populates with today's date
        Description:
            Verifies the Invoice Date field is pre-filled with today's date.
        Preconditions:
            User is logged in with all Invoices permissions and has navigated through Cases > any case > Invoices > Create Invoice.
        Test Steps: 
            1. Verify the Invoice Date field is set to the current date.
        Expected Test Steps Results:
            The current date is in the Invoice Date field.

*   Can be changed with calendar dropdown
        Description:
            Verifies the Invoice Date can be changed using the calendar dropdown.
        Preconditions:
            User is logged in with all Invoices permissions and has navigated through Cases > any case > Invoices > Create Invoice.
        Test Steps: 
            1. Click the Invoice Date field.
            2. Click a date from the calendar other than today.
            3. Verify the Invoice Date field is set to the chosen date.
        Expected Test Steps Results:
            The chosen date is in the Invoice Date field.

*   Today button changes the invoice date to today's date
        Description:
            Verifies the Today button changes the contents of the Invoice Date field to today's date.
        Preconditions:
            User is logged in with all Invoices permissions and has navigated through Cases > any case > Invoices > Create Invoice.
        Test Steps: 
            1. Click the Invoice Date field.
            2. Click a date different from today.
                (Testing Note: Take the current day and subtract one as the number to choose a day from the calendar.)
                    (NOPE. Breaks on the 1st of the month... Try this one: Add 4 then divide by 1.5, rounding up.)
            3. Note the chosen day.
            4. Click the Today button.
            5. Verify the Invoice Date field is changed from your previous choice to the current date.
        Expected Test Steps Results:
            The current date is in the Invoice Date field upon clicking the Today button.

*   Ignores attempts to replace date
        Description:
            Verifies the Invoice Date field can not be changed by typing.
        Preconditions:
            User is logged in with all Invoices permissions and has navigated through Cases > any case > Invoices > Create Invoice.
        Test Steps: 
            1. Highlight the contents of the Invoice Date field.
            2. Type a date different from the date in the field.
        Expected Test Steps Results:
            The date in the Invoice Date field remains unchanged.

BILLING PERIOD

*   Pre-populates with empty box
        Description:
            Verifies the Billing Period field is empty upon page navigation.
        Preconditions: 
            User is logged in with all Invoices permissions and has navigated through Cases > any case > Invoices > Create Invoice.
        Test Steps:
            1. Verify the Billing Period field is empty.
        Expected Test Steps Results:
            The Billing Period field is empty when page is first opened.

*   Lists options (recent months or custom)
        Description:
            Verifies clicking the empty Billing Period field opens a dropdown listing the current month, the six prior months, and a Custom option.
        Preconditions:
            User is logged in with all Invoices permissions and has navigated through Cases > any case > Invoices > Create Invoice.
        Test Steps:
            1. Click the Billing Period field.
            2. Verify the dropdown lists the current month and the six prior months in chronological order.
            3. Verify the current month is labeled "This Month".
            4. Verify the previous month is labeled "Last Month".
            5. Verify the dropdown includes a "Custom" option below the months.
        Expected Test Steps Results:
            The Billing Period dropdown lists seven recent months (current month labeled "This Month", previous month labeled "Last Month") followed by "Custom".

*   Displays chosen option as the billing period
        Description:
            Verifies the chosen month from the Billing Period dropdown appears next to the "Billing Period:" label on the right side of the form.
        Preconditions:
            User is logged in with all Invoices permissions and has navigated through Cases > any case > Invoices > Create Invoice.
        Test Steps:
            1. Click the Billing Period field.
            2. Click any month from the dropdown.
            3. Verify the chosen month appears next to "Billing Period:" on the right side of the form.
        Expected Test Steps Results:
            The chosen month appears after "Billing Period:" to the right.

*   Custom option allows user to change Billing Period Start and End dates with a calendar dropdown for each date
        Description:
            Verifies selecting the Custom option reveals Billing Period Start and Billing Period End fields, each editable via its own calendar dropdown.
        Preconditions:
            User is logged in with all Invoices permissions and has navigated through Cases > any case > Invoices > Create Invoice.
        Test Steps:
            1. Click the Billing Period field.
            2. Click the Custom option.
            3. Verify the Billing Period Start and Billing Period End fields appear.
            4. Click the Billing Period Start field.
            5. Click a date from the calendar.
            6. Verify the chosen date is in the Billing Period Start field.
            7. Click the Billing Period End field.
            8. Click a date from the calendar.
            9. Verify the chosen date is in the Billing Period End field.
        Expected Test Steps Results:
            The Custom option shows Billing Period Start and End fields where inputs can be made from their calendar dropdowns.


PAYMENT TERMS

* 1 Pre-populates with Upon Receipt
        Description:
            Verifies the Payment Terms field is pre-filled with Upon Receipt option upon page navigation.
        Preconditions: 
            User is logged in with all Invoices permissions and has navigated through Cases > any case > Invoices > Create Invoice.
        Test Steps:
            1. Verify the Payment Terms field is filled with Upon Receipt.
        Expected Test Steps Results:
            The Payment Terms field is filled with the Upon Receipt option when the page is opened.

* 2 Lists options
        Description:
            Verifies the empty Payment Terms field opens a dropdown that shows the Net 30/60/90 options, the Upon Receipt option and the Custom option.
        Preconditions:
            User is logged in with all Invoices permissions and has navigated through Cases > any case > Invoices > Create Invoice.
        Test Steps:
            1. Click the Payment Terms field.
            2. Verify the dropdown lists the five options: Net 30, Net 60, Net 90, Upon Receipt and Custom.
        Expected Test Steps Results:
            The Payment Terms dropdown lists Net 30/60/90, Upon Receipt and Custom options.

* Due Date:

    * 3 Net options from Payment Terms update Due Date by adding 30, 60, or 90 days to Invoice Date
            Description:
                Verifies the Due Date can be changed using the Net options from the Payment Terms dropdown.
            Preconditions:
                User is logged in with all Invoices permissions and has navigated through Cases > any case > Invoices > Create Invoice.
            Test Steps: 
                1. Click the Payment Terms field.
                2. Click Net 30.
                3. Verify the new Due Date is thirty days from the Invoice Date.
                4. Click the Payment Terms field.
                5. Click Net 60.
                6. Verify the new Due Date is sixty days from the Invoice Date.
                7. Click the Payment Terms field.
                8. Click Net 90.
                9. Verify the new Due Date is ninety days from the Invoice Date.
            Expected Test Steps Results:
                To provide a new Due Date, the Net options add their corresponding numbers in days to the Invoice Date.

    * 4 Changes made to Invoice Date update Due Date
            Description:
                Proves the Due Date is updated when the Invoice Date has been changed.
            Preconditions:
                User is logged in with all Invoices permissions and has navigated through Cases > any case > Invoices > Create Invoice. The page opens as intended: Payment Terms is at Upon Receipt and Invoice Date is at the current day.
            Test Steps: 
                1. Note the Due Date.
                2. Click the Invoice Date dropdown.
                3. Click a date different from today's.
                4. Verify the Due Date matches the Invoice Date.
                5. Click the Payment Terms dropdown.
                6. Click Net 30.
                7. Verify the new Due Date is thirty days after the Invoice Date.
            Expected Test Steps Results:
                The Due Date updates after changes to Invoice Date have been made.

    * 5 Custom option allows manual changes with calendar dropdown
            Description:
                Verifies the Due Date can be chosen from the calendar dropdown.
            Preconditions:
                User is logged in with all Invoices permissions and has navigated through Cases > any case > Invoices > Create Invoice.
            Test Steps:
                1. Click the Payment Terms dropdown.
                2. Click the Custom option.
                3. Click the Due Date field.
                4. Click a date different from today.
                5. Verify Due Date is set to the chosen date.
            Expected Test Steps Results:
                Due Date retains the user's choice from the calendar dropdown.

    * 6 Changing Invoice Date does not update Due Date when Custom option is used to manually assign Due Date
            Description:
                Verifies the Due Date is not changed from the choice made in Custom when Invoice Date is changed.
            Preconditions:
                User is logged in with all Invoices permissions and has navigated through Cases > any case > Invoices > Create Invoice.
            Test Steps:
                1. Click the Payment Terms dropdown.
                2. Click the Custom option.
                3. Click the Due Date field.
                4. Click a date different from today.
                5. Click the Invoice Date field.
                6. Click a date different from today's date and the newly set Due Date.
                7. Verify Due Date remained the same as the custom choice set in Step 4.
            Expected Test Steps Results:
                Due Date retains the user's choice after Invoice Date is changed.