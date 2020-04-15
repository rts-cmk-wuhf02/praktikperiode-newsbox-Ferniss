"use strict";

var europeValue = document.querySelector('#toogleA');
europeValue.addEventListener("change", function () {
  if (europeValue.checked) {
    sessionStorage.setItem("europe", "on");
  } else {
    sessionStorage.setItem("europe", "off");
  }
});
document.querySelector("#toogleA").checked = sessionStorage.getItem("europe") == "on" ? true : false;
var healthValue = document.querySelector('#toogleB');
healthValue.addEventListener("change", function () {
  if (healthValue.checked) {
    sessionStorage.setItem("health", "on");
  } else {
    sessionStorage.setItem("health", "off");
  }
});
document.querySelector("#toogleB").checked = sessionStorage.getItem("health") == "on" ? true : false;
var sportValue = document.querySelector('#toogleC');
sportValue.addEventListener("change", function () {
  if (sportValue.checked) {
    sessionStorage.setItem("sport", "on");
  } else {
    sessionStorage.setItem("sport", "off");
  }
});
document.querySelector("#toogleC").checked = sessionStorage.getItem("sport") == "on" ? true : false;
var buisnessValue = document.querySelector('#toogleD');
buisnessValue.addEventListener("change", function () {
  if (buisnessValue.checked) {
    sessionStorage.setItem("business", "on");
  } else {
    sessionStorage.setItem("business", "off");
  }
});
document.querySelector("#toogleD").checked = sessionStorage.getItem("business") == "on" ? true : false;
var travelValue = document.querySelector('#toogleE');
travelValue.addEventListener("change", function () {
  if (travelValue.checked) {
    sessionStorage.setItem("travel", "on");
  } else {
    sessionStorage.setItem("travel", "off");
  }
});
document.querySelector("#toogleE").checked = sessionStorage.getItem("travel") == "on" ? true : false;