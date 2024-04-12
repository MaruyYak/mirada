import { burgermenuOnload, addTooltip } from './components/mobile/mobile-menu.js';
import { openModalPoshiv } from './components/main-page/poshiv/poshiv-zakaz-modal.js';

window.onload = function () { 
  burgermenuOnload();
  addTooltip();
  openModalPoshiv();
}  
