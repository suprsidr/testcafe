import { Selector } from 'testcafe';

export default class Page {
  constructor() {
    this.nameInput = Selector('#developer-name');
    this.submitButton = Selector('#submit-button');
    this.articleHeader = Selector('#article-header');
    this.triedTestCafe = Selector('[name="tried-test-cafe"]');
    this.os = Selector('[name="os"]');
    this.windows = Selector('#windows');
    this.linux = Selector('#linux');
  }
}