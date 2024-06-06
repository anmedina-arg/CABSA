import { test, expect, devices } from '@playwright/test';

test('prueba', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.pause();
});
