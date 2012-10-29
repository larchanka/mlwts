MLWTS
=============
Web template system for developers
-------


### Version - 0.001-alpha
### * Added index.html. It includes main DOM-elements for simple web-page

### * Added grid12liquid.html. It inludes DOM-structure for 12 columns grid web-page

### * Added js-files :
 	- common.js {
		variables :
			curVersion = '0.001-alpha';
			curDate // current date
			curUnixTime // current UNIX time
			curLocation // current document location
			curHash // current hash data
			windowsWidth // current window width
			windowsHeight // current window height
			uAgent // user agent info

		functions :
			includeJS // includes js-file with filename 'file' 
					  from directory 'path'
			loadAllScript // includes js-files from 'scriptsList' object
	}
	- functions.js {
		describe function for body load, resize and beforeunload events
	}
	- ajax.js {
		Ajax-scripts for GET/POST/HEAD requests
	}

	***********
	to load more JS-files just add them to 'scriptsList' object into 'index.html'
	for example ['file1.js', 'file2.js', etc.]
	default scripts' directory './js/'
	to change it - change variable 'scriptsPath' into index.html

### * Addes css-files :
	- styles.css {
		used to import other css-files. You can add there you own
	}
	- reset.css {
		used to clear styles for DOM-elements
	}
	- common.css {
		includes common classes and styles. You can add your own.
	}
	- fonts.css {
		use it to add additional fonts with @font-face
	}
	- grid12liquid.css {
		styles for 12 columns web-page with liquid design
	}
	- mystyles.css {
		own stylesheet
	}

	***********
	default css's directory './css/'

### * Created './img/' directory as images' storage

Licence
-------

http://freedomdefined.org/Licenses/CC-BY-3.0