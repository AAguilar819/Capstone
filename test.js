"use strict";

// Testing file to create some basic JS code

// var fnBox = document.getElementById("fnBox");
var lnBox = document.getElementById("lnBox");
var mailBox = document.getElementById("mailBox");
var phoneBox = document.getElementById("phoneBox");
var reasonBox = document.getElementById("reasonBox");
var productBox = document.getElementById("productBox");

window.addEventListener("load", function() {
    validityTest();

    fnBox.onblur = calcCart;
    lnBox.onblur = calcCart;
    mailBox.onblur = calcCart;
    phoneBox.onblur = calcCart;
    reasonBox.onblur = calcCart;
    productBox.onclick = calcCart;
})

function validityTest() {
    if (document.getElementById("fnBox").validity = false) {
        fnBox.setCustomValidity("Please insert your First Name");
    } else {
        fnBox.setCustomValidity("");
    }
}

function calcCart() {
    var packages = document.getElementById("productBox")
}