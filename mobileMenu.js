window.onload = function () { 
  burgermenuOnload();
  addTooltip();
}  

function burgermenuOnload() {
  const burgerMenu = document.querySelector('.burger_menu');
  const navOptions = document.querySelector('.nav_options');
  const body = document.querySelector('.site_body')

  burgerMenu.addEventListener('click', function() {
      this.classList.toggle('active');
      navOptions.classList.toggle('open');
  })

  navOptions.addEventListener('click', function(event) {
      if (!event.target.classList.contains('nav_options')) {
          navOptions.classList.remove('open');
          burgerMenu.classList.remove('active');
      }
  })

}

function addTooltip() {
  const tooltips = document.querySelectorAll('.tooltipHave');
  
  tooltips.forEach(tooltip => {
    const tooltipText = tooltip.nextElementSibling;
    tooltip.addEventListener('mouseover', () => {
      tooltipText.style.visibility = 'visible';
    });

    tooltip.addEventListener('mouseout', () => {
      tooltipText.style.visibility = 'hidden';
    });
  });

}

