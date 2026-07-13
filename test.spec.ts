import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://metekahyagil.github.io/dutch/');
  await page.getByText('A0 – Foundations').click();
});