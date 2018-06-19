
import { defineSupportCode } from 'cucumber';
import googlePage from '../pageobjects/google-search.page';
import yahooPage from '../pageobjects/yahoo-search.page';

defineSupportCode(function({ When }) {
  // *** belongs to Google search feature
  When(/^I enter "([^"]*)" into the search box$/, function(arg1) {
    googlePage.enterSearch(arg1);
    googlePage.searchField.getValue().should.equal(arg1);
  });

  When(/^I click the search button$/, function() {
    googlePage.search();
  });

  // *** belongs to the Yahoo search feature
  When(/^I enter "([^"]*)" into the search input field$/, function(arg1) {
    yahooPage.enterText(arg1);
    yahooPage.searchInput.getValue().should.equal(arg1);
  });

  When(/^I click the search now button$/, function() {
    yahooPage.search();
  });

});
