import {expect} from '@playwright/test'
import { testdata } from '../Utils/UserRegisterData'
export class CreateUser{
    /** @param {import('@playwright/test').Page} page */
    constructor(page)
    {
        this.page=page
        this.txtUserName=this.page.locator('#RegisterCustomerFrm_loginname')
        this.txtpassword=this.page.locator('#RegisterCustomerFrm_password')
        this.txtCfpassword=this.page.locator('#RegisterCustomerFrm_confirm')
        this.txtFname=this.page.locator('#RegisterCustomerFrm_firstname')
        this.txtLname=this.page.locator('#RegisterCustomerFrm_lastname')
        this.txtEmail=this.page.locator('#RegisterCustomerFrm_email')
        this.ddCountry=this.page.locator('#RegisterCustomerFrm_country_id')
        this.ddState=this.page.locator('#RegisterCustomerFrm_zone_id')
        this.txtAddress=this.page.locator('#RegisterCustomerFrm_address_1')
        this.txtCity=this.page.locator('#RegisterCustomerFrm_city')
        this.txtPostcode=this.page.locator('#RegisterCustomerFrm_postcode')
        this.chbPolicy=this.page.locator('#RegisterCustomerFrm_agree')
        this.btnSubmit=this.page.locator('#submit_button')
        this.existEmail=this.page.locator('[role="alert"]')
        //this.accCreatemsg=this.page.getByText('Created!')

    }
    async newUser()
    {
        await this.txtUserName.fill(testdata.username)
        await this.txtpassword.fill(testdata.password)
        await this.txtCfpassword.fill(testdata.confirmPassword)
        await this.txtFname.fill(testdata.firstName)
        await this.txtLname.fill(testdata.lastName)
        await this.txtEmail.fill(testdata.email)
        await this.ddCountry.selectOption(testdata.country)
        await this.page.waitForTimeout(2000) 
        await this.ddState.selectOption(testdata.state)
        await this.txtAddress.fill(testdata.address)
        await this.txtCity.fill(testdata.city)
        await this.txtPostcode.fill(testdata.postCode)
        await this.chbPolicy.check()
        await this.btnSubmit.click()
        //await expect(this.page).toHaveURL(/success/)
        //await this. page.pause()
        // await expect(createUserobj.accCreatemsg).toBeVisible()
        
    }


}