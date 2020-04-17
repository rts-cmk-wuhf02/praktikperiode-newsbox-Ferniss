"use strict";

if (localStorage.getItem("europe") == "on") {
  var _e = document.querySelector('#europe');

  _e.innerHTML += "\n            <figure class=\"flex items-center\">\n            <img src=\"/assets/images/tema.png\" alt=\"\" class=\"w-12 h-12 p-2\">\n            <h1>EUROPE</h1>\n            </figure>\n            <figure class=\"pr-10\">\n            <img class=\"europeAnimation\" src=\"/assets/images/Arow.png\" alt=\"\">\n            </figure>\n            ";
  var ea = document.querySelector('.europeAnimation');

  _e.addEventListener("click", function () {
    ea.classList.toggle('clicked');
    var se = document.querySelector('#sectioneurope');

    if (ea.className === "europeAnimation clicked") {
      JSON.parse(localStorage.getItem("article")).forEach(function (element) {
        se.innerHTML += "\n                      <section class=\"flex justify-between items-center my-6 slider\">\n                        <figur class=\"flex items-center w-full flex-shrink-0\">\n                            <img src=\"/assets/images/undertema.png\" alt=\"\" class=\"rounded-full h-16 w-16 ml-8\">\n                            <section class=\"mx-4 newsTextContainer\">\n                                <h1>".concat(element.title, "</h1>\n                                <p>\n                                ").concat(element.description, "\n                                </p>\n                            </section>\n                        </figur>\n                        <figur class=\"flex items-center justify-center flex-shrink-0\">\n                        <img src=\"/assets/images/delete.png\" alt=\"\" class=\"h-24 w-24 bg-red-600 p-8 flex-shrink-0 europaStorage\">\n                        </figur>\n                    </section>\n                    </section>\n\n                    </section>\n                      ");
        var europaStorage = document.querySelectorAll('.europaStorage');
        europaStorage.forEach(function (E) {
          E.addEventListener('click', function () {
            var index = JSON.parse(localStorage.getItem("article")).findIndex(function (x) {
              return x.title === element.title;
            });
            storage.splice(index, 1);
            localStorage.setItem('articles', JSON.stringify(storage));

            _e.currentTarget.remove();
          });
        });
      });
    }

    var slider = document.querySelectorAll(".slider");
    var mouseX;
    var mouseY;
    slider.forEach(function (element) {
      element.addEventListener('touchend', function (e) {
        if (e.changedTouches[0].clientY + 50 >= mouseY && e.changedTouches[0].clientY - 50 <= mouseY) {
          if (e.changedTouches[0].clientX + 100 < mouseX) {
            element.style.transform = "translateX(-6rem)";
          } else if (e.changedTouches[0].clientX - 100 > mouseX) element.style.transform = "translateX(0)";
        }
      });
      element.addEventListener('touchstart', function (e) {
        mouseX = e.touches[0].clientX;
        mouseY = e.touches[0].clientY;
      });
    });
  });
} /////hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh


if (localStorage.getItem("health") == "on") {
  var h = document.querySelector('#health');
  h.innerHTML += "\n        <figure class=\"flex items-center\">\n        <img src=\"/assets/images/tema.png\" alt=\"\" class=\"w-12 h-12 p-2\">\n        <h1>HEALTH</h1>\n        </figure>\n        <figure class=\"pr-10\">\n        <img class=\"healthAnimation\" src=\"/assets/images/Arow.png\" alt=\"\">\n        </figure>\n            ";
  var ha = document.querySelector('.healthAnimation');
  h.addEventListener("click", function () {
    ha.classList.toggle('clicked');
    var sh = document.querySelector('#sectionhealth');

    if (ha.className === "healthAnimation clicked") {
      JSON.parse(localStorage.getItem("article")).forEach(function (element) {
        sh.innerHTML += "\n                      <section class=\"flex justify-between items-center my-6 slider\">\n                        <figur class=\"flex items-center w-full flex-shrink-0\">\n                            <img src=\"/assets/images/undertema.png\" alt=\"\" class=\"rounded-full h-16 w-16 ml-8\">\n                            <section class=\"mx-4 newsTextContainer\">\n                                <h1>".concat(element.title, "</h1>\n                                <p>\n                                ").concat(element.description, "\n                                </p>\n                            </section>\n                        </figur>\n                        <figur class=\"flex items-center justify-center flex-shrink-0\">\n                        <img src=\"/assets/images/delete.png\" alt=\"\" class=\"h-24 w-24 bg-red-600 p-8 flex-shrink-0 healthStorage\">\n                        </figur>\n                    </section>\n                    </section>\n\n                    </section>\n                      ");
        var healthStorage = document.querySelectorAll('.healthStorage');
        healthStorage.forEach(function (E) {
          E.addEventListener('click', function () {
            var index = JSON.parse(localStorage.getItem("article")).findIndex(function (x) {
              return x.title === element.title;
            });
            storage.splice(index, 1);
            localStorage.setItem('articles', JSON.stringify(storage));
            e.currentTarget.remove();
          });
        });
      });
    }

    var slider = document.querySelectorAll(".slider");
    var mouseX;
    var mouseY;
    slider.forEach(function (element) {
      element.addEventListener('touchend', function (e) {
        if (e.changedTouches[0].clientY + 50 >= mouseY && e.changedTouches[0].clientY - 50 <= mouseY) {
          if (e.changedTouches[0].clientX + 100 < mouseX) {
            element.style.transform = "translateX(-6rem)";
          } else if (e.changedTouches[0].clientX - 100 > mouseX) element.style.transform = "translateX(0)";
        }
      });
      element.addEventListener('touchstart', function (e) {
        mouseX = e.touches[0].clientX;
        mouseY = e.touches[0].clientY;
      });
    });
  });
} /////hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
/////sssssssssssssssssssssssssssssssssssssssssssss


