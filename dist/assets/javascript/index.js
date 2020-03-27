"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var h = document.querySelector('#health');
  var ha = document.querySelector('.healthAnimation');
  var s = document.querySelector('#sport');
  var sa = document.querySelector('.sportAnimation');
  var t = document.querySelector('#travel');
  var ta = document.querySelector('.travelAnimation');
  h.innerHTML = "\n<figure class=\"flex items-center\">\n<img src=\"/assets/images/tema.png\" alt=\"\" class=\"w-32 h-32\">\n<h1>HEALTH</h1>\n</figure>\n<figure class=\"pr-10\">\n<img class=\"healthAnimation\" src=\"/assets/images/Arow.png\" alt=\"\">\n</figure>\n";
  h.addEventListener("click", function () {
    alert("healt"); // ha.classList.add('clicked')
  });
  s.innerHTML = "\n<figure class=\"flex items-center\">\n<img src=\"/assets/images/tema.png\" alt=\"\" class=\"w-32 h-32\">\n<h1>SPORT</h1>\n</figure>\n<figure class=\"pr-10\">\n<img class=\"healthAnimation\" src=\"/assets/images/Arow.png\" alt=\"\">\n</figure>\n";
  s.addEventListener("click", function () {
    alert("SPORT"); // ha.classList.add('clicked')
  });
  t.innerHTML = "\n\n<figur class=\"flex items-center\">\n            <img src=\"/assets/images/tema.png\" alt=\"\" class=\"w-32 h-32\">\n            <h1>TRAVEL</h1>\n        </figur>\n        <figure class=\"pr-10\">\n            <img class=\"healthAnimation\" src=\"/assets/images/Arow.png\" alt=\"\">\n        </figure>\n";
  t.addEventListener("click", function () {
    alert("travel"); // ha.classList.add('clicked')
  });
});