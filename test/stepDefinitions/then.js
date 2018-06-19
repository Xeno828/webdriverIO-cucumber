
import { defineSupportCode } from 'cucumber';
import googlePage from '../pageobjects/google-search.page';

defineSupportCode(function({ Then }) {
  // *** belongs to Google search feature
  Then(/^I should see a list of search results$/, function() {
    googlePage.isSearched().should.be.true;
  });

});
