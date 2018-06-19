
import { defineSupportCode } from 'cucumber';
import googlePage from '../pageobjects/google-search.page';

defineSupportCode(function({ When }) {
  // *** belongs to Google serch feature
  When(/^I enter "([^"]*)" into the search box$/, function(arg1) {
    googlePage.enterSearch(arg1);
    googlePage.searchField.getValue().should.equal(arg1);
  });

  When(/^I click the search button$/, function() {
    googlePage.search();
  });

});
