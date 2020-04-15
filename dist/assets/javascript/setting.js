"use strict";

var ekesempel = document.querySelector('#toogleA');
ekesempel.addEventListener("change", function () {
  if (ekesempel.checked) {
    sessionStorage.setItem("europe", "on");
  } else {
    sessionStorage.setItem("europe", "off");
  }
});
document.querySelector("#toogleA").checked = sessionStorage.getItem("europe") == "on" ? true : false;
var ekesempel2 = document.querySelector('#toogleB');
ekesempel2.addEventListener("change", function () {
  if (ekesempel2.checked) {
    sessionStorage.setItem("health", "on");
  } else {
    sessionStorage.setItem("health", "off");
  }
});
document.querySelector("#toogleB").checked = sessionStorage.getItem("health") == "on" ? true : false;