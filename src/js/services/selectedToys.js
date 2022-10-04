import { data } from '../data.js';
import { MAX_FAVOURITES } from '../constants.js';

function renderSelectedToys() {
  let selectedToys=[];

  const toys = data;

  

  if (localStorage.getItem('selected')) {
    selectedToys = JSON.parse(localStorage.getItem('selected'));
  }

  var checkExist = setInterval(() => {
    
    // div containing the 20 selected or first toys
    const selectedToyDivs = document.querySelectorAll('.selected-toy'); 

    // div in the nav menu showing the number of selected toys
    const numberOfSelected = document.querySelector('.selected-number');   

    if (selectedToyDivs) {
      clearInterval(checkExist);
      numberOfSelected.innerText = selectedToys.length;
      let counter = 0;
      let addedToys =[];
      let toyIndex = 1;
      [...selectedToyDivs].forEach((div, index) => {
        const availableAmount = div.querySelector('.available-amount');
        const toyImage = div.querySelector('.selected-toy-image');
        if (selectedToys.length > 0) {
          if (counter < selectedToys.length)  {
            toyImage.src=`assets/toys/${selectedToys[index]}.webp`;
            var selectedToy = toys.find(toy => {
              return toy.num === selectedToys[index];
            })
            availableAmount.innerText = selectedToy.count;
            counter++;
            addedToys.push(selectedToys[index]);
          } else {
            availableAmount.innerHTML = "0";
            selectedToy = toys.find (toy => {
              return !addedToys.includes(toy.num);
            });
            toyImage.src=`assets/toys/${selectedToy.num}.webp`;
            availableAmount.innerHTML = selectedToy.count;
            addedToys.push(selectedToy.num);
          } 
        } else {
          selectedToy = toys.find(toy => {
            return toy.num == toyIndex;
          })
          toyImage.src=`assets/toys/${selectedToy.num}.webp`;
          availableAmount.innerHTML = selectedToy.count;
          toyIndex++;
        }
      })
    }
  })
}

export { renderSelectedToys }
