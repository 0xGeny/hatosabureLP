/* loading script
********************************************/
function jfload(u, c) {
	'use strict';
	var fgroupDeclared = true;
	try{ 
		fgroup;
		var h = document.getElementsByTagName('head')[0], 
			s = document.createElement('script');
		s.async = true; s.src = u;
		s.onload = s.onreadystatechange = function () {
			if (!s.readyState || /loaded|complete/.test(s.readyState)) {
				s.onload = s.onreadystatechange = null; if (h && s.parentNode) { h.removeChild(s) } s = undefined;
				if (c) { c() }
			}
		};
		h.insertBefore(s, h.firstChild);
	} catch(e) {
		if(e.name == "ReferenceError") {
		    fgroupDeclared = false;
		}
	}
}
function gfont(){
	'use strict';

	var fgroupDeclared = true,
		flist = '';

	try{ 
		fgroup;
		flist = fgroup;
	} catch(e) {
		if(e.name == "ReferenceError") {
		    fgroupDeclared = false;
		}
	}
	if (fgroupDeclared) {
	    WebFont.load({
			google: {
				families: flist
			},
			timeout: 2000,
			loading: function() {
				var css = '';
				for (var i = 0; i < this.google.families.length; i++) {
					var f = this.google.families[i].split(':');
					css += '.f-'+(i+1)+' { font-family: "'+f[0]+'"; }';
				}
				var head = document.head || document.getElementsByTagName('head')[0],
				    style = document.createElement('style');

				style.type = 'text/css';
				if (style.styleSheet){
				  style.styleSheet.cssText = css;
				} else {
				  style.appendChild(document.createTextNode(css));
				}
				head.appendChild(style);
			},
			active: function() {},
			inactive: function() {},
			fontloading: function(familyName, fvd) {},
			fontactive: function(familyName, fvd) {},
			fontinactive: function(familyName, fvd) {}
		});
	}
}
jfload('//ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js', gfont);