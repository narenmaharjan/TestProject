// ==UserScript==
// @name        whiteonBlack
// @namespace   www.nothing.com
// @description display paragraph with color
// @include     *
// @version     1
// ==/UserScript==

// change the color of each paragraph


var zParagraphs = document.getElementsByTagName("p");

for (var i = 0; i < zParagraphs.length; i++) {

    zParagraphs[i].style.backgroundColor = "#000000";
    zParagraphs[i].style.color = "#FFFFFF";
}