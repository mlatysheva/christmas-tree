function moveToy(ball) {

  // let currentDroppable = null;
  let currentDroppable = document.querySelector('.droppable');
  console.log(`currentDroppable is ${currentDroppable}`);

  // const treeArea = document.getElementById("main-tree");

  ball.onmousedown = function(event) {

    let shiftX = event.clientX - ball.getBoundingClientRect().left;
    let shiftY = event.clientY - ball.getBoundingClientRect().top;

    ball.style.position = 'absolute';
    ball.style.zIndex = 1000;
    // currentDroppable.append(ball);
    document.body.append(ball);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
      ball.style.left = pageX - shiftX + 'px';
      ball.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);

      ball.hidden = true;
      let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
      ball.hidden = false;

      if (!elemBelow) return;

      let droppableBelow = elemBelow.closest('.droppable');
      if (currentDroppable != droppableBelow) {
        if (currentDroppable) { // null если мы были не над droppable до этого события
          // (например, над пустым пространством)
          leaveDroppable(currentDroppable);
        }
        currentDroppable = droppableBelow;
        if (currentDroppable) { // null если мы не над droppable сейчас, во время этого события
          // (например, только что покинули droppable)
          enterDroppable(currentDroppable);
        }
      }
    }

    document.addEventListener('mousemove', onMouseMove);

    ball.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      ball.onmouseup = null;
    };

  };

  function enterDroppable(elem) {
    elem.style.background = 'pink';
  }

  function leaveDroppable(elem) {
    elem.style.background = '';
  }

  ball.ondragstart = function() {
    return false;
  };
}

function decorateTree() {
  var checkExist = setInterval(() => {
      
    // 20 selected or first toys
    const selectedToys = document.querySelectorAll('.selected-toy-image');   

    if (selectedToys) {
      clearInterval(checkExist);
    }
    selectedToys.forEach((toy, index) =>{
      moveToy(toy);
    }) 
  })
}

export { decorateTree }