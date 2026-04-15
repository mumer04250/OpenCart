import{expect} from '@playwright/test'
export class AddtoCartFun{
     /** @param {import('@playwright/test').Page} page */
     constructor(page)
     {
        this.page=page
        this.allCat=this.page.locator('#menu_all_categories')
        this.catMakeup=this.page.getByRole('tab',{name:'Makeup'})

    }
    async catSelect()
    {
        await expect(this.allCat).toBeVisible()
        await this.allCat.hover()
        await expect (this.catMakeup).toBeVisible()
        await this.catMakeup.click()
        await expect(this.page).toHaveURL(/makeup/)
    }
    async addtoCart()
    {
        
    }

}
