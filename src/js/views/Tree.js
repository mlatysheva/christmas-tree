import AbstractView from "./AbstractView.js";

export class Tree extends AbstractView {
  constructor() {
    super();
    this.setTitle('Tree');
  }

  getHtml() {
    const app = document.querySelector('.app');
    app.classList.add('blur');
    const footer = document.querySelector('.footer');
    if(footer.classList.contains('none')) {
      footer.classList.remove('none');
    }
    return `
    <div class="tree-view">
        <ul class="lightrope">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

      <div class="wrapper left-wrapper">
        <div class="controls">
          <div class="control-button music-button play"></div>
          <div class="control-button snow-button noSnow"></div>
        </div>
        <p class="caption">Select Tree</p>
        <div class="tree-choice-container">
          <div class="tree-to-select tree1" id="tree1"></div>
          <div class="tree-to-select tree2" id="tree2"></div>
          <div class="tree-to-select tree3" id="tree3"></div>
          <div class="tree-to-select tree4" id="tree4"></div>
          <div class="tree-to-select tree5" id="tree5"></div>
          <div class="tree-to-select tree6" id="tree6"></div>
        </div>
        <p class="caption">Select Background</p>
        <div class="background-choice-container">
          <div class="background-to-select background1" id="background1"></div>
          <div class="background-to-select background2" id="background2"></div>
          <div class="background-to-select background3" id="background3"></div>
          <div class="background-to-select background4" id="background4"></div>
          <div class="background-to-select background5" id="background5"></div>
          <div class="background-to-select background6" id="background6"></div>
          <div class="background-to-select background7" id="background7"></div>
          <div class="background-to-select background8" id="background8"></div>
          <div class="background-to-select background9" id="background9"></div>
          <div class="background-to-select background10" id="background10"></div>
        </div>
        <p class="caption">Lights</p>
        <div class="lights-wrapper">
          <div class="lights-control">
            <div class="light-bulb multicolour-bulb"></div>
            <div class="light-bulb red-bulb"></div>
            <div class="light-bulb blue-bulb"></div>
            <div class="light-bulb yellow-bulb"></div>
            <div class="light-bulb green-bulb"></div>
          </div>
          <div class="onoffswitch">
            <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" tabindex="0" checked>
            <label class="onoffswitch-label" for="myonoffswitch">
                <span class="onoffswitch-inner"></span>
                <span class="onoffswitch-switch"></span>
            </label>
          </div>
        </div>
      </div>

      <div class="wrapper central-wrapper">
        <div class="snowflakes"></div>
        <div class="main-background">
          <div class="main-tree">
            <map name="tree-map" class="droppable">
              <area shape="poly" coords="365,699,189,706,113,683,31,608,2,555,2,539,18,437,73,351,106,224,161,134,243,-1,306,75,353,144,399,221,424,359,452,459,496,550,444,664">
            </map>
            <img src="assets/tree/5.webp" class="main-tree" id="main-tree" usemap="#tree-map" alt="Christmas tree">

          </div>
        </div>
      </div>

      <div class="wrapper right-wrapper">
        <p class="caption">Toys</p>
        <div class="selected-toys-container">
          <div class="selected-toy">
            <img src="" id="toy1" alt="Christmas toy" class="selected-toy-image" draggable="true">
            <div class="available-amount"></div>
          </div>
          <div class="selected-toy">
            <img src="" id="toy2" alt="Christmas toy" class="selected-toy-image" draggable="true">
            <div class="available-amount"></div>
          </div>
          <div class="selected-toy">
            <img src="" id="toy3" alt="Christmas toy" class="selected-toy-image" draggable="true">
            <div class="available-amount"></div>
          </div>
          <div class="selected-toy">
            <img src="" id="toy4" alt="Christmas toy" class="selected-toy-image" draggable="true">
            <div class="available-amount"></div>
          </div>
          <div class="selected-toy">
            <img src="" id="toy5" alt="Christmas toy" class="selected-toy-image" draggable="true">
            <div class="available-amount"></div>
          </div>
          <div class="selected-toy">
            <img src="" id="toy6" alt="Christmas toy" class="selected-toy-image" draggable="true">
            <div class="available-amount"></div>
          </div>
          <div class="selected-toy">
            <img src="" id="toy7" alt="Christmas toy" class="selected-toy-image" draggable="true">
            <div class="available-amount"></div>
          </div>
          <div class="selected-toy">
            <img src="" id="toy8" alt="Christmas toy" class="selected-toy-image" draggable="true">
            <div class="available-amount"></div>
          </div>
          <div class="selected-toy">
            <img src="" id="toy9" alt="Christmas toy" class="selected-toy-image" draggable="true">
            <div class="available-amount"></div>
          </div>
          <div class="selected-toy">
            <img src="" id="toy10" alt="Christmas toy" class="selected-toy-image" draggable="true">
            <div class="available-amount"></div>
          </div>
          <div class="selected-toy">
            <img src="" id="toy11" alt="Christmas toy" class="selected-toy-image" draggable="true">
            <div class="available-amount"></div>
          </div>
          <div class="selected-toy">
            <img src="" id="toy12" alt="Christmas toy" class="selected-toy-image" draggable="true">
            <div class="available-amount"></div>
          </div>
          <div class="selected-toy">
            <img src="" id="toy13" alt="Christmas toy" class="selected-toy-image" draggable="true">
            <div class="available-amount"></div>
          </div>
          <div class="selected-toy">
            <img src="" id="toy14" alt="Christmas toy" class="selected-toy-image" draggable="true">
            <div class="available-amount"></div>
          </div>
          <div class="selected-toy">
            <img src="" id="toy15" alt="Christmas toy" class="selected-toy-image" draggable="true">
            <div class="available-amount"></div>
          </div>
          <div class="selected-toy">
            <img src="" id="toy16" alt="Christmas toy" class="selected-toy-image" draggable="true">
            <div class="available-amount"></div>
          </div>
          <div class="selected-toy">
            <img src="" id="toy17" alt="Christmas toy" class="selected-toy-image" draggable="true">
            <div class="available-amount"></div>
          </div>
          <div class="selected-toy">
            <img src="" id="toy18" alt="Christmas toy" class="selected-toy-image" draggable="true">
            <div class="available-amount"></div>
          </div>
          <div class="selected-toy">
            <img src="" id="toy19" alt="Christmas toy" class="selected-toy-image" draggable="true">
            <div class="available-amount"></div>
          </div>
          <div class="selected-toy">
            <img src="" id="toy19" alt="Christmas toy" class="selected-toy-image" draggable="true">
            <div class="available-amount"></div>
          </div>
        </div>

        <p class="caption">Your trees</p>
        <div class="decorated-trees-wrapper">
          <div class="decorated-tress-inner-container">
            <div class="decorated-tree decorated-tree1" id="decorated-tree1"></div>
            <div class="decorated-tree decorated-tree2" id="decorated-tree2"></div>
            <div class="decorated-tree decorated-tree3" id="decorated-tree3"></div>
            <div class="decorated-tree decorated-tree4" id="decorated-tree4"></div>        
            <div class="decorated-tree decorated-tree5" id="decorated-tree5"></div>
            <div class="decorated-tree decorated-tree6" id="decorated-tree6"></div>
          </div>

        </div>

      </div>
    </div>
    `;
  }
}