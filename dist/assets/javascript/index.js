"use strict";

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

document.addEventListener('DOMContentLoaded', function () {
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
          se.innerHTML += "\n                      <section class=\"flex justify-between items-center pt-2 my-3 p-6\">\n                        <figur class=\"flex items-center justify-center\">\n                            <img src=\"/assets/images/undertema.png\" alt=\"\" class=\"rounded-full h-16 w-16\">\n                            <section>\n                                <h1>".concat(element.title, "</h1>\n                \n                                <p>\n                                ").concat(element.description, "\n                                </p>\n                            </section>\n                        </figur>\n                    </section>\n                      ");
        });
      } else {
        se.innerHTML = "";
      }
    });
  });
});
var h = document.querySelector('#health');
h.innerHTML = "\n<figure class=\"flex items-center\">\n<img src=\"/assets/images/tema.png\" alt=\"\" class=\"w-12 h-12 p-2\">\n<h1>HEALTH</h1>\n</figure>\n<figure class=\"pr-10\">\n<img class=\"healthAnimation\" src=\"/assets/images/Arow.png\" alt=\"\">\n</figure>\n";
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
s.innerHTML = "\n<figure class=\"flex items-center\">\n<img src=\"/assets/images/tema.png\" alt=\"\" class=\"w-12 h-12 p-2\">\n<h1>SPORT</h1>\n</figure>\n<figure class=\"pr-10\">\n<img class=\"sportAnimation\" src=\"/assets/images/Arow.png\" alt=\"\">\n</figure>\n";
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
b.innerHTML = "\n<figur class=\"flex items-center\">\n            <img src=\"/assets/images/tema.png\" alt=\"\" class=\"w-12 h-12 p-2\">\n            <h1>BUISNESS</h1>\n        </figur>\n        <figure class=\"pr-10\">\n            <img class=\"buisnessAnimation\" src=\"/assets/images/Arow.png\" alt=\"\">\n        </figure>\n";
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
t.innerHTML = "\n<figur class=\"flex items-center\">\n            <img src=\"/assets/images/tema.png\" alt=\"\" class=\"w-12 h-12 p-2\">\n            <h1>TRAVEL</h1>\n        </figur>\n        <figure class=\"pr-10\">\n            <img class=\"travelAnimation\" src=\"/assets/images/Arow.png\" alt=\"\">\n        </figure>\n";
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