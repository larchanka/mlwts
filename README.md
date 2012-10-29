MLWTS
=============
Web template system for developers
-------


### Version - 0.001-alpha
### * Added index.html. It includes main DOM-elements for simple web-page

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
		bodyOnLoad // scripts for load event
		bodyOnResize // scripts for window's resize event
		bodyOnBeforeUnload // scripts for before unload event
		bodyOnUnload // scripts for unload event
	}
	- ajax.js {
		NOT UPDATED
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

	***********
	default css's directory './css/'

### * Created './img/' directory as images' storage