import { Page, Locator } from '@playwright/test';

export class FormLayoutsPage {
    readonly page: Page;

    // Inline Form selectors
    readonly inlineFormCard: Locator;
    readonly inlineFormNameInput: Locator;
    readonly inlineFormEmailInput: Locator;
    readonly inlineFormRememberCheckbox: Locator;
    readonly inlineFormSubmitButton: Locator;

    // Using the Grid form selectors
    readonly gridFormCard: Locator;
    readonly gridFormEmailInput: Locator;
    readonly gridFormPasswordInput: Locator;
    readonly gridFormOption1Radio: Locator;
    readonly gridFormOption2Radio: Locator;
    readonly gridFormDisabledRadio: Locator;
    readonly gridFormSignInButton: Locator;

    // Form without labels selectors
    readonly formWithoutLabelsCard: Locator;
    readonly formWithoutLabelsRecipientsInput: Locator;
    readonly formWithoutLabelsSubjectInput: Locator;
    readonly formWithoutLabelsMessageTextarea: Locator;
    readonly formWithoutLabelsSendButton: Locator;

    // Basic form selectors
    readonly basicFormCard: Locator;
    readonly basicFormEmailInput: Locator;
    readonly basicFormPasswordInput: Locator;
    readonly basicFormCheckbox: Locator;
    readonly basicFormSubmitButton: Locator;

    // Block form selectors
    readonly blockFormCard: Locator;
    readonly blockFormFirstNameInput: Locator;
    readonly blockFormLastNameInput: Locator;
    readonly blockFormEmailInput: Locator;
    readonly blockFormWebsiteInput: Locator;
    readonly blockFormSubmitButton: Locator;

    // Horizontal form selectors
    readonly horizontalFormCard: Locator;
    readonly horizontalFormEmailInput: Locator;
    readonly horizontalFormPasswordInput: Locator;
    readonly horizontalFormRememberCheckbox: Locator;
    readonly horizontalFormSignInButton: Locator;

    constructor(page: Page) {
        this.page = page;

        // Inline Form
        this.inlineFormCard = page.locator('nb-card').filter({ hasText: 'Inline form' });
        this.inlineFormNameInput = this.inlineFormCard.locator('input[placeholder="Jane Doe"]');
        this.inlineFormEmailInput = this.inlineFormCard.locator('input[placeholder="Email"]');
        this.inlineFormRememberCheckbox = this.inlineFormCard.locator('nb-checkbox').filter({ hasText: 'Remember me' });
        this.inlineFormSubmitButton = this.inlineFormCard.locator('button[status="primary"]').filter({ hasText: 'Submit' });

        // Using the Grid form
        this.gridFormCard = page.locator('nb-card').filter({ hasText: 'Using the Grid' });
        this.gridFormEmailInput = this.gridFormCard.locator('#inputEmail1');
        this.gridFormPasswordInput = this.gridFormCard.locator('#inputPassword2');
        this.gridFormOption1Radio = this.gridFormCard.locator('nb-radio').filter({ hasText: 'Option 1' });
        this.gridFormOption2Radio = this.gridFormCard.locator('nb-radio').filter({ hasText: 'Option 2' });
        this.gridFormDisabledRadio = this.gridFormCard.locator('nb-radio').filter({ hasText: 'Disabled Option' });
        this.gridFormSignInButton = this.gridFormCard.locator('button[status="primary"]').filter({ hasText: 'Sign in' });

        // Form without labels
        this.formWithoutLabelsCard = page.locator('nb-card').filter({ hasText: 'Form without labels' });
        this.formWithoutLabelsRecipientsInput = this.formWithoutLabelsCard.locator('input[placeholder="Recipients"]');
        this.formWithoutLabelsSubjectInput = this.formWithoutLabelsCard.locator('input[placeholder="Subject"]');
        this.formWithoutLabelsMessageTextarea = this.formWithoutLabelsCard.locator('textarea[placeholder="Message"]');
        this.formWithoutLabelsSendButton = this.formWithoutLabelsCard.locator('button[status="success"]').filter({ hasText: 'Send' });

        // Basic form
        this.basicFormCard = page.locator('nb-card').filter({ hasText: 'Basic form' });
        this.basicFormEmailInput = this.basicFormCard.locator('#exampleInputEmail1');
        this.basicFormPasswordInput = this.basicFormCard.locator('#exampleInputPassword1');
        this.basicFormCheckbox = this.basicFormCard.locator('nb-checkbox').filter({ hasText: 'Check me out' });
        this.basicFormSubmitButton = this.basicFormCard.locator('button[status="danger"]').filter({ hasText: 'Submit' });

        // Block form
        this.blockFormCard = page.locator('nb-card').filter({ hasText: 'Block form' });
        this.blockFormFirstNameInput = this.blockFormCard.locator('#inputFirstName');
        this.blockFormLastNameInput = this.blockFormCard.locator('#inputLastName');
        this.blockFormEmailInput = this.blockFormCard.locator('#inputEmail');
        this.blockFormWebsiteInput = this.blockFormCard.locator('#inputWebsite');
        this.blockFormSubmitButton = this.blockFormCard.locator('button').filter({ hasText: 'Submit' }).nth(2); // O terceiro botão Submit

        // Horizontal form
        this.horizontalFormCard = page.locator('nb-card').filter({ hasText: 'Horizontal form' });
        this.horizontalFormEmailInput = this.horizontalFormCard.locator('#inputEmail3');
        this.horizontalFormPasswordInput = this.horizontalFormCard.locator('#inputPassword3');
        this.horizontalFormRememberCheckbox = this.horizontalFormCard.locator('nb-checkbox').filter({ hasText: 'Remember me' });
        this.horizontalFormSignInButton = this.horizontalFormCard.locator('button[status="warning"]').filter({ hasText: 'Sign in' });
    }

    
}