if (localStorage.getItem("sport") == "on") {
  var s = document.querySelector('#sport');
  s.innerHTML += "\n        <figure class=\"flex items-center\">\n        <img src=\"/assets/images/tema.png\" alt=\"\" class=\"w-12 h-12 p-2\">\n        <h1>SPORT</h1>\n        </figure>\n        <figure class=\"pr-10\">\n        <img class=\"sportAnimation\" src=\"/assets/images/Arow.png\" alt=\"\">\n        </figure>\n        ";
  var sa = document.querySelector('.sportAnimation');
  s.addEventListener("click", function () {
    sa.classList.toggle('clicked');
    var ss = document.querySelector('#sectionsport');

    if (sa.className === "sportAnimation clicked") {
      JSON.parse(localStorage.getItem("article")).forEach(function (element) {
        ss.innerHTML += "\n                      <section class=\"flex justify-between items-center my-6 slider\">\n                        <figur class=\"flex items-center w-full flex-shrink-0\">\n                            <img src=\"/assets/images/undertema.png\" alt=\"\" class=\"rounded-full h-16 w-16 ml-8\">\n                            <section class=\"mx-4 newsTextContainer\">\n                                <h1>".concat(element.title, "</h1>\n                                <p>\n                                ").concat(element.description, "\n                                </p>\n                            </section>\n                        </figur>\n                        <figur class=\"flex items-center justify-center flex-shrink-0\">\n                        <img src=\"/assets/images/delete.png\" alt=\"\" class=\"h-24 w-24 bg-red-600 p-8 flex-shrink-0 sportStorage\">\n                        </figur>\n                    </section>\n                    </section>\n\n                    </section>\n                      ");
        var sportStorage = document.querySelectorAll('.sportStorage');
        sportStorage.forEach(function (E) {
          E.addEventListener('click', function () {
            var index = JSON.parse(localStorage.getItem("article")).findIndex(function (x) {
              return x.title === element.title;
            });
            storage.splice(index, 1);
            localStorage.setItem('articles', JSON.stringify(storage));
            e.currentTarget.remove();
          });
        });
      });
    }

    var slider = document.querySelectorAll(".slider");
    var mouseX;
    var mouseY;
    slider.forEach(function (element) {
      element.addEventListener('touchend', function (e) {
        if (e.changedTouches[0].clientY + 50 >= mouseY && e.changedTouches[0].clientY - 50 <= mouseY) {
          if (e.changedTouches[0].clientX + 100 < mouseX) {
            element.style.transform = "translateX(-6rem)";
          } else if (e.changedTouches[0].clientX - 100 > mouseX) element.style.transform = "translateX(0)";
        }
      });
      element.addEventListener('touchstart', function (e) {
        mouseX = e.touches[0].clientX;
        mouseY = e.touches[0].clientY;
      });
    });
  });
} /////sssssssssssssssssssssssssssssssssssssssssssss 
/////bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb


