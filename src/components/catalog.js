import { burgermenuOnload } from './mobile/mobile-menu.js';
import { generateCardHtml } from './catalog-page/cards-loader.js';
import { compressImages } from './catalog-page/compress-images.js';

window.onload = function () { 
  compressImages();
  generateCardHtml();
  burgermenuOnload();
}  