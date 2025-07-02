import { test } from '@playwright/test';
import { TasksPage } from './support/pages/tasks/index.ts';

test.describe('Suite teste 1', () => {
  test.beforeEach(async ({ page }) => {
    const tasksPage = new TasksPage(page);
    await tasksPage.goto();
  });

  test('Verifica o titulo', async ({ page }) => {
    const tasksPage = new TasksPage(page);
    await tasksPage.checkTitle();
  });

  test('deve colocar o tema light', async ({ page }) => {
    const tasksPage = new TasksPage(page);
    await tasksPage.lightTheme();
    await tasksPage.expectLightTheme();
  });

  test('deve colocar o tema dark', async ({ page }) => {
    const tasksPage = new TasksPage(page);
    await tasksPage.darkTheme();
    await tasksPage.expectDarkTheme();
  });

  test('deve colocar o tema cosmic', async ({ page }) => {
    const tasksPage = new TasksPage(page);
    await tasksPage.cosmicTheme();
    await tasksPage.expectCosmicTheme();
  });

  test('deve colocar o tema corporate', async ({ page }) => {
    const tasksPage = new TasksPage(page);
    await tasksPage.corporateTheme();
    await tasksPage.expectCorporateTheme();
  });

  test('Clicando no Menu', async ({ page }) => {
    const tasksPage = new TasksPage(page);
    await tasksPage.menuItem('Forms', 'Form Layouts');
    await tasksPage.expectMenuItem('Form Layouts');
  });

  test('Clicando no Datepicker', async ({ page }) => {
    const tasksPage = new TasksPage(page);
    await tasksPage.menuItem('Forms', 'Datepicker');
    await tasksPage.expectMenuItem('Datepicker');
  });
});
