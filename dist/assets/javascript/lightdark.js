"use strict";

document.body.style.backgroundColor = localStorage.getItem('bg');
document.body.style.color = localStorage.getItem('cc');

function darker() {
  if (localStorage.getItem('bg') === 'rgb(255, 255, 255)') {
    localStorage.setItem('bg', 'rgb(6, 23, 37)');
    localStorage.setItem('cc', '#777');
  } else if (localStorage.getItem('bg') == null || undefined) {
    localStorage.setItem('bg', 'rgb(6, 23, 37)');
    localStorage.setItem('cc', '#777');
  } else if (localStorage.getItem('bg') === 'rgb(6, 23, 37)') {
    localStorage.setItem('bg', 'rgb(255, 255, 255)');
    localStorage.setItem('cc', '#333');
  }

  document.body.style.backgroundColor = localStorage.getItem('bg');
  document.body.style.color = localStorage.getItem('cc');
}