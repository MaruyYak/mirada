export function setFromValidation() {

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const contactForm = document.getElementById('contact-form');
  const errorElement = document.getElementById('error');
  const successMsg = document.getElementById('success-msg');
  const submitBtn = document.getElementById('submit');
  
  const validate = (e) => {
    e.preventDefault();
   
    if (name.value.length < 3) {
      errorElement.innerHTML = 'Your name should be at least 3 characters long.';
      return false;
    } 
    
    if (!emailIsValid(email.value)) {
      errorElement.innerHTML = 'Please enter a valid email address.';
      return false;
    }
  
    errorElement.innerHTML = '';
    successMsg.innerHTML = 'Thank you! I will get back to you as soon as possible.'; 
  
    setTimeout(function () {
      successMsg.innerHTML = '';
      // errorElement.innerHTML = ''; // Clear error messages on successful submission
      contactForm.reset(); // Reset form fields
      successNotification.innerHTML = ''; // Clear success notification
    }, 3000);
  
    return true;
  }
  
  const emailIsValid = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  submitBtn.addEventListener('click', validate);
}


export function openModalSerf() {
  const serfFormContainer = document.querySelector('.contact-container');
  const siteMain = document.querySelector('.site_main');
  const siteHeader = document.querySelector('.site_header');
  const zakazSerfButton = document.querySelector('.serf_zakazat_button');
  const closeForm = document.querySelector('.close_modal');


  zakazSerfButton.addEventListener('click', function() {
    serfFormContainer.style.display = 'flex'
    siteHeader.style.display = 'none'
    siteMain.style.display  = 'none'
  });

  closeForm.addEventListener('click', function() {
    serfFormContainer.style.display = "none";
    siteHeader.style.display = 'flex'
    siteMain.style.display = 'flex'
  });
}


export function swithThemeMode() {
  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

  function switchTheme(e) {
      if (e.target.checked) {
          document.documentElement.setAttribute('data-theme', 'dark');
      } else {
          document.documentElement.setAttribute('data-theme', 'light');
      }    
  }

  toggleSwitch.addEventListener('change', switchTheme, false);
  
}