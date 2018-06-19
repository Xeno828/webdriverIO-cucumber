
import { defineSupportCode } from 'cucumber';
import googlePage from '../pageobjects/google-search.page';
import yahooPage from '../pageobjects/yahoo-search.page';

defineSupportCode(function({ Given }) {

  // *** belongs to Google search feature
  Given(/^I am on the Google Search page$/, function() {
    googlePage.open();
    browser.getTitle().should.equal('Google');
  });

  // *** belongs to the Yahoo search feature
  Given(/^I am on the search page$/, function(){
    yahooPage.open();
    browser.getTitle().should.equal('Yahoo Search - Web Search');
  });

});
