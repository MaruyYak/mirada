import { burgermenuOnload, addTooltip } from './components/mobile/mobile-menu.js';
import { openModalPoshiv } from './components/main-page/poshiv-block/poshiv-zakaz-modal.js';

window.onload = function () { 
  burgermenuOnload();
  addTooltip();
  openModalPoshiv();
}  
