import { burgermenuOnload } from './mobile/mobile-menu.js';
import { generateCardHtml } from './catalog-page/cards-loader.js';
import { photoModal } from './catalog-page/photo-modal.js';

window.onload = function () {
  generateCardHtml();
  burgermenuOnload();
  photoModal();
}
