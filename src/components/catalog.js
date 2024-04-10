import { burgermenuOnload } from './mobile/mobile-menu.js';
import { generateCardHtml } from './catalog-page/cards-loader.js';
// import './main.css'
// import './main-page/brend.css'
// import './components/catalog-page/styles/catalog-page.css'
// import './components/footer/footer.css'

window.onload = function () { 
  generateCardHtml();
  burgermenuOnload();
}  