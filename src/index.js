import { burgermenuOnload, addTooltip } from './content/mobile/mobile-menu.js';
import { initializeBrendAnimation, initializeValueAnimation } from './content/mobile/animation.js';
import { openModalSerf, loadFormPage } from './content/main-page/sertificat/sertificat-modal-controller.js';

window.onload = function () { 
  window.location.hash = '';
  burgermenuOnload();
  addTooltip();
  openModalSerf();
  initializeBrendAnimation();
  initializeValueAnimation();
  if (window.location.hash === '#sertificat-form') {
    loadFormPage();
  }
};