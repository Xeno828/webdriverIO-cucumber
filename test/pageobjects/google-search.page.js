import Page from './page';

class GooglePage extends Page {
  /**
   * defining elements
   */

  get searchField() { return browser.element(['input[id=Search]']); }
  get searchButton() { return browser.element('input[type=submit]'); }
  get resultsList() { return browser.element('//div[id=rcnt]'); }

  /**
   * definition of page methods or overwrites
   */

  open() {
    super.open('https://google.com')
    browser.pause(1000);
  }

  enterSearch(item) {
    //this.searchField.clearElement();
    this.searchField.setValue(item);
  }

  search() {
    this.searchButton.click();
  }
  isSearched () {
    this.resultsList.waitForVisible(1000);
    return this.resultsList.isVisible();
  }
}

export default new GooglePage();
