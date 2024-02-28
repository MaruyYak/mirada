window.onload = function () { 
  burgermenuOnload()
}  


function burgermenuOnload() {
  const burgerMenu = document.querySelector('.burger_menu');
  const navOptions = document.querySelector('.nav_options');
  


  burgerMenu.addEventListener('click', function() {
      this.classList.toggle('active');
      navOptions.classList.toggle('open');
  })
  navList.addEventListener('click', function(event) {
      if (!event.target.classList.contains('nav_list')) {
          navOptions.classList.toggle('open');
          burgerMenu.classList.toggle('active');
      }
  })

  }