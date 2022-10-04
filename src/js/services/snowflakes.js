function createSnowFlake() {
  const snowflakes = document.querySelector('.snowflakes');
	const snow_flake = document.createElement('i');
	snow_flake.classList.add('fas');
	snow_flake.classList.add('fa-snowflake');
	snow_flake.style.left = Math.random() * window.innerWidth + 'px';
	snow_flake.style.animationDuration = Math.random() * 3 + 2 + 's'; // between 2 - 5 seconds
	snow_flake.style.opacity = Math.random();
	snow_flake.style.fontSize = Math.random() * 10 + 10 + 'px';

	snowflakes.appendChild(snow_flake);

	setTimeout(() => {
		snow_flake.remove();
	}, 5000)
}

function letItSnow() {
  var checkExist = setInterval(() => {
    const snowButton = document.querySelector('.snow-button');
    var snowing;

    function toggleSnow() {
      
      snowButton.addEventListener('click', () => {
        if (snowButton.classList.contains('noSnow')) {          
          snowing = setInterval(createSnowFlake, 200);
          localStorage.setItem('snowing', true);
          snowButton.classList.remove('noSnow');

        } else {
          clearInterval(snowing);
          localStorage.setItem('snowing', false);
          snowButton.classList.add('noSnow');
          }
        })
    }

    // main function

    if (snowButton) {
      clearInterval(checkExist);
      if (localStorage.getItem('snowing') === "true") {
        snowing = setInterval(createSnowFlake, 200);
        snowButton.classList.remove('noSnow');
      }   
      toggleSnow();
    }
  }, 100); 
}


export  { letItSnow } 