import { expect } from "@playwright/test";
import { testdata } from "../Utils/UserRegisterData";
export class userLogin{
    /** @param {import('@playwright/test').Page} page */
    constructor(page)
    {
        this.page=page
        this.loginIcon = this.page.locator("[title='Login']")
        this.pageVerify=this.page.getByText('Returning Customer')
        this.txtLoginName=this.page.locator('#loginFrm_loginname')
        this.txtLoginPassword=this.page.locator('#loginFrm_password')
        this.btnSubmit=page.getByRole('button', { name: 'Login' })
    }
    async Login()
    {
        await this.loginIcon.click()
        await this.txtLoginName.fill(testdata.username)
        await this.txtLoginPassword.fill(testdata.password)
        await this.btnSubmit.click()
        expect(1).toBe(2)

        //console.log('Buton click')
        // await this.page.pause()
        //await expect (this.pageVerify).toBeVisible()
    }
}