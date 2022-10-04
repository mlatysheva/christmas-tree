import AbstractView from "./AbstractView.js";

export class Home extends AbstractView {
  constructor() {
    super();
    this.setTitle('Decorate Christmas Tree');
  }


  getHtml() {
    const app = document.querySelector('.app');
    if(app.classList.contains('blur')) {
      app.classList.remove('blur');
    }
    const footer = document.querySelector('.footer');
    if(footer.classList.contains('none')) {
      footer.classList.remove('none');
    }
    return `<a href="#/toys/" data-href="#/toys/" class="nav__link home-page-button home-button">Help Grandma decorate the Christmas Tree</a>
    <a href="#/toys/" data-href="#/toys/" id="start-button" class="nav__link home-page-button start-button">Start</a>`;
  }
}