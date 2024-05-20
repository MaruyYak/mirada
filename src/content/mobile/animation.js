export function initializeBrendAnimation() {
  function onEntry(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('element-show');
      } else {
        entry.target.classList.remove('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5]
  };
  
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element__animated');
  
  elements.forEach(element => {
    observer.observe(element);
  });
  
}


export function initializeValueAnimation() {
  function onEntry(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('value_anim_show');
      } else {
        entry.target.classList.remove('value_anim_show');
      }
    });
  }
  
  let options = {
    threshold: [0.5]
  };
  
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.value_item');
  
  elements.forEach(element => {
    observer.observe(element);
  });
}

