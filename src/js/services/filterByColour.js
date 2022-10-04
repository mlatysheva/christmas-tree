import { renderToys } from "./toysFunc";
import { data } from '../data.js';
import { selectByShape } from './filterByShape.js';

async function filterByColour() {


  var checkExist = setInterval(() => {
    const whiteBtn = document.querySelector('.white-filter');
    const yellowBtn = document.querySelector('.yellow-filter');
    const redBtn = document.querySelector('.red-filter');
    const blueBtn = document.querySelector('.blue-filter');
    const greenBtn = document.querySelector('.green-filter');

    if (greenBtn) {
      clearInterval(checkExist);

      // arrange toys of particular sizes by arrays
      let [colourWhite, colourYellow, colourRed, colourBlue, colourGreen] = selectColour();

      // variable to keep track of all toys that suit the size filters based on LS
      let arrayByColour = [];

      selectByColour('colourWhite', colourWhite, whiteBtn, 'colourWhite', 'colourYellow', 'colourRed', 'colourBlue', 'colourGreen', arrayByColour);

      selectByColour('colourYellow', colourYellow, yellowBtn, 'colourWhite', 'colourYellow', 'colourRed', 'colourBlue', 'colourGreen', arrayByColour);
      selectByColour('colourRed', colourRed, redBtn, 'colourWhite', 'colourYellow', 'colourRed', 'colourBlue', 'colourGreen', arrayByColour);
      selectByColour('colourBlue', colourBlue, blueBtn, 'colourWhite', 'colourYellow', 'colourRed', 'colourBlue', 'colourGreen', arrayByColour);
      selectByColour('colourGreen', colourGreen, greenBtn, 'colourWhite', 'colourYellow', 'colourRed', 'colourBlue', 'colourGreen', arrayByColour);
    }
  }, 100);   
}  

// render toys by size
// @nameOfArraySize: string, name of array to keep in LS: "sizeBig"
// @arrayOfSize: list of 'num's of the toys that suit the particular filter: received from function selectSize(): [sizeBig]
// @btn: big, medium or small filter button: bigBtn
// @arraySize1 - arraySize3 - names of arrays kept in LS to build final array: sizeBig, ..., sizeSmall
function selectByColour(nameOfArrayColour, arrayOfColour, btn, arrayColour1, arrayColour2, arrayColour3, arrayColour4, arrayColour5, totalArray) {
  
  if (localStorage.getItem(nameOfArrayColour)) {
    btn.classList.add('active-colour');
    totalArray = getTotalArray(arrayColour1, arrayColour2, arrayColour3, arrayColour4, arrayColour5);
    renderToys(totalArray);
  }
  btn.addEventListener('click', e => {
    btn.classList.toggle('active-colour');
      if (btn.classList.contains('active-colour')) {
        localStorage.setItem(nameOfArrayColour, JSON.stringify(arrayOfColour));
        totalArray = getTotalArray(arrayColour1, arrayColour2, arrayColour3, arrayColour4, arrayColour5);
        renderToys(totalArray);
      } else {
        localStorage.removeItem(nameOfArrayColour);
        totalArray = getTotalArray(arrayColour1, arrayColour2, arrayColour3, arrayColour4, arrayColour5);
        renderToys(totalArray);
      }          
  });
}

function getTotalArray(name1, name2, name3, name4, name5) {
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
  let array4 = JSON.parse(localStorage.getItem(name4)); 
  if (array4 === null) {
    array4 = [];
  }
  let array5 = JSON.parse(localStorage.getItem(name5)); 
  if (array5 === null) {
    array5 = [];
  }
  return array1.concat(array2).concat(array3).concat(array4).concat(array5);
} 

let toyArray = data;
function selectColour() {
  
  let colourWhite = [];
  let colourYellow =[];
  let colourRed=[];
  let colourBlue=[];
  let colourGreen=[];
  [...toyArray].forEach(toy => {
    switch(toy.color) {
      case 'белый':  
      colourWhite.push(toy.num);
        break;    
      case 'желтый':  
      colourYellow.push(toy.num);
        break;    
      case 'красный':
        colourRed.push(toy.num);
        break;
      case 'синий':
        colourBlue.push(toy.num);
        break;
      case 'зелёный':
        colourGreen.push(toy.num);
        break;
    }
  })
  return [colourWhite, colourYellow, colourRed, colourBlue, colourGreen];
}

export { filterByColour }