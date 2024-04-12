import { burgermenuOnload } from './mobile/mobile-menu.js';
import { generateCardHtml } from './catalog-page/cards-loader.js';

window.onload = function () { 
  generateCardHtml();
  burgermenuOnload();
}  