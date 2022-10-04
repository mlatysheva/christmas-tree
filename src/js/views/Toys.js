import AbstractView from "./AbstractView.js";

export class Toys extends AbstractView {
  constructor() {
    super();
    this.setTitle('Select Toys');
  }

  getHtml() {
    const app = document.querySelector('.app');
    app.classList.add('blur');
    const footer = document.querySelector('.footer');
    footer.classList.add('none');
    return `
    <div class="filters">

      <div class="filters-wrapper value-filters">
        <h3 class="filter-name">VALUE FILTERS</h3>
        <div class="filter-container forms-filter" id="form-filter-container">
          <p class="filter-parameter">Form:</p>
          <button id="ball-filter" class="form-filter ball-filter"></button>
          <button id="bell-filter" class="form-filter bell-filter"></button>
          <button id="icicle-filter" class="form-filter cone-filter"></button>
          <button id="flake-filter" class="form-filter flake-filter"></button>
          <button id="toy-filter" class="form-filter figurine-filter"></button>
        </div>

        <div class="filter-container colours-filter" id="colour-filter-container">
          <p class="filter-parameter">Colour:</p>
          <button id="white" class="colour-checkbox white-filter"></button>
          <button id="yellow" class="colour-checkbox yellow-filter"></button>
          <button id="red" class="colour-checkbox red-filter"></button>
          <button id="blue" class="colour-checkbox blue-filter"></button>
          <button id="green" class="colour-checkbox green-filter"></button>
        </div>      
      
        <div class="filter-container size-filter" id="size-filter-container">
          <p class="filter-parameter">Size:</p>
          <button id="big" class="size-checkbox big-filter"></button>
          <button id="medium" class="size-checkbox medium-filter"></button>
          <button id="small" class="size-checkbox small-filter"></button>
        </div>

        <div class="filter-container favourites-filter" id="favourites-filter">
          <p class="filter-parameter filter-parameter_favourites">Favourites only:</p>
          <input type="checkbox" class="favourites-checkbox"></input>
        </div>
      </div> <!-- end of value filters -->

      <div class="filters-wrapper range-filters">
        <h3 class="filter-name">RANGE FILTERS</h3>
        <div class="filter-container amount-filter" id="amount-filter-container">
          <p class="filter-parameter filter-parameter_range">By amount:</p>
          <div class="range-wrapper">
            <span class="amount-number">1</span>
            <input type="range" min="1" max="12" step="1" id="amount-filter" class="amount-filter"></input>
            <span class="amount-number">12</span>
          </div>
        </div>
        <div class="filter-container year-filter" id="year-filter-container">
          <p class="filter-parameter filter-parameter_range">By year:</p>
          <div class="range-wrapper">
            <span class="amount-number">1940</span>
            <input type="range" min="1940" max="2021" step="10" id="year-filter" class="year-filter"></input>
            <span class="amount-number">2021</span>
          </div>
        </div>
      </div> <!-- End of range filters -->

      <div class="filters-wrapper sort-filters">
        <h3 class="filter-name">SORT</h3>
        <div class="sort-filter filter-container" id="sort-filter-container">
          <select name="sortBy" id="sort" class="sort-input ">
            <option value="nameUp">A to Z</option>
            <option value="nameDown">Z to A</option>
            <option value="amountUp">Amount ascending</option>
            <option value="amountDown">Amount descending</option>
          </select>          
        </div>
        <div>
        <button class="reset-filters-button">Reset filters</button>
        </div>
      </div> <!-- End of sort filters-->

    </div>`;
  }

  async renderCard() {
    return `
    <div class="toy-title">Title</div>
    <div class="image-text-wrapper">
      <div class="card-image-wrapper">
        <div class="toy-image" ></div>
        <button class="add-to-selected-button"></button>
      </div>
      <div class="card-text-wrapper">
        <div class="toy-property-wrapper">
          <span class="toy-property">Amount:</span>
          <span class="toy-property-value toy-property-amount"></span>
        </div>
        <div class="toy-property-wrapper">
          <span class="toy-property">Year:</span>
          <span class="toy-property-value toy-property-year"></span>
        </div>
        <div class="toy-property-wrapper">
          <span class="toy-property">Shape:</span>
          <span class="toy-property-value toy-property-shape"></span>
        </div>
        <div class="toy-property-wrapper">
          <span class="toy-property">Colour:</span>
          <span class="toy-property-value toy-property-colour"></span>
        </div>
        <div class="toy-property-wrapper">
          <span class="toy-property">Size:</span>
          <span class="toy-property-value toy-property-size"></span>
        </div>
        <div class="toy-property-wrapper">
          <span class="toy-property">Favourite:</span>
          <span class="toy-property-value toy-property-favourite"></span>
        </div>
      </div>
    </div>
    `
  }
}