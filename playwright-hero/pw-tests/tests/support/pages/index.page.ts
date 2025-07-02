import { Page, Locator } from '@playwright/test';

export class IndexPage {
    readonly page: Page;

    // Header selectors
    readonly themeSelectButton: Locator;
    readonly themeOptionsList: Locator;
    readonly themeSelectedSpan: Locator;

    // Theme option selectors
    readonly lightThemeOption: Locator;
    readonly darkThemeOption: Locator;
    readonly cosmicThemeOption: Locator;
    readonly corporateThemeOption: Locator;

    // Menu selectors
    readonly menuItems: Locator;

    constructor(page: Page) {
        this.page = page;

        // Header theme selectors
        this.themeSelectButton = page.locator('ngx-header nb-select button');
        this.themeOptionsList = page.locator('nb-option-list');
        this.themeSelectedSpan = page.locator('ngx-header nb-select span');

        // Theme specific options
        this.lightThemeOption = page.locator('#nb-option-6');
        this.darkThemeOption = page.locator('#nb-option-7');
        this.cosmicThemeOption = page.locator('#nb-option-8');
        this.corporateThemeOption = page.locator('#nb-option-9');

        // Menu items (generic selector for menu navigation)
        this.menuItems = page.locator('[title]');
    }

    // Helper methods to get specific theme options
    getThemeOption(themeSelector: string): Locator {
        return this.page.locator(`nb-option-list ${themeSelector}`);
    }

    getThemeSelectedText(theme: string): Locator {
        return this.themeSelectedSpan.filter({ hasText: theme });
    }

    getMenuItemByTitle(title: string): Locator {
        return this.page.locator(`[title="${title}"]`);
    }
}
