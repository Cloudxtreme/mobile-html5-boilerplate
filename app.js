'use strict'

var msg = "Hello World";

var loader = function() {
	document.getElementById('msg').innerHTML = msg;
}

var changeMsg = function() {
	document.getElementById('msg').innerHTML = "Surprise! :)";
}

console.log("Mobile HTML5 boilerplate is loaded!");
