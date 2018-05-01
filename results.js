"use strict";

window.addEventListener("load", function() {
    calcCart();
    writeSessionValues();
})

var generalContents = ["4 MREs", "4 Road Flare", "2 Flint and Steel", "4 Blanket", "4 Sets of 4 Braces", "3 Flashlight", "2 First Aid Kits", "2 Water Purifiers", "3 Sets of Clothing", "10 Water Bottles"];
var droughtContents = ["4 MREs", "4 Road Flare", "2 Flint and Steel", "4 Blanket", "4 Sets of 4 Braces", "3 Flashlight", "2 First Aid Kits", "4 Water Purifiers", "3 Sets of Clothing", "20 Water Bottles", "4 Medium-Duty Tarps"];
var floodContents = ["4 MREs", "4 Road Flare", "2 Flint and Steel", "4 Blanket", "4 Sets of 4 Braces", "3 Flashlight", "2 First Aid Kits", "4 Water Purifiers", "3 Sets of Clothing", "20 Water Bottles", "Self-Inflating Life Raft", "6 Life Jackets"];
var earthquakeContents = ["4 MREs", "4 Road Flare", "2 Flint and Steel", "4 Blanket", "4 Sets of 4 Braces", "3 Flashlight", "2 First Aid Kits", "4 Water Purifiers", "3 Sets of Clothing", "20 Water Bottles", "Building Supplies", "Propane Tank"];

var packages = sessionStorage.getItem("confProduct");
var name = sessionStorage.getItem("confName");
var email = sessionStorage.getItem("confMail");
var phone = sessionStorage.getItem("confPhone");

function calcCart() {
    // var cost = document.getElementById("productBox").options[document.getElementById("productBox").selectedIndex].value;
    //  var packages = sessionStorage.getItem("confProduct");
    if (packages == 275) {
        displayContents(generalContents);
    } else if (packages == 750) {
        displayContents(droughtContents);
    } else if (packages == 1750) {
        displayContents(floodContents);
    } else if (packages == 3750) {
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
            document.getElementsByTagName("span")[i].style.backgroundColor = "none";
        } else if (document.getElementsByTagName("span")["id"]) {
            document.getElementsByTagName("span")[i].style.padding = "0px";
            document.getElementsByTagName("span")[i].style.border = "0px";
            document.getElementsByTagName("span")[i].style.backgroundColor = "none";
        }

    }
    // This allows for less loading as the function will replace the need for nearly identical blocks of code in calculating the contents.
}

function nameProduct(value) {
    if (value == 275) {
        return "General Package";
    } else if (value == 750) {
        return "Drought Package";
    } else if (value == 1750) {
        return "Flood Package";
    } else if (value == 3750) {
        return "Earthquake Package";
    }
}

function writeSessionValues() {
    document.getElementById("name").textContent = name;
    document.getElementById("email").textContent = email;
    document.getElementById("phone").textContent = phone;
    document.getElementById("product").textContent = nameProduct(packages);
    // This displays all the stored variables into the browser.
}