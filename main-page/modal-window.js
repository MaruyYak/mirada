export function openModalPoshiv() {
  const modalLayer = document.querySelector('.modal_overlay');
  const posivButton = document.querySelector('.poshiv_zakazat_button');
  const closeButton = document.querySelector('.modal_close_button');

  posivButton.addEventListener('click', function(event) {
    modalLayer.classList.add('openModal');

    function closeModal(event) {
      if (event.target.classList.contains('modal_overlay') || event.target.classList.contains('modal_close_button')) {
        modalLayer.classList.remove('openModal');
        document.removeEventListener('click', closeModal);
      }
    }

    document.addEventListener('click', closeModal);
  });
}

