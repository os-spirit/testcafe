import { Selector } from "testcafe";

fixture('User can send message to the developers')
    .page('http://zero.webappsecurity.com/index.html')


    test('FeedBackForm', async t =>{
        
        // Selectors
        const feedBackButton = Selector ('#feedback');
        const userName = Selector ('#name');
        const userEmail = Selector ('#email');
        const userSubject = Selector ('#subject');
        const userComment = Selector ('#comment');
        const sendMessage = Selector ('.btn-primary')
        // Actions
        await t.click(feedBackButton)
        await t.typeText(userName,'valentin.nalivayko@gmail.com')
        await t.typeText(userEmail, 'valentin.nalivayko@gmail.com')
        await t.typeText(userSubject,'Hello World!')
        await t.typeText(userComment, 'Hi, it is my first try in the solo automation tests development')
        await t.click(sendMessage);
    })