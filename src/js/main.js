import './svgDrawer.js';
import { imgs } from './data.js';

function appendImages(containers) {
  imgs.forEach((url, index) => {
    const img = document.createElement('img');
    img.classList.add('grid__img');
    img.src = url;
    containers[index % containers.length].appendChild(img);
  });
}

function displayImages() {
  const rows = document.querySelectorAll('.grid__row');
  const fragments = new Array(rows.length).fill(0).map(() => document.createDocumentFragment());

  appendImages(fragments);
  appendImages(fragments);

  rows.forEach((row, index) => {
    row.appendChild(fragments[index]);
  });
}

displayImages();