/**
 * @author mikhail larchanka
 */

// template's version'
var curVersion = '0.001-alpha';

// common information
var curDate = new Date(); // current date
var curUnixTime = curDate.getTime(); // current UNIX time
var curLocation = window.location || ''; // current document location
var curHash = window.location.hash || ''; // current hash data
var windowWidth = window.innerWidth || ''; // current window width
var windowHeight = window.innerHeight || ''; // current window height
var uAgent = navigator.userAgent || ''; // user agent info

// html5 ie enabling
document.createElement("article");
document.createElement("footer");
document.createElement("header");
document.createElement("hgroup");
document.createElement("nav");
document.createElement("menu");
document.createElement("section");
document.createElement("aside");
document.createElement("time");


// common functions
function includeJS(path, file) { // load script with filename 'file' from directory 'path'
	var headElement = document.getElementsByTagName('head')[0];
	var newScript = document.createElement('script');
	newScript.setAttribute('type', 'text/javascript');
	newScript.setAttribute('src', path + file);
	headElement.appendChild(newScript);
}

function loadAllScript() { // load scripts from scriptsList's object
	var list = scriptsList || [];
	var path = scriptsPath || './js/';
	for (var i = 0; i < list.length; i++) {
		var file = list[i];
		includeJS(path, file);
	}
}
