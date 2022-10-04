import { renderToys } from "./toysFunc";
import { data } from '../data.js';

async function filterByShape() {


  var checkExist = setInterval(() => {
    const ballBtn = document.querySelector('.ball-filter');
    const bellBtn = document.querySelector('.bell-filter');
    const coneBtn = document.querySelector('.cone-filter');
    const flakeBtn = document.querySelector('.flake-filter');
    const figureBtn = document.querySelector('.figurine-filter');

    if (figureBtn) {
      clearInterval(checkExist);

      // arrange toys of particular sizes by arrays
      let [sizeBig, sizeMedium, sizeSmall] = selectSize();

      // variable to keep track of all toys that suit the size filters based on LS
      let arrayBySize = [];

      selectBySize('sizeBig', sizeBig, bigBtn, 'sizeBig', 'sizeMedium', 'sizeSmall', arrayBySize);

      selectBySize('sizeMedium', sizeMedium, mediumBtn, 'sizeBig', 'sizeMedium', 'sizeSmall', arrayBySize);

      selectBySize('sizeSmall', sizeSmall, smallBtn, 'sizeBig', 'sizeMedium', 'sizeSmall', arrayBySize);
    }
  }, 100);   
}  

// create one array out of three arrays kept in LS
function getTotalArray(name1, name2, name3) {
  let array1 = JSON.parse(localStorage.getItem(name1));
  if (array1 === null) {
    array1 = [];
  }
  let array2 = JSON.parse(localStorage.getItem(name2)); 
  if (array2 === null) {
    array2 = [];
  }
  let array3 = JSON.parse(localStorage.getItem(name3)); 
  if (array3 === null) {
    array3 = [];
  }
  return array1.concat(array2).concat(array3);
} 

// render toys by size
// @nameOfArraySize: string, name of array to keep in LS: "sizeBig"
// @arrayOfSize: list of 'num's of the toys that suit the particular filter: received from function selectSize(): [sizeBig]
// @btn: big, medium or small filter button: bigBtn
// @arraySize1 - arraySize3 - names of arrays kept in LS to build final array: sizeBig, ..., sizeSmall
function selectBySize(nameOfArraySize, arrayOfSize, btn, arraySize1, arraySize2, arraySize3, totalArray) {
  
  if (localStorage.getItem(nameOfArraySize)) {
    btn.classList.add('active');
    totalArray = getTotalArray(arraySize1, arraySize2, arraySize3);
    renderToys(totalArray);
  }
  btn.addEventListener('click', e => {
    btn.classList.toggle('active');
      if (btn.classList.contains('active')) {
        localStorage.setItem(nameOfArraySize, JSON.stringify(arrayOfSize));
        totalArray = getTotalArray(arraySize1, arraySize2, arraySize3);
        renderToys(totalArray);
      } else {
        localStorage.removeItem(nameOfArraySize);
        totalArray = getTotalArray(arraySize1, arraySize2, arraySize3);
        renderToys(totalArray);
      }          
  });
}

async function filterBySize() {


  var checkExist = setInterval(() => {
    const bigBtn = document.querySelector('.big-filter');
    const mediumBtn = document.querySelector('.medium-filter');
    const smallBtn = document.querySelector('.small-filter');

    if (smallBtn) {
      clearInterval(checkExist);

      // arrange toys of particular sizes by arrays
      let [sizeBig, sizeMedium, sizeSmall] = selectSize();

      // variable to keep track of all toys that suit the size filters based on LS
      let arrayBySize = [];

      selectBySize('sizeBig', sizeBig, bigBtn, 'sizeBig', 'sizeMedium', 'sizeSmall', arrayBySize);

      selectBySize('sizeMedium', sizeMedium, mediumBtn, 'sizeBig', 'sizeMedium', 'sizeSmall', arrayBySize);

      selectBySize('sizeSmall', sizeSmall, smallBtn, 'sizeBig', 'sizeMedium', 'sizeSmall', arrayBySize);
    }
  }, 100);   
} 

