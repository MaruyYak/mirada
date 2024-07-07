import { burgermenuOnload } from './mobile/mobile-menu.js';
import { generateCardHtml, showFilterContent } from './catalog-page/cards-loader.js';
import { generateCategoryFilters, generateColorFilters, updatePriceRange } from './catalog-page/filter.js';

window.onload = function () {
  generateCardHtml();
  showFilterContent();
  generateCategoryFilters();
  generateColorFilters();
  updatePriceRange();
  burgermenuOnload();
}
