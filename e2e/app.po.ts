import { browser, element, by } from 'protractor';

export class PomegranateSpaDemo000Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
