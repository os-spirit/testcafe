import { Selector } from "testcafe";

fixture('Search for user').page('http://zero.webappsecurity.com/index.html')

test('TEst search', async t =>{


    const serachField = Selector ('#searchTerm')
    //const resultsTitle = Selector ('h2')
    const linkText = Selector ('.top_offset').innerText;

    await t.typeText(serachField, ('bank'))
    await t.pressKey('enter')
   // await t.expect(resultsTitle.exist).ok()
   // await t.expect(serachField.exist).ok()
    await t.expect(linkText).contains('The following pages were found for the query: bank')


})