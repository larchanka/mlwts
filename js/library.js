/**
 * @author mikhail
 */
// functions for selectors
var $ = function(el) {
	el = el || '*';
	if (el.length > 0 && el.charAt(0) == ".") {
		var obj = getElementClass(el.replace(/\./g, ''));
	} else if (el.length > 0 && el.charAt(0) == "#") {
		var obj = getElement(el.replace(/\#/g, ''));
	} else {
		var obj = getElementTag(el);
	}
	return obj;
}
Object.prototype.css = function(styles) {
	var el = this;
	if (el.length > 0) {
		for (var i = 0; i < el.length; ++i) {
			el[i].setCss(styles);
		}
	} else {
		el.setCss(styles);
	}
}
// DOM elements' selectors
var getElement = function(element) {
	return ( typeof element === 'string' || typeof element === 'number') ? document.getElementById(element) : element;
}
var getElementClass = function(classname, tag, parent) {
	parent = parent || document;
	tag = tag || '*';
	var classElements = [];

	if (!browser.msie8 && parent.querySelectorAll && tag != '*') {
		return parent.querySelectorAll(tag + '.' + classname);
	}
	if (parent.getElementsByClassName) {
		var parents = parent.getElementsByClassName(classname);
		if (tag != '*') {
			tag = tag.toUpperCase();
			for (var i = 0, l = parents.length; i < l; ++i) {
				if (parents[i].tagName.toUpperCase() == tag) {
					classElements.push(parents[i]);
				}
			}
		} else {
			classElements = Array.prototype.slice.call(parents);
		}
		return classElements;
	}
	return classElements;
}
function getElementTag(tag, parent) {
	return (parent || document).getElementsByTagName(tag);
}

var trim = function(string) {
	return string.replace((new RegExp('/^\s+|\s+$/g')), '');
}
var appendElement = function(appendTo, elementType, elementHtml, attributes) {
	elementHtml = elementHtml || '';
	attributes = attributes || '';
	var newElement = document.createElement(elementType);
	newElement.innerHTML = elementHtml;
	if ( typeof attributes === "object") {
		for (var key in attributes) {
			var val = attributes[key];
			newElement.setAttribute(key, val);
		}
	}
	getElement(appendTo).appendChild(newElement);
}
/*
 *  Style functions
 */

Object.prototype.setCss = function(stylesCss) {
	styles = stylesCss || '';
	var obj = getElement(this);
	var style = obj.getAttribute('style') || '';
	if (style.length > 0 && style.charAt(style.length - 1) != ";") {
		style += ";";
	}
	if ( typeof stylesCss === "object") {
		for (var keyCss in stylesCss) {
			var valCss = stylesCss[keyCss];
			if ( typeof valCss === 'string') {
				if (keyCss == 'border-radius' || keyCss == 'box-shadow' || keyCss == 'box-sizing' || keyCss == 'transform' || keyCss == 'animate') {
					if (browser.opera) {
						style += "-o-" + keyCss + ":" + valCss + ";";
					} else if (browser.mozilla) {
						style += "-moz-" + keyCss + ":" + valCss + ";";
					} else if (browser.webkit) {
						style += "-webkit-" + keyCss + ":" + valCss + ";";
					}
					if (keyCss == 'transform' && browser.msie) {
						style += "-ms-" + keyCss + "" + valCss + ");";
					}
				} else {
					if (keyCss == 'opacity' && browser.msie) {
						filterval = valCss * 100;
						style += "filter:alpha(opacity=" + filterval + ");";
					} else if (keyCss == 'opacity' && browser.mozilla) {
						style += "-moz-opacity:" + valCss + ");";
					}
				}
				style += keyCss + ":" + valCss + ";";
			}
		}
	}
	obj.setAttribute('style', style);
}

Object.prototype.addClass = function(classname) {
	var classNode = getElement(this).getAttribute('class');
	if (!this.hasClass(classname)) {
		classNode += " " + classname;
		classNode = trim(classNode);
		getElement(this).setAttribute('class', classNode);
	}
}
Object.prototype.removeClass = function(classname) {
	var classNode = getElement(this).getAttribute('class');
	if (this.hasClass(classname)) {
		classNode = trim(classNode.replace((new RegExp('(\\s|^)' + classname + '(\\s|$)')), ''));
		getElement(this).setAttribute('class', classNode);
	}
}
Object.prototype.hasClass = function(classname) {
	var classNode = getElement(this).getAttribute('class');
	if (classNode.indexOf(classname) > -1) {
		return true;
	} else {
		return false;
	}
}
Object.prototype.toggleClass = function(classname) {
	var classNode = getElement(this).getAttribute('class');
	if (classNode.indexOf(classname) > -1) {
		this.removeClass(classname);
	} else {
		this.addClass(classname);
	}
}
Object.prototype.replaceClass = function(classnameremove, classnameadd) {
	this.removeClass(classnameremove);
	this.addClass(classnameadd);
}
Object.prototype.getStyle = function(name) {
	var obj = getElement(this);
	if (obj.currentStyle) {
		var style = obj.currentStyle[name];
	} else if (window.getComputedStyle) {
		var style = document.defaultView.getComputedStyle(obj, null).getPropertyValue(name);
	}
	return style;
}
