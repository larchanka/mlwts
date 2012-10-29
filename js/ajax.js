/**
 * @author mikhail
 * AJAX request for GET | POST | HEAD
 * you can change errors' messages as you wish
 * 
 * ajaxGet - function with GET request
 * ajaxPost - function with POST request
 * ajaxHead - function with HEAD request 
 * 
 * to use functions just call it functionname(url, success, failure, type)
 * where url - address of page you want to get/post
 * success - name of the function for success callback
 * failure - name of the function for error callback
 * type (just for ajaxHead function) - name of the header which status you want to receive
 */

var error404 = 'Requested URL is not found.';
var error403 = 'Access denied.';
var errorUnknown = 'Unknown error.';

function getXmlHttp() {
	var xmlhttp;
	try {
		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
	} catch (e) {
		try {
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (E) {
			xmlhttp = false;
		}
	}
	if(!xmlhttp && typeof XMLHttpRequest != 'undefined') {
		xmlhttp = new XMLHttpRequest();
	}
	return xmlhttp;
}
function ajaxGet(url, succes, failure) {
	var req = getXmlHttp();
	req.open('GET', url, true);
	req.onreadystatechange = function() {
		if(req.readyState == 4) {
			if(req.status == 200) {
				succes(req.responseText);
			} else if(req.status == 404) {
				failure(error404);
			} else if(req.status == 403) {
				failure(error403);
			} else {
				failure(errorUnknown);
			}
		}

	}
	req.send(null);
}
function ajaxPost(url, succes, failure) {
	var req = getXmlHttp();
	req.open('POST', url, true);
	req.onreadystatechange = function() {
		if(req.readyState == 4) {
			if(req.status == 200) {
				succes(req.responseText);
			} else if(req.status == 404) {
				failure(error404);
			} else if(req.status == 403) {
				failure(error403);
			} else {
				failure(errorUnknown);
			}
		}

	}
	req.send(null);
}
function ajaxHead(url, succes, failure, type) {
	var req = getXmlHttp();
	req.open('HEAD', url, true);
	req.onreadystatechange = function() {
		if(req.readyState == 4) {
			if(req.status == 200) {
				succes(req.getResponseHeader(type));
			} else if(req.status == 404) {
				failure(error404);
			} else if(req.status == 403) {
				failure(error403);
			} else {
				failure(errorUnknown);
			}
		}

	}
	req.send(null);
}
