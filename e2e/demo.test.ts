import { expect, test } from '@chromatic-com/playwright';

test('home page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Dark Speed', exact: false })).toBeVisible();
	await page.screenshot();
});
