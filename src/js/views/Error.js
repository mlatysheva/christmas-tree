import AbstractView from "./AbstractView.js";

export class Error extends AbstractView {
  constructor() {
    super();
    this.setTitle('Error - no such page');
  }


  getHtml() {
    return `<p>404 Page does not exist</a>`;
  }
}