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
      let [shapeBall, shapeBell, shapeCone, shapeFlake, shapeFigurine] = selectShape();

      // variable to keep track of all toys that suit the size filters based on LS
      let arrayByShape = [];

      selectByShape('shapeBall', shapeBall, ballBtn, 'shapeBall', 'shapeBell', 'shapeCone', 'shapeFlake', 'shapeFigurine', arrayByShape);

      selectByShape('shapeBell', shapeBell, bellBtn, 'shapeBall', 'shapeBell', 'shapeCone', 'shapeFlake', 'shapeFigurine', arrayByShape);
      selectByShape('shapeCone', shapeCone, coneBtn, 'shapeBall', 'shapeBell', 'shapeCone', 'shapeFlake', 'shapeFigurine', arrayByShape);
      selectByShape('shapeFlake', shapeFlake, flakeBtn, 'shapeBall', 'shapeBell', 'shapeCone', 'shapeFlake', 'shapeFigurine', arrayByShape);
      selectByShape('shapeFigurine', shapeFigurine, figureBtn, 'shapeBall', 'shapeBell', 'shapeCone', 'shapeFlake', 'shapeFigurine', arrayByShape);
    }
  }, 100);   
}  

// render toys by size
// @nameOfArraySize: string, name of array to keep in LS: "sizeBig"
// @arrayOfSize: list of 'num's of the toys that suit the particular filter: received from function selectSize(): [sizeBig]
// @btn: big, medium or small filter button: bigBtn
// @arraySize1 - arraySize3 - names of arrays kept in LS to build final array: sizeBig, ..., sizeSmall
function selectByShape(nameOfArrayShape, arrayOfShape, btn, arrayShape1, arrayShape2, arrayShape3, arrayShape4, arrayShape5, totalArray) {
  
  if (localStorage.getItem(nameOfArrayShape)) {
    btn.classList.add('active');
    totalArray = getTotalArray(arrayShape1, arrayShape2, arrayShape3, arrayShape4, arrayShape5);
    renderToys(totalArray);
  }
  btn.addEventListener('click', e => {
    btn.classList.toggle('active');
      if (btn.classList.contains('active')) {
        localStorage.setItem(nameOfArrayShape, JSON.stringify(arrayOfShape));
        totalArray = getTotalArray(arrayShape1, arrayShape2, arrayShape3, arrayShape4, arrayShape5);
        renderToys(totalArray);
      } else {
        localStorage.removeItem(nameOfArrayShape);
        totalArray = getTotalArray(arrayShape1, arrayShape2, arrayShape3, arrayShape4, arrayShape5);
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
function selectShape() {
  
  let shapeBall = [];
  let shapeBell =[];
  let shapeCone=[];
  let shapeFlake=[];
  let shapeFigurine=[];
  [...toyArray].forEach(toy => {
    switch(toy.shape) {
      case 'шар':  
      shapeBall.push(toy.num);
        break;    
      case 'колокольчик':  
      shapeBell.push(toy.num);
        break;    
      case 'шишка':
        shapeCone.push(toy.num);
        break;
      case 'снежинка':
        shapeFlake.push(toy.num);
        break;
      case 'фигурка':
        shapeFigurine.push(toy.num);
        break;
    }
  })
  return [shapeBall, shapeBell, shapeCone, shapeFlake, shapeFigurine];
}

export { filterByShape, selectByShape }