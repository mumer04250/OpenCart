import {expect} from '@playwright/test'
import { time } from 'node:console'
export class VerifyHome {
    /** @param {import('@playwright/test').Page} page */
    constructor(page)
    {
        this.page=page
        this.accText = this.page.getByRole('link', { name: 'Account Dashboard' })
        this.homePage=this.page.locator('#menu_home')
        this.allCat=this.page.locator('#menu_all_categories')

    }

    async accVerify()
    {
        await expect(this.accText).toBeVisible()
    }
    async navigationCheck()
    {
        await expect(this.homePage).toBeVisible()
        await this.homePage.click()
        await expect(this.page).toHaveURL(/home/)

    }
    async CategoryCheck()
    {
        await expect(this.allCat).toBeVisible()
        await this.allCat.hover()

    }

}