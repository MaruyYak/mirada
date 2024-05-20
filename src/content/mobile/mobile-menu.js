export function burgermenuOnload() {
  const burgerMenu = document.querySelector('.burger_menu');
  const navOptions = document.querySelector('.nav_options');
  const burgerMediaIcons = document.querySelector('.burger_media_icons');

  burgerMenu.addEventListener('click', function() {
      this.classList.toggle('active');
      navOptions.classList.toggle('open');
      setTimeout(() => {        
        burgerMediaIcons.classList.toggle('open');
      }, 150);
  })

  navOptions.addEventListener('click', function(event) {
      if (!event.target.classList.contains('nav_options')) {
        burgerMenu.classList.remove('active');
        navOptions.classList.remove('open');
        burgerMediaIcons.classList.remove('open');
      }
  })

}

export function addTooltip() {
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

