export function photoModal() {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const span = document.getElementsByClassName('close')[0];

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

  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  }

  document.querySelectorAll('.card_photo').forEach(img => {
    img.addEventListener('click', function() {
      const imgSrc = this.src;
      const card = this.closest('.catalog_card');
      const photos = Array.from(card.querySelectorAll('.card_photo')).map(photo => photo.src);
      const index = photos.indexOf(imgSrc);
      openModal(photos, index);
    });
  });

  document.querySelector('.modal-prev').onclick = function() {
    currentModalIndex = (currentModalIndex - 1 + modalImages.length) % modalImages.length;
    updateModalImage();
  }

  document.querySelector('.modal-next').onclick = function() {
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


