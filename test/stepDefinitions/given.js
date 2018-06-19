
import { defineSupportCode } from 'cucumber';
import googlePage from '../pageobjects/google-search.page';

defineSupportCode(function({ Given }) {

  // *** belongs to Google serch feature
  Given(/^I am on the Google Search page$/, function() {
    googlePage.open();
    browser.getTitle().should.equal('Google');
  });

});
