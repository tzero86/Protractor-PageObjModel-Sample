const homePage = require('../pages/home.page');
const assert = require('assert');


describe('A very simple first test', () => {
    
    it('should let me open apple.com', () => {
        homePage.get();
        expect(browser.getTitle()).toEqual('Google Cloud Blog | News, Features and Announcements');
    });

    it('should have a featured article title in there.', () => {
        expect(homePage.isArticleTitleDisplayed()).toEqual(true);
    });

    it('and that article title should have some text larger than 3 characters', () => {
       expect(homePage.getArticleTitleLength()).toBeGreaterThan(3);
    });

});