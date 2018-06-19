import Page from './page';

class YahooPage extends Page {

  get searchInput() { return this.browser.element('//*[input="yschsp"]'); }
  get yahooSearchButton() { return this.browser.element('//div[@class="mag-glass"]'); }
  get searchResultsList() { return this.browser.element('#results'); }

  open() {
    super.open('https://search.yahoo.com')
    browser.pause(1000);
  }

  enterText(item) {
    this.searchInput.clearElement();
    this.searchInput.setValue(item);
  }

  search() {
    this.yahooSearchButton.click();
  }

  isSearched() {
    this.searchResultsList.waitForVisible(1000)
    return this.searchResultsList.isVisible();
  }
}

export default new YahooPage();
