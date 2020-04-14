"use strict";

//klik europe fra
var ekesempel = document.querySelector('#toogleA');
ekesempel.addEventListener("change", function () {
  if (ekesempel.checked) {
    sessionStorage.setItem("europe", "on");
  } else {
    sessionStorage.setItem("europe", "off");
  }
});
document.querySelector("#toogleA").checked = sessionStorage.getItem("europe") == "on" ? true : false;