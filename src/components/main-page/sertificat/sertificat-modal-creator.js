
export function generateFormHtml() {
  const contactContainer = document.querySelector('.contact-container');

  const leftArea = document.createElement('div');
  leftArea.className = 'left-col';
  contactContainer.appendChild(leftArea);

  const leftAreaImg = document.createElement('img');
  leftAreaImg.className = 'left-img';
  leftAreaImg.src = "./components/main-page/assets/info_block_4.jpeg"
  leftArea.appendChild(leftAreaImg);

  const leftAreaLogo = document.createElement('div');
  leftAreaLogo.className = 'logo';
  leftArea.appendChild(leftAreaLogo);



  const rightArea = document.createElement('div');
  rightArea.className = 'right-col';
  contactContainer.appendChild(rightArea);

  const modalInfo = document.createElement('div');
  modalInfo.className = 'modal_info';
  leftArea.appendChild(modalInfo);

  const modalTitle = document.createElement('h1');
  modalTitle.className = 'modal_title';
  modalTitle.innerText = "Виртуальная подарочная карта"
  modalInfo.appendChild(modalTitle);

  const modalDetails = document.createElement('p');
  modalDetails.className = 'details_info';
  modalDetails.innerHTML = "— Отправляется получателю по электронной почте.<br>" +
                            "— После оформления возврату не подлежит.<br>" +
                            "— Действует на сайте и в бутиках.";
  modalInfo.appendChild(modalDetails);

  contactContainer.appendChild(rightArea);


  const closeForm = document.createElement('div');
  closeForm.className = 'close_modal';
  rightArea.appendChild(closeForm);
 
  const form = document.createElement('form');
  form.id = 'contact-form';
  form.action = "https://formspree.io/f/mwkgabqy"
  form.method = 'POST';
  rightArea.appendChild(form);

  const separator1 = document.createElement('span');
  separator1.className = 'separtor';
  separator1.textContent = 'О ВАС';
  form.appendChild(separator1);

  const nominalLabel = document.createElement('label');
  nominalLabel.setAttribute('for', 'nominal');
  nominalLabel.textContent = 'Номинал сертификата';
  form.appendChild(nominalLabel);

  const nominalSelect = document.createElement('select');
  nominalSelect.id = 'nominal';
  nominalSelect.name = 'nominal';
  nominalSelect.required = true;
  form.appendChild(nominalSelect);

  const nominalOptionDefault = document.createElement('option');
  nominalOptionDefault.value = '';
  nominalOptionDefault.textContent = 'Выберите номинал';
  nominalSelect.appendChild(nominalOptionDefault);

  const nominalOptions = ['50 BYN', '100 BYN', '200 BYN'];
  nominalOptions.forEach(option => {
    const nominalOption = document.createElement('option');
    nominalOption.value = option;
    nominalOption.textContent = option;
    nominalSelect.appendChild(nominalOption);
  });

  const nameLabel = document.createElement('label');
  nameLabel.setAttribute('for', 'name');
  nameLabel.textContent = 'Ваше имя';
  form.appendChild(nameLabel);

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.id = 'name';
  nameInput.name = 'name';
  nameInput.placeholder = 'Имя';
  nameInput.required = true;
  form.appendChild(nameInput);

  const phoneLabel = document.createElement('label');
  phoneLabel.setAttribute('for', 'phone');
  phoneLabel.textContent = 'Ваш телефон';
  form.appendChild(phoneLabel);

  const phoneInput = document.createElement('input');
  phoneInput.type = 'tel';
  phoneInput.id = 'phone';
  phoneInput.name = 'phone';
  phoneInput.placeholder = 'Номер телефона';
  phoneInput.required = true;
  form.appendChild(phoneInput);

  const emailLabel = document.createElement('label');
  emailLabel.setAttribute('for', 'email');
  emailLabel.textContent = 'Ваш Email Address';
  form.appendChild(emailLabel);

  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.id = 'email';
  emailInput.name = 'email';
  emailInput.placeholder = 'Email';
  emailInput.required = true;
  form.appendChild(emailInput);

  const separator2 = document.createElement('span');
  separator2.className = 'separtor';
  separator2.textContent = 'О ПОЛУЧАТЕЛЕ';
  form.appendChild(separator2);

  const recipientNameLabel = document.createElement('label');
  recipientNameLabel.setAttribute('for', 'recipient-name');
  recipientNameLabel.textContent = 'Имя получателя';
  form.appendChild(recipientNameLabel);

  const recipientNameInput = document.createElement('input');
  recipientNameInput.type = 'text';
  recipientNameInput.id = 'recipient-name';
  recipientNameInput.name = 'recipient-name';
  recipientNameInput.placeholder = 'Имя';
  recipientNameInput.required = true;
  form.appendChild(recipientNameInput);

  const recipientPhoneLabel = document.createElement('label');
  recipientPhoneLabel.setAttribute('for', 'recipient-phone');
  recipientPhoneLabel.textContent = 'Телефон получателя';
  form.appendChild(recipientPhoneLabel);

  const recipientPhoneInput = document.createElement('input');
  recipientPhoneInput.type = 'tel';
  recipientPhoneInput.id = 'recipient-phone';
  recipientPhoneInput.name = 'recipient-phone';
  recipientPhoneInput.placeholder = 'Номер телефона';
  recipientPhoneInput.required = true;
  form.appendChild(recipientPhoneInput);

  const messageLabel = document.createElement('label');
  messageLabel.setAttribute('for', 'message');
  messageLabel.textContent = 'Сообщение';
  form.appendChild(messageLabel);

  const messageTextarea = document.createElement('textarea');
  messageTextarea.rows = '6';
  messageTextarea.placeholder = 'Можете дополнить ваш сертификат сообщением получателю';
  messageTextarea.id = 'message';
  messageTextarea.name = 'message';
  form.appendChild(messageTextarea);

  const submitButtonContainer = document.createElement('div');
  form.appendChild(submitButtonContainer);

  const submitButtonAnchor = document.createElement('a');
  submitButtonAnchor.href = 'javascript:void(0)';
  submitButtonContainer.appendChild(submitButtonAnchor);

  const submitButton = document.createElement('button');
  submitButton.className = 'submit_button';
  submitButton.type = 'submit';
  submitButton.id = 'submit';
  submitButton.name = 'submit';
  submitButton.textContent = 'Отправить';
  submitButtonAnchor.appendChild(submitButton);

  // const errorDiv = document.createElement('div');
  // errorDiv.id = 'error';
  // rightArea.appendChild(errorDiv);

  // const successMsgDiv = document.createElement('div');
  // successMsgDiv.id = 'success-msg';
  // rightArea.appendChild(successMsgDiv);

  return contactContainer;
}
