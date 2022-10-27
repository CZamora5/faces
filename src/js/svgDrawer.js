const leftPath = document.querySelector('.hero__figure__left path');
const rightPath = document.querySelector('.hero__figure__right path');
leftPath.style.setProperty('--path-length', leftPath.getTotalLength() + 'px');
leftPath.style.setProperty('--factor', -1);
rightPath.style.setProperty('--path-length', rightPath.getTotalLength() + 'px');