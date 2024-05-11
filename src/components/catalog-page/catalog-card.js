export class Card {
  catalogCard;

  constructor(itemName, color) {
    this.itemName = itemName;
    this.colors = color;
    this.selectedColorId = 0;
    this.selectedColor = this.colors[this.selectedColorId];
    this.currentSlide = 0;
    this.catalogCard = document.createElement('div');
    this.createCardHtml()
  }

  createCardHtml() {
    this.catalogCard.innerHTML = '';
    this.catalogCard.className = 'catalog_card';

    const sliderContainer = document.createElement('div');
    sliderContainer.className = 'slider_container';
    this.catalogCard.appendChild(sliderContainer);

    const sliderBar = document.createElement('div');
    sliderBar.className = 'slider_bar';
    this.catalogCard.appendChild(sliderBar);

    generatePhotos(this.selectedColor.photos, sliderContainer);

    this.selectedColor.photos.forEach((photo, index) => {
      const barItem = document.createElement('span');
      barItem.className = 'bar_item';
      barItem.style.width = `${Math.floor(100 / this.selectedColor.photos.length - 5)}%`;
    
      if (index === 0) {
        barItem.classList.add('current');
      }
    
      sliderBar.appendChild(barItem);
    });

    const cardDescriptionWrapper = document.createElement('div');
    cardDescriptionWrapper.className = 'card_description_wrapper';
    this.catalogCard.appendChild(cardDescriptionWrapper);

    const photoDesContainer = document.createElement('div');
    photoDesContainer.className = 'card_photo_description_container';
    cardDescriptionWrapper.appendChild(photoDesContainer);

    const photoName = document.createElement('p');
    photoName.className = 'card_photo_name';
    photoName.textContent = this.itemName;
    photoDesContainer.appendChild(photoName);
    
    const photoPrice = document.createElement('p');
    photoPrice.className = 'card_photo_price';
    photoPrice.textContent = this.selectedColor.price;
    photoDesContainer.appendChild(photoPrice);

    const colorContainer = document.createElement('div');
    colorContainer.className = 'color_container';
    photoDesContainer.appendChild(colorContainer);

    this.generateSampleColors(colorContainer)

    // const cardButtonContainer = document.createElement('div');
    // cardButtonContainer.className = 'button_container';
    // cardDescriptionWrapper.appendChild(cardButtonContainer);

    // const cardButton = document.createElement('a');
    // cardButton.className = 'card_zakaz_button';
    // cardButton.innerText = 'ЗАКАЗАТЬ';
    // cardButton.href = 'https://www.instagram.com/direct/t/17845085046113727';
    // cardButton.target = '_blank';
    // cardButtonContainer.appendChild(cardButton);
    
    const swipperButtons = document.createElement('div');
    swipperButtons.className = 'swiper_buttons';
    this.catalogCard.appendChild(swipperButtons);

    const swipeBack = document.createElement('img');
    swipeBack.className = 'swiper_button_back';
    swipeBack.src = "./catalog-page/assets/arrow.svg";
    swipperButtons.appendChild(swipeBack);
    
    const swipeNext = document.createElement('img');
    swipeNext.className = 'swiper_button_next';
    swipeNext.src = "./catalog-page/assets/arrow.svg";
    swipperButtons.appendChild(swipeNext);

    this.setSlider(swipeNext, swipeBack, sliderContainer);

    addTachSwiper(sliderContainer, swipeBack, swipeNext);
  }

  getHtmlElement() {
    return this.catalogCard;
  }

  selectColor(id) {
    if(this.selectedColorId !== id) {
      this.selectedColorId = id;
      this.selectedColor = this.colors[this.selectedColorId];
      this.createCardHtml();
    }
  }

  generateSampleColors(colorContainer){
    for (let i = 0; i < this.colors.length; i++) {
      const colorItem = document.createElement('img');
      colorItem.className = 'card_color_item';
      
      colorItem.src = this.colors[i].path
      colorContainer.appendChild(colorItem);
  
      colorItem.addEventListener('click', () => {
        this.selectColor(i);
      })
    }
  }

  setSlider(swipeNext, swipeBack, sliderContainer) {
    const updateSlider = (turnDirection) => {
      const currentPhotoDom = sliderContainer.querySelector('.card_photo:nth-child(2)');
      const nextPhotoDom = sliderContainer.querySelector(`.card_photo:nth-child(${turnDirection === 'left' ? 3 : 1})`);
      
      const bar = this.catalogCard.querySelector('.slider_bar');
      const barItems = bar.querySelectorAll('.bar_item');
      barItems.forEach(barItem => {
        barItem.classList.remove('current');
      });
      const currentSlideIndex = this.currentSlide;
      barItems[currentSlideIndex].classList.add('current');

  
      nextPhotoDom.src = this.selectedColor.photos[this.currentSlide];
      sliderContainer.classList.add(`turn-${turnDirection}`);
      
      currentPhotoDom.src = nextPhotoDom.src;
      sliderContainer.classList.remove(`turn-${turnDirection}`);
      nextPhotoDom.src = this.selectedColor.photos[this.currentSlide];
    }
  
    swipeNext.addEventListener('click', () => {
      this.currentSlide = getNextSlideId(this.currentSlide, this.selectedColor.photos.length);
      updateSlider('left');
    });
    
    swipeBack.addEventListener('click', () => {
      this.currentSlide = getPrewSlideId(this.currentSlide, this.selectedColor.photos.length);
      updateSlider('right');
    }); 
  }
}

function generatePhotos(photos, parentElement) {
  for (let i = 0; i < photos.length; i++) {
    const cardImage = document.createElement('img');
    cardImage.className = 'card_photo';
    
    const photoIndex = (i - 1 + photos.length) % photos.length
    cardImage.src = photos[photoIndex];
    
    parentElement.appendChild(cardImage);
  }
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
    startX = event.touches[0].clientX; 
  });

  sliderContainer.addEventListener('touchend', (event) => {
    if (startX !== null) {
      const endX = event.changedTouches[0].clientX;
      const diffX = endX - startX;
      if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
          swipeBack.click();
        } else {
          swipeNext.click();
        }
      }
      startX = null;
    }
  });
}