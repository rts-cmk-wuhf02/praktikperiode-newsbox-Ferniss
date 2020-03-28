"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var h = document.querySelector('#health');
  h.innerHTML = "\n<figure class=\"flex items-center\">\n<img src=\"/assets/images/tema.png\" alt=\"\" class=\"w-32 h-32\">\n<h1>HEALTH</h1>\n</figure>\n<figure class=\"pr-10\">\n<img class=\"healthAnimation\" src=\"/assets/images/Arow.png\" alt=\"\">\n</figure>\n";
  var ha = document.querySelector('.healthAnimation');
  h.addEventListener("click", function () {
    ha.classList.toggle('clicked');
    var sh = document.querySelector('#sectionhealth');

    if (ha.className === "healthAnimation clicked") {
      sh.innerHTML = "\n          <section class=\"flex justify-between items-center pt-2 my-3 p-6\">\n            <figur class=\"flex items-center justify-center\">\n                <img src=\"/assets/images/undertema.png\" alt=\"\" class=\"rounded-full h-16 w-16\">\n                <section>\n                    <h1>Headline</h1>\n    \n                    <p>\n                        Surfing is a surface water sport in which the wave rider, referred to as...\n                    </p>\n                </section>\n            </figur>\n        </section>\n          ";
    } else {
      sh.innerHTML = "";
    }
  });
  var s = document.querySelector('#sport');
  s.innerHTML = "\n<figure class=\"flex items-center\">\n<img src=\"/assets/images/tema.png\" alt=\"\" class=\"w-32 h-32\">\n<h1>SPORT</h1>\n</figure>\n<figure class=\"pr-10\">\n<img class=\"sportAnimation\" src=\"/assets/images/Arow.png\" alt=\"\">\n</figure>\n";
  var sa = document.querySelector('.sportAnimation');
  s.addEventListener("click", function () {
    sa.classList.toggle('clicked');
  });
  var t = document.querySelector('#travel');
  t.innerHTML = "\n<figur class=\"flex items-center\">\n            <img src=\"/assets/images/tema.png\" alt=\"\" class=\"w-32 h-32\">\n            <h1>TRAVEL</h1>\n        </figur>\n        <figure class=\"pr-10\">\n            <img class=\"travelAnimation\" src=\"/assets/images/Arow.png\" alt=\"\">\n        </figure>\n";
  var ta = document.querySelector('.travelAnimation');
  t.addEventListener("click", function () {
    ta.classList.toggle('clicked');
  });
});