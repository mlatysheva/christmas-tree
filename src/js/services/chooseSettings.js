function selectTree(element) {
  const mainTree = document.getElementById('main-tree');  
  const btnClasses = element.classList;
  
  if (btnClasses.contains('tree1')) {
    mainTree.src='assets/tree/1.webp';
  } else if (btnClasses.contains('tree2')) {
    mainTree.src='assets/tree/2.webp';
  } else if (btnClasses.contains('tree3')) {
    mainTree.src='assets/tree/3.webp';
  } else if (btnClasses.contains('tree4')) {
    mainTree.src='assets/tree/4.webp';
  } else if (btnClasses.contains('tree5')) {
    mainTree.src='assets/tree/5.webp';
  } else {
    mainTree.src='assets/tree/6.webp';
  } 
  localStorage.setItem('mainTree', JSON.stringify(mainTree.src));
}
function setTree() {
  const mainTree = document.getElementById('main-tree');
  if (localStorage.getItem('mainTree')) {
    mainTree.src = JSON.parse(localStorage.getItem('mainTree'));
  }
  const treeBtns = document.querySelectorAll('.tree-to-select');
  treeBtns.forEach (btn => {
    btn.addEventListener('click', e => {
      selectTree(btn);
    })
  })
}

function selectBackground(element) {
  const mainBackground = document.querySelector('.main-background');
  const btnClasses = element.classList;
  if (btnClasses.contains('background1')) {
    mainBackground.style.backgroundImage = 'url(assets/bg/1.webp)';
  } else if (btnClasses.contains('background2')) {
    mainBackground.style.backgroundImage = 'url(assets/bg/2.webp)';
  } else if (btnClasses.contains('background3')) {
    mainBackground.style.backgroundImage = 'url(assets/bg/3.webp)';
  } else if (btnClasses.contains('background4')) {
    mainBackground.style.backgroundImage = 'url(assets/bg/4.webp)';
  } else if (btnClasses.contains('background5')) {
    mainBackground.style.backgroundImage = 'url(assets/bg/5.webp)';
  } else if (btnClasses.contains('background6')) {
    mainBackground.style.backgroundImage = 'url(assets/bg/6.webp)';
  } else if (btnClasses.contains('background7')) {
    mainBackground.style.backgroundImage = 'url(assets/bg/7.webp)';
  } else if (btnClasses.contains('background8')) {
    mainBackground.style.backgroundImage = 'url(assets/bg/8.webp)';
  } else if (btnClasses.contains('background9')) {
    mainBackground.style.backgroundImage = 'url(assets/bg/9.webp)';
  } else {
    mainBackground.style.backgroundImage = 'url(assets/bg/10.webp)';
  }
  localStorage.setItem('background', JSON.stringify(mainBackground.style.backgroundImage));
}

function setBackground() {
  const mainBackground = document.querySelector('.main-background');
  if (localStorage.getItem('background')) {
    mainBackground.style.backgroundImage = JSON.parse(localStorage.getItem('background'));
  }
  
  const backgroundBtns = document.querySelectorAll('.background-to-select');
  backgroundBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      selectBackground(btn);
    })
  })
}

export { setTree, setBackground }