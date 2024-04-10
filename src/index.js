import { burgermenuOnload, addTooltip } from './components/mobile/mobile-menu.js';
import { openModalPoshiv } from './components/main-page/poshiv-block/poshiv-zakaz-modal.js';
// import './main.css';
// import './components/main-page/brend/brend.css'
// import './components/main-page/delivery/dostavka.css'
// import './components/main-page/poshiv-block/poshiv.css'
// import './components/main-page/poshiv-block/poshiv-zakaz-modal.css'
// import './components/main-page/sertificat/sertificat.css'
// import './components/footer/footer.css'

window.onload = function () { 
  burgermenuOnload();
  addTooltip();
  openModalPoshiv();
}  
