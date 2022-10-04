import { Home } from './views/Home';
import { Toys } from './views/Toys.js';
import { Tree } from './views/Tree.js';
import { Error } from './views/Error.js';
import { renderToys } from './services/toysFunc';
import { filterBySize, resetFilters, showFavourites, showSelected } from './services/filters.js'
import { filterByShape } from './services/filterByShape';
import { filterByColour } from './services/filterByColour';
import { audioPlayer } from './services/audioPlayer.js';
import { letItSnow } from './services/snowflakes';
import { setBackground, setTree } from './services/chooseSettings.js';
import { renderSelectedToys } from './services/selectedToys.js';
import { decorateTree } from './services/dragAndDrop';

async function navigation() {

  const app = document.querySelector('#app');

  const homeComponent = new Home();
  const toysComponent = new Toys();
  const treeComponent = new Tree();

  const routes = [
    { path: '/', component: homeComponent, },
    { path: '/toys/', component: toysComponent, },
    { path: '/tree/', component: treeComponent, },
  ];

  const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';

  const findComponentByPath = (url, urls) => urls.find(r => r.path.match(url)) || undefined;

  const router = () => {
    // Find the component based on the current path
    const path = parseLocation();
    
    let componentFound = findComponentByPath(path, routes) || {};
    if (!componentFound) {
      componentFound = Error;
    }
    
    // Render the component in the "app" placeholder
    app.innerHTML = componentFound.component.getHtml();
    
  };

  window.addEventListener('hashchange', router);
  window.addEventListener('load', router);
  const events = ['load', 'hashchange'];
  [...events].forEach(event => {
    window.addEventListener(event, e => {
      const hashClicked = location.hash;
      if (hashClicked === '#/toys/') {

        renderToys();  
        filterBySize();
        filterByShape();
        filterByColour();
        showFavourites(); 
        showSelected();
        resetFilters();                
      }  
      if (hashClicked === '#/tree/') {
        audioPlayer();
        letItSnow();
        setTree();
        setBackground();
        renderSelectedToys();
        decorateTree();
      }    
    });
  })
}

export { navigation }