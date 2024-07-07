import { cardItems } from './items-base.js'

export function generateCategoryFilters() {
  const categoryFiltersContainer = document.getElementById('categoryFilters');
  let categories = new Set();
  
  cardItems.forEach(item => {
    categories.add(item.category);
  });
  
  categories.forEach(category => {
    const label = document.createElement('label');
    label.innerHTML = `<input type="checkbox" class="category-checkbox" value="${category}"> ${category}`;
    categoryFiltersContainer.appendChild(label);
  });
}

// Генерация фильтров цвета
export function generateColorFilters() {
  const colorFiltersContainer = document.getElementById('colorFilters');
  let colors = new Set();
  
  cardItems.forEach(item => {
    item.color.forEach(color => {
      colors.add(color.color);
    });
  });
  
  colors.forEach(color => {
    const label = document.createElement('label');
    label.innerHTML = `<input type="checkbox" class="color-checkbox" value="${color}"> ${color}`;
    colorFiltersContainer.appendChild(label);
  });
}

// Ползунок цены
export function updatePriceRange() {
  const maxPrice = Math.max(...cardItems.flatMap(item => item.color.map(color => parseFloat(color.price))));
  const minPrice = Math.min(...cardItems.flatMap(item => item.color.map(color => parseFloat(color.price))));
  const priceRange = document.getElementById('priceRange');
  const priceValue = document.getElementById('priceValue');
  const minPriceValue = document.getElementById('minPriceValue');
  
  priceRange.max = maxPrice;
  priceRange.min = minPrice;
  priceRange.value = maxPrice;
  priceValue.textContent = `${maxPrice} BYN`;
  minPriceValue.textContent = `${minPrice} BYN`;
}
