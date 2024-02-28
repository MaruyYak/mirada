window.onload = function () { 
  burgermenuOnload()
}  

function burgermenuOnload() {
  const burgerMenu = document.querySelector('.burger_menu');
  const navOptions = document.querySelector('.nav_options');

  burgerMenu.addEventListener('click', ()=> {onOpenBurger('click')});
  navOptions.addEventListener('click', (event) => onCloseBurger(event));

  burgerMenu.addEventListener('touchstart', ()=> {onOpenBurger('tuch')});
  navOptions.addEventListener('touchstart', (event) => onCloseBurger(event));
}

function onOpenBurger(event) {
  alert(event);
  this.classList.toggle('active');
  navOptions.classList.toggle('open');
}

function onCloseBurger(event) {
  if (!event.target.classList.contains('nav_options')) {
    navOptions.classList.toggle('open');
    burgerMenu.classList.toggle('active');
}
}
