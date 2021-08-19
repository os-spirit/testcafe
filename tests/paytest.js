import { Selector } from "testcafe";

fixture('Payment testing').page('http://zero.webappsecurity.com/index.html')


test.before(async t =>{
    const signInButton = Selector('#signin_button') // find selector for sign in button and add to the const
    await t.click(signInButton)
    const usernameInput = Selector('#user_login')
    const userpasswordInput = Selector ('#user_password')
    await t.typeText(usernameInput, 'username', { paste: true})
    await t.typeText(userpasswordInput, 'password', {paste: true})
    const submitButton = Selector ('.btn-primary')
    await t.click(submitButton)
})
('User payment', async t =>{
    //Selector

    const payBillsTab = Selector('#pay_bills_tab');
    const addNewPayTab = Selector ("a").withText('Add New Payee');
    const form_name = Selector ('#np_new_payee_name');
    const form_adress = Selector ('#np_new_payee_address');
    const form_account = Selector ('#np_new_payee_account');
    const form_detail = Selector ('#np_new_payee_details');
    const AddButton = Selector ('#add_new_payee');
    const successMessage = Selector ('#alert_content').innerText
    //Actions
    await t.click(payBillsTab)
    await t.click(addNewPayTab)
    await t.typeText(form_name, "name")
    await t.typeText(form_adress, 'adress')
    await t.typeText(form_account, 'account')
    await t.typeText(form_detail, 'detail')
    await t.click(AddButton)
    //Accertions
    await t.expect(successMessage).contains('successfully created.')
})