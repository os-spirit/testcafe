import { Selector } from "testcafe";


fixture('Login Test').page('http://zero.webappsecurity.com/index.html')


test('User connot login with invalid credentials', async t =>{
    const signInButton = Selector('#signin_button') // find selector for sign in button and add to the const
    await t.click(signInButton)

    const logInForm = Selector('#login_form')
    await t.expect(logInForm.exists).ok()

    const usernameInput = Selector('#user_login')
    const userpasswordInput = Selector ('#user_password')
    await t.typeText(usernameInput, 'invalid username', { paste: true})
    await t.typeText(userpasswordInput, 'invalid password', {paste: true})

    const submitButton = Selector ('.btn-primary')
    await t.click(submitButton)

    const errorMessage = Selector('.alert-error').innerText
    await t.expect(errorMessage).contains('Login and/or password are wrong.')
})

test('User can login into app', async t =>{
    const signInButton = Selector('#signin_button') // find selector for sign in button and add to the const
    await t.click(signInButton)

    const logInForm = Selector('#login_form')
    await t.expect(logInForm.exists).ok()

    const usernameInput = Selector('#user_login')
    const userpasswordInput = Selector ('#user_password')
    await t.typeText(usernameInput, 'username')
    await t.typeText(userpasswordInput, 'password')

    const submitButton = Selector ('.btn-primary')
    await t.click(submitButton)
    await t.wait(3000)
    
    const accountSummaryTab = Selector('#account_summary_tab')
    await t.expect(accountSummaryTab.exists).ok()
    await t.expect(logInForm.exists).notOk()

    const userIcon = Selector ('.icon-user')
    await t.expect(userIcon.exists).ok()
    await t.click(userIcon)

    const userLogOut = Selector ('#logout_link')
    await t.click(userLogOut)

    const mainPaige = Selector ('.carousel-caption').innerText
    await t.expect(mainPaige).contains('Online Banking')


})
