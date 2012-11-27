/**
 * @author mikhail larchanka
 */

// template's version'
var curVersion = '0.001-alpha';

// debug state
var debug = true;

// common information
var curDate = new Date();
// current date
var curUnixTime = curDate.getTime();
// current UNIX time
var curLocation = window.location || '';
// current document location
var curHash = window.location.hash || '';
// current hash data
var windowWidth = window.innerWidth || '';
// current window width
var windowHeight = window.innerHeight || '';
// current window height
var uAgent = navigator.userAgent || '';
// user agent info
var browser = {
	version : (uAgent.match( /.+(?:me|ox|on|rv|it|era|ie)[\/: ]([\d.]+)/ ) || [0,'0'])[1],
	opera : /opera/i.test(uAgent),
	msie : (/msie/i.test(uAgent) && !/opera/i.test(uAgent)),
	msie6 : (/msie 6/i.test(uAgent) && !/opera/i.test(uAgent)),
	msie7 : (/msie 7/i.test(uAgent) && !/opera/i.test(uAgent)),
	msie8 : (/msie 8/i.test(uAgent) && !/opera/i.test(uAgent)),
	msie9 : (/msie 9/i.test(uAgent) && !/opera/i.test(uAgent)),
	mozilla : /firefox/i.test(uAgent),
	chrome : /chrome/i.test(uAgent),
	safari : (!(/chrome/i.test(uAgent)) && /webkit|safari|khtml/i.test(uAgent)),
	iphone : /iphone/i.test(uAgent),
	ipod : /ipod/i.test(uAgent),
	iphone4 : /iphone.*OS 4/i.test(uAgent),
	ipod4 : /ipod.*OS 4/i.test(uAgent),
	ipad : /ipad/i.test(uAgent),
	android : /android/i.test(uAgent),
	bada : /bada/i.test(uAgent),
	mobile : /iphone|ipod|ipad|opera mini|opera mobi|iemobile/i.test(uAgent),
	msie_mobile : /iemobile/i.test(uAgent),
	safari_mobile : /iphone|ipod|ipad/i.test(uAgent),
	opera_mobile : /opera mini|opera mobi/i.test(uAgent),
	opera_mini : /opera mini/i.test(uAgent),
	mac : /mac/i.test(uAgent),
	webkit : /webkit/i.test(uAgent)
};
// browser info

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
function includeJS(path, file) {// load script with filename 'file' from directory 'path'
	var headElement = document.getElementsByTagName('head')[0];
	var newScript = document.createElement('script');
	newScript.setAttribute('type', 'text/javascript');
	newScript.setAttribute('src', path + file);
	headElement.appendChild(newScript);
}

function loadAllScript() {// load scripts from scriptsList's object
	var list = scriptsList || [];
	var path = scriptsPath || './js/';
	for (var i = 0; i < list.length; i++) {
		var file = list[i];
		includeJS(path, file);
	}
}
