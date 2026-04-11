import {expect} from '@playwright/test'
export class userSignup{
    /** @param {import('@playwright/test').Page} page */
    constructor(page)
    {
        this.page=page
        this.loginIcon = this.page.locator("[title='Login']")
        this.newUserText=this.page.getByText('new customer')
        this.btnSignupContinue=this.page.locator("[title='Continue']")
        this.createAccountPage=this.page.getByText('Create Account') 
        
    }
    async Loginclick()
    {
        await expect(this.loginIcon).toBeVisible()
        await this.loginIcon.click()
        await expect(this.newUserText).toBeVisible()
        await this.btnSignupContinue.click()
        //await expect(this.createAccountPage).toBeVisible()
        
    }
    
    
    
}