// Autogenerated by Specford.
var page, rPage = require('webpage'), test = require('../src/utils/test'),
predicates = [],
continues = [],
pages = [function(status) {
if(status !== 'success') console.log('Network error');
else {
test.start(new Date().getTime());
test.fillSelector('section.home-search form input[name="q"]', 'input value');
test.submitSelector('section.home-search form');
page.onUrlChanged = function(targetUrl) {next(targetUrl);};
}
},function(status) {
if(status !== 'success') console.log('Network error');
else {
test.selectorExists('section#content-main div#search-results', false);
test.stop(new Date().getTime());
test.report(1);
phantom.exit();
}
}],
next = function(url) {
if(page) page.close();
page = rPage.create();
page.settings.loadImages = false;
page.open(url, pages.shift());
};
next('https://developer.mozilla.org/en-US/');