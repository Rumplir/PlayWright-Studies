import { Page, expect } from '@playwright/test';
import { FormLayoutsPage } from '../form-layouts.page.ts';

export class TasksFormPage {
    readonly page: Page;
    private formLayoutsPage: FormLayoutsPage;

    constructor(page: Page) {
        this.page = page;
        this.formLayoutsPage = new FormLayoutsPage(page);
    }
    // Navigation methods
    async goto() {
        await this.page.goto('/pages/forms/layouts');
    }

    // Inline Form methods
    async fillInlineForm(name: string, email: string, rememberMe: boolean = false) {
        await this.formLayoutsPage.inlineFormNameInput.fill(name);
        await this.formLayoutsPage.inlineFormEmailInput.fill(email);
        if (rememberMe) {
            await this.formLayoutsPage.inlineFormRememberCheckbox.click();
        }
    }

    async submitInlineButton() {
        await this.formLayoutsPage.inlineFormSubmitButton.click();
    }

    // Grid Form methods
    async fillGridForm(email: string, password: string, radioOption: 'option1' | 'option2') {
        await this.formLayoutsPage.gridFormEmailInput.fill(email);
        await this.formLayoutsPage.gridFormPasswordInput.fill(password);
        
        if (radioOption === 'option1') {
            await this.formLayoutsPage.gridFormOption1Radio.click();
        } else {
            await this.formLayoutsPage.gridFormOption2Radio.click();
        }
    }

    async submitGridForm() {
        await this.formLayoutsPage.gridFormSignInButton.click();
    }

    // Form without labels methods
    async fillFormWithoutLabels(recipients: string, subject: string, message: string) {
        await this.formLayoutsPage.formWithoutLabelsRecipientsInput.fill(recipients);
        await this.formLayoutsPage.formWithoutLabelsSubjectInput.fill(subject);
        await this.formLayoutsPage.formWithoutLabelsMessageTextarea.fill(message);
    }

    async sendFormWithoutLabels() {
        await this.formLayoutsPage.formWithoutLabelsSendButton.click();
    }

    // Basic Form methods
    async fillBasicForm(email: string, password: string, checkMe: boolean = false) {
        await this.formLayoutsPage.basicFormEmailInput.fill(email);
        await this.formLayoutsPage.basicFormPasswordInput.fill(password);
        if (checkMe) {
            await this.formLayoutsPage.basicFormCheckbox.click();
        }
    }

    async submitBasicForm() {
        await this.formLayoutsPage.basicFormSubmitButton.click();
    }

    // Block Form methods
    async fillBlockForm(firstName: string, lastName: string, email: string, website: string) {
        await this.formLayoutsPage.blockFormFirstNameInput.fill(firstName);
        await this.formLayoutsPage.blockFormLastNameInput.fill(lastName);
        await this.formLayoutsPage.blockFormEmailInput.fill(email);
        await this.formLayoutsPage.blockFormWebsiteInput.fill(website);
    }

    async submitBlockForm() {
        await this.formLayoutsPage.blockFormSubmitButton.click();
    }

    // Horizontal Form methods
    async fillHorizontalForm(email: string, password: string, rememberMe: boolean = false) {
        await this.formLayoutsPage.horizontalFormEmailInput.fill(email);
        await this.formLayoutsPage.horizontalFormPasswordInput.fill(password);
        if (rememberMe) {
            await this.formLayoutsPage.horizontalFormRememberCheckbox.click();
        }
    }

    async submitHorizontalForm() {
        await this.formLayoutsPage.horizontalFormSignInButton.click();
    }

    // Validation methods
    async expectInlineFormVisible() {
        await expect(this.formLayoutsPage.inlineFormCard).toBeVisible();
    }

    async expectGridFormVisible() {
        await expect(this.formLayoutsPage.gridFormCard).toBeVisible();
    }

    async expectFormWithoutLabelsVisible() {
        await expect(this.formLayoutsPage.formWithoutLabelsCard).toBeVisible();
    }

    async expectBasicFormVisible() {
        await expect(this.formLayoutsPage.basicFormCard).toBeVisible();
    }

    async expectBlockFormVisible() {
        await expect(this.formLayoutsPage.blockFormCard).toBeVisible();
    }

    async expectHorizontalFormVisible() {
        await expect(this.formLayoutsPage.horizontalFormCard).toBeVisible();
    }

    async expectAllFormsVisible() {
        await this.expectInlineFormVisible();
        await this.expectGridFormVisible();
        await this.expectFormWithoutLabelsVisible();
        await this.expectBasicFormVisible();
        await this.expectBlockFormVisible();
        await this.expectHorizontalFormVisible();
    }
}