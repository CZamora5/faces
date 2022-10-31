import './svgDrawer.js';
import { imgs } from './data.js';

function appendImages(containers) {
  imgs.forEach((url, index) => {
    const figure = document.createElement('figure');
    figure.classList.add('grid__figure');

    const img = document.createElement('img');
    img.classList.add('grid__img');
    img.src = url;
    img.alt = 'AI generated highly photorealistic face';

    figure.appendChild(img);
    containers[index % containers.length].appendChild(figure);
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