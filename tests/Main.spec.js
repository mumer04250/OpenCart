import {test,expect} from '@playwright/test'
import { userSignup } from '../Pages/Signup Navigation'
import { CreateUser } from '../Pages/CreateUser'
import { testdata } from '../Utils/UserRegisterData'
import { userLogin } from '../Pages/Login'
import { VerifyHome } from '../Pages/VerifyHomePage'
import { AddtoCartFun } from '../Pages/AddtoCart'
let signupObj
let createUserObj
let userLoginObj
let verifyHomeobj
let addtoCartobj
test.beforeEach(async({page})=>{
    await page.goto('https://demo.abantecart.com/')
})
test ('Login Click',async({page})=>{
    signupObj=new userSignup(page)
    //await page.pause()
    await signupObj.Loginclick()

})
test('New User',async({page})=>{
    signupObj=new userSignup(page)
    await signupObj.Loginclick()
    createUserObj=new CreateUser(page)
    await createUserObj.newUser()
    //For existig email check
    //await expect(createUserobj.existEmail).toBeVisible()
    //await expect(page).toHaveURL('**/account/success')
   
    //await expect(page).toHaveURL(/success/)
})
test ('User Login',async({page})=>{
    // signupObj=new userSignup(page)
    // await signupObj.Loginclick()
    // createUserObj=new CreateUser(page)
    // await createUserObj.newUser()
    // await page.goto('https://demo.abantecart.com/index.php?rt=account/logout')
    // await page.goto('https://demo.abantecart.com/index.php?rt=account/login')
    userLoginObj=new userLogin(page)
    await userLoginObj.Login()
    //await expect(page).toHaveURL(/login/)
    await expect(page).toHaveURL(/account/)

})
test ('Verify Home Page',async({page})=>{
    userLoginObj=new userLogin(page)
    await userLoginObj.Login()
    await expect(page).toHaveURL(/account/)
    verifyHomeobj=new VerifyHome(page)
    await verifyHomeobj.accVerify()
    await verifyHomeobj.navigationCheck()
    await verifyHomeobj.CategoryCheck()


})
test ('Category Select',async({page})=>{
     userLoginObj=new userLogin(page)
    await userLoginObj.Login()
    await expect(page).toHaveURL(/account/)
    verifyHomeobj=new VerifyHome(page)
    await verifyHomeobj.accVerify()
    addtoCartobj=new AddtoCartFun(page)
    await addtoCartobj.catSelect()

})