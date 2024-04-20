import { burgermenuOnload, addTooltip } from './components/mobile/mobile-menu.js';
import { generateFormHtml } from './components/main-page/sertificat/sertificat-modal-creator.js';
import { setFromValidation, openModalSerf } from './components/main-page/sertificat/sertificat-modal-controller.js';

window.onload = function () { 
  burgermenuOnload();
  addTooltip();
  generateFormHtml();
  openModalSerf();
  setFromValidation();
}  
