import { test } from '@playwright/test'

test.describe('login', () => {
  test('can login', async ({ page }) => {
    await page.goto('/innskra')

    await page.fill(
      '[name="nationalId"]',
      process.env.E2E_TEST_NATIONAL_ID ?? '',
    )

    await page.getByRole('button', { name: 'Auðkenna' }).click()
  })
})
