// Autogenerated by Specford.
var page, rPage = require('webpage'), test = require('../src/utils/test'),
predicates = [],
continues = [],
pages = [function(status) {
if(status !== 'success') console.log('Network error');
else {
test.start(new Date().getTime());
test.selectorHasText('body', 'About Google', false);
test.selectorDoesntHaveText('body', 'Foo bar baz', false);
test.stop(new Date().getTime());
test.report(2);
phantom.exit();
}
}],
next = function(url) {
if(page) page.close();
page = rPage.create();
page.settings.loadImages = false;
page.open(url, pages.shift());
};
next('http://google.com');