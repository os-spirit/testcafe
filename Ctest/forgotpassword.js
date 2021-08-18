import { Selector } from "testcafe";

fixture ('send forgotten password test').page('http://zero.webappsecurity.com/index.html')

test('send forgot password', async t =>{
        //t.setTestSpeed(0.1)
        //Get selectors

        const signInButton = Selector ('#signin_button')
        const LinkToPassword = Selector ("a").withText('Forgot your password ?')
        const emailFiled = Selector ('#user_email')
        //const submitButton = Selector ('.btn-primary')
        const forgotText = Selector ('div').innerText
        
        //Actions
        await t.click(signInButton)
        await t.click(LinkToPassword)
        await t.typeText(emailFiled, ('valentin.nalivayko@gmail.com'))
        await t.pressKey('enter')
        
        //Assertions
        await t.expect(forgotText).contains('valentin.nalivayko@gmail.com')
        await t.expect(emailFiled.exists).notOk()

    
   
  

    // const inputForm = Selector ('.form-inputs')
    // await t.expect(inputForm).ok()

    
    
})
