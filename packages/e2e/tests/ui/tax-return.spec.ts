import { test } from '@playwright/test'

test.describe('tax return', () => {
  test('Fill out tax return and submit', async ({ page }) => {
    await page.goto('/')
  })
})
