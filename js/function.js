/**
 * @author mikhail
 */

window.onload = function() {
	if (document.getElementsByClassName('vatop').length > 0) {
		var divElements = document.getElementsByClassName('vatop');
		for (var i = 0; i < divElements.length; ++i) {
			divElements[i].innerHTML = '&larr; ' + Math.ceil(parseInt(divElements[i].offsetWidth)) + ' &rarr;';
		}
		var currentTop = document.body.scrollTop;
		if (currentTop > windowHeight / 2) {
			document.getElementsByClassName('upbutton')[0].style.opacity = '1';
		} else {
			document.getElementsByClassName('upbutton')[0].style.opacity = '0';
		}
	}
}
window.onresize = function() {
	windowWidth = window.innerWidth;
	console.log('Window has been resized to ' + windowWidth + 'px');

	var divElements = document.getElementsByClassName('vatop');
	for (var i = 0; i < divElements.length; ++i) {
		divElements[i].innerHTML = '&larr; ' + Math.floor(parseInt(divElements[i].offsetWidth)) + ' &rarr;';
	}
}
window.onbeforeunload = function() {
	return "";
}
window.onscroll = function() {
	var currentTop = document.body.scrollTop;
	if (document.getElementsByClassName('vatop').length > 0) {
		if (currentTop > windowHeight / 2) {
			document.getElementsByClassName('upbutton')[0].style.opacity = '1';
		} else {
			document.getElementsByClassName('upbutton')[0].style.opacity = '0';
		}
	}
}
var scrollToTop = function(h) {
	window.scrollTo(0, h);
	return false;
}
