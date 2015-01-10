// ==UserScript==
// @name        Userform
// @namespace   www.nothing.com
// @description display paragraph with color
// @include     *
// @version     1
// ==/UserScript==

var zTextFields = document.getElementsByTagName("input");

for (var i = 0; i < zTextFields.length; i++) {

    thisfield = zTextFields[i].name;
    if (!thisfield) thisfield = zTextFields[i].id;

    if (thisfield == "yourname") zTextFields[i].value = "your Name here";
    if (thisfield == "address") zTextFields[i].value = "your Address here";
    if (thisfield == "phone") zTextFields[i].value = "(XXXX)-XXX-XXXX";
    alert("field:" + thisfield + "value:" + zTextFields[i].value);
}