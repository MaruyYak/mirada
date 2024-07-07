import { Card } from './catalog-card.js';
import { cardItems } from './items-base.js'


export function generateCardHtml(filteredItems = cardItems) {
  const catalogContainer = document.querySelector('.catalog_container');
  catalogContainer.innerHTML = '';

  filteredItems.map(item => {
    const card = new Card(item.itemName, item.color);
    catalogContainer.appendChild(card.getHtmlElement())
    return card;
  });

  addListenerToButtonsFilters();
  addListenerToPriceRange();
  // showFilterContent();
  return catalogContainer;
}

export function updatePriceValue(value) {
  const priceValue = document.getElementById('priceValue');
  priceValue.textContent = `${value} BYN`;
}

function addListenerToButtonsFilters() {
  document.getElementById('applyFiltersButton').addEventListener('click', applyFilters);
  document.getElementById('resetFiltersButton').addEventListener('click', resetFilters);
}

function addListenerToPriceRange() {
  const priceRange = document.getElementById('priceRange');
  priceRange.addEventListener('input', function() {
    updatePriceValue(this.value);
  });
}

export function showFilterContent() {
  const filterToggle = document.getElementById('filterToggle');
  const filterContent = document.getElementById('filterContent');
  
  filterToggle.addEventListener('click', function() {
    if (filterContent.style.display === 'none' || filterContent.style.display === '') {
      filterContent.style.display = 'flex';
    } else {
      filterContent.style.display = 'none';
    }
  });
}

export function applyFilters() {
  const priceRange = parseFloat(document.getElementById('priceRange').value);
  const selectedCategories = Array.from(document.querySelectorAll('.category-checkbox:checked')).map(checkbox => checkbox.value);
  const selectedColors = Array.from(document.querySelectorAll('.color-checkbox:checked')).map(checkbox => checkbox.value);
  const filterContent = document.getElementById('filterContent');

  const filteredItems = cardItems.filter(item => {
    const itemColors = item.color.map(c => c.color);
    const itemPrices = item.color.map(c => parseFloat(c.price.split(' ')[0]));

    const matchesPrice = Math.min(...itemPrices) <= priceRange;
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(item.category);
    const matchesColor = selectedColors.length === 0 || selectedColors.some(color => itemColors.includes(color));

    if (selectedCategories.length > 0 && selectedColors.length > 0) {
      return matchesCategory && matchesColor;
    } else if (selectedCategories.length > 0) {
      return matchesCategory;
    } else if (selectedColors.length > 0) {
      return matchesColor;
    } else {
      return matchesPrice;
    }
  });

  filterContent.style.display = 'none';
  generateCardHtml(filteredItems);
}

function resetFilters() {
  const filterContent = document.getElementById('filterContent');

  document.querySelectorAll('.category-checkbox').forEach(checkbox => {
    checkbox.checked = false;
  });

  document.querySelectorAll('.color-checkbox').forEach(checkbox => {
    checkbox.checked = false;
  });

  const priceRange = document.getElementById('priceRange');
  priceRange.value = priceRange.max;

  filterContent.style.display = 'none';
  generateCardHtml(); 
}