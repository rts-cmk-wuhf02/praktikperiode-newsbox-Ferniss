"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var e = document.querySelector('#europe');
  e.innerHTML = "\n<figure class=\"flex items-center\">\n<img src=\"/assets/images/tema.png\" alt=\"\" class=\"w-32 h-32\">\n<h1>EUROPE</h1>\n</figure>\n<figure class=\"pr-10\">\n<img class=\"europeAnimation\" src=\"/assets/images/Arow.png\" alt=\"\">\n</figure>\n";
  var ea = document.querySelector('.europeAnimation');
  e.addEventListener("click", function () {
    ea.classList.toggle('clicked');
    var se = document.querySelector('#sectioneurope');

    if (ea.className === "europeAnimation clicked") {
      se.innerHTML = "\n          <section class=\"flex justify-between items-center pt-2 my-3 p-6\">\n            <figur class=\"flex items-center justify-center\">\n                <img src=\"/assets/images/undertema.png\" alt=\"\" class=\"rounded-full h-16 w-16\">\n                <section>\n                    <h1>Headline</h1>\n    \n                    <p>\n                        Surfing is a surface water sport in which the wave rider, referred to as...\n                    </p>\n                </section>\n            </figur>\n        </section>\n          ";
    } else {
      se.innerHTML = "";
    }
  });
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
    var ss = document.querySelector('#sectionsport');

    if (sa.className === "sportAnimation clicked") {
      ss.innerHTML = "\n          <section class=\"flex justify-between items-center pt-2 my-3 p-6\">\n            <figur class=\"flex items-center justify-center\">\n                <img src=\"/assets/images/undertema.png\" alt=\"\" class=\"rounded-full h-16 w-16\">\n                <section>\n                    <h1>Headline</h1>\n    \n                    <p>\n                        Surfing is a surface water sport in which the wave rider, referred to as...\n                    </p>\n                </section>\n            </figur>\n        </section>\n          ";
    } else {
      ss.innerHTML = "";
    }
  });
  var b = document.querySelector('#buisness');
  b.innerHTML = "\n<figur class=\"flex items-center\">\n            <img src=\"/assets/images/tema.png\" alt=\"\" class=\"w-32 h-32\">\n            <h1>BUISNESS</h1>\n        </figur>\n        <figure class=\"pr-10\">\n            <img class=\"buisnessAnimation\" src=\"/assets/images/Arow.png\" alt=\"\">\n        </figure>\n";
  var ba = document.querySelector('.buisnessAnimation');
  b.addEventListener("click", function () {
    ba.classList.toggle('clicked');
    var sb = document.querySelector('#sectionbuisness');

    if (ba.className === "buisnessAnimation clicked") {
      sb.innerHTML = "\n          <section class=\"flex justify-between items-center pt-2 my-3 p-6\">\n            <figur class=\"flex items-center justify-center\">\n                <img src=\"/assets/images/undertema.png\" alt=\"\" class=\"rounded-full h-16 w-16\">\n                <section>\n                    <h1>Headline</h1>\n    \n                    <p>\n                        Surfing is a surface water sport in which the wave rider, referred to as...\n                    </p>\n                </section>\n            </figur>\n        </section>\n          ";
    } else {
      sb.innerHTML = "";
    }
  });
  var t = document.querySelector('#travel');
  t.innerHTML = "\n<figur class=\"flex items-center\">\n            <img src=\"/assets/images/tema.png\" alt=\"\" class=\"w-32 h-32\">\n            <h1>TRAVEL</h1>\n        </figur>\n        <figure class=\"pr-10\">\n            <img class=\"travelAnimation\" src=\"/assets/images/Arow.png\" alt=\"\">\n        </figure>\n";
  var ta = document.querySelector('.travelAnimation');
  t.addEventListener("click", function () {
    ta.classList.toggle('clicked');
    var st = document.querySelector('#sectiontravel');

    if (ta.className === "travelAnimation clicked") {
      st.innerHTML = "\n          <section class=\"flex justify-between items-center pt-2 my-3 p-6\">\n            <figur class=\"flex items-center justify-center\">\n                <img src=\"/assets/images/undertema.png\" alt=\"\" class=\"rounded-full h-16 w-16\">\n                <section>\n                    <h1>Headline</h1>\n    \n                    <p>\n                        Surfing is a surface water sport in which the wave rider, referred to as...\n                    </p>\n                </section>\n            </figur>\n        </section>\n          ";
    } else {
      st.innerHTML = "";
    }
  });
});