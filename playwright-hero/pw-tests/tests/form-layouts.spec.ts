import { test } from '@playwright/test';
import { TasksFormPage } from './support/pages/tasks/form-layouts.ts';

test.describe('Suite teste 1', () => {
  test.beforeEach(async ({ page }) => {
    const tasksFormPage = new TasksFormPage(page);
    await tasksFormPage.goto();
  });
    test('Preenche o Inline Form', async ({ page }) => {
        const tasksFormPage = new TasksFormPage(page);
        await tasksFormPage.fillInlineForm('Nome Teste', 'teste@admin.com', true)
        await tasksFormPage.submitInlineButton();
    });
});
