"use strict";

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//bg-black
if (sessionStorage.getItem("europe") == "on") {
  fetch('https://rss.nytimes.com/services/xml/rss/nyt/Europe.xml', {
    method: "GET"
  }).then(function (response) {
    return response.text();
  }).then(function (xmlStr) {
    /**
    * This function coverts a DOM Tree into JavaScript Object. 
    * @param srcDOM: DOM Tree to be converted. 
    */
    function xml2json(srcDOM) {
      var children = _toConsumableArray(srcDOM.children); // base case for recursion. 


      if (!children.length) {
        return srcDOM.innerHTML;
      } // initializing object to be returned. 


      var jsonResult = {};

      var _iterator = _createForOfIteratorHelper(children),
          _step;

      try {
        var _loop = function _loop() {
          var child = _step.value;
          // checking is child has siblings of same name. 
          var childIsArray = children.filter(function (eachChild) {
            return eachChild.nodeName === child.nodeName;
          }).length > 1; // if child is array, save the values as array, else as strings. 

          if (childIsArray) {
            if (jsonResult[child.nodeName] === undefined) {
              jsonResult[child.nodeName] = [xml2json(child)];
            } else {
              jsonResult[child.nodeName].push(xml2json(child));
            }
          } else {
            jsonResult[child.nodeName] = xml2json(child);
          }
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return jsonResult;
    } // testing the function
    // converting to DOM Tree


    var parser = new DOMParser();
    var srcDOM = parser.parseFromString(xmlStr, "application/xml"); // Converting DOM Tree To JSON. 

    return xml2json(srcDOM);
    /** The output will be
    {
      "book": {
        "title": "Some title",
        "description": "some description",
        "author": { "id": "1", "name": "some author name" },
        "review": ["nice book", "this book sucks", "amazing work"]
      }
    }
    */
  }).then(function (data) {
    console.log(data);
    var e = document.querySelector('#europe');
    e.innerHTML += "\n            <figure class=\"flex items-center\">\n            <img src=\"/assets/images/tema.png\" alt=\"\" class=\"w-12 h-12 p-2\">\n            <h1>EUROPE</h1>\n            </figure>\n            <figure class=\"pr-10\">\n            <img class=\"europeAnimation\" src=\"/assets/images/Arow.png\" alt=\"\">\n            </figure>\n            ";
    var ea = document.querySelector('.europeAnimation');
    e.addEventListener("click", function () {
      ea.classList.toggle('clicked');
      var se = document.querySelector('#sectioneurope');

      if (ea.className === "europeAnimation clicked") {
        data.rss.channel.item.forEach(function (element) {
          se.innerHTML += "\n                      <section class=\"flex justify-between items-center my-6 yoy\">\n                        <figur class=\"flex items-center w-full flex-shrink-0\">\n                            <img src=\"/assets/images/undertema.png\" alt=\"\" class=\"rounded-full h-16 w-16 ml-8\">\n                            <section class=\"mx-4 newsTextContainer\">\n                                <h1>".concat(element.title, "</h1>\n                                <p>\n                                ").concat(element.description, "\n                                </p>\n                            </section>\n                        </figur>\n                        <figur class=\"flex items-center justify-center flex-shrink-0\">\n                            <img src=\"/assets/images/archive.png\" alt=\"\" class=\"h-24 w-24 bg-teal-400 p-8 flex-shrink-0 ekesempel\">\n                        </figur>\n                    </section>\n                    </section>\n\n                    </section>\n                      ");
          var ekesempel = document.querySelector('.ekesempel');
          ekesempel.addEventListener('click', function () {
            var feed;

            if (localStorage.getItem("article")) {
              feed = JSON.parse(localStorage.getItem("article"));
              feed.push({
                title: element.title,
                description: element.description
              });
              console.log("hej");
            } else {
              feed = [{
                title: element.title,
                description: element.description
              }];
            }

            localStorage.setItem("article", JSON.stringify(feed));
          });
        });
      } else {
        se.innerHTML = "";
      }

      var yoy = document.querySelectorAll(".yoy");
      var mouseX;
      var mouseY;
      yoy.forEach(function (element) {
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
  });
} /////hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
//bg-black


if (sessionStorage.getItem("health") == "on") {
  fetch('https://rss.nytimes.com/services/xml/rss/nyt/Health.xml', {
    method: "GET"
  }).then(function (response) {
    return response.text();
  }).then(function (xmlStr) {
    /**
    * This function coverts a DOM Tree into JavaScript Object. 
    * @param srcDOM: DOM Tree to be converted. 
    */
    function xml2json(srcDOM) {
      var children = _toConsumableArray(srcDOM.children); // base case for recursion. 


      if (!children.length) {
        return srcDOM.innerHTML;
      } // initializing object to be returned. 


      var jsonResult = {};

      var _iterator2 = _createForOfIteratorHelper(children),
          _step2;

      try {
        var _loop2 = function _loop2() {
          var child = _step2.value;
          // checking is child has siblings of same name. 
          var childIsArray = children.filter(function (eachChild) {
            return eachChild.nodeName === child.nodeName;
          }).length > 1; // if child is array, save the values as array, else as strings. 

          if (childIsArray) {
            if (jsonResult[child.nodeName] === undefined) {
              jsonResult[child.nodeName] = [xml2json(child)];
            } else {
              jsonResult[child.nodeName].push(xml2json(child));
            }
          } else {
            jsonResult[child.nodeName] = xml2json(child);
          }
        };

        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          _loop2();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return jsonResult;
    } // testing the function
    // converting to DOM Tree


    var parser = new DOMParser();
    var srcDOM = parser.parseFromString(xmlStr, "application/xml"); // Converting DOM Tree To JSON. 

    return xml2json(srcDOM);
    /** The output will be
    {
      "book": {
        "title": "Some title",
        "description": "some description",
        "author": { "id": "1", "name": "some author name" },
        "review": ["nice book", "this book sucks", "amazing work"]
      }
    }
    */
  }).then(function (data) {
    console.log(data);
    var h = document.querySelector('#health');
    h.innerHTML += "\n        <figure class=\"flex items-center\">\n        <img src=\"/assets/images/tema.png\" alt=\"\" class=\"w-12 h-12 p-2\">\n        <h1>HEALTH</h1>\n        </figure>\n        <figure class=\"pr-10\">\n        <img class=\"healthAnimation\" src=\"/assets/images/Arow.png\" alt=\"\">\n        </figure>\n            ";
    var ha = document.querySelector('.healthAnimation');
    h.addEventListener("click", function () {
      ha.classList.toggle('clicked');
      var sh = document.querySelector('#sectionhealth');

      if (ha.className === "healthAnimation clicked") {
        data.rss.channel.item.forEach(function (element) {
          sh.innerHTML += "\n                      <section class=\"flex justify-between items-center my-6 yoy\">\n                        <figur class=\"flex items-center w-full flex-shrink-0\">\n                            <img src=\"/assets/images/undertema.png\" alt=\"\" class=\"rounded-full h-16 w-16 ml-8\">\n                            <section class=\"mx-4 newsTextContainer\">\n                                <h1>".concat(element.title, "</h1>\n                                <p>\n                                ").concat(element.description, "\n                                </p>\n                            </section>\n                        </figur>\n                        <figur class=\"flex items-center justify-center flex-shrink-0\">\n                            <img src=\"/assets/images/archive.png\" alt=\"\" class=\"h-24 w-24 bg-teal-400 p-8 flex-shrink-0\">\n                        </figur>\n                    </section>\n                    </section>\n\n                    </section>\n                      ");
        });
      } else {
        sh.innerHTML = "";
      }

      var yoy = document.querySelectorAll(".yoy");
      var mouseX;
      var mouseY;
      yoy.forEach(function (element) {
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
        }); // element.addEventListener('click', ()=>{
        //   element.style.transform = "translateX(-6rem)"
        // })
      });
    });
  });
} /////hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
/////sssssssssssssssssssssssssssssssssssssssssssss
//bg-black


if (sessionStorage.getItem("sport") == "on") {
  fetch('https://rss.nytimes.com/services/xml/rss/nyt/Sports.xml', {
    method: "GET"
  }).then(function (response) {
    return response.text();
  }).then(function (xmlStr) {
    /**
    * This function coverts a DOM Tree into JavaScript Object. 
    * @param srcDOM: DOM Tree to be converted. 
    */
    function xml2json(srcDOM) {
      var children = _toConsumableArray(srcDOM.children); // base case for recursion. 


      if (!children.length) {
        return srcDOM.innerHTML;
      } // initializing object to be returned. 


      var jsonResult = {};

      var _iterator3 = _createForOfIteratorHelper(children),
          _step3;

      try {
        var _loop3 = function _loop3() {
          var child = _step3.value;
          // checking is child has siblings of same name. 
          var childIsArray = children.filter(function (eachChild) {
            return eachChild.nodeName === child.nodeName;
          }).length > 1; // if child is array, save the values as array, else as strings. 

          if (childIsArray) {
            if (jsonResult[child.nodeName] === undefined) {
              jsonResult[child.nodeName] = [xml2json(child)];
            } else {
              jsonResult[child.nodeName].push(xml2json(child));
            }
          } else {
            jsonResult[child.nodeName] = xml2json(child);
          }
        };

        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          _loop3();
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return jsonResult;
    } // testing the function
    // converting to DOM Tree


    var parser = new DOMParser();
    var srcDOM = parser.parseFromString(xmlStr, "application/xml"); // Converting DOM Tree To JSON. 

    return xml2json(srcDOM);
    /** The output will be
    {
      "book": {
        "title": "Some title",
        "description": "some description",
        "author": { "id": "1", "name": "some author name" },
        "review": ["nice book", "this book sucks", "amazing work"]
      }
    }
    */
  }).then(function (data) {
    console.log(data);
    var s = document.querySelector('#sport');
    s.innerHTML += "\n        <figure class=\"flex items-center\">\n        <img src=\"/assets/images/tema.png\" alt=\"\" class=\"w-12 h-12 p-2\">\n        <h1>SPORT</h1>\n        </figure>\n        <figure class=\"pr-10\">\n        <img class=\"sportAnimation\" src=\"/assets/images/Arow.png\" alt=\"\">\n        </figure>\n        ";
    var sa = document.querySelector('.sportAnimation');
    s.addEventListener("click", function () {
      sa.classList.toggle('clicked');
      var ss = document.querySelector('#sectionsport');

      if (sa.className === "sportAnimation clicked") {
        data.rss.channel.item.forEach(function (element) {
          ss.innerHTML += "\n                      <section class=\"flex justify-between items-center my-6 yoy\">\n                        <figur class=\"flex items-center w-full flex-shrink-0\">\n                            <img src=\"/assets/images/undertema.png\" alt=\"\" class=\"rounded-full h-16 w-16 ml-8\">\n                            <section class=\"mx-4 newsTextContainer\">\n                                <h1>".concat(element.title, "</h1>\n                                <p>\n                                ").concat(element.description, "\n                                </p>\n                            </section>\n                        </figur>\n                        <figur class=\"flex items-center justify-center flex-shrink-0\">\n                            <img src=\"/assets/images/archive.png\" alt=\"\" class=\"h-24 w-24 bg-teal-400 p-8 flex-shrink-0\">\n                        </figur>\n                    </section>\n                    </section>\n\n                    </section>\n                      ");
        });
      } else {
        ss.innerHTML = "";
      }

      var yoy = document.querySelectorAll(".yoy");
      var mouseX;
      var mouseY;
      yoy.forEach(function (element) {
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
  });
} /////sssssssssssssssssssssssssssssssssssssssssssss 
/////bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
//bg-black


if (sessionStorage.getItem("business") == "on") {
  fetch('https://rss.nytimes.com/services/xml/rss/nyt/business.xml', {
    method: "GET"
  }).then(function (response) {
    return response.text();
  }).then(function (xmlStr) {
    /**
    * This function coverts a DOM Tree into JavaScript Object. 
    * @param srcDOM: DOM Tree to be converted. 
    */
    function xml2json(srcDOM) {
      var children = _toConsumableArray(srcDOM.children); // base case for recursion. 


      if (!children.length) {
        return srcDOM.innerHTML;
      } // initializing object to be returned. 


      var jsonResult = {};

      var _iterator4 = _createForOfIteratorHelper(children),
          _step4;

      try {
        var _loop4 = function _loop4() {
          var child = _step4.value;
          // checking is child has siblings of same name. 
          var childIsArray = children.filter(function (eachChild) {
            return eachChild.nodeName === child.nodeName;
          }).length > 1; // if child is array, save the values as array, else as strings. 

          if (childIsArray) {
            if (jsonResult[child.nodeName] === undefined) {
              jsonResult[child.nodeName] = [xml2json(child)];
            } else {
              jsonResult[child.nodeName].push(xml2json(child));
            }
          } else {
            jsonResult[child.nodeName] = xml2json(child);
          }
        };

        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          _loop4();
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      return jsonResult;
    } // testing the function
    // converting to DOM Tree


    var parser = new DOMParser();
    var srcDOM = parser.parseFromString(xmlStr, "application/xml"); // Converting DOM Tree To JSON. 

    return xml2json(srcDOM);
    /** The output will be
    {
      "book": {
        "title": "Some title",
        "description": "some description",
        "author": { "id": "1", "name": "some author name" },
        "review": ["nice book", "this book sucks", "amazing work"]
      }
    }
    */
  }).then(function (data) {
    console.log(data);
    var b = document.querySelector('#buisness');
    b.innerHTML += "\n        <figur class=\"flex items-center\">\n            <img src=\"/assets/images/tema.png\" alt=\"\" class=\"w-12 h-12 p-2\">\n            <h1>BUISNESS</h1>\n        </figur>\n        <figure class=\"pr-10\">\n            <img class=\"buisnessAnimation\" src=\"/assets/images/Arow.png\" alt=\"\">\n        </figure>\n            ";
    var ba = document.querySelector('.buisnessAnimation');
    b.addEventListener("click", function () {
      ba.classList.toggle('clicked');
      var sb = document.querySelector('#sectionbuisness');

      if (ba.className === "buisnessAnimation clicked") {
        data.rss.channel.item.forEach(function (element) {
          sb.innerHTML += "\n                      <section class=\"flex justify-between items-center my-6 yoy\">\n                        <figur class=\"flex items-center w-full flex-shrink-0\">\n                            <img src=\"/assets/images/undertema.png\" alt=\"\" class=\"rounded-full h-16 w-16 ml-8\">\n                            <section class=\"mx-4 newsTextContainer\">\n                                <h1>".concat(element.title, "</h1>\n                                <p>\n                                ").concat(element.description, "\n                                </p>\n                            </section>\n                        </figur>\n                        <figur class=\"flex items-center justify-center flex-shrink-0\">\n                            <img src=\"/assets/images/archive.png\" alt=\"\" class=\"h-24 w-24 bg-teal-400 p-8 flex-shrink-0\">\n                        </figur>\n                    </section>\n                    </section>\n\n                    </section>\n                      ");
        });
      } else {
        sb.innerHTML = "";
      }

      var yoy = document.querySelectorAll(".yoy");
      var mouseX;
      var mouseY;
      yoy.forEach(function (element) {
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
        }); // element.addEventListener('click', ()=>{
        //   element.style.transform = "translateX(-6rem)"
        // })
      });
    });
  });
} /////bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
//bg-black


if (sessionStorage.getItem("travel") == "on") {
  fetch('https://rss.nytimes.com/services/xml/rss/nyt/travel.xml', {
    method: "GET"
  }).then(function (response) {
    return response.text();
  }).then(function (xmlStr) {
    /**
    * This function coverts a DOM Tree into JavaScript Object. 
    * @param srcDOM: DOM Tree to be converted. 
    */
    function xml2json(srcDOM) {
      var children = _toConsumableArray(srcDOM.children); // base case for recursion. 


      if (!children.length) {
        return srcDOM.innerHTML;
      } // initializing object to be returned. 


      var jsonResult = {};

      var _iterator5 = _createForOfIteratorHelper(children),
          _step5;

      try {
        var _loop5 = function _loop5() {
          var child = _step5.value;
          // checking is child has siblings of same name. 
          var childIsArray = children.filter(function (eachChild) {
            return eachChild.nodeName === child.nodeName;
          }).length > 1; // if child is array, save the values as array, else as strings. 

          if (childIsArray) {
            if (jsonResult[child.nodeName] === undefined) {
              jsonResult[child.nodeName] = [xml2json(child)];
            } else {
              jsonResult[child.nodeName].push(xml2json(child));
            }
          } else {
            jsonResult[child.nodeName] = xml2json(child);
          }
        };

        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          _loop5();
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      return jsonResult;
    } // testing the function
    // converting to DOM Tree


    var parser = new DOMParser();
    var srcDOM = parser.parseFromString(xmlStr, "application/xml"); // Converting DOM Tree To JSON. 

    return xml2json(srcDOM);
    /** The output will be
    {
      "book": {
        "title": "Some title",
        "description": "some description",
        "author": { "id": "1", "name": "some author name" },
        "review": ["nice book", "this book sucks", "amazing work"]
      }
    }
    */
  }).then(function (data) {
    console.log(data);
    var t = document.querySelector('#travel');
    t.innerHTML += "\n        <figur class=\"flex items-center\">\n            <img src=\"/assets/images/tema.png\" alt=\"\" class=\"w-12 h-12 p-2\">\n            <h1>TRAVEL</h1>\n        </figur>\n        <figure class=\"pr-10\">\n            <img class=\"travelAnimation\" src=\"/assets/images/Arow.png\" alt=\"\">\n        </figure>\n            ";
    var ta = document.querySelector('.travelAnimation');
    t.addEventListener("click", function () {
      ta.classList.toggle('clicked');
      var st = document.querySelector('#sectiontravel');

      if (ta.className === "travelAnimation clicked") {
        data.rss.channel.item.forEach(function (element) {
          st.innerHTML += "\n                      <section class=\"flex justify-between items-center my-6 yoy\">\n                        <figur class=\"flex items-center w-full flex-shrink-0\">\n                            <img src=\"/assets/images/undertema.png\" alt=\"\" class=\"rounded-full h-16 w-16 ml-8\">\n                            <section class=\"mx-4 newsTextContainer\">\n                                <h1>".concat(element.title, "</h1>\n                                <p>\n                                ").concat(element.description, "\n                                </p>\n                            </section>\n                        </figur>\n                        <figur class=\"flex items-center justify-center flex-shrink-0\">\n                            <img src=\"/assets/images/archive.png\" alt=\"\" class=\"h-24 w-24 bg-teal-400 p-8 flex-shrink-0\">\n                        </figur>\n                    </section>\n                    </section>\n\n                    </section>\n                      ");
        });
      } else {
        st.innerHTML = "";
      }

      var yoy = document.querySelectorAll(".yoy");
      var mouseX;
      var mouseY;
      yoy.forEach(function (element) {
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
        }); // element.addEventListener('click', ()=>{
        //   element.style.transform = "translateX(-6rem)"
        // })
      });
    });
  });
}