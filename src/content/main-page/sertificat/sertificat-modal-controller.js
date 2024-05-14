import { generateFormHtml } from './sertificat-modal-creator.js';
let selectedValue;

export function loadFormPage() {
  const siteMain = document.querySelector('.site_main');
  const siteHeader = document.querySelector('.site_header');
  
  window.location.hash = 'sertificat-form';
  siteHeader.style.display = 'none'
  siteMain.style.display  = 'none'
  generateFormHtml();
  dropdownOptionsChooser();
  setFromValidation();
  addDropdownOptionListener();
  addListenerToCloseModal();
}

export function openModalSerf() {
  const zakazSerfButton = document.querySelector('.serf_zakazat_button');
  zakazSerfButton.addEventListener('click', function() {
    loadFormPage()
  });
}

export function closeModal() {
  const siteMain = document.querySelector('.site_main');
  const siteHeader = document.querySelector('.site_header');
  const formContainer = document.querySelector('.contact-container');
    formContainer.remove();
    siteHeader.style.display = 'flex'
    siteMain.style.display  = 'flex'
    window.location.hash = ''
}

export function addListenerToCloseModal() {
  const closeForm = document.querySelector('.close_modal');
  closeForm.addEventListener('click', function() {
    closeModal()
  });
}

export function addDropdownOptionListener() {
  document.querySelectorAll('.nam_option').forEach(option => {
    option.addEventListener('click', function() {
        selectedValue = this.textContent.trim().split(' ')[0];
    });
});
}

export function setFromValidation() {
  const errorElement = document.getElementById('error');
  const successMsg = document.getElementById('success-msg');
  const contactForm = document.getElementById('contact-form');
  
  contactForm.addEventListener('submit', formSend);
  
  async function formSend(e) {
    e.preventDefault();
    const formData = new FormData(contactForm);
    formData.append('nominal_value', selectedValue);
    const senderInput = document.querySelector('.senderInput');
    const recieverInput = document.querySelector('.recieverInput');

    const SendName = formData.get('sender-name');   
    formData.get('sender_telegram');   
    formData.get('sender_watsapp');   
    formData.get('sender_phone');

    const RecName = formData.get('recipient-name');   
    formData.get('recepient_telegram');   
    formData.get('recepient_watsapp');   
    formData.get('recepient_email');   
    formData.get('message');
    
    if (SendName === '') {
      errorElement.style.display = "flex"
      errorElement.innerHTML = 'Пожалуйста, заполните информацию об отправителе';
      return;
    }
    
    if (senderInput.value.trim() === '') {
      errorElement.style.display = "flex"
      errorElement.innerHTML = 'Пожалуйста, выберите один из способов связи: Telegram, Watsapp или Телефон';
      return;
    } else {
      errorElement.style.display = "none"
      errorElement.innerText = '';
    }

    if (RecName === '') {
      errorElement.style.display = "flex"
      errorElement.innerHTML = 'Пожалуйста, добавьте информацию о получателе';
      return;
    }
    if (recieverInput.value.trim() === '') {
      errorElement.style.display = "flex"
      errorElement.innerHTML = 'Пожалуйста, выберите один из способов отправки сертификата: Telegram, Watsapp или Email';
      return;
    } else {
      errorElement.style.display = "none"
      errorElement.innerText = '';
    }
    
    try {
      const response = await fetch('send-mail.php', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        const result = await response.json();
        successMsg.style.display = "flex"
        successMsg.innerText = result.message;
        setTimeout(() => {
          errorElement.style.display = "none"
          errorElement.innerText = '';
          successMsg.style.display = "none"
          successMsg.innerHTML = '';
          closeModal();
        }, 3000);
        contactForm.reset();
      } else {
        errorElement.innerText = 'Something went wrong';
      }
    } catch (error) {
      console.error('Error:', error);
      errorElement.innerText = 'Something went wrong';
    }
  }
}


export function dropdownOptionsChooser() {
  const dropdownItems = document.querySelectorAll('.nam_option, .sc_option, .rc_option');
  const inputSContainer = document.querySelector('.input_s_container');
  const inputRContainer = document.querySelector('.input_r_container');
  const labelSInput = document.querySelector('.input_sc_label');
  const labelRInput = document.querySelector('.input_rc_label');
  const senderInput = document.querySelector('.senderInput');
  const recieverInput = document.querySelector('.recieverInput');
  const dropdown = document.querySelector('.dropdown');

  dropdownItems.forEach(item => {
    dropdown.classList.remove('active');
    item.addEventListener('click', function() {
      const selectedValue = this.textContent.trim();
      const dropdownPlaceholder = this.closest('.dropdown').querySelector('.dropdown_placeholder');
      dropdownPlaceholder.textContent = selectedValue;
      if(dropdownPlaceholder.id === "SC") {
        switch(selectedValue) {
          case 'Telegram':
            inputSContainer.style.display = 'flex';
            labelSInput.textContent = 'Telegram';
            senderInput.type = 'text';
            senderInput.name = 'sender_telegram';
            senderInput.placeholder = '@nickname';
            senderInput.required = true;
            break;
          case 'Watsapp':
            inputSContainer.style.display = 'flex';
            labelSInput.textContent = 'Watsapp';
            senderInput.type = 'tel';
            senderInput.name = 'sender_watsapp';
            senderInput.placeholder = '+375 (xx) xxx-xx-xx';
            senderInput.required = true;
            break;
          case 'Телефон':
            inputSContainer.style.display = 'flex';
            labelSInput.textContent = 'Телефон';
            senderInput.type = 'tel';
            senderInput.name = 'sender_phone';
            senderInput.placeholder = '+375 (xx) xxx-xx-xx';
            senderInput.required = true;
            break;
          default:
        }
      }
      if(dropdownPlaceholder.id === "RC") {
        switch(selectedValue) {
          case 'Telegram':
            inputRContainer.style.display = 'flex';
            labelRInput.textContent = 'Telegram';
            recieverInput.classList.add("req");
            recieverInput.type = 'text';
            recieverInput.name = 'recepient_telegram';
            recieverInput.placeholder = '@nickname';
            break;
          case 'Watsapp':
            inputRContainer.style.display = 'flex';
            labelRInput.textContent = 'Watsapp';
            recieverInput.classList.add("req");
            recieverInput.type = 'tel';
            recieverInput.name = 'recepient_watsapp';
            recieverInput.placeholder = '+375 (xx) xxx-xx-xx';
            break;
          case 'Email':
            inputRContainer.style.display = 'flex';
            labelRInput.textContent = 'Email';
            recieverInput.classList.add("req");
            recieverInput.type = 'email';
            recieverInput.name = 'recepient_email';
            recieverInput.placeholder = 'email@example.com';
            break;
          default:
        }
      }
    });
  });
}





// на случай если нужно будет менять тему
// export function swithThemeMode() {
//   const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

//   function switchTheme(e) {
//       if (e.target.checked) {
//           document.documentElement.setAttribute('data-theme', 'dark');
//       } else {
//           document.documentElement.setAttribute('data-theme', 'light');
//       }    
//   }

//   toggleSwitch.addEventListener('change', switchTheme, false);
// }