import { Page, expect } from '@playwright/test';
import { IndexPage } from '../index.page';

export class TasksPage {
    readonly page: Page;
    private indexPage: IndexPage;

    constructor(page: Page) {
        this.page = page;
        this.indexPage = new IndexPage(page);
    }
    async goto() {
        await this.page.goto('/');
    }

    async checkTitle() {
        await expect(this.page).toHaveTitle('playwright-test-admin Demo Application');
    }

    async chooseTheme(theme: string) {
        await this.indexPage.themeSelectButton.click();
        await this.indexPage.getThemeOption(theme).click();
    }

    async expectThemeApplied(theme: string) {
        await expect(this.indexPage.getThemeSelectedText(theme)).toBeVisible();
    }

    // light theme and check if it is applied
    async lightTheme() {
        await this.indexPage.themeSelectButton.click();
        await this.indexPage.lightThemeOption.click();
    }

    async expectLightTheme() {
        await this.expectThemeApplied('Light');
    }

    // dark theme and check if it is applied
    async darkTheme() {
        await this.indexPage.themeSelectButton.click();
        await this.indexPage.darkThemeOption.click();
    }

    async expectDarkTheme() {
        await this.expectThemeApplied('Dark');
    }

    // cosmic theme and check if it is applied
    async cosmicTheme() {
        await this.indexPage.themeSelectButton.click();
        await this.indexPage.cosmicThemeOption.click();
    }

    async expectCosmicTheme() {
        await this.expectThemeApplied('Cosmic');
    }

    // corporate theme and check if it is applied
    async corporateTheme() {
        await this.indexPage.themeSelectButton.click();
        await this.indexPage.corporateThemeOption.click();
    }

    async expectCorporateTheme() {
        await this.expectThemeApplied('Corporate');
    }

    async menuItem(menuTitle: string, subTitle: string) {
        await this.indexPage.getMenuItemByTitle(menuTitle).click();
        await this.indexPage.getMenuItemByTitle(subTitle).click();
    }

    async expectMenuItem(subTitle: string) {
        const words = subTitle.trim().split(/\s+/);
        const lastWord = words[words.length - 1].toLowerCase();
        await expect(this.page).toHaveURL(new RegExp(`.*${lastWord}.*`));
    }
}