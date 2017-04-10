import { Selector } from 'testcafe';

export default class Page {
  constructor() {
    this.nameInput = Selector('#developer-name');
    this.submitButton = Selector('#submit-button');
    this.articleHeader = Selector('#article-header');

    // most elements have ids, but you can use pretty much any css selector
    this.triedTestCafe = Selector('[name="tried-test-cafe"]');

    // radio group
    this.os = Selector('[name="os"]');
    this.windows = Selector('#windows');
    this.macos = Selector('#macos');
    this.linux = Selector('#linux');

    // select
    this.preferredInterface = Selector('#preferred-interface');

    // textarea
    this.comments = Selector('#comments');

    // slider value
    this.slider = Selector('#testcafe-rank');
  }
}