import { Card } from './catalog-card.js';
import { cardItems } from './items-base.js'

export function generateCardHtml() {
  const catalogContainer = document.querySelector('.catalog_container');
  
  cardItems.map(item => {
    const card = new Card(item.itemName, item.color);
    catalogContainer.appendChild(card.getHtmlElement())
    return card;
  });
  
  return catalogContainer;
}