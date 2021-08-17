import { Selector } from "testcafe";

fixture (`Getting started with TestCafe`)
    .page('https://devexpress.github.io/testcafe/example/');




test('My first testcafe test', async t =>{
    //here goes testcafe code
    await t.typeText("#developer-name", "Bob")
    await t.click ("#submit-button")

    await t.expect(Selector("#article-header").innerText).contains("Thank you, Bob!")

});

