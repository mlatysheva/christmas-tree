import { MAX_FAVOURITES } from "../constants";

function exceedsTwenty(number:number): boolean {
  return (number >= MAX_FAVOURITES) ? true: false;
}

function throwAlert(booleanValue: boolean): void {
  if (booleanValue) {
    alert(`The allowed number of ${MAX_FAVOURITES} favourites is reached!\nYou cannot add any more!`);
  }
}

// populate from LS the number of favourites shown on the menu
function getFavouritesFromLS(array: string[], element: HTMLElement): void {
  const favouritesFromLS = localStorage.getItem('favourites');
    if (favouritesFromLS) {
      array = JSON.parse(favouritesFromLS);
      element.innerText = array.length.toString();
    } else {
      element.innerHTML = '0';
    }
}

// update the number of favourites shown on the menu
function updateSelectedNumber(element: HTMLElement, array: string[]): void {
  element.innerText = array.length.toString();
}

export { exceedsTwenty, throwAlert, updateSelectedNumber, getFavouritesFromLS }