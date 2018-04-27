"use strict";

// Testing file to create some basic JS code

// var fnBox = document.getElementById("fnBox");
// var lnBox = document.getElementById("lnBox");
// var mailBox = document.getElementById("mailBox");
// var phoneBox = document.getElementById("phoneBox");
// var productBox = document.getElementById("productBox");
// var reasonBox = document.getElementById("reasonBox");
var generalContents = ["4 MREs", "4 Road Flare", "2 Flint and Steel", "4 Blanket", "4 Sets of Braces", "3 Flashlight", "2 First Aid Kits", "2 Water Purifiers", "3 Sets of Clothing", "10 Water Bottles"];
var droughtContents = ["4 MREs", "4 Road Flare", "2 Flint and Steel", "4 Blanket", "4 Sets of Braces", "3 Flashlight", "2 First Aid Kits", "4 Water Purifiers", "3 Sets of Clothing", "20 Water Bottles", "4 Medium-Duty Tarps"];
var floodContents = ["4 MREs", "4 Road Flare", "2 Flint and Steel", "4 Blanket", "4 Sets of Braces", "3 Flashlight", "2 First Aid Kits", "4 Water Purifiers", "3 Sets of Clothing", "20 Water Bottles", "Self-Inflating Life Raft", "6 Life Jackets"];
var earthquakeContents = ["4 MREs", "4 Road Flare", "2 Flint and Steel", "4 Blanket", "4 Sets of Braces", "3 Flashlight", "2 First Aid Kits", "4 Water Purifiers", "3 Sets of Clothing", "20 Water Bottles", "Building Supplies", "Propane Tank"];

sessionStorage.setItem("confName", document.getElementById("fnBox") + "" + document.getElementById("lnBox"));
sessionStorage.setItem("confMail", document.getElementById("mailBox"));
sessionStorage.setItem("confPhone", document.getElementById("phoneBox"));
sessionStorage.setItem("confProduct", document.getElementById("productBox"));

window.addEventListener("load", function() {
    validityTest();
    calcCart();

    // fnBox.onblur = calcCart;
    // lnBox.onblur = calcCart;
    // mailBox.onblur = calcCart;
    // phoneBox.onblur = calcCart;
    // reasonBox.onblur = calcCart;
    productBox.onchange = calcCart;
})

// The below funciton needs some bugfixing
function validityTest() {
    if (document.getElementById("fnBox").length = 0) {
        document.getElementById("fnBox").setCustomValidity("Please insert your First Name");
    } else {
        document.getElementById("fnBox").setCustomValidity("");
    }
}
// sessionBox.options[sessionBox.selectedIndex].textContent
function calcCart() {
    // var cost = document.getElementById("productBox").options[document.getElementById("productBox").selectedIndex].value;
    var packages = document.getElementById("productBox").options[document.getElementById("productBox").selectedIndex]
    if (packages.value == 275) {
        displayContents(generalContents);
    } else if (packages.value == 750) {
        displayContents(droughtContents);
    } else if (packages.value == 1750) {
        displayContents(floodContents);
    } else if (packages.value == 3750) {
        displayContents(earthquakeContents);
    }
}

function displayContents(array) {
    for (var i = 0; i < document.getElementsByTagName("span").length; i++) {
        document.getElementsByTagName("span")[i].textContent = array[i];
        document.getElementsByTagName("span")[i].style.padding = "5px 15px 5px";
        document.getElementsByTagName("span")[i].style.border = "1px solid black";
        document.getElementsByTagName("span")[i].style.backgroundColor = "white";
        if (document.getElementsByTagName("span")[i].textContent != array[i]) {
            document.getElementsByTagName("span")[i].style.padding = "0px";
            document.getElementsByTagName("span")[i].style.border = "0px";
        }

    }
    // This allows for less loading as the function will replace the need for nearly identical blocks of code in calculating the contents.
}