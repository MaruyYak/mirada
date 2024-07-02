export function photoModal() {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const span = document.getElementsByClassName('close')[0];
  const prev = document.querySelector('.modal-prev');
  const next = document.querySelector('.modal-next');

  let currentModalIndex = 0;
  let modalImages = [];

  function openModal(images, index) {
    modalImages = images;
    currentModalIndex = index;
    updateModalImage();
    modal.style.display = 'flex';
  }

  function updateModalImage() {
    modalImg.src = modalImages[currentModalIndex];
  }

  span.onclick = function() {
    modal.style.display = 'none';
  }

  modal.addEventListener('click', function(event) {
    if (event.target !== modalImg && event.target !== prev && event.target !== next) {
      modal.style.display = 'none';
    }
  });
  
  document.querySelectorAll('.card_photo').forEach(img => {
    img.addEventListener('click', function() {
      const imgSrc = this.src;
      const card = this.closest('.catalog_card');
      const photos = Array.from(card.querySelectorAll('.card_photo')).map(photo => photo.src);
      const index = photos.indexOf(imgSrc);
      openModal(photos, index);
    });
  });

  prev.onclick = function() {
    currentModalIndex = (currentModalIndex - 1 + modalImages.length) % modalImages.length;
    updateModalImage();
  }

  next.onclick = function() {
    currentModalIndex = (currentModalIndex + 1) % modalImages.length;
    updateModalImage();
  }

  document.addEventListener('keydown', function(event) {
    if (modal.style.display === 'flex') {
      if (event.key === 'ArrowLeft') {
        currentModalIndex = (currentModalIndex - 1 + modalImages.length) % modalImages.length;
        updateModalImage();
      } else if (event.key === 'ArrowRight') {
        currentModalIndex = (currentModalIndex + 1) % modalImages.length;
        updateModalImage();
      }
    }
  });

  let startX = null;

  modal.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
  });

  modal.addEventListener('touchend', (event) => {
    if (startX !== null) {
      const endX = event.changedTouches[0].clientX;
      const diffX = endX - startX;
      if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
          currentModalIndex = (currentModalIndex - 1 + modalImages.length) % modalImages.length;
        } else {
          currentModalIndex = (currentModalIndex + 1) % modalImages.length;
        }
        updateModalImage();
      }
      startX = null;
    }
  });
}


