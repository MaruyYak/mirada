import { cardItems } from './catalog-base/items-base.js';

window.onload = function () {
  generateCardHtml();
  createSlider();
};

function generateCardHtml() {
  const catalogContainer = document.querySelector('.catalog_container');

  cardItems.forEach(item => {
    const catalogCard = document.createElement('div');
    catalogCard.className = 'catalog_card';
    catalogContainer.appendChild(catalogCard);

    const cardImage = document.createElement('img');
    cardImage.className = 'card_photo';
    cardImage.src = item.photos;
    catalogCard.appendChild(cardImage);

    const sliderBar = document.createElement('div');
    sliderBar.className = 'slider_bar';
    catalogCard.appendChild(sliderBar);

    const slidersCount = 5;
    Array.from({ length: slidersCount }).forEach(() => {
      const slider = document.createElement('span');
      slider.className = 'slider';
      sliderBar.appendChild(slider);
    });

    const cardDescriptionWrapper = document.createElement('div');
    cardDescriptionWrapper.className = 'card_description_wrapper';
    catalogCard.appendChild(cardDescriptionWrapper);

    const photoDesContainer = document.createElement('div');
    photoDesContainer.className = 'card_photo_description_container';
    cardDescriptionWrapper.appendChild(photoDesContainer);

    const photoName = document.createElement('p');
    photoName.className = 'card_photo_name';
    photoName.textContent = item.itemName;
    photoDesContainer.appendChild(photoName);

    const sizeItem = document.createElement('p');
    sizeItem.className = 'card_size_item';
    sizeItem.textContent = item.size;
    photoDesContainer.appendChild(sizeItem);

    const photoPrice = document.createElement('p');
    photoPrice.className = 'card_photo_price';
    photoPrice.textContent = item.price;
    photoDesContainer.appendChild(photoPrice);

    const cardButtonContainer = document.createElement('div');
    cardButtonContainer.className = 'button_container';
    cardDescriptionWrapper.appendChild(cardButtonContainer);

    const cardButton = document.createElement('div');
    cardButton.className = 'card_zakaz_button';
    cardButton.innerText = 'ЗАКАЗАТЬ';
    cardButtonContainer.appendChild(cardButton);

    const swipperButtons = document.createElement('div');
    swipperButtons.className = 'swiper_buttons';
    catalogCard.appendChild(swipperButtons);

    const swipeBack = document.createElement('img');
    swipeBack.className = 'swiper_button_back';
    swipeBack.src = "./assets/arrow.svg";
    swipperButtons.appendChild(swipeBack);
    
    const swipeNext = document.createElement('img');
    swipeNext.className = 'swiper_button_next';
    swipeNext.src = "./assets/arrow.svg";
    swipperButtons.appendChild(swipeNext);
  });

  return catalogContainer;
}


function getCardSlider() {
  const sliderContainer = document.querySelector('.slider_container');

  cardItems.forEach(item => {


  });
}


