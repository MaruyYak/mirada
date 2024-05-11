import { burgermenuOnload, addTooltip } from './components/mobile/mobile-menu.js';
import { openModalSerf, loadFormPage } from './components/main-page/sertificat/sertificat-modal-controller.js';

window.onload = function () { 
  window.location.hash = '';
  burgermenuOnload();
  addTooltip();
  openModalSerf();
  if (window.location.hash === '#sertificat-form') {
    loadFormPage();
  }
}  
