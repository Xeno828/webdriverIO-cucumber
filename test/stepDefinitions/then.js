
import { defineSupportCode } from 'cucumber';
import googlePage from '../pageobjects/google-search.page';
import yahooPage from '../pageobjects/yahoo-search.page';

defineSupportCode(function({ Then }) {
  // *** belongs to Google search feature
  Then(/^I should see a list of search results$/, function() {
    googlePage.isSearched().should.be.true;
  });

  // *** belongs to the Yahoo search feature
  Then(/^I should be returned a list of search results$/, function() {
    yahooPage.isSearched().should.be.true;
  });

});