if (localStorage.getItem("business") == "on") {
  var b = document.querySelector('#buisness');
  b.innerHTML += "\n        <figur class=\"flex items-center\">\n            <img src=\"/assets/images/tema.png\" alt=\"\" class=\"w-12 h-12 p-2\">\n            <h1>BUISNESS</h1>\n        </figur>\n        <figure class=\"pr-10\">\n            <img class=\"buisnessAnimation\" src=\"/assets/images/Arow.png\" alt=\"\">\n        </figure>\n            ";
  var ba = document.querySelector('.buisnessAnimation');
  b.addEventListener("click", function () {
    ba.classList.toggle('clicked');
    var sb = document.querySelector('#sectionbuisness');

    if (ba.className === "buisnessAnimation clicked") {
      data.rss.channel.item.forEach(function (element) {
        sb.innerHTML += "\n                      <section class=\"flex justify-between items-center my-6 slider\">\n                        <figur class=\"flex items-center w-full flex-shrink-0\">\n                            <img src=\"/assets/images/undertema.png\" alt=\"\" class=\"rounded-full h-16 w-16 ml-8\">\n                            <section class=\"mx-4 newsTextContainer\">\n                                <h1>".concat(element.title, "</h1>\n                                <p>\n                                ").concat(element.description, "\n                                </p>\n                            </section>\n                        </figur>\n                        <figur class=\"flex items-center justify-center flex-shrink-0\">\n                        <img src=\"/assets/images/delete.png\" alt=\"\" class=\"h-24 w-24 bg-red-600 p-8 flex-shrink-0 businessStorage\">\n                        </figur>\n                    </section>\n                    </section>\n\n                    </section>\n                      ");
        var businessStorage = document.querySelectorAll('.businessStorage');
        businessStorage.forEach(function (E) {
          E.addEventListener('click', function () {
            var index = JSON.parse(localStorage.getItem("article")).findIndex(function (x) {
              return x.title === element.title;
            });
            storage.splice(index, 1);
            localStorage.setItem('articles', JSON.stringify(storage));
            e.currentTarget.remove();
          });
        });
      });
    }

    var slider = document.querySelectorAll(".slider");
    var mouseX;
    var mouseY;
    slider.forEach(function (element) {
      element.addEventListener('touchend', function (e) {
        if (e.changedTouches[0].clientY + 50 >= mouseY && e.changedTouches[0].clientY - 50 <= mouseY) {
          if (e.changedTouches[0].clientX + 100 < mouseX) {
            element.style.transform = "translateX(-6rem)";
          } else if (e.changedTouches[0].clientX - 100 > mouseX) element.style.transform = "translateX(0)";
        }
      });
      element.addEventListener('touchstart', function (e) {
        mouseX = e.touches[0].clientX;
        mouseY = e.touches[0].clientY;
      });
    });
  });
} /////bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb


if (localStorage.getItem("travel") == "on") {
  var t = document.querySelector('#travel');
  t.innerHTML += "\n        <figur class=\"flex items-center\">\n            <img src=\"/assets/images/tema.png\" alt=\"\" class=\"w-12 h-12 p-2\">\n            <h1>TRAVEL</h1>\n        </figur>\n        <figure class=\"pr-10\">\n            <img class=\"travelAnimation\" src=\"/assets/images/Arow.png\" alt=\"\">\n        </figure>\n            ";
  var ta = document.querySelector('.travelAnimation');
  t.addEventListener("click", function () {
    ta.classList.toggle('clicked');
    var st = document.querySelector('#sectiontravel');

    if (ta.className === "travelAnimation clicked") {
      data.rss.channel.item.forEach(function (element) {
        st.innerHTML += "\n                      <section class=\"flex justify-between items-center my-6 slider\">\n                        <figur class=\"flex items-center w-full flex-shrink-0\">\n                            <img src=\"/assets/images/undertema.png\" alt=\"\" class=\"rounded-full h-16 w-16 ml-8\">\n                            <section class=\"mx-4 newsTextContainer\">\n                                <h1>".concat(element.title, "</h1>\n                                <p>\n                                ").concat(element.description, "\n                                </p>\n                            </section>\n                        </figur>\n                        <figur class=\"flex items-center justify-center flex-shrink-0\">\n                        <img src=\"/assets/images/delete.png\" alt=\"\" class=\"h-24 w-24 bg-red-600 p-8 flex-shrink-0 travelStorage\">\n                        </figur>\n                    </section>\n                    </section>\n\n                    </section>\n                      ");
        var travelStorage = document.querySelectorAll('.travelStorage');
        travelStorage.forEach(function (E) {
          E.addEventListener('click', function () {
            var index = JSON.parse(localStorage.getItem("article")).findIndex(function (x) {
              return x.title === element.title;
            });
            storage.splice(index, 1);
            localStorage.setItem('articles', JSON.stringify(storage));
            e.currentTarget.remove();
          });
        });
      });
    }

    var slider = document.querySelectorAll(".slider");
    var mouseX;
    var mouseY;
    slider.forEach(function (element) {
      element.addEventListener('touchend', function (e) {
        if (e.changedTouches[0].clientY + 50 >= mouseY && e.changedTouches[0].clientY - 50 <= mouseY) {
          if (e.changedTouches[0].clientX + 100 < mouseX) {
            element.style.transform = "translateX(-6rem)";
          } else if (e.changedTouches[0].clientX - 100 > mouseX) element.style.transform = "translateX(0)";
        }
      });
      element.addEventListener('touchstart', function (e) {
        mouseX = e.touches[0].clientX;
        mouseY = e.touches[0].clientY;
      });
    });
  });
}