import { data } from '../data.js'
import { Toys } from '../views/Toys.js';
import { exceedsTwenty, throwAlert, updateSelectedNumber } from '../services/favourites.ts';
import { MAX_FAVOURITES } from '../constants.js';


function addToSelected(element, id) {
  const numberOfSelected = document.querySelector('.selected-number');
  element.addEventListener('click', () => {

    let arrayOfSelected = JSON.parse(localStorage.getItem('selected'));
    if (arrayOfSelected == undefined || arrayOfSelected == null) {
      arrayOfSelected = [];
    }
    
    const index = arrayOfSelected.indexOf(id);
    if (index > -1) {
      arrayOfSelected.splice(index, 1);
      element.classList.remove('selected');
      localStorage.setItem('selected', JSON.stringify(arrayOfSelected));
      updateSelectedNumber(numberOfSelected, arrayOfSelected);
    } else {
      if(!exceedsTwenty(arrayOfSelected.length)) {
        arrayOfSelected.push(id);
        element.classList.add('selected');
        localStorage.setItem('selected', JSON.stringify(arrayOfSelected));
        updateSelectedNumber(numberOfSelected, arrayOfSelected);
      } else {
        throwAlert(true);
      }  
    }
  })
}

async function renderToys(filters=[]) {

  const app = document.getElementById('app');
  const cardsWrapper = document.querySelector('.cards-wrapper');
  if (cardsWrapper) {
    cardsWrapper.remove();
  }

  // div in the nav menu showing the number of favourite toys
  const numberOfSelected = document.querySelector('.selected-number');

  // array to keep track of favourites
  let selected = [];

  const cardsContainer = document.createElement('div');
  cardsContainer.classList.add('cards-wrapper');

  app.appendChild(cardsContainer);

  let toyArray = data;

  let toyCardComponent = new Toys;

  const toyCardHTML = await toyCardComponent.renderCard();

  if (!filters) {
    cardsWrapper.remove();
  } else if (filters.length === 0) {
  
    toyArray.forEach((toy) => {

      const selectedFromLS = localStorage.getItem('selected');
      if (selectedFromLS) {
        selected = JSON.parse(selectedFromLS);
        numberOfSelected.innerText = selected.length.toString();
      } else {
        numberOfSelected.innerHTML = '0';
      }

      createToyCard(toy);
    })
  } else {
    toyArray.forEach((toy) => {
      
      if (filters.includes(toy.num)) {

        const selectedFromLS = localStorage.getItem('selected');
        if (selectedFromLS) {
          selected = JSON.parse(selectedFromLS);
          numberOfSelected.innerText = selected.length.toString();
        } else {
          numberOfSelected.innerHTML = '0';
        }

        createToyCard(toy);
      }
    })
  }

  function createToyCard(toy) {
    const toyCard = document.createElement('div');
    toyCard.innerHTML = toyCardHTML;
    toyCard.classList.add('card-container');
    cardsContainer.appendChild(toyCard); 

    const toyImage = toyCard.querySelector('.toy-image');
    const toyTitle = toyCard.querySelector('.toy-title');
    const toyAmount = toyCard.querySelector('.toy-property-amount'); 
    const toyYear = toyCard.querySelector('.toy-property-year');
    const toyShape = toyCard.querySelector('.toy-property-shape');
    const toyColour = toyCard.querySelector('.toy-property-colour');
    const toySize = toyCard.querySelector('.toy-property-size');
    const toyFavourite = toyCard.querySelector('.toy-property-favourite');
    const addToSelectedBtn = toyCard.querySelector('.add-to-selected-button');  
    const id = toy.num;

    toyImage.style.backgroundImage = `url(assets/toys/${id}.webp)`;    
    toyTitle.innerText = toy.name;
    toyAmount.innerText=toy.count;
    toyYear.innerText=toy.year;
    toyShape.innerText=toy.shape;
    toyColour.innerText=toy.color;
    toySize.innerText=toy.size;
    toyFavourite.innerText=toy.favorite;
    
    if (selected.includes(id)) {
      // toyFavourite.innerText='true';
      addToSelectedBtn.classList.add('selected');
    } else {
      // toyFavourite.innerText='false';
    } 
    addToSelected(addToSelectedBtn, id);
    // addToFavourite(toyFavourite, addToFavouriteBtn, toy.num, toyFavourite.innerText);
  }

  function addToFavourite(toyFavouriteElement, element, id, isFavourite) {
    element.addEventListener('click', () => {
      
      if (isFavourite === 'false') {
        if(!exceedsTwenty(favourites.length)) {
          isFavourite = 'true';
          favourites.push(id);
          element.classList.add('favourite');
          toyFavouriteElement.innerText='true';
          localStorage.setItem('favourites', JSON.stringify(favourites));
          updateSelectedNumber(numberOfSelected, favourites);
        } else {
          throwAlert(true);
        }
      } else {
        isFavourite = 'false';
        const index = favourites.indexOf(id);
        if (index > -1) {
          favourites.splice(index, 1);
        }
        element.classList.remove('favourite');
        toyFavouriteElement.innerText='false';
        localStorage.setItem('favourites', JSON.stringify(favourites));
        updateSelectedNumber(numberOfSelected, favourites);
      }      
    })
  }
}

export { renderToys }
