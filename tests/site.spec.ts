import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const pages = ['/', '/architecture', '/projects/incident-management', '/projects/menumint', '/projects/employee-management'];

for (const path of pages) {
  for (const theme of ['light', 'dark'] as const) {
    test(`accessibility: ${path} (${theme})`, async ({ page }) => {
      await page.addInitScript((t) => localStorage.setItem('theme', t), theme);
      await page.goto(path);
      const { violations } = await new AxeBuilder({ page }).analyze();
      const bad = violations.filter((v) => v.impact === 'serious' || v.impact === 'critical');
      expect(bad.map((v) => `${v.id}: ${v.nodes.length}`)).toEqual([]);
    });
  }
}

test('theme toggle switches and persists', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => localStorage.setItem('theme', 'light'));
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await page.click('[data-theme-toggle]');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
});

test('home has greeting, projects and dock', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('here!');
  await expect(page.locator('.card')).toHaveCount(3);
  await expect(page.locator('.dock a')).toHaveCount(4);
});

test('project card opens its case study', async ({ page }) => {
  await page.goto('/');
  await page.locator('.card').first().click();
  await expect(page).toHaveURL(/\/projects\/incident-management$/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Incident Management System');
  await expect(page.getByRole('heading', { name: 'Key highlights' })).toBeVisible();
});

test('architecture page loads', async ({ page }) => {
  await page.goto('/architecture');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('How this site is built');
});

for (const width of [320, 390, 768, 1280, 1920]) {
  test(`no horizontal overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 800 });
    for (const path of pages) {
      await page.goto(path);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      expect(overflow, path).toBeLessThanOrEqual(0);
    }
  });
}

test.describe('motion', () => {
  test.use({ reducedMotion: 'no-preference' });
  test('cards reveal when scrolled into view', async ({ page }) => {
    await page.goto('/');
    const card = page.locator('.card').first();
    await card.scrollIntoViewIfNeeded();
    await expect(card).toHaveClass(/\bin\b/);
  });
});
