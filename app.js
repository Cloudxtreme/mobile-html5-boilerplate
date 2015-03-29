'use strict'

var listItem = '';

var loader = function() {
	addListItem('Teste');
	console.log('Mobile HTML5 boilerplate is loaded!');
}

var addListItem = function(item) {
	listItem = listItem + '<li>' + item + '</li>';
	document.getElementById('list').innerHTML = listItem;
}
