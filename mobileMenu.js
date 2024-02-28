window.onload = function () { 
  burgermenuOnload()
}  


function burgermenuOnload() {
  const burgerMenu = document.querySelector('.burger_menu');
  const navOptions = document.querySelector('.nav_options');

  function toggleMenu() {
    burgerMenu.classList.toggle('active');
    navOptions.classList.toggle('open');
  }

  burgerMenu.addEventListener('click', function() {
    toggleMenu();
  })
  
  burgerMenu.addEventListener('touchstart', function(event) {
    event.preventDefault();
    toggleMenu();
  })

  navList.addEventListener('touchstart', function(event) {
      if (!event.target.classList.contains('nav_list')) {
          navOptions.classList.toggle('open');
          burgerMenu.classList.toggle('active');
      }
  })

  }