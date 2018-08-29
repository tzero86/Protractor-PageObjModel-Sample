let HomePage = function() {

    // we create a selector to use it in our test.
    let featuredArticleTitle = element(by.css('.featured-article__content'));

    // we can create some methods to do things with the page

    this.get = async function (){
        browser.get('https://cloud.google.com/blog/');
    };

    this.getArticleTitle = () => {
        return featuredArticleTitle;
    };

    this.getPageTitle = () => {
        return browser.getTitle();
    };

    this.getArticleTitleText = () => {
        return featuredArticleTitle.getText();
    };

    this.isArticleTitleDisplayed = () => {
        return featuredArticleTitle.isDisplayed();
    };

    this.getArticleTitleLength = () => {
        return featuredArticleTitle.getText().then(function(text) {
            console.log('Article Title Length: ', text.length);
            return text.length;
        })
    }

};

module.exports = new HomePage;