
export function generateFormHtml() {
  const formContainer = document.createElement('div');
  formContainer.className = 'contact-container';
  document.body.appendChild(formContainer);

  const leftArea = document.createElement('div');
  leftArea.className = 'left-col';
  formContainer.appendChild(leftArea);

  const leftAreaImg = document.createElement('img');
  leftAreaImg.className = 'left-img';
  leftAreaImg.src = "./content/main-page/assets/sertificat.png";
  leftArea.appendChild(leftAreaImg);

  const leftAreaLogo = document.createElement('div');
  leftAreaLogo.className = 'logo';
  leftArea.appendChild(leftAreaLogo);

  const rightArea = document.createElement('div');
  rightArea.className = 'right-col';
  formContainer.appendChild(rightArea);

  const modalInfo = document.createElement('div');
  modalInfo.className = 'modal_info';
  leftArea.appendChild(modalInfo);

  const modalTitle = document.createElement('h1');
  modalTitle.className = 'modal_title';
  modalTitle.innerText = "Виртуальная подарочная карта"
  modalInfo.appendChild(modalTitle);

  const modalDetails = document.createElement('p');
  modalDetails.className = 'details_info';
  modalDetails.innerHTML = "— Отправляется получателю онлайн.<br>" +
                            "— После оформления возврату не подлежит.<br>"+
                            "— Срок действия подарочной карты 3 месяца.<br>"
  modalInfo.appendChild(modalDetails);

  formContainer.appendChild(rightArea);


  const closeForm = document.createElement('div');
  closeForm.className = 'close_modal';
  rightArea.appendChild(closeForm);
 
  const form = document.createElement('form');
  form.id = 'contact-form';
  form.action = 'send-mail.php'
  form.method = 'POST';
  rightArea.appendChild(form);


  // Sender information
  const separator1 = document.createElement('span');
  separator1.className = 'separtor';
  separator1.textContent = 'О ВАС';
  form.appendChild(separator1);

  // Sender nominal dropdown information
  const senderNominalDpdw = document.createElement('div');
  senderNominalDpdw.classList.add('dropdown');
  const nominalArrow = document.createElement('img');
  nominalArrow.id ="nonimalArrow";
  nominalArrow.src = "./content/main-page/assets/chevron.png";
  senderNominalDpdw.appendChild(nominalArrow);
  form.appendChild(senderNominalDpdw);
  

  const nominalPlaceholder = document.createElement('div');
  nominalPlaceholder.classList.add('dropdown_placeholder');
  nominalPlaceholder.id = 'Nom';

  nominalPlaceholder.textContent = 'Выберите номинал:';
  senderNominalDpdw.appendChild(nominalPlaceholder);

  const ulElement = document.createElement('ul');
  ulElement.classList.add('dropdown_content');
  ulElement.id = "nominalDpdw"
  senderNominalDpdw.appendChild(ulElement);

  const nominalValues = ['100', '200', '300'];
  nominalValues.forEach(value => {
    const liElement = document.createElement('li');
    liElement.classList.add("nam_option")    
    const bElement = document.createElement('b');
    bElement.textContent = `${value} `;
    
    const spanElement = document.createElement('span');
    spanElement.textContent = 'BYN';
    
    liElement.appendChild(bElement);
    liElement.appendChild(spanElement);
    
    ulElement.appendChild(liElement);
  });

   // Sender input information
  const nameLabel = document.createElement('label');
  nameLabel.setAttribute('for', 'name');
  nameLabel.textContent = 'Ваше имя';
  form.appendChild(nameLabel);

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.id = 'name';
  nameInput.name = 'sender-name';
  nameInput.placeholder = 'Имя';
  form.appendChild(nameInput);
  
  // Dropdown with sender contacts information
  const contactSenderDrpdw = document.createElement('div');
  contactSenderDrpdw.classList.add('dropdown');
  const sContactsArrow = document.createElement('img');
  sContactsArrow.id = "SCArrow";
  sContactsArrow.src = "./content/main-page/assets/chevron.png";
  contactSenderDrpdw.appendChild(sContactsArrow);
  form.appendChild(contactSenderDrpdw);

  const senderContactsPlchldr = document.createElement('div');
  senderContactsPlchldr.classList.add('dropdown_placeholder')
  senderContactsPlchldr.id = 'SC';
  senderContactsPlchldr.textContent = 'Как с вами связаться:';
  contactSenderDrpdw.appendChild(senderContactsPlchldr);

  const dropdowndListS = document.createElement('ul');
  dropdowndListS.classList.add('dropdown_content');
  dropdowndListS.id = "contactSenderDrpdw"
  contactSenderDrpdw.appendChild(dropdowndListS);

  const options = ['Telegram', 'Watsapp', 'Телефон'];

  options.forEach(value => {
    const listItem = document.createElement('li');
    listItem.classList.add("sc_option");
    listItem.textContent = `${value}`;
    dropdowndListS.appendChild(listItem);
  });

  const inputSContainer = document.createElement('div');
  inputSContainer.classList.add('input_s_container');
  form.appendChild(inputSContainer);
  const SCinputLabel = document.createElement('label');
  SCinputLabel.classList.add("input_sc_label");
  inputSContainer.appendChild(SCinputLabel);

  const senderContactInput = document.createElement('input');
  senderContactInput.classList.add("senderInput")
  senderContactInput.type = '';
  senderContactInput.name = '';
  senderContactInput.placeholder = '';
  inputSContainer.appendChild(senderContactInput);
  
//Recipient information
  const separator2 = document.createElement('span');
  separator2.className = 'separtor';
  separator2.textContent = 'О ПОЛУЧАТЕЛЕ';
  form.appendChild(separator2);

  const recipientNameLabel = document.createElement('label');
  recipientNameLabel.setAttribute('for', 'recipient-name');
  recipientNameLabel.textContent = 'Имя получателя';
  form.appendChild(recipientNameLabel);

//Recipient input name  information
  const recipientNameInput = document.createElement('input');
  recipientNameInput.type = 'text';
  recipientNameInput.id = 'recipient-name';
  recipientNameInput.name = 'recipient-name';
  recipientNameInput.placeholder = 'Имя';
  form.appendChild(recipientNameInput);

  //Recipient contacts dropdown information
  const recipientdContactsDrpdnw = document.createElement('div');
  recipientdContactsDrpdnw.classList.add('dropdown');
  const rContactsArrow = document.createElement('img');
  rContactsArrow.id = "RCArrow";
  rContactsArrow.src = "./content/main-page/assets/chevron.png";
  recipientdContactsDrpdnw.appendChild(rContactsArrow);
  form.appendChild(recipientdContactsDrpdnw);

  const recepientContactsPlshldr = document.createElement('div');
  recepientContactsPlshldr.classList.add('dropdown_placeholder');
  recepientContactsPlshldr.id = 'RC';
  recepientContactsPlshldr.textContent = 'Способ отправки сертификата:';
  recipientdContactsDrpdnw.appendChild(recepientContactsPlshldr);

  const dropdowndListR = document.createElement('ul');
  dropdowndListR.classList.add('dropdown_content');
  dropdowndListR.id = "recipientdContactsDrpdnw"
  recipientdContactsDrpdnw.appendChild(dropdowndListR);

  const optionsR = ['Telegram', 'Watsapp','Email'];

  optionsR.forEach(value => {
  const listItem = document.createElement('li');
  listItem.classList.add("rc_option");
  listItem.textContent = `${value}`;
  dropdowndListR.appendChild(listItem);
  
});

const inputRContainer = document.createElement('div');
inputRContainer.classList.add('input_r_container');
form.appendChild(inputRContainer);
const RCinputLabel = document.createElement('label');
RCinputLabel.classList.add("input_rc_label");
inputRContainer.appendChild(RCinputLabel);

const recieverContactInput = document.createElement('input');
recieverContactInput.classList.add("recieverInput")
recieverContactInput.type = '';
recieverContactInput.name = '';
recieverContactInput.placeholder = '';
inputRContainer.appendChild(recieverContactInput);


  //Recipient message input information
  const messageLabel = document.createElement('label');
  messageLabel.setAttribute('for', 'message');
  messageLabel.textContent = 'Сообщение получателю';
  form.appendChild(messageLabel);

  const messageTextarea = document.createElement('textarea');
  messageTextarea.rows = '6';
  messageTextarea.placeholder = 'Можете дополнить ваш сертификат сообщением получателю';
  messageTextarea.id = 'message';
  messageTextarea.name = 'message';
  form.appendChild(messageTextarea);

  const errorDiv = document.createElement('div');
  errorDiv.id = 'error';
  form.appendChild(errorDiv);
  
  const successMsgDiv = document.createElement('div');
  successMsgDiv.id = 'success-msg';
  form.appendChild(successMsgDiv);

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

  return formContainer;
}