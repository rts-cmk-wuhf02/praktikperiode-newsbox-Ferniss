"use strict";

var europeValue = document.querySelector('#toogleA');
europeValue.addEventListener("change", function () {
  if (europeValue.checked) {
    localStorage.setItem("europe", "on");
  } else {
    localStorage.setItem("europe", "off");
  }
});
document.querySelector("#toogleA").checked = localStorage.getItem("europe") == "on" ? true : false;
var healthValue = document.querySelector('#toogleB');
healthValue.addEventListener("change", function () {
  if (healthValue.checked) {
    localStorage.setItem("health", "on");
  } else {
    localStorage.setItem("health", "off");
  }
});
document.querySelector("#toogleB").checked = localStorage.getItem("health") == "on" ? true : false;
var sportValue = document.querySelector('#toogleC');
sportValue.addEventListener("change", function () {
  if (sportValue.checked) {
    localStorage.setItem("sport", "on");
  } else {
    localStorage.setItem("sport", "off");
  }
});
document.querySelector("#toogleC").checked = localStorage.getItem("sport") == "on" ? true : false;
var buisnessValue = document.querySelector('#toogleD');
buisnessValue.addEventListener("change", function () {
  if (buisnessValue.checked) {
    localStorage.setItem("business", "on");
  } else {
    localStorage.setItem("business", "off");
  }
});
document.querySelector("#toogleD").checked = localStorage.getItem("business") == "on" ? true : false;
var travelValue = document.querySelector('#toogleE');
travelValue.addEventListener("change", function () {
  if (travelValue.checked) {
    localStorage.setItem("travel", "on");
  } else {
    localStorage.setItem("travel", "off");
  }
});
document.querySelector("#toogleE").checked = localStorage.getItem("travel") == "on" ? true : false;