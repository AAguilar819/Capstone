"use strict";

// Testing file to create some basic JS code

// var fnBox = document.getElementById("fnBox");
// var lnBox = document.getElementById("lnBox");
// var mailBox = document.getElementById("mailBox");
// var phoneBox = document.getElementById("phoneBox");
// var reasonBox = document.getElementById("reasonBox");
// var productBox = document.getElementById("productBox");
var generalContents = ["MRE", "Road Flare", "Flint and Steel", "Blanket", "Braces", "Flashlight", "First Aid Kit", "Water Purifier", "Clothing", "Water Bottles"];
var droughtContents = ["MRE", "Road Flare", "Flint and Steel", "Blanket", "Braces", "Flashlight", "First Aid Kit", "4 Water Purifiers", "Clothing", "10 Water Bottles", "4 Medium-Duty Tarps"];

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
    console.log(packages.value);
    if (packages.value = 225) {
        for (var i = 0; i < document.getElementsByTagName("span").length; i++) {
            document.getElementsByTagName("span")[i].textContent = generalContents[i];
            if (document.getElementsByTagName("span")[i].textContent != generalContents[i]) {
                document.getElementsByTagName("span")[i].style.padding = "0px";
                document.getElementsByTagName("span")[i].style.border = "0px";
            }

        }
    } else if (packages.value = 650) {
        for (var i = 0; i < document.getElementsByTagName("span").length; i++) {
            document.getElementsByTagName("span")[i].textContent = droughtContents[i];
            if (document.getElementsByTagName("span")[i].textContent != droughtContents[i]) {
                document.getElementsByTagName("span")[i].style.padding = "0px";
                document.getElementsByTagName("span")[i].style.border = "0px";
            }

        }
    }
}