// show selected toys
async function showSelected() {
  var checkExist = setInterval(() => { 
    const iconOfSelected = document.querySelector('.selected-number'); 
    if (iconOfSelected) {
      clearInterval(checkExist);     
      iconOfSelected.addEventListener('click', e => {
        if (iconOfSelected.classList.contains('show-selected')) {
          const selectedOnly = JSON.parse(localStorage.getItem('selected'));
          renderToys(selectedOnly);
          iconOfSelected.classList.remove('show-selected');
        } else {
          renderToys();
          iconOfSelected.classList.add('show-selected');
        }
      })
    }
  }, 100); 
}

// show Grandma's favourite toys
async function showFavourites() {
  var checkExist = setInterval(() => { 
    const favouritesCheckbox = document.querySelector('.favourites-checkbox');  
    if (favouritesCheckbox) {
      clearInterval(checkExist);      
      favouritesCheckbox.addEventListener('click', e => {
        if(favouritesCheckbox.checked === true) {
          const favouritesOnly = [];
          const toyArray = data;
          toyArray.forEach(toy => {
            if (toy.favorite === true) {
              favouritesOnly.push(toy.num);
            }
          })   
          renderToys(favouritesOnly);
        } else {
          renderToys();
        }
      })
    }
  }, 100); 
}

async function resetFilters() {
  var checkExist = setInterval(() => {
    const resetFiltersBtn = document.querySelector('.reset-filters-button');
    if (resetFiltersBtn) {
      clearInterval(checkExist);
      resetFiltersBtn.addEventListener('click', e => {
        alert('This will clear all the filters except for selected toys');
        
        if (localStorage.getItem('sizeBig')) {
          localStorage.removeItem('sizeBig');
        }
        if (localStorage.getItem('sizeMedium')) {
          localStorage.removeItem('sizeMedium');
        }
        if (localStorage.getItem('sizeSmall')) {
          localStorage.removeItem('sizeSmall');
        }
        if (localStorage.getItem('shapeBall')) {
          localStorage.removeItem('shapeBall');
        }
        if (localStorage.getItem('shapeBell')) {
          localStorage.removeItem('shapeBell');
        }
        if (localStorage.getItem('shapeCone')) {
          localStorage.removeItem('shapeCone');
        }
        if (localStorage.getItem('shapeFlake')) {
          localStorage.removeItem('shapeFlake');
        }
        if (localStorage.getItem('shapeFigurine')) {
          localStorage.removeItem('shapeFigurine');
        }
        if (localStorage.getItem('colourWhite')) {
          localStorage.removeItem('colourWhite');
        }
        if (localStorage.getItem('colourYellow')) {
          localStorage.removeItem('colourYellow');
        }
        if (localStorage.getItem('colourRed')) {
          localStorage.removeItem('colourRed');
        }
        if (localStorage.getItem('colourBlue')) {
          localStorage.removeItem('colourBlue');
        }
        if (localStorage.getItem('colourGreen')) {
          localStorage.removeItem('colourGreen');
        }

        const filterBtns = document.querySelectorAll('.size-checkbox');
        [...filterBtns].forEach(btn => {
          if (btn.classList.contains('active')) {
            btn.classList.remove('active');
          }
        })
        const shapeBtns = document.querySelectorAll('.form-filter');
        [...shapeBtns].forEach(btn => {
          if (btn.classList.contains('active')) {
            btn.classList.remove('active');
          }
        })
        const colourBtns = document.querySelectorAll('.colour-checkbox');
        [...colourBtns].forEach(btn => {
          if (btn.classList.contains('active-colour')) {
            btn.classList.remove('active-colour');
          }
        })
        renderToys();
      })
    }
  }, 100);  
}

let toyArray = data;
function selectSize() {
  
  let sizeBig = [];
  let sizeMedium =[];
  let sizeSmall=[];
  [...toyArray].forEach(toy => {
    switch(toy.size) {
      case 'большой':  
        sizeBig.push(toy.num);
        break;    
      case 'средний':  
        sizeMedium.push(toy.num);
        break;    
      case 'малый':
        sizeSmall.push(toy.num);
        break;
    }
  })
  return [sizeBig, sizeMedium, sizeSmall];
}

export { filterBySize, showSelected, resetFilters, showFavourites }


