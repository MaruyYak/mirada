import { burgermenuOnload } from './components/mobile/mobile-menu.js';
import { generateCardHtml } from './components/catalog-page/cards-loader.js';


window.onload = function () { 
  generateCardHtml();
  burgermenuOnload();
}  