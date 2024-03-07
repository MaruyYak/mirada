import { burgermenuOnload, addTooltip } from './mobile-menu.js';
import { openModalPoshiv } from './main-page/modal-window.js';

window.onload = function () { 
  burgermenuOnload();
  addTooltip();
  openModalPoshiv();
}  
