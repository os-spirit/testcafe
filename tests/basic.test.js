import { Selector, t } from "testcafe";
// import {before} from 'testcafe';
fixture (`Getting started with TestCafe`)
    .page('https://devexpress.github.io/testcafe/example/')
    .before (async t => {

    })
    
    // before('ssss',async t =>{
    //     // Test setup goes here
    //     //await runDatabaseReset()
    //     // await seesTestData()
    // });

    .beforeEach(async t =>{
        //Runs before each test

        await t.setTestSpeed(1)
    //await t.setPageLoadTimeout(0)// ВОТ ЭТО УСТАРЕЛО НАДО ПОМЕНЯТЬ
    
    });

    // after(async t => {
    //     //Cleaning test data
    //     // Logging and sending data to monitoring system
    // });

    // afterEach( async t=> {
    //     //Runs after each test
    // });


test('My first testcafe test', async t =>{
        //here goes testcafe code
    //await t.setTestSpeed(1),  //test speed controler from 0.1 to 1
    await t.typeText("#developer-name", "Bob"),
    //await t.wait(3000), //wait if need some debug
    await t.click ("#submit-button"),
    await t.expect(Selector("#article-header").innerText).contains("Thank you, Bob!")

});


test('Same test with const for selectors', async t =>{

    const nameInput = Selector ('#developer-name');
    const submitButton = Selector('#submit-button');
    const articleText = Selector ('#article-header').innerText;

    await t.typeText(nameInput, "Bob"),
    await t.click (submitButton),
    await t.expect(articleText).contains("Thank you, Bob!")

});

test('Same test with const for selectors + screenshot of the fullscreen', async t =>{

    const nameInput = Selector ('#developer-name');
    const submitButton = Selector('#submit-button');
    const articleText = Selector ('#article-header').innerText;
    //await t.takeScreenshot({fullPage:true}),
    await t.takeElementScreenshot(submitButton),
    await t.typeText(nameInput, "Bob"),
    await t.click (submitButton),
    await t.expect(articleText).contains("Thank you, Bob!")
    
    

    
    });