import { test } from '@playwright/test'

test.describe('login', () => {
  test('can login', async ({ page }) => {
    await page.goto('/innskra')

    await page.fill('[name="nationalId"]', '2501893469')

    await page.getByRole('button', { name: 'Auðkenna' }).click()
  })
})
