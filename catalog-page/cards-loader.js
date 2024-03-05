import { cardItems } from './catalog-base/items-base.js';
import { burgermenuOnload } from '../mobile-menu.js';


window.onload = function () { 
  generateCardHtml();
  burgermenuOnload();
}  

function generateCardHtml() {
  const catalogContainer = document.querySelector('.catalog_container');

  cardItems.forEach(item => {
    const catalogCard = document.createElement('div');
    catalogCard.className = 'catalog_card';
    catalogContainer.appendChild(catalogCard);

    const sliderContainer = document.createElement('div');
    sliderContainer.className = 'slider_container';
    catalogCard.appendChild(sliderContainer);

    generatePhotos(item.photos, sliderContainer);

    const sliderBar = document.createElement('div');
    sliderBar.className = 'slider_bar';
    catalogCard.appendChild(sliderBar);

    item.photos.forEach(() => {
      const barItem = document.createElement('span');
      barItem.className = 'bar_item';
      barItem.style.width = `${Math.floor(100 / item.photos.length - 5)}%`
      sliderBar.appendChild(barItem);
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
    
    setSlider(swipeNext, swipeBack, sliderContainer, item);
  });
  return catalogContainer;
}

function generatePhotos(photos, parentElement) {
  for (let i = 0; i < 3; i++) {
    const cardImage = document.createElement('img');
    cardImage.className = 'card_photo';
    
    const photoIndex = (i - 1 + photos.length) % photos.length
    cardImage.src = photos[photoIndex].path;
    
    parentElement.appendChild(cardImage);
  }
}

function setSlider(swipeNext, swipeBack, sliderContainer, item) {

  let currentSlide = 0;
  const barItem = document.querySelectorAll('.bar_item');
  let currentBar;

  function updateSlider(turnDirection, getNextPhotoId) {
    const currentPhotoDom = sliderContainer.querySelector('.card_photo:nth-child(2)');
    const nextPhotoDom = sliderContainer.querySelector(`.card_photo:nth-child(${turnDirection === 'left' ? 3 : 1})`);

    nextPhotoDom.src = item.photos[currentSlide].path;
    sliderContainer.classList.add(`turn-${turnDirection}`);
    
    
    setTimeout(() => {
      currentPhotoDom.src = nextPhotoDom.src;
      sliderContainer.classList.remove(`turn-${turnDirection}`);
      currentBar = barItem[currentSlide];
      currentBar.classList.toggle('current');

      const nextPhotoId = getNextPhotoId(currentSlide, item.photos.length);
      nextPhotoDom.src = item.photos[nextPhotoId].path;
    }, 500);
  }

  swipeNext.addEventListener('click', () => {
    currentSlide = getNextSlideId(currentSlide, item.photos.length);
    updateSlider('left', getNextSlideId);
    currentBar.classList.toggle('current');
  });
  
  swipeBack.addEventListener('click', () => {
    currentSlide = getPrewSlideId(currentSlide, item.photos.length);
    updateSlider('right', getPrewSlideId);
    currentBar.classList.toggle('current');
  });

  addTachSwiper(sliderContainer, swipeBack, swipeNext);
}


function getNextSlideId(currentSlideId, photosCount) {
  return (currentSlideId + 1) % photosCount;
}

function getPrewSlideId(currentSlideId, photosCount) {
  return (currentSlideId - 1 + photosCount) % photosCount;
}

function addTachSwiper(sliderContainer, swipeBack, swipeNext) {
  let startX = null;

  sliderContainer.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX; // Записываем начальную позицию касания
  });

  sliderContainer.addEventListener('touchend', (event) => {
    if (startX !== null) {
      const endX = event.changedTouches[0].clientX;
      const diffX = endX - startX; // Вычисляем разницу между начальной и конечной позициями касания
      if (Math.abs(diffX) > 50) { // Пороговое значение для определения свайпа
        if (diffX > 0) {
          swipeBack.click(); // Имитируем нажатие на кнопку "назад"
        } else {
          swipeNext.click(); // Имитируем нажатие на кнопку "вперёд"
        }
      }
      startX = null;
    }
  });
}