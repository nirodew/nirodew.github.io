// This code enables modal states (widgets) for modifying the style, visibility, and label of a tapped object.
// A small draggable controller appears in the sketch, with a button for each widget.
// The style widget and label widget expand the controller into a larger pane to provide the appropriate UI.
// Widgets are targeted to a sketch when the user loads a sketch, taps in a sketch, or changes to a different page.

// The below polyfills are required for compatibility with Internet Explorer.  Remove them if we decide not to support IE.
if (!Array.prototype.includes) {
	// Polyfill from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes#Polyfill
	Object.defineProperty(Array.prototype, 'includes', {
		value: function(valueToFind, fromIndex) {
			if (this === null) {
				throw new TypeError('"this" is null or not defined');
			}
			var o = Object(this);
/* jshint -W016 */
			var len = o.length >>> 0;
			if (len === 0) {
				return false;
			}
			var n = fromIndex | 0;
/* jshint +W016 */
			var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
			function sameValueZero(x, y) {
				return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
			}
			while (k < len) {
				if (sameValueZero(o[k], valueToFind)) {
					return true;
				}
				k++;
			}
			return false;
		}
	});
}

if (!String.prototype.endsWith) {
	// Polyfill from https://www.techcartnow.com/javascript-string-endswith-method-fixing-error-object-does-not-support-property-or-method-endswith-for-not-supported-browsers-ie-10-ie-11/
	Object.defineProperty(String.prototype, 'endsWith', {
		value: function (searchValue, lengthToSearch) {
			if (lengthToSearch === undefined || lengthToSearch > this.length) {
					lengthToSearch = this.length;
			}
			return this.substring(lengthToSearch - searchValue.length, lengthToSearch) === searchValue;
		}
	});
}

if (!String.prototype.includes) {	// from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes#Polyfill
	String.prototype.includes = function(search, start) {
		if (typeof start !== 'number') {
			start = 0;
		}
		if (start + search.length > this.length) {
			return false;
		} else {
			return this.indexOf(search, start) !== -1;
		}
	};
}

var PREF = (function () {
	//	Handle sketch prefs, at this time including both widget prefs and util prefs.
	//	The prefs stored on a sketch page (WSP_Preferences) are still handled by GetAuthorPreference() in document.js
	// Here we check for those prefs first, and then for prefs stored in the html page, which thus take precedence.
	// Prefs in the sketch page are of form "stylewidget=1,3,5", "visibilitywidget=none", or "uploadutil=all".
	// In the html page we want the author to be able to easily express which widgets and utils appear on which pages of which sketches (with each sketch identified by the id of its sketch_canvas element).
	// Thus we want to allow settings like "all widgets appear on pages 1,3,5" or "all utils appear on all pages"
	// or "style widget appears on page 1 of sketches sk1 and sk2."
	//
	//	A script in the html page can set the widget preferences by passing an array of objects specifying the widget, the sketches, and the pages. See the examples below.
	//	Sketches are identified by a comma-separated list of identifiers, each of which is the id of a sketch_canvas DOM node.
	//	Pages are identified by a comma-separated list of page numbers or by the keyword "all".
	//	Because the preferences specified in this array are applied in order, the example begins by turning off all widgets for all pages of all sketches,
	//	and then turns specific widgets on for specific pages of specific sketches.
	//	WIDGETS.setWidgetsPrefs  ([
	// 		{pages: "none"}, // turn off all widgets for all sketches (omitting widget implies all widgets; omitting sketches implies all sketches)
	//		{widget: "style", sketches: "sketch2", pages: "1, 3, 5"}, // turn on the style widget for pages 1, 3 and 5 in the sketch with id=sketch2.
	//		{widget: "visibility", sketches: "sketch3, sketch4", pages: "all"},	// turn on the visibility widget for all pages of the sketches with id's of sketch3 and sketch4.
	//		{widget: "style", sketches: "sketch4"}	// Omitting pages implies all pages, so the style widget will appear on all pages of the specified sketch.
	//	]);
	//	The default is for all widgets to be available on all pages of all sketches In this example the first line reverses the default by turning off all widgets for all pages of all sketches.
	//	The remaining lines turn on specific widgets for specific pages of specific sketches.
	
	
	var webPagePrefs = []; // Each array element is a quadruple containing category ("widget" or "util"), name ("style", "visibility", "upload", etc.), sketches (the id's of the sketch_canvases), and pages.
	// Values of "none" and "all" are permitted, and missing values are equivalent to "all".
	
	function getPref (doc, name, cat) {	// returns the pref for this sketch doc, name, and category.
		// doc and name are required; category is optional
		var node = doc.focusPage.anchorNode,
				sketchId = node.context.id,
				// If the sketch is from a json, the json filename can serve as its identifier
				sketchUrl = node.data("url") || node.data("delayed-url") || "",
				sketchJson = sketchUrl.match(/([\w\d_-]*)\.?[^\\\/]*$/i)[1],
				val, retVal;
				
		function checkOnePref (ix) {	// returns the pref value if found, undefined otherwise
			var aPref = webPagePrefs[ix],
					prefCat = aPref.category,
					prefName = aPref.name,
					prefSketches = aPref.sketches,
					pages = aPref.pages;
			if (prefCat && prefCat[0] !== cat && prefCat[0] !== "all") {	// category mismatch, so skip other checks
				if (prefCat[0] === "none") return "none";	// category "none" turns off all prefs.
				return;	
			}
			if (prefName[0] !== "all" && !prefName.includes(name)) {	// name mismatch, so skip other checks
				if (prefName[0] === "none") return "none";	// name "none" turns off all prefs for this category.
				return;
			}
			if (prefSketches && !prefSketches.includes(sketchId) && !prefSketches.includes(sketchJson) &&
					prefSketches[0] !== "all") {	// sketch mismatch
				if (prefSketches[0] === "none") return "none";	// sketch "none" turns off all prefs for this category & name.
				return;	
			}
			if (typeof pages === "string") {
				pages = pages.split (",");
				for (var i = 0; i < pages.length; i++) {
					pages[i] = pages[i].trim();
				}
			}
			return pages;
		}
		
		if (!cat)
			cat = "";
		cat = cat.toLowerCase();
		name = name.toLowerCase();
		retVal = doc.getAuthorPreference (name + cat);
		for (var i = 0; i < webPagePrefs.length; i++) {
			val = checkOnePref (i);
			if (val === "none") {
				retVal = undefined;
			} else if (val) {
				retVal = val;
			}
		}
		return retVal;
	}
	
	function parseString (raw, defaultVal, numeric) {	// accepts a comma-delimited string 
		// returns an array: [defaultVal] if raw = null/undefined/empty string, or the trimmed comma-delimited elements
		// If numeric is true, the returned elements are integers, though a single-element return may be or "all" or "none".
		var i, retVal;
		if (!raw) return [defaultVal];
		retVal = raw.toLowerCase().split (",");
		for (i = 0; i < retVal.length; i+=1) {
			retVal[i] = retVal[i].trim();
		}
		if (retVal.length === 1 && ["all", "none"].includes (retVal[0])) {
			return retVal;
		} else if (numeric) {
			for (i = 0; i < retVal.length; i+=1) {
				retVal[i] = parseInt(retVal[i],10);
			}
		}
		return retVal;
	}

	function WSPPref(category, name, sketches, pages) {	// category and name are defined; sketches and pages may not be
		// If category is "all", this means only the widget and util categories
		try {
			this.category = parseString (category, "all");
			if (this.category[0] === "all")
				this.category = ["widget, util"];
			this.name = parseString (name, "all");
			this.pages = parseString (pages, "all", true);
			this.sketches = parseString (sketches, "all");
		}
		catch (err) {
			throw GSP.createError ("bad arguments to WSPPref constructor");
		}
	}
	
	function setPrefs (prefArr) {
		var theCategory, theName;
		if (prefArr.constructor === Array) {
			for (var i = 0; i < prefArr.length; i++) {
				var pref = prefArr[i];
				if (pref.category)	// Determine theCategory
					theCategory = pref.category;
				else
					theCategory = "widget, util";	// Undefined category defaults to "[widget, util]"
				if (pref.name)	// Determine theName
					theName = pref.name;
				else
					theName = "all";
				// Account for legacy pages that have elements like {widget: "style", sketches: "all"}.
				// This example should become {category: "widget", name: "style", sketches: "all"}
				if (pref.widget) {
					theCategory = "widget";
					theName = pref.widget;
				}	
				webPagePrefs.push (new WSPPref (theCategory, theName, pref.sketches, pref.pages));
			}
		}
	}
		
	return {
		// Each array element should be of form {category: "widget", name: "style", sketches: "sketch2", pages: "1, 3, 5"}
		// For legacy reasons, we allow elements like {widget: "style", sketches: "all"}, which becomes {category: "widget", name: "style", sketches: "all"}
		// If any field is missing, it defaults to "all"
		setWebPagePrefs: function (prefArr) {
			setPrefs (prefArr);
		},
		
		shouldEnableForCurrentPage: function (prefCat, prefName, sketch) {
			// return boolean: should the named pref be enabled for the current page of the current sketch?
			var pageNum = parseInt (sketch.metadata.id, 10),	// Use numeric pageNum to check against array
					pages = getPref (sketch.document, prefName, prefCat);
			return pages[0] === "all" || pages.includes(pageNum);
		},
		
		getPref: function (doc, name, cat) {
			return getPref (doc, name, cat);
		}
		
	};
})();


var WIDGETS = (function() {	//define the WIDGETS namespace
	// private variables here

	var scriptPath,	// The url of this script, from which to locate image files.
			$widget,	// The jQuery widget object
			$widgetParent,
			targetNode,	// The sketch_canvas DOM node currently targeted by the widget, tracked separately so a new sketch in the same node doesn't move the widget
			$targetNode,
			targetSketch,
			targetGobj,	// the currently-targeted sketch and gobj
			targetState = "fadeInOut",	// renderState used for targets of style widget
			activeWidget,	// the currently active widget
			preserveActiveWidget;	// remember the last active widget in case of retargeting or hiding and showing widgets.
	
	// The following vars belong to the style widget
	var currentPointStyle = -1, currentLineThickness = -1, currentLineStyle = -1, colorIndex = -1,	// zero-based, so -1 means unchosen
			radiusValue = [1.5, 2, 4, 6],
			pathStyleValue = ["solid", "dashed", "dotted"],
			pathWidthValue = [0.5, 1, 3, 5];
	
// Private functions here, utility functions first

	function extend(destination, source) { // From Oliver Caldwell (https://oli.me.uk/2013/06/01/prototypical-inheritance-done-right/)
			destination.prototype = Object.create(source.prototype);
			destination.prototype.constructor = destination;
			return source.prototype;
	}

	function getSketch () {	// returns the currently-targeted sketch object
		return targetNode ? $targetNode.data("document").sQuery.sketch : undefined;
	}
	
	function getSketchNode (node) {	// returns the sketch_canvas DOM node associated with node
		// TO DO: check whether this can be eliminated. Don't all callers already have the sketch node available?
		return $(node).closest ('.sketch_canvas')[0];
	}
	
	// Widget constructor: first define properties
	function Widget (name) { // All widgets have a button that must be appropriately shown (when enabled) and highlighted (when active)
		this.name = name;
		this.domButtonSelector = "#widget_" + name + "ButtonID";	// e.g., the dom object with id = "#widget_styleButtonID"
		this.enabled = true;	// Don't show any widgets until they are activated.
	}
	
	// Define Widget methods on the prototype
	Widget.prototype.activate = function (sketch, inst) {	// must be a no-op if already active
		if (activeWidget && activeWidget !== inst) {
			activeWidget.deactivate();
		}
		if (sketch.document.isCurrentlyInToolplay()) {
			return false;
		}
		activeWidget = inst;
		this.active = true;
		this.sketch = sketch;
		$(inst.domButtonSelector).addClass ("widget_active");
		$(".widgetPane").on ("keyup", function (e) {
			if (e.keyCode === 27) {
				activeWidget.deactivate ();
			}
		});		
		return true;
	};
	
	Widget.prototype.deactivate = function (inst) {	// must be a no-op if not already active
		// This prototype must be called last, because it sets the target sketch to null
		if (inst === activeWidget)
			activeWidget = null;
		this.active = false;
		this.sketch = null;
		$(inst.domButtonSelector).removeClass ("widget_active");
			$(".widgetPane").off ("keyup");
	};

	Widget.prototype.toggle = function (sketch, inst) {
		if (this === activeWidget) this.deactivate(inst);
		else this.activate(sketch, inst);
		};
	
	Widget.prototype.checkEnablingForCurrentPage = function (sketch) {	// return true if the widget should be enabled, false if not.
		var retVal;
		retVal = PREF.shouldEnableForCurrentPage ("widget", this.name, sketch);
		if (this.name === "trace")
			retVal = retVal && sketch.preferences.tracesEnabled;
		return retVal;
	};
	
	Widget.prototype.setEnablingForCurrentPage = function (sketch, widgetInstance) {	// return true if the widget's enabled, false if not. Side effect: deactivates the active widget if it's newly disabled.
		var retVal = this.checkEnablingForCurrentPage (sketch);
		widgetInstance.enabled = retVal;
		if (retVal)
			$(widgetInstance.domButtonSelector).show();
		else {
			if (this === activeWidget)
				widgetInstance.deactivate();
			$widget.find(widgetInstance.domButtonSelector).hide();
		}
		return retVal;
	};
	
	//	A TapWidget is a widget that responds to taps on objects in the sketch. Such widgets must make all sketch objects selectable.
	function TapWidget (name) {
			Widget.call(this, name);
		}

	extend(TapWidget, Widget);
	
	TapWidget.prototype.preProcessGobj = function (ix, gobj) {};
	
	TapWidget.prototype.postProcessGobj = function (ix, gobj) {};

	TapWidget.prototype.activate = function (sketch, inst) {
		var canvasNodes = $('.sketch_canvas'),
				regime = sketch.hasTouchRegimes() && sketch.currentTouchRegime ();
		if (!Object.getPrototypeOf(this).activate (sketch, inst)) return false;
		canvasNodes = $('.sketch_canvas');
		canvasNodes.on("Tap.WSP", inst.handleTap); // Detect taps for all sketches
		// Possible improvement: Toolplay in a different sketch calls targetControllerToDoc() if the toolplay sketch has widgets enabled.

		if (regime && regime.name === "DisplayRegime") {  // prep the regime to report taps on unselectable objects
			regime.allowUnselectableTap (true);
		}
		preProcessSketch (sketch);	// Get this sketch ready for the newly active widget
		return true;
	};
	
	TapWidget.prototype.deactivate = function (inst) {
		var sketch = getSketch (),
				canvasNodes = $('.sketch_canvas'),
				regime = sketch.hasTouchRegimes() && sketch.currentTouchRegime ();
		canvasNodes.off("Tap.WSP", inst.handleTap);
		canvasNodes.off("WillUndoRedo.WSP", callPostProcess);
		canvasNodes.off("UndoRedo.WSP", callPreProcess);
		if (activeWidget)
			activeWidget.postProcessSketch (this.sketch);	// Undo effects of preprocessing
		if (regime && regime.name === "DisplayRegime") {
			regime.allowUnselectableTap (false);
		}
		Object.getPrototypeOf(this).deactivate (inst);
	};

	TapWidget.prototype.handleTap = function (event, context) {	// handle a tap on a gobj 
		// If the tapped gobj is in the current target sketch return the tapped gobj.
		// If the tapped gobj is in a different sketch with widgets, target that sketch and return the gobj.
		// If the tapped gobj is in a different sketch without widgets, targetControllerToDoc will fail, so return null.
		var node = getSketchNode (context.document.canvasNode[0]);
		if (node === targetNode || targetControllerToDoc (node))
			return context.gobj;
		else return null;
	};
	
	var styleWidget = new TapWidget ("style");
	styleWidget.cancelOnExit = false;
	styleWidget.defaultColor = {row:0, column:1};	// red
	styleWidget.defaultPointStyle = 2;
	styleWidget.defaultLineThickness = 2;
	styleWidget.defaultLineStyle = 0;
	
	var visibilityWidget = new TapWidget ("visibility");

	var labelWidget = new TapWidget ("label");
	labelWidget.labelPoolSaved = false;
	labelWidget.touchPos = GSP.GeometricPoint (0, 0);
	labelWidget.textRule = null;

	var traceWidget = new TapWidget ("trace");
	
	var deleteWidget = new TapWidget ("delete");

	// When adding a new widget, be sure to add the new widget to the authorPreferenceSpecs in document.js!
	var widgetList = [styleWidget, traceWidget, labelWidget, visibilityWidget, deleteWidget];
	
	/* ***** WIDGET SUPPORT ***** */
	function showWidget () {
		$widget.tinyDraggable({exclude: ".dragExclude"});	// do this here, in case dom node has moved
		$widget.toggle(true);
		$(".widget_button").removeClass ("widget_button_active");
		$targetNode.parent().find(".widget_button").addClass ("widget_button_active");
	}
	
	function hideWidget () {
		if ($widget) $widget.toggle(false);
		$(".widget_button").removeClass ("widget_button_active");
	}

	function setupWidgetHandlers () {
		var firstDoc;
		var canvasNodes = $('.sketch_canvas');
		styleWidget.objectColorBox = $('#objectColorCheckbox')[0];	// Can't set these fields till the widget is injected.
		styleWidget.textColorBox = $('#textColorCheckbox')[0];	// They'll get "checked" fields to keep track of their state
		canvasNodes.on ("LoadDocument.WSP", function (event, context) {
			injectButtonContent (context.document.canvasNode[0]);	// Just in case this is a newly-created sketch_canvas
			resizeSketchFrame (context.document);
		});
		canvasNodes.on ("UnloadDocument.WSP", function (event, context) {
			if (activeWidget && getSketch()===context.document.focusPage) {
				activeWidget.deactivate ();
			}
		});
		//	An active widget should be stopped on a page change or undo/redo, and restarted if possible when the operation finishes
		canvasNodes.on("WillUndoRedo.WSP", stopPage);
		canvasNodes.on("UndoRedo.WSP", startPage);
		canvasNodes.on("WillChangeCurrentPage.WSP", stopPage);
		canvasNodes.on("DidChangeCurrentPage.WSP", startPage);

		// If there are already-loaded documents we need to find them and set their buttons properly.
		// We also need to target the widget to the first such sketch.
		canvasNodes.each (function (i, d) {
			var doc = $(d).data("document");	// set this to the sketch doc if it exists.
			injectButtonContent (d);
			if (doc) {	// doc was loaded but not processed
				resizeSketchFrame (doc);
				if (!firstDoc)
						firstDoc = doc;
			}
		});
		if (firstDoc) {	// if sketchDoc is passed, this doc is already loaded, so handle it as well.
			startPage ({}, {document: firstDoc});	// startPage is an event handler, so pass an empty event and context.document
		}
		canvasNodes.on ("keyup", function (e) {	// If esc key reaches the canvasNode and there's an activeWidget, deactivate it.
			if (e.keyCode === 27 && activeWidget) {
				activeWidget.deactivate ();
				return true;
			}
		});
	}
	
	function setupDropdownHandlers () {
		var $chars = $(".wCharDropdownContent .column div");
		if (!$._data ($chars[0], "events")) {	// don't add more handlers if they're already present
			$(".wCharDropdownContent .column div").click (function () {
				labelReplaceSelection (this.innerText);
			});
		}
	}	
	
	function targetControllerToDoc (newNode, forceReposition) {	// Position the widgets in a new sketch node.
		// The forceReposition parameter is optional
		// if newSketch is null, disable all widgets, but remember the currently active widget and node for a later call
		// If widgets aren't enabled on the current page of the new sketch, don't retarget.
		// Return the activeWidget, if there is one.
		var sketchNode = getSketchNode (newNode),
				$sketch = $(sketchNode),
				$toolColumn = $sketch.find (".wsp-tool-column"),
				newDoc = $sketch.data("document"),
				newSketch = newDoc.sQuery.sketch;
		if ($sketch.css ("display") === "none" || newSketch === targetSketch) {
			return activeWidget;	// don't target to a hidden sketch, or retarget to the same sketch
		}
		var anyWidgetsEnabled = false;
		// Check whether the newSketch should have any widgets enabled
		widgetList.forEach (function (val) {	// Enable widgets for new sketch
			if (val.checkEnablingForCurrentPage (newSketch))
				anyWidgetsEnabled = true;
		});
		if (!anyWidgetsEnabled) { // No widgets enabled; what to do?
			if (!targetNode || sketchNode === targetNode) { // If same node, or no previous target, deactivate and hide widgets; if different, don't retarget at all
				if (!preserveActiveWidget)
					preserveActiveWidget = activeWidget;
				if (activeWidget)
					activeWidget.deactivate();
				hideWidget();
			}
			return false;	// Don't change the target node if there aren't any widgets enabled.
		}
		// Widgets are enabled. If there's an active widget in the old sketch, deactivate it but preserve it.
		if (activeWidget) {
			preserveActiveWidget = activeWidget;
			activeWidget.deactivate(); // restore old target sketch to its default state
		}
		widgetList.forEach (function (val) {	// Enable widgets for new sketch
			val.setEnablingForCurrentPage (newSketch, val);
		});
		if (sketchNode !== targetNode || forceReposition) {	// Reposition the widget only when the node changes
			// We'll place it as a child of the sketch_canvas' parent, located relative to the sketch child of the sketch_canvas.
			// That way it will move with the sketch_canvas--but we need to be sure this parent has position:relative;
			if (targetNode) {
				$targetNode.off ("WillPlayTool.WSP");	// turn off handlers for the previous node
				$targetNode.off ("ToolPlayed.WSP");
				$targetNode.off ("ToolAborted.WSP");
			}
			targetNode = sketchNode;
			$targetNode = $(targetNode);
			targetSketch = newSketch;
			$widgetParent.detach ();
			$sketch.prepend ($widgetParent);
			setupDropdownHandlers ();
			showWidget ();	// Do this first, to make offset() calls meaningful
			
			$widget.css ({top: $sketch.height() - $widget.height() + 1});
			if ($toolColumn.length) {
				$widget.css ({left: $toolColumn[0].offsetWidth - $widget[0].offsetWidth + 4});
			} else {
				$widget.css ({left: -1});
			}

			$targetNode.on ("WillPlayTool.WSP", function () {
				$("#widget").css ({"opacity": 0.25, "z-index": -1});
				if (activeWidget) {
					preserveActiveWidget = activeWidget;
					WIDGETS.confirmModality();
				}
			});
			$targetNode.on ("ToolPlayed.WSP", function () {
				$("#widget").css ({"opacity": 1, "z-index": "none"});
				if (preserveActiveWidget) {
					preserveActiveWidget.activate(getSketch());
					preserveActiveWidget = null;
				}
			});
			$targetNode.on ("ToolAborted.WSP", function () {
				$("#widget").css ({"opacity": 1, "z-index": "none"});
			});
		}
		visibilityWidget.setVisColor (newSketch);
		if (preserveActiveWidget && preserveActiveWidget.enabled)
			preserveActiveWidget.activate(newSketch, preserveActiveWidget);
		preserveActiveWidget = null;
		//showWidget();	Only need to call this if a new node, or if widget is repositioned
		return anyWidgetsEnabled && activeWidget; // if a widget is returned, it's the enabled active widget 
	}

	function preProcessSketch (sketch) {
		// Prepare all sketch objects to enable widget use, making all selectable and (for visibility widget) showing hidden objects
		// Some sketch objects may already have been pre-processed, so it's a requirement that the preProcessGobj function can be used multiple times on the same gobj without making further changes.
		if (getSketch() !== sketch) {
			targetControllerToDoc (sketch.canvasNode[0]);
		}
		if (getSketch() === sketch && activeWidget && activeWidget.preProcessGobj) {
			sketch.sQuery("*").each (activeWidget.preProcessGobj);
			sketch.isDirty = true;	// Possible code improvement: some widgets dirty the sketch and some don't
			sketch.setNeedsDisplay();
		}
	}
	
	function callPreProcess (e, context) {	// This could be a new node.
		var sketch =  context ? context.sketch : getSketch();
		preProcessSketch (sketch);
		return true;	// propagate the message
	}
	
	TapWidget.prototype.postProcessSketch = function (sketch) {
		// Return all sketch objects to their proper state, reversing the effects of pre-processing
		if (activeWidget && activeWidget.postProcessGobj) {
			sketch.sQuery("*").each (activeWidget.postProcessGobj);
			sketch.isDirty = true;	// Possible code improvement: some widgets dirty the sketch and some don't
		}
		return true;	// If this is a message handler, propagate the message
	};
	
	function callPostProcess () {	// If node is changing, clean up the sketch in the old node, 
		if (activeWidget)
			activeWidget.postProcessSketch (getSketch());
		return true;	// propagate the message
	}

	function findZoom () {
		return parseFloat(getComputedStyle($('#widget')[0]).fontSize)/16;
	}

	function check (element, state) {
		element.checked = state;
		element.src = (state) ? scriptPath + "/checked.png" : scriptPath + "/unchecked.png";
	}
	
	function toggleCheck (element) {
		element.checked = (element.checked) ? false : true;
		element.src = (element.checked) ? scriptPath + "/checked.png" : scriptPath + "/unchecked.png";
		return element.checked;
	}
	
	/* ***** GENERAL UTILITIES ***** */
	// The startPage and stopPage functions handle page changes, either in the same DOM node or between DOM nodes.
	// They handle WSP events, so arguments are (event, context, attributes). 
	// If the container has a .widget_button class, show or hide it as appropriate.
	function startPage (event, context) {	// no need for the attribute argument.
		var sketchDoc = context.document;
		targetControllerToDoc (sketchDoc.canvasNode[0], true);
		var canvas = sketchDoc.canvasNode[0];
		var showButton = (targetNode === canvas) && ($widget[0].style.display !== 'none');
		var parentNode = canvas.parentNode;
		var buttonNode = $(parentNode).find(".widget_button");
		if (showButton)
			buttonNode.show();
		else
			buttonNode.hide();
	}

	function stopPage () {	// Clean up extra attributes added to sketch objects, but leave the modal-state flags unchanged as a signal to startPage
		if (activeWidget) { 
			preserveActiveWidget = activeWidget;
			activeWidget.deactivate ();
		}
		// Leave targetNode unchanged so that targetControllerToDoc can decide whether or not to reposition the widget.
	}

	function injectButtonContent (canvas) {	// Find any uninitialized .widget_button element matching this doc id, and initialize the buttons.
		var newContent;
		var container = canvas.parentNode;
		var button = $(container).find(".widget_button");
		if (button.length === 1) {	// There's a single widget button inside the container; set it to target the widget to this sketch.
			newContent = '<button class="widget_button" onclick="WIDGETS.toggleWidgets(this);">Widgets</button>';
			button.replaceWith (newContent);
		}
	}

	function resizeSketchFrame (sketchDoc) {	// Resize the frame to fit a new sketch
		// Better to fix the deeper problem by making the sketch load properly into a sketch_container even when it's hidden.
		var $canvas, $container, $refNode, width;
		$canvas = sketchDoc.canvasNode;
		$container = $canvas.parent ();
		if ($container.hasClass ("sketch_container")) {
			$refNode = $canvas.find(".wsp-base-node");
			if (!$refNode)
				$refNode = $canvas;
			width = parseInt ($refNode.css("width"), 10) + 
				parseInt ($container.css("border-left-width"),10) +
				parseInt ($container.css("border-right-width"), 10);
			if (!width) { // The container is hidden, so try to calculate what it will be when shown
				// Even if it's possible to adjust the width correctly, there may still be problems with the height
				// The current work-around in toggle-section.js is not to load a sketch until it's actually visible.
				// The better work-around wouild be to modify the sizing of the sketch_container to make it resize
				// automatically, based on its contents, when it becomes visible.
				width = parseInt($canvas.find(".wsp-tool-column").css("width"), 10);
				width = isNaN (width) ? 0 : width + 18;	// allow some slop
				width += sketchDoc.metadata.width;
			}
			$container.css("width", (width + "px"));
		}
	}
	
	function setTarget (newTarget) {
		if (targetGobj) {
			if (targetGobj && targetGobj !== newTarget) {
				targetGobj.setRenderState ("none");
				targetGobj = null;
			}
		}
		if (newTarget) {
			targetGobj = newTarget;
			targetGobj.setRenderState (targetState);
		}
	}
	
	/* ***** STYLE WIDGET ***** */
	
	function setDomColor (color, gobj) {
		// Ideally we could use forceDomParse to regenerate the DOM node, but forceDomParse just tinkers a bit
		// with the existing node. Therefore we change the color of that existing DOM node.
		var domNode = $targetNode.find ("[wsp-id='" + gobj.id +"']");	// The domNode exists for text objects and buttons
		if (domNode[0]) {	// Do we need to change the color cached in the renderRefCon?
			domNode.css({"color": color});
			domNode.find ("*").css({"color": color});
		}
	}
	
	function setTextColor (color, optGobj) {	// if optGobj is undefined, set the color of the targetGobj.
				// Changing text color requires changing gobj.style.color for text objects
				// and changing gobj.style.label.color for labeled non-text objects and buttons.
		var retVal = false,
				gobj = optGobj || targetGobj;
		if (!gobj) return false;
		if (gobj.isOfKind("Text")) {
				retVal = gobj.style.color !== color;
				if (retVal)
					gobj.style.color = color;
			} else if (gobj.isOfKind("Button")) {
				retVal = gobj.style.label.color !== color;
				if (retVal)
					gobj.style.label.color = color;
			} else if (gobj.style.label && gobj.style.label.showLabel) {	// is this the same as gobj.hasLabel?
				retVal = gobj.style.label.color !== color;
				if (retVal) {
					gobj.style.label.color = color;
					gobj.sQuery.sketch.renderRefCon.label[gobj.id].color = color;
					return true;	// Label color is in the label refcon, not in the DOM
				}
			}
			if (retVal) {
				setDomColor (color, gobj);
			}
			invalidateLabel (gobj);
		return retVal;
	}

	function restoreTextColor ()	{ // Restores the text and text color of gobj to the cached original values.
		var originalColor, currentColor,
				gobj = targetGobj;
		if (gobj.oldStyle) {
			if (gobj.isOfKind("Button") || gobj.isOfKind("Text")) {
				originalColor = (gobj.isOfKind("Text")) ? gobj.oldStyle.color : gobj.oldStyle.label.color;
				currentColor = (gobj.isOfKind("Text")) ? gobj.style.color : gobj.style.label.color;
			}
			else if (gobj.style.label && gobj.style.label.showLabel) {	// Labels only need to restore the label renderRefCon color
				gobj.sQuery.sketch.renderRefCon.label[gobj.id].color = gobj.style.label.color;
				gobj.invalidateAppearance ();
				return;
			}
		}
		if (originalColor && currentColor !== originalColor) {
			setTextColor (originalColor);
		}
	}
	
	function getColorFromIndex () {
		var row;
		var column = Math.floor(colorIndex / 3);
		switch (colorIndex-3*column) {
			case 0: row="a"; break;
			case 1: row="b"; break;
			case 2: row="c"; break;
		}
		return $(".block"+column+row).css("background-color"); // Use .css to return the computed style
	}
	
	function setGobjColor (color, optGobj) {	// if optGobj is undefined, set the color of the targetGobj.
		var retVal = false,	// returns true if color was changed
			gobj = optGobj || targetGobj;
		if (gobj) {
			if (styleWidget.objectColorBox.checked) {
				if (gobj.isOfKind ("Text")) {
					retVal = setTextColor (color, gobj);
				} else {
					gobj.setRenderState ("none");
					retVal = gobj.style.color !== color;
					if (retVal) {
						gobj.style.color = color;	// Set the color of a geometric object, a text object, or a button handle
						gobj.invalidateAppearance ();
					}
					gobj.setRenderState (targetState);
				}
			}
		}
		return retVal;
	}
	
	function setPointStyle (newStyle) {
		var gobj = targetGobj;
		currentPointStyle = newStyle;
		if (gobj && gobj.style.radius && currentPointStyle >= 0) {
			gobj.setRenderState ("none");
			gobj.style.radius = radiusValue [currentPointStyle];
			gobj.setRenderState (targetState);
			gobj.invalidateAppearance ();
		}
	}

	function setLineStyle (newStyle, newThickness) {
		var gobj = targetGobj;
		currentLineStyle = newStyle;
		currentLineThickness = newThickness;
		if (gobj) {
			gobj.setRenderState ("none");
			if (gobj.isOfGenus ('Path') && currentLineStyle >= 0)
				gobj.style['line-style'] = pathStyleValue [currentLineStyle];
			if (gobj.style.width && currentLineThickness >= 0)
				gobj.style.width = pathWidthValue [currentLineThickness];
			gobj.setRenderState (targetState);
			gobj.invalidateAppearance ();
		}
	}
	
	function setColor (colorIndex) {
		var newColor = getColorFromIndex (colorIndex);
		if (styleWidget.objectColorBox.checked) {
			setGobjColor (newColor);
		}
		if (styleWidget.textColorBox.checked) {
			setTextColor (newColor);
		}
	}
	
	styleWidget.activate = function (sketch) {
		if (!Object.getPrototypeOf(this).activate (sketch, this)) return false;
		this.cancelOnExit = false;
		$('#wStylePane').css ("display", "block");
		// Should activation automatically target the existing targetGobj?
		return true;
	};

	styleWidget.deactivate = function () {
		Object.getPrototypeOf(this).deactivate (this);	// Call multiple levels of deactivation
		$('#wStylePane').css ("display", "none");
		this.cancelOnExit = false;
		setTarget (null);
	};

	styleWidget.postProcessGobj = function (ix, gobj) {
		if (gobj.oldStyle) {
			if (styleWidget.cancelOnExit) {
				gobj.style = jQuery.extend (true, {}, gobj.oldStyle);
				restoreTextColor ();
				gobj.sQuery.sketch.invalidateAppearance(gobj);
			}
			delete (gobj.oldStyle);
		}
		Object.getPrototypeOf(styleWidget).postProcessGobj (ix, gobj);	// undo any TapWidget pre-processing
	};
	
	styleWidget.handleTap = function (event, context) {
		var gobj;
		gobj = Object.getPrototypeOf(styleWidget).handleTap (event, context);
		if (gobj) {
			setTarget (gobj);
			if (!gobj.oldStyle) { // This is the first toggle for this object in the current formatting mode
				gobj.oldStyle = jQuery.extend (true, {}, gobj.style);
			}
			// We assume that all objects with "radius" and "width" style attributes already have explicit values. But path objects are assumed to be solid if they have no line-style value, so we check whether they have "path" genus.
			// We don't bother deleting this attribute if we reset it to solid.
			setPointStyle (currentPointStyle);
			setLineStyle (currentLineStyle, currentLineThickness);
			if (colorIndex >= 0) {
				setColor (colorIndex);
			}	// colorIndex >= 0
		} // if (gobj)
	};

	function highlightLineGrid (thickness, style) {
		var box = $('#lineStyleCheckbox')[0];
		var selStyle = $('#widget_lineStyleSelector')[0].style;
		if (thickness < 0 && style < 0) {
			check (box, false);
			selStyle.display = "none";
		}
		else {
			styleWidget.defaultLineThickness = thickness;
			styleWidget.defaultLineStyle = style;
			check (box, true);
			var row = thickness * 1.25 + 1.31;
			var column = style*3.2 + 0.31;
			selStyle.top=row + 'rem';
			selStyle.left = column + 'rem';
			selStyle.display='block';
		}
		setLineStyle (style, thickness);	
	}

	function highlightPointGrid (style) {
		var box = $('#pointStyleCheckbox')[0];
		var selStyle = $('#pointStyleSelector')[0].style;
		if (style < 0) {
			check (box, false);
			selStyle.display = "none";
		}
		else {
			styleWidget.defaultPointStyle = style;
			check (box, true);
			var row = style * 1.25 + 1.31;
			selStyle.top=row + 'rem';
			selStyle.display='block';
		}
		setPointStyle (style);
	}

	function highlightColorGrid (column, row) {
		var selStyle = $('#widget_colorSelector')[0].style;
		if (column < 0) {
			selStyle.display = "none";
			check (styleWidget.objectColorBox, false);
			check (styleWidget.textColorBox, false);
			colorIndex = -1;
		}
		else { // highlight the choice, and check the object-color box if the text-color box isn't checked
			colorIndex = 3*column + row;
			selStyle.top=(1.56*row+0.13) + 'rem';
			selStyle.left=(1.69*column+0.1)+'rem';
			selStyle.display="block";
			styleWidget.defaultColor = {row: row, column: column};
			if (!styleWidget.textColorBox.checked)
				check (styleWidget.objectColorBox, true);
			if (targetGobj) {
				setColor (colorIndex);
			}
		}
	}

/* ***** VISIBILITY WIDGET ***** */
	/*	When this widget is active, it shows hidden objects in a faded color (normally gray), and visible objects in full color.
	 *	The original object color and label color are cached during preprocessing for objects that were originally hidden, and
	 *	colors are cached for originally-visible objects only if and when they are tapped to change them to hidden.
	 *	Hidden geometric objects and buttons have to track both the object color and label color (if the label is visible).
	 *	When the visibility of a text object (OR LABEL?) is toggled, it must set forceDomParse to regenerate the dom element.
	 *	We also cache the original visibility of hidden objects (as originalHidden = true) to support a future cancel operation.
	 *	Each gobj's style.newHidden flag is true if it's currently faded, and undefined or false otherwise.
	 */
	
	visibilityWidget.activate = function (sketch) {	// To activate the visibility widget it's sufficient to call the prototype.
		if (!Object.getPrototypeOf(this).activate (sketch, this)) return false;
		$("#wVisibilityPrompt").css("display", "block");
		return true;
	};

	visibilityWidget.deactivate = function () {
		$("#wVisibilityPrompt").css("display", "none");
		Object.getPrototypeOf(this).deactivate (this);	
	};
	
	function cacheColors (gobj) {
		var style = gobj.style;
		style.originalColor = style.color;
		if (style.label && style.label.color) {
			style.label.originalColor = style.label.color;
		}
	}

	function deleteFadeCache (gobj) {
		var style = gobj.style;
		if (style.faded)
			throw GSP.createError ("visibilityWidget deleteFadeCache() called for a faded object.");
		else if (style.originalColor) {
			delete style.originalColor;
			if (style.label && style.label.color) {
				delete style.label.originalColor;
			}
			delete style.faded;
		}
	}
	
	function fade (gobj) {
		var style = gobj.style;
		if (style.faded)
			throw GSP.createError ("visibilityWidget fade() called for an already-faded object.");
		else {
			if (!gobj.style.originalColor) 
				cacheColors (gobj);
			if (!style.faded) {
				style.color = visibilityWidget.visColor;
				if (style.label && style.label.color) {
					style.label.color = visibilityWidget.visColor;
				}
				setDomColor (style.color, gobj);
				style.faded = true;
				gobj.invalidateAppearance ();
			}
		}
	}
	
	function unfade (gobj) {
		var style = gobj.style;
		if (!style.originalColor || !style.faded)
			throw GSP.createError ("visibilityWidget unfade() called for an object that isn't faded.");
		else {
			style.color = style.originalColor;
			if (style.label && style.label.color) {
				style.label.color = style.label.originalColor;
			}
			setDomColor (style.color, gobj);
			style.faded = false;
			gobj.invalidateAppearance ();
		}
	}

	visibilityWidget.preProcessGobj = function (ix, gobj) {
		if (gobj.style.hidden) {
			gobj.show();	// Need to show first, so the node exists before we try to fade it.
			gobj.sQuery.sketch.constrainAndRedraw ();
			fade (gobj);
		}
		Object.getPrototypeOf(visibilityWidget).preProcessGobj (ix, gobj);
	};

	visibilityWidget.postProcessGobj = function (ix, gobj) {
		var style = gobj.style;
		if (style.faded) {
			gobj.hide();
			unfade (gobj);
		}
		deleteFadeCache (gobj);
		Object.getPrototypeOf(visibilityWidget).postProcessGobj (ix, gobj);
	};

	visibilityWidget.handleTap = function (event, context) {
		var gobj = Object.getPrototypeOf(visibilityWidget).handleTap (event, context);
		if (gobj) {
			if (!gobj.style.faded) { // faded is false or undefined, so fade a visible object
				fade (gobj);
			} else {	// faded must be defined and true
				unfade (gobj);
			}
			$("#wVisibilityPrompt").css("display", "none");
		}
	};

	visibilityWidget.setVisColor = function (sketch) {
		// Set the visColor to contrast with the background by adjusting each background color value toward the furthest extreme.
		var hsColor = 'rgb(192,192,192)';	// default in case the color check fails
		var bkColor = sketch.preferences.colorableComponents.Background.color;	// bkColor may be a color name ("white"), various forms of rgb, or perhaps even "0xffc0d0".
		if (bkColor)	{	// Use getComputedStyle on a browser element to convert the unknown form of the color to rgb.
			var d = document.createElement("div");
			d.style.color = bkColor;
			var rgbColor = window.getComputedStyle(d).color;
			if (rgbColor.substring(0,3) === 'rgb') {
				var a = rgbColor.split("(")[1].split(")")[0]; // grab the part in the parens
				a = a.split(",");	// split it into separate numbers
				hsColor = 'rgb(';
				for (var i=0; i<3; i++) {
					if (a[i] < 0x80)
						hsColor += (a[i] +0x40);	// dark background colors must be lightened more to be distinguishable
					else
						hsColor += (a[i] - 0x20);	// light backgrounds only need to be darkened half as much.
					if (i<2)
						hsColor += ',';
				}
				hsColor += ')';
			}
		}
		visibilityWidget.visColor = hsColor;
	};


/* ***** LABEL WIDGET ***** */

	function savePool () {
		getSketch().labelPool.saveState();
		labelWidget.labelPoolSaved = true;
	}
	
	function restoreSavedPool () {
		if (labelWidget.labelPoolSaved) {
			getSketch().labelPool.restoreSavedState();
			labelWidget.labelPoolSaved = false;
		}
	}
	
	function forgetSavedPool () {
		if (labelWidget.labelPoolSaved) {
			targetGobj.sQuery.sketch.labelPool.forgetSavedState();
			labelWidget.labelPoolSaved = false;
		}
	}

	function setLabelInput (text) {	// sets, focuses, and selects the label input field
		var inputElt = labelWidget.inputElt;
		if (typeof text === "string") {
			inputElt.val (text);			
		}
		inputElt.focus();
		// select() doesn't select text in ios, so we use setSelectionRange. See http://stackoverflow.com/a/7436574
		inputElt[0].setSelectionRange(0, inputElt.val().length);
	}

	function generateNewLabel (gobj) {	// handles measures and non-transformed images
		var newLabel;
		savePool ();
		newLabel = getSketch().labelPool.generateLabel(gobj.kind, gobj.genus);
		if (gobj.hasLabel)
			gobj.setLabel(newLabel, { showLabel: true, wasUserInitiated: true });
		else
			gobj.label = newLabel;
		setLabelInput (newLabel);	// Make the input field match the label
	}
		
	function normalizeFontFamily (gobj) {	// checks the font-family of prop, converting to string if it's numeric. Returns the full font-family
		var sketch = gobj.sQuery.sketch,
				prop = fontProperty (gobj),
				font = prop["font-family"];
		if (typeof font === "number") {
			if (font >= sketch.document.resources.fontList.length)
				font = 0;
			font = sketch.document.resources.fontList [font];
			prop["font-family"] = font;
		}
		return font;
	}
	
	// The label widget caches properties of the currently-targeted gobj to restore them if the user cancels.
	labelWidget.cacheProperties = function (gobj) {
		this.oldLabel = (gobj.genus === "Caption") ? gobj.textMFS : gobj.label;
		this.oldAutoGenerate = gobj.shouldAutogenerateLabel;
		normalizeFontFamily (gobj);
		this.oldStyle = $.extend (true, {}, gobj.style);
	};

	labelWidget.emptyCache = function () {	// Empty the cache
		this.oldLabel = null;
		this.oldStyle = null;
	};

	labelWidget.clear = function (clearStyles) {
		this.emptyCache ();
		forgetSavedPool ();
		setLabelInput ("");
		$("#measureButtons, #transImageButtons, #paramButtons").toggle (false);
		if (clearStyles !== false) {	// By default, clear the label's font, size, and visibility
			labelWidget.sizeElt.val ("");
			labelWidget.fontElt.val ("");
			labelWidget.showLabelElt.prop ("checked", false);
		}
	};
	
	labelWidget.finalizeLabel = function () {
			// Make sure the label and nameOrigin of the previous target are compatible.
			var properOrigin;
			if (!targetGobj || !targetGobj.hasLabel || !targetGobj.style.nameOrigin)
				return;	// nothing to do
			// The following check applies only to geometric objects with labels and nameOrigins
			properOrigin = LabelControls.originFromText (targetGobj.label);	// User may have set origin to manual while label is still in the form corresponding to a particular origin.
			if (properOrigin && targetGobj.style.nameOrigin !== properOrigin) {
				targetGobj.style.nameOrigin = properOrigin;
			}
		};
	
	labelWidget.restoreLabel = function (gobj) {	// Restore the label and style of the dest, and empty the cache.
		if (gobj) {
			if (gobj.style) {	// restore style first, before resetting the label
				gobj.style = $.extend (true, {}, labelWidget.oldStyle);
			}
			if (gobj.genus === "Caption") {
				gobj.textMFS = labelWidget.oldLabel;
				delete gobj.label;
			} else if (!labelWidget.oldLabel) {
				delete gobj.label;
				gobj.shouldAutogenerateLabel = labelWidget.oldAutoGenerate;
			} else {
				// Call changeText() to restore the old label. But first, make sure gobj.label is different from oldLabel.
				// Otherwise changeText() will think there's nothing to do.
				gobj.label = labelWidget.oldLabel ? "" : " ";
				changeText (labelWidget.oldLabel, gobj.style.nameOrigin);
				gobj.shouldAutogenerateLabel = labelWidget.oldAutoGenerate;
			}
			restoreSavedPool ();
			invalidateLabel (gobj);
		}
		this.emptyCache ();
	};
	
	function getNameClass (gobj) {	// Set labelWidget.nameClass to "measure", "param", "transImage", or "".
		// The nameClass determines which radio buttons appear and which state machine to use. measureStyle applies to measurements and calculations
		// (both of which can use namedFromTemplate), but not parameters (which are only namedFromLabel or noVisibleName), 
		// Calculation: kind=Expression; genus===ScalarMeasure, genus===DistanceMeasure, or genus===AngleMeasure
		// Measurement: kind=Measure, genus===ScalarMeasure, genus===DistanceMeasure, or genus===AngleMeasure
		// Parameter: kind=Expression, genus===ScalarParameter, genus===DistanceParameter, or genus===AngleParameter
		var nameClass = "";
		if (gobj.genus.includes("Measure"))
			nameClass = "measure";
		else if (gobj.genus.includes("Parameter"))
			nameClass = "param";
		else if (gobj.useTransformLabel && gobj.useTransformLabel ())
			nameClass = "transImage";
		return nameClass;
	}
	
	function invalidateLabel (gobj) {
		// The content or appearance of the text or label has been changed. Update the screen by modifying the DOM node and/or the sketch's renderRefCon
		// Should this be moved into core code?	
		var gobjNode = $targetNode.find ("[wsp-id='" + gobj.id +"']"),
				font = fontProperty (gobj)["font-family"],
				size = fontProperty (gobj)["font-size"],
				color = fontProperty (gobj).color,
				sketch = gobj.sQuery.sketch,
				refCon = sketch.renderRefCon,
				gobjStyles = gobj.hasLabel ? refCon.label [gobj.id] : refCon.gobj [gobj.id],
				gobjCSS,
				refRect;
		gobj.parsedMFS = null;	// force reparsing of mfs
		if (gobj.hasLabel) { //	This gobj is on the canvas, so set the refcon
			assert (gobjStyles, "invalidateLabel passed a labeled gobj with no renderRefCon.label");
			gobjStyles["font-family"] = font;
			gobjStyles["font-size"] = size;
			refRect = refCon.labelBounds [gobj.id];
			if (refRect)
				sketch.invalidateRect (refRect);
			gobj.state.labelPreRenderJITPrepareDone = false;
			gobj.labelPreRenderJITPrepare (sketch.dcForGObjLabel(gobj, "normal"), sketch.renderRefCon.label[gobj.id]);
		} else { // This gobj is in the DOM.
			gobjCSS = gobjStyles.css;
			gobjStyles = gobjStyles.baseStyles;
			assert (gobjNode.length === 1, "invalidateLabel should find a single matching node.");
			gobjCSS["font-family"] = font;
			gobjCSS["font-size"] = size;
			gobjCSS.color = color;
			gobjStyles["font-family"] = font;
			gobjStyles["font-size"] = size;
			gobjStyles.color = color;
			gobjNode.css ({"font-size": size, "font-family": font});
			// Descendants sometimes have their own font-family style, but likely not font-size. Because some descendants (e.g., subscripts and superscripts) may have "font-size: smaller;", we only set font-family (not font-size) in descendants
			$(gobjNode).find ('[style*="font-family"]').css ("font-family", font);
			gobj.state.forceDomParse = true;	// forceParse rebuilds the DOM element from the parsedMFS
			gobj.descendantLabelGraphHasChanged ();	// Need to call this if we're not calling setLabel()
			labelWidget.showLabelElt.prop ("checked", gobj.style.nameOrigin !== "noVisibleName");
		}
		gobj.invalidateAppearance ();
	}
	
	function changeText (newText, newOrigin) {	// Respond to a user's change of the gobj's text or nameOrigin. Return the resulting text.
		var gobj = targetGobj,
				newTextEmpty = !newText || newText === "",
				ignoreOrigin = gobj.style.nameOrigin === undefined || newOrigin === gobj.style.nameOrigin;
				// ignore newOrigin if the gobj doesn't have one, or if newOrigin matches the stored origin
				
		function changeButtonText () {
			// Ideally, we could show two radio buttons, labeled Auto and Manual, for Move and Animate buttons that auto-generate their labels.
			// This is overkill for a feature of little significance. Instead, just turn off the shouldAutogenerateLabel flag if it exists.
			assert (!newOrigin, "A button or function shouldn't have a nameOrigin.");
			if (gobj.shouldAutogenerateLabel) {
				gobj.shouldAutogenerateLabel = false;
			}
			if (newTextEmpty ) {	// The user has deleted the button's label, which is disallowed, so show a single selected space for the time being.
				newText = " ";		// their names cannot be hidden, so if the user deletes the label text it should be replaced by a single-space string, selected.
				setLabelInput (newText);
			}
			gobj.label = newText;
			if (gobj.messages)
				gobj.messages = [];	// Eliminate a button's ability to respond to changes in parental labels.
		}

		function changeCaptionText () {
			gobj.label = newText;
			newText = newText.replace (/'/g, "\\'");
			gobj.textMFS = "<VL<T'" + newText + "'>>";
		}
		
		if (!newText)
			newText = "";
		if (targetGobj.label === newText && ignoreOrigin)
			return newText;	// Text hasn't changed, so nothing to do.

		if (newTextEmpty)		// if newText is empty and it came from the label pool, restore the pool
			restoreSavedPool ();
		if (newOrigin)
			gobj.style.nameOrigin = newOrigin;
		if (gobj.hasLabel) {		// geometric objects live on the canvas layers
			gobj.shouldAutogenerateLabel = ["namedByPrime", "namedByShortFn", "namedByFullFn", "namedFromTemplate"].includes (newOrigin);
			if (newTextEmpty)	// Cannot set label to empty string
				newText = gobj.label;
			gobj.setLabel(newText, {showLabel: newTextEmpty ? false : true});
			labelWidget.showLabelElt[0].checked = newTextEmpty ? false : true;
			newText = gobj.label;	// setLabel() constrains the label, which may change it.
		}
		else {	// !hasLabel, so this is a button, a measure, a calculation, or a caption.
			if (gobj.isOfKind("Button") || gobj.isOfGenus("Function")) {
				changeButtonText ();
			} else if (gobj.genus === "Caption") {
				changeCaptionText ();
			} else {	// A measure or calculation, so nameOrigin is one of [namedFromTemplate, namedFromLabel, noVisibleName]
				if (newOrigin === "namedFromLabel") {
					if (newTextEmpty) {	// Can't set a label to the empty string.
						generateNewLabel (gobj);
						newText = gobj.label;
					} else {
						gobj.label = newText;
					}
				}
			}
		}	// !hasLabel
		invalidateLabel (gobj);
		return newText;
	}
	
	function showLabelPane () {
		$("#wLabelPrompt").css("display", "none");	// Hide the prompt (if it's visible) and show the controls
		$("#wLabelPane").css("display", "block");
	}

	/* handleTap() is the workhorse of the label widget, controlling the following behavior.
	 * Showing and hiding labels:
	 * 		Tapping an object always shows or hides its label.
	 * 		Tapping a label copies the label settings (size, font & notation) into the dialog if they differ from current dialog choices
	 * 		Tapping a label hides the label only if the label settings match.
	 * 		The user can reformat multiple labels,by tapping them in turn. If she accidentally hides one (because its settings
	 * 		match the dialog box) she can show it again by tapping the object or pressing the Show label checkbox.
	 * The notation radio buttons appear when the user taps a transformed image, and follow the same rules.
	 * Tapping a caption allows the user to edit the caption.
	 * Tapping hot text or pegged text disables the label-edit input field
	 */
	labelWidget.handleTap = function (event, context) {	// cache label info to enable restoring it if user cancels
		var inputElt = labelWidget.inputElt,
				showElt = labelWidget.showLabelElt,
				sizeElt = labelWidget.sizeElt,
				fontElt = labelWidget.fontElt,
				position = GSP.GeometricPoint (context.position.x, context.position.y),
				newTarget = Object.getPrototypeOf(labelWidget).handleTap (event, context);
				labelWidget.touchPos = position;
				labelWidget.isTap = true;

		function initForNewGobj () {			//	Handle the first tap on the current gobj or label
			var toGobj, fromGobj, copyStyle, editingDisabled;	//source and dest for copying font, size, & nameOrigin
				
			function showRadios () {	// Show or hide the radios panel based on the target's nameClass, and (if showing) set them based on copyStyle
				//	While we're at it, check the targetGobj to see if we should modify its nameOrigin or label.
				//	If copyStyle is true and this.prevGobj's nameClass is the same as targetGobj's, we're setting the radios (and the nameOrigin of the targetGobj) from this.prevGobj.
				//	Otherwise we're setting the radios from targetGobj
				var sourceGobj,	// the gobj that determines the nameOrigin settings: either toGobj or fromGobj
						nameClass = labelWidget.nameClass,
						textRule = {},	// determine default text from the origin
						originRule = {};	// determine origin from the text

				function makeTransRules () {	// create the rules connecting a transformed image's label to its nameOrigin
					var prime, shortFn, fullFn, preImage;
					
					function makeLabel (nameOrigin) {
						// Create labels only if this the current nameOrigin or (the parent is unlabeled and toGobj isn't namedFromLabel
						var option = {init: true};
						if (toGobj.style.nameOrigin === nameOrigin || (!preImage.label && toGobj.style.nameOrigin !== "namedFromLabel"))
							option.create = true;
						return toGobj.makeParentalLabel (nameOrigin, option);
					}
					
					if (toGobj.isTransformationConstraint || toGobj.state.labelParent) {
						preImage = toGobj.isTransformationConstraint ? toGobj.parents.source : toGobj.state.labelParent;
						prime = makeLabel ("namedByPrime");
						shortFn = makeLabel ("namedByShortFn");
						fullFn = makeLabel ("namedByFullFn");
					}
					originRule[prime] = "namedByPrime";
					originRule[shortFn] = "namedByShortFn";
					originRule[fullFn] = "namedByFullFn";
					originRule["*"] = toGobj.label ? "namedFromLabel" : "namedByPrime";
					textRule.namedByPrime = prime;
					textRule.namedByShortFn = shortFn;
					textRule.namedByFullFn = fullFn;
					textRule.namedFromLabel = toGobj.label ? toGobj.label : prime;
					if (toGobj.label) { // Make toGobj's nameOrigin agree with its label
						toGobj.style.nameOrigin = originRule[toGobj.label] || "namedFromLabel";
					} else {  // No label, no nameOrigin, so use prime as the default
						toGobj.label = prime;
						toGobj.style.nameOrigin ="namedByPrime";
					}
				}
	
				function makeMeasureRules () {	
					textRule = {namedFromTemplate: "", noVisibleName: "", namedFromLabel: "*"};	
					originRule = {" ": "noVisibleName", "*": "namedFromLabel"};
				}
				
				// Copy the radio settings from prevGobj only if copyStyle is already true and the nameClass matches
				sourceGobj = copyStyle && (getNameClass (fromGobj) === nameClass) ? fromGobj : toGobj;
				$(".wLabelRadios").toggle (false);
				if (nameClass) {
					$("#" + nameClass + "Buttons").toggle (true);
					switch (nameClass) {
						case "transImage":
							makeTransRules ();
							if (labelWidget.handleTap && sourceGobj && getNameClass (sourceGobj) === nameClass && sourceGobj.style.nameOrigin !== "namedFromLabel") {	// don't switch toGobj to manual label
								toGobj.style.nameOrigin = sourceGobj.style.nameOrigin;
							}
							break;
						case "measure":
						case "param":
							makeMeasureRules ();
							break;
						default:
							console.log ("Unknown nameClass: " + nameClass);
					}
					LabelControls.init (nameClass, targetGobj, WIDGETS.controlCallback, textRule, originRule, "#wLabelEditText", "#" + nameClass + "Buttons input[type='radio']", "#wLabelShow");
				}
				else {
					LabelControls.terminate ();	// Make sure the state machine doesn't hang around
				}
			}
	
			function copyStylesToGObj () {	// Copy the dialog box font and size choices to the tapped object
				var aValue = sizeElt.val ();
				if (aValue) labelWidget.setFontSize (aValue);
				aValue = fontElt.val ();
				if (aValue) labelWidget.setFont (aValue);
			}

			function checkFontList (shortName) {	// check the item in the font combo box, returning false if not found 
				var i, retVal = false;
				for (i = 0; i < fontElt[0].length; i++) {
					if (fontElt[0][i].innerText === shortName) {
						fontElt[0].selectedIndex = i;
						retVal = true;
						break;
					}
				}
				return retVal;
			}

			function addFontToList (longName, shortName) {	// add a new font to the combo box. 
				var groups = $("#wLabelFont optgroup"),
						newItem = "<option value='" + longName + "'>" + shortName + "</option>",
						sans = groups.filter ('[label="Sans Serif"]'),
						serif = groups.filter ('[label="Serif"]'),
						mono = groups.filter ('[label="Mono-spaced"]'),
						other = groups.filter ('[label="Other"]'),
						finished = false,
						i, matchGroup, members;
				if (longName.search (/sans-serif/i)) {
					matchGroup = sans;
				} else if (longName.search (/serif/i)) {
					matchGroup = serif;
				} else if (longName.search (/monospace/i)) {
					matchGroup = mono;
				} else if (other.length) {
					matchGroup = other;
				} else {	// Need to add the Other group
					matchGroup = fontElt.append ('<optgroup label="Other"></optgroup>');
				}
				members = $(matchGroup).find("option");
				for(i=0; i<members.length; i++) {
					if (shortName.localeCompare (members[i].innerText) === -1) {
						$(members[i]).before ($(newItem));
						finished = true;
						break;
					}
				}
				if (!finished) {
					matchGroup.append (newItem);
				}
			}
					
			function copyGObjToStyles () {	// Copy the tapped object's font and size to the dialog box styles
				var textStyle = fontProperty (targetGobj),
						aValue = textStyle["font-size"];
				sizeElt.val (aValue);
				fontElt[0].selectedIndex = -1;
				aValue = getShortFontName (targetGobj, false);
				if (!aValue) {
					throw GSP.createError ("WIDGETS.copyGObjToStyles() found a gobj without a font family.");
				}
				if (!checkFontList (aValue)) {
					addFontToList (textStyle["font-family"], aValue);
					checkFontList (aValue);
				}
			}
			
			function copyCompatible (src, dest) {
				var retVal;
				// "Compatible" means both must exist and have the same hasLabel value
				retVal = src && dest && (src.hasLabel === dest.hasLabel);
				// Further, they must be hasLabel objects or be of compatible kinds, which for now means either the same kind or both being measures (parameters, measures, expressions)
				retVal = retVal && (dest.hasLabel || src.kind === dest.kind || src.isOfKind ("Measure") && dest.isOfKind ("Measure"));
				// Finally, one of these conditions must hold: the tap is a labelTap, the toGobj doesn't have a label, or the toGobj's label is hidden.
				retVal = retVal && (labelWidget.isTap || !dest.hasLabel || !dest.style.label.showLabel);
				return retVal;
			}
			
			function extractCaptionText () {
				var mfs = newTarget.textMFS,
						matches = mfs.match (/<T\'[^\'\r\n]+\'>/g),
						newText = "",
						i;
				for (i=0; i<matches.length; i++) {
					if (newText)
						newText += " ";
					newText += matches[i].replace (/<T\'([^\'\r\n]+)\'>/,"$1");
				}
				return newText;
			}
		
			//	initForNewGobj() body
			editingDisabled = false;
			if (newTarget.genus === "Caption" && !newTarget.label) {  // Use single-line caption's label field to store the new text
				newTarget.label = extractCaptionText ();
			} else if (newTarget.genus === "CompositeText") {	// disable label edit and its label legend
				editingDisabled = true;
			}
			$("#wLabelEditText").prop ("disabled", editingDisabled);
			$("#wLabelEditLabel").prop ("disabled", editingDisabled);
			
			if (newTarget.hasLabel || newTarget.style.nameOrigin) { // all gobjs with nameOrigin can have "None" as an origin
				$("#wShowLabelButton label").show();
			} else {
				$("#wShowLabelButton label").hide();
			}
			toGobj = newTarget;
			fromGobj = targetGobj;	// the previous targetGobj	
			copyStyle = copyCompatible (fromGobj, toGobj);
			labelWidget.clear (false);	// initialize controls and clear cache
			if (targetGobj) {
				targetGobj.setRenderState ("none");
			}
			newTarget.setRenderState ("targetHighlit");
			this.prevGobj = targetGobj;
			targetGobj = newTarget;
			labelWidget.nameClass = getNameClass (targetGobj);
			labelWidget.cacheProperties (targetGobj);
			if (toGobj.hasLabel && !toGobj.style.label.showLabel) {	// Need to prepare label position for a label being shown the first time.
				toGobj.labelRenderBounds = copyRect (toGobj.sQuery.sketch.renderRefCon.labelBounds[toGobj.id]);
				// toGobj.setLabelPosition (labelWidget.touchPos, {x:0, y:0});
			}
			setLabelInput (targetGobj.label);
			if (copyStyle) {	// Apply font and size to the newly tapped gobj
				copyStylesToGObj ();
			} else {	// Fill the style elements from the new gobj
				copyGObjToStyles ();
			}
			showRadios ();	// show or hide nameOrigin controls
			//	If copyStyle is true, need to invalidate the label bounds in case it's gotten larger.
		}
	
		function handleLabeledGObj () {	// If this object has (or can have) a label, track its settings
			showElt.prop ("disabled", false);
			toggleLabel (true);
			showElt.prop ("checked", true);
		}
		
		function handleTextGObj () { // targetGobj.hasLabel is undefined, so it's a button or text
			var nameOrigin = targetGobj.style.nameOrigin,
					isButton = targetGobj.isOfKind("Button"),
					isMeasure = labelWidget.nameClass === "measure" || labelWidget.nameClass === "param",
					showDisabled = (isButton || typeof nameOrigin === 'undefined'),
					showChecked = (showDisabled || nameOrigin === 'namedFromLabel');
			if (isButton) {
				showElt.prop ("checked", showChecked);
				showElt.prop ("disabled", showDisabled);
			} else if (isMeasure) {
				$("#wLabelPane .radio-inline input").prop("checked", false);
				$("#wLabelPane .radio-inline input[value='" + nameOrigin + "']").prop("checked", true);
				showElt.prop ("checked", nameOrigin !== "noVisibleName");
				showElt.prop ("disabled", false);
			}
		}
		
		function singleLineCaption (mfs) {
			var matches = mfs.match (/<VL<T\'.*\'>>/);
			if (!matches)
				matches = mfs.match (/<T\'.*\'>/);
			return matches ? true : false;
		}

		// Main body of labelWidget.handleTap ()
		if (newTarget.genus === "Caption" && !singleLineCaption (newTarget.textMFS)) {
			return;
		}
		showLabelPane ();
		if (newTarget === targetGobj) {	//this is a repeat tap: toggle if hasLabel
			if (targetGobj.hasLabel) {
				toggleLabel ();
				setLabelInput (targetGobj.label);
			}
			labelWidget.isTap = false;
			return;
		}
		// Tap is on a new object.
		labelWidget.finalizeLabel ();
		initForNewGobj ();
		if (targetGobj.hasLabel) {
			handleLabeledGObj ();
		} else { 
			handleTextGObj ();
		}

		inputElt.on("keyup", function (e) {
			e.stopPropagation();
			if (e.keyCode === 13) {
				labelWidget.confirmLabel (true);
			}
			else {
				var newLabel = inputElt.val();
				if (newLabel.length > 0) {
					changeText (newLabel);
				} else if (targetGobj.isOfKind("Button")) {
					setLabelInput(" ");
				}
			}
		});
		labelWidget.isTap = false;
	};		// labelWidget.handleTap ()

	function assert (condition, text) {
		if (!condition) {
			if (!text) text = "Unidentified error";
			//alert (text);
		}
	}
	
	function toggleLabel (show) {	// Toggle the visibility of this label and set checkbox
		var gobj = targetGobj,
				labelCornerDelta = {},
				touch = labelWidget.touchPos,
				labelStyle = gobj.style.label,
				prevState = labelStyle && labelStyle.showLabel;
		if (gobj.hasLabel && !gobj.label) {	// If it's neither transformed nor labeled, just label it 
			generateNewLabel (gobj);
		}
		if (show === undefined) {
			if (gobj.hasLabel) {
				show = !labelStyle.showLabel;	// toggle the current setting
			} else if (labelWidget.nameClass && gobj.style.nameOrigin) {
				show = gobj.style.nameOrigin !== "noVisibleName";
			}
		}
		if (gobj.hasLabel) {
			labelStyle.showLabel = show;
			if (show && !prevState) {
				if (gobj.isAPath ())	{	// If we've tapped a new location for the label, move it.
					if (!gobj.labelRenderBounds) {
						gobj.labelRenderBounds = copyRect (gobj.sQuery.sketch.renderRefCon.labelBounds[gobj.id]);
					}
					if (labelWidget.isTap) {
						labelCornerDelta.x = touch.x - gobj.labelRenderBounds.left;
						labelCornerDelta.y = touch.y - gobj.labelRenderBounds.top;
					}
				}
				if (labelWidget.isTap) {
					if (labelStyle.labelOffsetX) {
						console.log ("x=" + labelStyle.labelOffsetX + "   y=" + labelStyle.labelOffsetY); 
						labelCornerDelta = {x: -labelStyle.labelOffsetX + touch.x - gobj.labelSpec.location.x,
										y: -labelStyle.labelOffsetY + touch.y - gobj.labelSpec.location.y};
					} else {
						labelCornerDelta = {x: labelStyle["font-size"], y: +labelStyle["font-size"]/2};
					}
					gobj.setLabelPosition (touch, labelCornerDelta);
				}
				if (labelWidget.inputElt[0].innerText=== "")	// if input is empty when we show a label, set the input to the label
					setLabelInput (gobj.label);
			}			
		} else if (labelWidget.nameClass && gobj.style.nameOrigin) {
			LabelControls.labelChanged (show ? gobj.label : "");
		}
		labelWidget.showLabelElt.prop ("checked", show);
		invalidateLabel (gobj);
	}

	labelWidget.activate = function (sketch) {
		if (!Object.getPrototypeOf(this).activate (sketch, this)) return false;
		this.cancelOnExit = false;
		targetGobj = null;
		this.prevGobj = null;
		$('#wLabelPane').css ("display", "none");
		$("#wLabelPrompt").css("display", "block");
		if (!this.inputElt) {
			this.inputElt = $('#wLabelEditText');
			this.showLabelElt = $('#wLabelShow');
			this.sizeElt = $('#wLabelFontSize');
			this.fontElt = $('#wLabelFont');
		}
		this.inputElt.on("click", function () {
			$(this).focus();	// In a mobile device, a click in the text box should bring up the keyboard.
		});
		this.clear ();
		return true;
	};
	
	labelWidget.deactivate = function () {
		if (targetGobj) {
			targetGobj.setRenderState ("none");
			if (this.cancelOnExit) {
				this.restoreLabel (targetGobj);
			}
		}
		this.clear ();
		Object.getPrototypeOf(this).deactivate (this);	// Call multiple levels of post-processing
		$("#wLabelContent").css("display", "none");
		$('#wLabelPane').css ("display", "none");
		$("#wLabelPrompt").css("display", "none");
		this.cancelOnExit = false;
	};
	
	labelWidget.confirmLabel = function (dismiss) {
		this.finalizeLabel ();
		if (dismiss) this.deactivate();
		else this.clear ();
	};
	
	function copyRect (src, dest) {
		if (!dest) dest = {};
		dest.top = src.top;
		dest.bottom = src.bottom;
		dest.left = src.left;
		dest.right = src.right;
		return dest;
	}
	
	function fontProperty (gobj)	{	// return the gobj property that contains its font-family and font-size
		var prop = gobj.style.label;
		if (!prop || $.isEmptyObject (prop))
			prop = gobj.style;
		return prop;
	}


	labelWidget.setFontSize = function (val) {	// Note val is a string.
		var textStyle = fontProperty (targetGobj);	
		val = +val;
		if (textStyle["font-size"] !== val) {
			textStyle["font-size"] = val;
			invalidateLabel (targetGobj);
		}
	};

	function getShortFontName (gobj) {
		var aFont = normalizeFontFamily (gobj),
				startQuote;
		startQuote = aFont.substring (0, 1);	
		if (startQuote === "\"" || startQuote === "'") {	// if quoted, use only the first quoted portion
			aFont = aFont.split (startQuote)[1];
		} else if (aFont.indexOf (",")) {
			aFont = aFont.split (",")[0];
		}
		return aFont;
	}

	labelWidget.setFont = function (newFont) {	// newFont is a font name chosen from the label widget combobox.
		var textStyle = fontProperty (targetGobj),
				oldFont = textStyle ["font-family"];
		if (oldFont !== newFont) {
			textStyle["font-family"] = newFont;
			invalidateLabel (targetGobj);
			//	Add this font to the fontList
		}
	};
	
	labelWidget.postProcessSketch = function (sketch) {
		labelWidget.clear ();
		$('#wLabelPane').css ("display", "none");
		$("#wLabelPrompt").css("display", "block");
		targetGobj = null;	// targetGobj can't hang around; it might not even exist any more
		Object.getPrototypeOf(labelWidget).postProcessSketch (sketch);	// undo any TapWidget pre-processing
	};

	function getScriptPath () {
		var scripts = $.makeArray($("script[src]")),
				i, aScript, path;
		for (i=0; i<scripts.length; i++) {
			aScript = scripts[i];
			if (aScript.src && aScript.src.endsWith ('/widgets.js')) {	// find the script element with a src attribute ending with "widgets.js"
				path = aScript.src.split('?')[0].split('/').slice(0, -1).join('/')+'/';	// This is the full url. Is there any reason to optimize it if the first part of it matches the site url? Probably not.
				return path;	// return true to terminate the findIndex search
			}
		}
		// Undefined return if we get here.
	}
		
	function labelReplaceSelection (newText) {
		var pre = "", post = "",
				elt = labelWidget.inputElt[0],
				start = elt.selectionStart,
				finish = elt.selectionEnd,
				val = elt.value;
		if (start > 0) {
			pre = val.slice (0, start);
		}
		if (finish < val.length) {
			post = val.slice (finish);
		}
		val = pre + newText + post;
		WIDGETS.labelChanged (val);
		elt.value = val;
		finish = pre.length + newText.length;
		elt.focus();
		elt.setSelectionRange (finish, finish);
	}

/*	Trace Widget
 */

	function canTraceGobj (gobj) {
		return !(gobj.isOfKind ("Text") || gobj.isOfKind ("AngleMarker") || gobj.isOfKind ("PathMarker") ||
				gobj.isOfKind ("Button") || gobj.isOfKind ("CoordSys") || gobj.isOfKind ("DOMKind") ||
				gobj.isOfKind ("IterateImage") || gobj.isOfKind ("Map") || gobj.isOfKind ("Picture"));
	}
	
	function movementMessagesOff () {
		$targetNode.off ("StartDrag.WSP");
		$targetNode.off ("EndDrag.WSP");
		$targetNode.off ("StartAnimate.WSP");
		$targetNode.off ("EndAnimate.WSP");
		$targetNode.off ("StartMove.WSP");
		$targetNode.off ("EndMove.WSP");

	}

	traceWidget.revealTracedGobjs = function (reveal) {
		var newState = reveal ? "unmatchedGiven" : "none";
		getSketch().sQuery("*").each (function (ix, gobj) {
			if (gobj.style.traced && !gobj.style.hidden) {
				gobj.setRenderState (newState);
			}
		});
	};

	traceWidget.setGlowing = function () {	// Set the widget's behavior to match the Reveal checkbox.
		// To make traces appear properly with the pane, we un-highlight the traced objects during a drag, animation, or movement.
		var checked = traceWidget.glowBox.checked;
		
		function startGlowing () {
			traceWidget.revealTracedGobjs (true);
		}
		function stopGlowing () {
			traceWidget.revealTracedGobjs (false);
		}
		
		if (checked) {
			$targetNode.on ("StartDrag.WSP", stopGlowing);
			$targetNode.on ("EndDrag.WSP", startGlowing);
			$targetNode.on ("StartAnimate.WSP", stopGlowing);
			$targetNode.on ("EndAnimate.WSP", startGlowing);
			$targetNode.on ("StartMove.WSP", stopGlowing);
			$targetNode.on ("EndMove.WSP", startGlowing);
		}
		else {
			movementMessagesOff ();
		}
		traceWidget.revealTracedGobjs (checked);
	};

	traceWidget.toggleEnabling = function (enabled) {
		var newState = enabled !== undefined ? enabled : $("#wTraceEnabled")[0].checked;
		getSketch().preferences.tracesEnabled = newState;
		$("#wTraceEnabled").prop( "checked", newState );
		$("#wTracePrompt").css ("display", "none");
	};

	traceWidget.toggleFading = function () {
		var sketch = getSketch(),
				prefs = sketch.preferences,
				newState = $("#wTraceFading")[0].checked;
		prefs.fadeTraces = newState;
		if (newState) {
			sketch.traces.fadeStartTime = Date.now();
			sketch.startFadeJob ();
		} else {
			sketch.stopFadeJob ();
		}
		$("#wTracePrompt").css ("display", "none");
	};
	
	traceWidget.activate = function (sketch) {
		traceWidget.glowBox = $("#wTracesGlowing")[0];
		if (!Object.getPrototypeOf(this).activate (sketch, this)) return false;
		$("#wTracePrompt").css("display", "block");
		$("#wTraceEnabled").prop ("checked", getSketch().preferences.tracesEnabled);
		$("#wTraceFading").prop ("checked", getSketch().preferences.fadeTraces);
		this.cancelOnExit = false;
		$('#wTracePane').css ("display", "block");
		traceWidget.setGlowing ();
		traceWidget.autoEnabled = false;
		return true;
	};

	traceWidget.deactivate = function () {
		if (traceWidget.glowBox.checked) {
			traceWidget.glowBox.checked = false;
			traceWidget.setGlowing ();
			traceWidget.glowBox.checked = true; // Preserve state when it's reactivated
		}
		Object.getPrototypeOf(this).deactivate (this);	// Call multiple levels of post-processing
		$('#wTracePane').css ("display", "none");
		this.cancelOnExit = false;
	};
	
	traceWidget.signalChangedTraceState = function (gobj) {
		var currentState = gobj.state.renderState,
				originalColor = gobj.style.color;
		
		function backColor () {
			var retVal = getSketch().canvasNode.css("backgroundColor"),
					parsedVal = retVal.match(/rgba\(.*,.*,.*,\s*(.*)\)/);
			if (parsedVal && parsedVal[1] && parsedVal[1] === "0")	// Is it safe to assume computed color returns as "rgba(r, g, b, a)"?
				return "white";	// use white if background is transparent
			else return retVal;
		}
		
		if (gobj.style.traced) {
			gobj.setRenderState ("targetHighlit");
			setTimeout (function () {
				gobj.setRenderState (currentState);
			}, 500);
		} else {
			if (gobj.isOfKind ("Point")) {
				gobj.hide ();
				setTimeout (function () {
					gobj.show ();
				}, 500);
			} else {
				gobj.style.color = backColor ();
				if (gobj.style.width) gobj.style.width += 1;
				gobj.invalidateAppearance ();
				setTimeout (function () {
					gobj.style.color = originalColor;
					if (gobj.style.width) gobj.style.width -= 1;
					gobj.invalidateAppearance ();
				}, 500);
			}
		}
	};

	traceWidget.handleTap = function (event, context) {
		var gobj = Object.getPrototypeOf(traceWidget).handleTap (event, context),
				style;
		if (!canTraceGobj (gobj))
			return;	// ignore taps on untraceable objects
		if (gobj) {
			style = gobj.style;
			style.traced = !style.traced;
			if (!style.traced) {
				gobj.setRenderState ("none");
			} else {
				if (!traceWidget.autoEnabled) {
					traceWidget.toggleEnabling (true);
					traceWidget.autoEnabled = true;
				}
				if (traceWidget.glowBox.checked) {
					gobj.setRenderState ("unmatchedGiven");
				} 
			}
			$("#wTracePrompt").css ("display", "none");
			if (!traceWidget.glowBox.checked) {
					traceWidget.signalChangedTraceState (gobj);
			}
		}
	};
	
/*	Delete Widget
 *  The name of this widget will eventually change to "Object Widget". To implement that change, we'll need to
 *  rename the delete widget references in several files in addition to this one:
 *  document.js, exporter.php, Export.js, widgets.html and widgets.css,
 *  all of which currently refer to the pref as "delete".
 */

	function setRenderStates (list, newState) {	// Set the renderState of every gobj in arr.
		$.each (list, function (id, gobj) {
			gobj.setRenderState (newState);
		});
	}

	function compileProgeny (seed) {
		var list = {};
		
		function addGobj (gobj) {	// add gobj to the list and ecursively add all children of gobj 
			if (list [gobj.id]) 
				alert ("addGobj in deleteWidget called for an already-listed gobj!");
			list [gobj.id]= gobj;
			gobj.setRenderState ("targetHighlit");
			gobj.children.forEach (function (child) {
				if (!list[child.id]) {
					addGobj (child);
				}
			});
		}

		addGobj (seed);
		deleteWidget.progenyList = list;
	}
	
	deleteWidget.deleteProgeny = function () {
		var sketch = getSketch(),
				delta,
				preDelta = sketch.document.getRecentChangesDelta();	// capture changes since last undo event
		sketch.gobjList.removeGObjects (deleteWidget.progenyList, sketch);
		delta = sketch.document.pushConfirmedSketchOpDelta (preDelta);
		sketch.document.changedUIMode();
		// Add a sketch event here, similar to the ToolPlayed event posted by the toolController.
		this.sketch.event(
			'DeleteGObjs',
			{},
			{
				'deleted gobjs': deleteWidget.progenyList,
				'delta': delta
			});
	};
	
	deleteWidget.activate = function (sketch) {
		if (!Object.getPrototypeOf(this).activate (sketch, this)) return false;
		this.cancelOnExit = false;
		$('#wDeletePrompt').css ("display", "block");
		return true;
	};

	deleteWidget.deactivate = function () {
		Object.getPrototypeOf(this).deactivate (this);	// Call multiple levels of post-processing
		$('#wDeletePrompt').css ("display", "none");
		this.cancelOnExit = false;
	};

	deleteWidget.handleTap = function (event, context) {
		var gobj = Object.getPrototypeOf(deleteWidget).handleTap (event, context),
		$blur = $('#delete-confirm-modal'),
		$dialog = $blur.find('.util-popup-content');
		//self = this;
		if (gobj) {
			compileProgeny (gobj);
			$blur.css ('display', 'block');
			$dialog.tinyDraggable({exclude: ".dragExclude"});
			$("#deleteCancel").focus ();
			//$dialog.on ("keyup", function (e) {
			//	if (e.keyCode === 13) {
			//		self.deleteCancel ();
			//	}
			//});
		}
	};
	
	deleteWidget.deleteConfirm = function () {
		$('#delete-confirm-modal').css ('display', 'none');
		deleteWidget.deleteProgeny ();
		delete deleteWidget.progenyList;
	};

	deleteWidget.deleteCancel = function () {
		$('#delete-confirm-modal').css ('display', 'none');
		setRenderStates (deleteWidget.progenyList, "none");
		delete deleteWidget.progenyList;
	};
	
return {	// public functions and variables
	
	initWidget: function () {
		scriptPath = getScriptPath ();
		$.ajax({   // Load the widget html
			url: scriptPath + 'widgets.html',
			success: function (data) {
				if ($("#widget")) $("#widget").remove();
				$('body').append (data);
				$widgetParent = $( "<div style='position: relative; height:0; width:100%;'></div>" );
				$('body').append($widgetParent);
				$widget = $("#widget");
				$widget.detach ();
				$widgetParent.append ($widget);
				$widget.css ("display", "none");
				setupWidgetHandlers ();
				$("#widget img").attr('src', function (index, attr) {	// Set the img src attributes to their correct url's
					var fName = attr.match (/[^\/]+$/);	// get the portion of the filename following the last slash.
					return scriptPath + fName;
				});
			},
			dataType: 'html'
		});
	},
	
	showWidgets: function (show, optionalTargetNode) {	// shows or hides the entire widget
		if (!$widget)
			throw GSP.createError ("showWidgets called before loading $widget.");
		if (!show) {
			$widget.css ("display", "none");
			return;
		}
		if (optionalTargetNode) {	// if the caller specifies a DOM node, put the widgets in it.
			targetControllerToDoc (optionalTargetNode);
		}
		if (!targetNode && show)	// Do nothing if there's no targetNode or if this call is aimed at a different sketch
			return;
		if (show) {
			showWidget();
			if (preserveActiveWidget) {
				preserveActiveWidget.activate (getSketch(), preserveActiveWidget);
				preserveActiveWidget = null;
			}
		}
		else {
			if (activeWidget) {
				preserveActiveWidget = activeWidget;
				activeWidget.deactivate ();
			}
			hideWidget();
		}
	},
	
	relatedSketchNode: function (node, target) {
		// node is an element associated with a sketch_canvas: a widget button, page control, util menu, etc.
		// returns the sketch_canvas element associated with node
		var $node = $(node),
				$sketchNode = $node.filter (target);
		while ($node.length && !$sketchNode.length) { // target isn't $sketchNode, so search prev sibs and then ancestors
			$sketchNode = $node.prevAll (target);
			$node = $node.parent();
		}
		if (!$sketchNode.length)
			throw GSP.createError ("relatedSketchNode() couldn't find the target: " + target);
		return $sketchNode[0];
	},

	toggleWidgets: function (node) {	// toggles the visibility of the entire widget. If node differs from the currently-targeted sketchNode, leave the widget visible and just retarget it.
		// If node is the widget button, look for a previous sketch_canvas sibling or a previous sketch_canvas sibling of the button's parent.
		var doShow = $widget.css("display")==="none",
				sketchNode = WIDGETS.relatedSketchNode (node, ".sketch_canvas");
		if (!sketchNode)
			throw GSP.createError ("toggleWidgets called for an element that's neither a sketch_canvas nor a widget_button");
		else if (sketchNode !== targetNode)
			doShow = true;
		WIDGETS.showWidgets (doShow, sketchNode);
		return doShow;
	},

	confirmModality: function () {
		if (activeWidget) {
			activeWidget.cancelOnExit = false;
			activeWidget.deactivate();
		}
	},

	cancelModality: function () {
		if (activeWidget) {
			activeWidget.cancelOnExit = true;
			activeWidget.deactivate();
		}
	},

	toggleStyleModality: function () {
		if (activeWidget === styleWidget) {
			styleWidget.deactivate(this);
		}
		else {
			styleWidget.activate(getSketch(), styleWidget);
		}
	},

	toggleVisibilityModality: function () {
		if (activeWidget === visibilityWidget)
			visibilityWidget.deactivate(visibilityWidget);
		else if (targetNode && $targetNode.data("document"))
			visibilityWidget.activate(getSketch(), visibilityWidget);
	},
	
	toggleLabelModality: function () {
		if (activeWidget === labelWidget)
			labelWidget.deactivate(labelWidget);
		else if (targetNode && $targetNode.data("document"))
			labelWidget.activate(getSketch(), labelWidget);
	},
	
	toggleObjectModality: function () {
		if (activeWidget === deleteWidget)
			deleteWidget.deactivate(deleteWidget);
		else if (targetNode && $targetNode.data("document"))
			deleteWidget.activate(getSketch(), deleteWidget);
	},
	
	toggleTraceModality: function () {
		if (activeWidget === traceWidget)
			traceWidget.deactivate(traceWidget);
		else if (targetNode && $targetNode.data("document"))
			traceWidget.activate(getSketch(), traceWidget);
	},

	setTraceGlowing: function () {  // Match behavior to the current setting of the Reveal checkbox
		traceWidget.setGlowing ();
		$("#wTracePrompt").css ("display", "none");
	},
	
	toggleTraceFading: function () {
		traceWidget.toggleFading ();
	},

	toggleTraceEnabling: function () {
		traceWidget.toggleEnabling ();
	},	

	clearTraces: function () {
		getSketch().clearTraces ();
		$("#wTracePrompt").css ("display", "none");
	},
	
	pointCheckClicked: function () {
		if (currentPointStyle < 0)
			highlightPointGrid (styleWidget.defaultPointStyle);
		else
			highlightPointGrid (-1);
	},

	pointGridClicked: function (e) {
		var zoom = findZoom();
		highlightPointGrid (Math.floor(e.offsetY / (20*zoom)));
		},

	lineCheckClicked: function () {
		if (currentLineStyle < 0 && currentLineThickness < 0)
			highlightLineGrid (styleWidget.defaultLineThickness, styleWidget.defaultLineStyle);
		else
			highlightLineGrid (-1, -1);		// default to medium solid
	},

	lineGridClicked: function (e) {
		var zoom = findZoom();
		highlightLineGrid (Math.floor(e.offsetY / (20*zoom)), Math.floor(e.offsetX / (51*zoom)));
		},

	colorCheckClicked: function () {
		var thisChecked = toggleCheck (styleWidget.objectColorBox);
		if (!thisChecked && !styleWidget.textColorBox.checked)
			highlightColorGrid (-1, 0);
		else if (colorIndex < 0) {
			highlightColorGrid (styleWidget.defaultColor.column, styleWidget.defaultColor.row);
		}
	},

	labelCheckClicked: function () {
		var thisChecked = toggleCheck (styleWidget.textColorBox);
		if (!thisChecked && !styleWidget.objectColorBox.checked)
			highlightColorGrid (-1, 0);
		else if (colorIndex < 0) {
			highlightColorGrid (styleWidget.defaultColor.column, styleWidget.defaultColor.row);
		}
	},
	
	labelSetFontSize: function (val) {
		if (targetGobj) labelWidget.setFontSize (+val);
	},
	
	labelSetFont: function (newFont) {
		if (targetGobj) labelWidget.setFont (newFont);
	},
	
	colorGridClicked: function (e) {
		var zoom = findZoom();
		var x = e.pageX - $('#widget_colorGrid').offset().left;
		var y = e.pageY - $('#widget_colorGrid').offset().top;
		var column = Math.min(8, Math.floor(x/(27.2*zoom)));
		var row = Math.floor(y/(27*zoom));
		highlightColorGrid (column, row);
	},
	
	labelChanged: function (newLabel) {
		if (!LabelControls.labelChanged (newLabel))	{ // Give LabelControls a chance to handle this event
			changeText (newLabel); // LabelControls didn't handle it, so call changeText()
		}
	},
	
	controlCallback: function (newLabel, newOrigin)	{	// Called when the user has pressed a button
		newLabel = changeText (newLabel, newOrigin);
		return newLabel;
	},
	
	labelToggled: function () {
		toggleLabel (labelWidget.showLabelElt.prop ("checked"));
	},
	
	deleteConfirm: function () {
		deleteWidget.deleteConfirm (this);
	},

	deleteCancel: function () {
		deleteWidget.deleteCancel (this);
	},

	setWidgetsPrefs: function (prefArr) {	// Available for legacy preference calls
		PREF.setWebPagePrefs (prefArr);
	},
	
	getScriptPath: function () {
		return scriptPath;
	},
	
	resizeSketchFrame: function (sketchDoc) {	// Call this if an already-loaded sketch has just been made visible.
		resizeSketchFrame (sketchDoc);
	}


	};	// return
})();

/* ***** LABEL CONTROLS STATE MACHINE ***** */
// This state machine handles the buttons that correspond to the object's nameOrigin.
// The labelWidget itself handles the label text input control.
// Thus LabelControls uses a callback to inform the widget of any programmatic text change resulting from a button click,
// and the widget must inform the LabelControls, via labelChanged(), of any user change in the text field (to facilitate a radio-button change if needed).
/* jshint -W003 */
var LabelControls = (function () {
/* jshint +W003 */
	var theMachine;
		
	function stateFromOrigin (mode, origin) {
		var measureState = {namedFromTemplate: AutoState, namedFromLabel: ManualState, noVisibleName: NoneState},
				transImageState = {namedByPrime: PrimeState, namedByShortFn: ShortState, namedByFullFn: FullState,
						namedFromLabel: ManualState, noVisibleName: NoneState};
		switch (mode) {
			case "measure":
			case "param":
				return measureState[origin];
			case "transImage":
				return transImageState[origin];
		}
	}
	
	function LabelMachine (mode, tappedGobj, callback, textRule, originRule, inputSelector, radioSelector, showSelector){
		this.mode = mode;	// "measure," "param," or "transImage"
		this.oldText = tappedGobj.label;	// original values on creation
		this.oldOrigin = tappedGobj.style.nameOrigin;
		this.lastOrigin = "";
		this.labelText	 = tappedGobj.label;	// the gobj.label holds the label for transformed images, for manual measurements, and for buttons. Auto measurements and auto-generated 
		$(inputSelector).prop ("value", tappedGobj.label);
		this.callback = callback;
		this.textRule = textRule;
		this.originRule = originRule;
		this.radioSelector = radioSelector;
		this.inputSelector = inputSelector;
		this.showSelector = showSelector;
		this.tappedGobj = tappedGobj;
			
		this.radioPressed = function (newOrigin) {
			var newText = this.textRule[newOrigin],
					gobj = this.tappedGobj,
					NewState, inputElt;
			if (newOrigin === "namedFromLabel" && newText === "") {
				newText = gobj.label;	
			}
			if (newOrigin !== gobj.style.nameOrigin || newText !== gobj.label) {	// ignore a repeated tap on the same button if it's already been enforced.		
				NewState =  stateFromOrigin (this.mode, newOrigin);
				this.state = new NewState (this);
			}
			if (newOrigin === "namedFromLabel") {
				inputElt = $(this.inputSelector)[0];
				inputElt.focus();
				inputElt.setSelectionRange(0, inputElt.value.length);
			}
		};
		
		this.originFromText = function (text) {
			var retVal;
			if (text==="") {
				retVal = "noVisibleName";
			} else {
				retVal = this.originRule[text];
				if (!retVal) {
					if (this.mode === "transImage")
						retVal = "namedFromLabel";	// it's an unrecognized, non-empty label
							else
						retVal = this.originRule["*"];
				}
			}
			return retVal;
		};
		
		this.labelChanged = function (newLabel, newOrigin) {	// caller has already determined the proper newOrigin
			var NewState = stateFromOrigin (this.mode, newOrigin);
			this.labelText = newLabel;
			if (!(this.state instanceof NewState))
				this.state = new NewState(this);		// the state transition will update the button.
			else 	// No state change, so no need to update button, but we still need to update the sketch
				this.callback (newLabel, newOrigin);
		};

		this.state = null;
	}
	
	function LabelState (nameOrigin) { // Define properties for all descendants
		this.nameOrigin = nameOrigin;
		this.init = function (machine, text, showChecked) {
			var radio,
					newText = text,
					emptyTrans = nameOrigin === "noVisibleName" && machine.mode === "transImage";	// transformed image with an empty label
			this.machine = machine;
			if (nameOrigin !== machine.lastOrigin) {
				newText = machine.callback (text, nameOrigin);	// Let the callback update the gobj (perhaps by generating a new label from the pool).
			}
			if (text !== "")
				$(machine.inputSelector).val (newText);
			radio = $(this.machine.radioSelector + "[value=" + nameOrigin +"]");
			if (!radio.prop ("checked")) {
				radio.prop ("checked", true);
			}
			if (emptyTrans) {
				$(machine.radioSelector).prop("checked", false);	// turn off all radios for no label
			} else if (newText !== text) {
				this.machine.labelText = newText;
				delete this.machine.originRule [text];
				this.machine.originRule[newText] = nameOrigin;
				this.machine.textRule[nameOrigin] = newText;	// update the rule to match the text if it's changed
			}
			$(machine.showSelector).prop ("checked", showChecked);
			machine.lastOrigin = nameOrigin;
		};
	}

	function AutoState (machine) {
		this.init (machine, "", true);
	}
	AutoState.prototype = new LabelState ("namedFromTemplate");
	AutoState.prototype.constructor = AutoState;
	
	function ManualState (machine) {
		this.init (machine, machine.labelText, true);
	}
	ManualState.prototype = new LabelState ("namedFromLabel");
	ManualState.prototype.constructor = ManualState;
	
	function NoneState (machine) {
		this.init (machine, "", false);
		WIDGETS.labelToggled ();	//	Make sure the labelvisibility is in sync with the Labelcheckbox 
	}
	NoneState.prototype = new LabelState ("noVisibleName");
	NoneState.prototype.constructor = NoneState;

	function PrimeState (machine) {
		this.init (machine, machine.textRule.namedByPrime, true);
	}
	PrimeState.prototype = new LabelState ("namedByPrime");
	PrimeState.prototype.constructor = PrimeState;
	
	function ShortState (machine) {
		this.init (machine, machine.textRule.namedByShortFn, true);
	}
	ShortState.prototype = new LabelState ("namedByShortFn");
	ShortState.prototype.constructor = ShortState;
	
	function FullState (machine) {
		this.init (machine, machine.textRule.namedByFullFn, true);
	}
	FullState.prototype = new LabelState ("namedByFullFn");
	FullState.prototype.constructor = FullState;

	
	return {

		init: function (mode, target, callback, textRule, originRule, inputSelector, radioSelector, showSelector) {
			var DefaultState = stateFromOrigin (mode, target.style.nameOrigin);
			theMachine = new LabelMachine (mode, target, callback, textRule, originRule, inputSelector, radioSelector, showSelector);
			theMachine.state = new DefaultState (theMachine);
			$(".wLabelRadios label").click(function (event) {
				LabelControls.transition (event);
			});
		},
		
		terminate: function () {
			if (theMachine)
				theMachine = null;
		},
		
		transition: function (event) {	// Called when a radio button is clicked. We have to use the callback if we change the text.
			// This handler gets called twice for each radio click on the label, but only once if on the button. Why? How to prevent this? 
			var value = event.target.value || event.target.children[0].value;
			if (value) {
				theMachine.radioPressed (value);
			}
			// return false;	// returning false prevents the second event, but then clicking a button (not the label) ends up with the previous button being restored. 
		},
		
		labelChanged: function (newLabel) {	// Called from the widget; we get first chance at changing the text, but we don't have to call back about an origin change, because the caller has already set the origin.
			if (theMachine) {
				theMachine.labelChanged (newLabel, this.originFromText (newLabel));
				return true;
			}
			return false;
		},
		
		originFromText: function (theText) {
			if (theMachine) {
				return theMachine.originFromText (theText);
			}
				return null;
		}
	};
})();

var PAGENUM = (function() {	// define the PAGENUM namespace, for the code that creates and handles page number controls
	// private variables and functions	
	// The init() function replaces this flag: '<span class = "page_buttons"></span>' with the actual page button control elements for the sketch in the same container as the page_buttons span.
	// If the sketch has only a single page, no buttons appear.
	// If a new sketch is loaded into this sketch_canvas, the LoadDocument.WSP handler will reset the page buttons.
	// If the document switches to a new page, the DidChangeCurrentPage.WSP handler resets the page # and the enabled appearance of the arrows
	
	var saveTraces = true;
	
	function getCtl (sketchNode, selector) {
		return $(sketchNode).parent().find(selector);
	}
	
	function getDoc (sketchNode) {
		return $(sketchNode).data("document");
	}
	
	function setToolEnabling (sketchDoc) {	// Only need to call this once to set css classes;
																					// Subsequent page changes will take care of themselves
		var sketchNode = sketchDoc.canvasNode[0],
				toolNodes = $(sketchNode).find ("div.wsp-tool"),
				ix, $node, title, enabledPages;
				
		function enableThisPage (num) {
			if (Number.isInteger (num))
				$node.addClass ("p_" + num);
			else throw GSP.createError ("bad argument to setToolEnabling enableThisPage.");
		}
		
		for (ix = 0; ix < toolNodes.length; ix++) {
			$node = $(toolNodes[ix]);
			title = $node.find("[title]").attr("title");
			if (!title)	// Not an icon, so get the tool's text
				title = $node[0].textContent;
			if (!title) continue; // Do nothing if the tool doesn't have a title
			title = title.replace(/\s+/g, '');
			enabledPages = PREF.getPref (sketchDoc, title, "tool");
			if (enabledPages && enabledPages[0] !== "all") {
				$node.addClass ("page_toggle");
				if (enabledPages[0] !== "none") {
					enabledPages.forEach (enableThisPage);
				}
			}
		}
	}
	
	function injectButtonElements (sketchDoc) {	// Find any uninitialized .page_buttons element with html matching this doc id, and initialize the buttons.
		var sketchNode = sketchDoc.canvasNode[0],
				$control = getCtl (sketchNode, ".page_buttons"),
				$btnArea = getCtl (sketchNode, ".button_area"),
				pageCtlEnabled = PREF.getPref (sketchDoc, "pagecontrol"),
				resetEnabled = PREF.getPref (sketchDoc, "resetbutton"),	// resetbutton should be a per-page option.
				logo = PREF.getPref (sketchDoc, "wsplogo"),
				newContent, $utilMenu;
		if ($control.length === 1 && pageCtlEnabled) {
			if (sketchDoc.docSpec.pages.length < 2) {
				$control.removeClass ("page_buttonsActive");			// One-page sketch, so no buttons.
				$control.empty();
			}
			else {
				// Omit pageNum here; the pageNum will be set by the DidChangeCurrentPage handler.
				newContent = '<span class="page_btn page_prevBtn">&nbsp;</span><div style="display:inline-block; position:relative;"><span class="page_num"></span></div><span class="page_btn page_nextBtn">&nbsp;</span></span>';
				$control.html (newContent);
				$control.addClass ("page_buttonsActive");
				$control.find(".page_num").on ("click", {node: sketchNode}, function (e) {
					showPopup (e.data.node);
					return false;	// eat any clicks on the page number
				});
				$control.find(".page_prevBtn").on ("click", {node: sketchNode}, function (e) {
					goPage (e.data.node, -1, true);
					return false;	// eat clicks
				});
				$control.find(".page_nextBtn").on ("click", {node: sketchNode}, function (e) {
					goPage (e.data.node, +1, true);
					return false;	// eat clicks
				});
				goPage (sketchNode, +sketchDoc.metadata["start-page"]);
			}
		}
		if ($btnArea.length === 1) {
			if (resetEnabled.length && resetEnabled[0] !== "none") {
				newContent = '<button class="reset_button';
				if (resetEnabled[0] !== "all") {
					newContent += ' page_toggle';
					resetEnabled.forEach (function (num) {
						newContent += ' p_' + num;
					});
				}
				newContent += '" onclick="PAGENUM.undoAll(this);">Reset</button>';
				$btnArea.append (newContent);
			}
			if (logo) {
				newContent = '<div class="wsp_logo"></div>';
				// Float this left, but after util-menu-btn if it exists.
				$utilMenu = $btnArea.find(".util-menu-btn");
				if ($utilMenu.length > 0)
					$utilMenu.after (newContent);
				else
					$btnArea.prepend (newContent);
			}
		}
	}

	function highlightPopup (doc) {
		var pageNum = doc.focusPage.metadata.id;
		var items = $(doc.canvasNode).parent().find(".page_popupNum");
		if (items.length > 0) {
			$(items).css ("background-color", "#fff");
			$(items[pageNum-1]).css ("background-color", "#ccc");
		}
	}
	
	function showHidePageInfo (target, pageNum) {
		//  Show or hide html elements based on the class.
		//  Use <div class="page_toggle p_2 p_3"> for elements
		//  to appear when the sketch displays page 2 or page 3.
		//  These element must be within the sketch_container.
		var elements = $(target).closest(".sketch_container").find (".page_toggle");
		if (elements.length) {
			elements.hide();
			elements.filter (".p_" + pageNum).show();
		}
	}
	
	function showPageNum (doc, target) {	// Set the page number in the control, and the opacity of the buttons
		var sketch = doc.focusPage,
				pageNum = sketch.metadata.id,
				numPages = doc.docSpec.pages.length,
				pageNumCtl = $(doc.canvasNode).parent().find(".page_buttons");
		if (saveTraces)
			sketch.restoreTraces ();
		if (pageNumCtl) {
			pageNumCtl.find (".page_num").html ("&nbsp;" + pageNum + "&nbsp;");
			pageNumCtl.find (".page_nextBtn").css ("opacity", pageNum < numPages ? "1" : "0.4");
			pageNumCtl.find (".page_prevBtn").css ("opacity", pageNum > 1 ? "1" : "0.4");		
			highlightPopup (doc);
		}
		showHidePageInfo (target, pageNum);
	}

	function init () {	// The buttons cannot be created until the sketch is loaded and we know whether it contains more than a single page.
		var canvasNodes = $('.sketch_canvas');
		canvasNodes.on ("LoadDocument.WSP", function (event, context) {
			injectButtonElements (context.document);
			setToolEnabling (context.document);
		});
		canvasNodes.on ("DidChangeCurrentPage.WSP", function (event, context) {
			showPageNum (context.document, event.target);
		});
	}
		
	function goPage (sketchNode, pageNum, relative) {
		var doc = getDoc (sketchNode),
				sketch = doc.focusPage,
				oldNum = +doc.focusPage.metadata.id;
		if (relative)
			pageNum += oldNum;
		if (pageNum > 0 && pageNum <= doc.docSpec.pages.length && pageNum !== oldNum) {
			if (saveTraces && !sketch.preferences.fadeTraces)
				sketch.saveTraces();
			doc.switchPage (pageNum);	// the page control, and the popup (if active) will be updated by a DidChangeCurrentPage message 
		}
	}

	function showPopup (sketchNode) { // Put up a modal window above the page #
		
			function makeSpan (pageNum) {
				return '<span class="page_popupNum">&nbsp;' + pageNum + '&nbsp;</span>';
			}
	
		var pageNumCtl = getCtl (sketchNode, ".page_buttons");
		if (pageNumCtl.find(".page_popup").length > 0) {
			hidePopup(sketchNode);
			return;
		}
		var doc = getDoc (sketchNode);
		var numPages = doc.docSpec.pages.length;
		var content = makeSpan (1);	// create the popup window, with each element a span of class page_popupNum containing a page #
		for (var i=2; i <= numPages; i+=1) {
			content += "<br>"+ makeSpan(i);
		}
		var element = $.parseHTML ('<div class="page_popup" style="line-height:1.1rem;">' + content + '</div>');
		pageNumCtl.find (".page_num").after (element[0]);	// Show the popup.
		var ht = $(element).outerHeight() + 1;	// fudge: how to get this right? Safari is erratic on zooming.
		$(element).css ({top: -ht + "px"});
		highlightPopup (doc);		
		
		pageNumCtl.find(".page_popupNum").on ("mouseover", {node: sketchNode}, function (e) {
			goPage (e.data.node, this.innerText.trim());
		});
		pageNumCtl.find(".page_popupNum").on ("click", {node: sketchNode}, function (e) {
			goPage (e.data.node, this.innerText.trim());
			hidePopup (e.data.node);
			return false;	// eat any clicks on the numbers
		});
		$(window).one ("click", {node: sketchNode}, function (e) {
			if (!$(e.target).hasClass("page_num")) {
				hidePopup (e.data.node);
				return false;
			}
		});
		$(window).off ("keydown");	// turn off any already-active keydown handler
		$(window).on ("keydown", {node: sketchNode}, function (e) {
			var key = e.which;
			if (key >= 37 && key <= 40) {	// eat arrow keys, ignore others
				if (key <= 38) goPage (e.data.node, -1, true);
				else goPage (e.data.node, +1, true);
			return false;
			}
		});
	}
	
	function hidePopup (sketchNode) {
		// Remove the handlers for this popup.
		var p = getCtl (sketchNode, ".page_buttons");
		p.find(".page_popupNum").off ("mouseover");
		p.find(".page_popupNum").off ("click");
		p.find('.page_popup').remove();
		$(window).off ("keydown");
		}
		
	return {	// public functions and variables
			
		initPageControls: function () {
			init ();
		},
		
		undoAll: function (btn) {	// button handler for the Reset Sketch button
			var sketchNode = WIDGETS.relatedSketchNode (btn, ".sketch_canvas");
			getDoc(sketchNode).undo('all');
		}
		
	};
})();

var UTILMENU = (function() {	// define the UTILMENU namespace, for the code that performs uploads, downloads, and eventually various orher functions.
	// There is support for two preferences, which enable the uploadutil and downloadutil commands.
	// Should this support be on a page-by-page basis? If so, the commands presumably need to support
	// uploading or downloading only the single currently-visible sketch page.
	var curSketchNode;	// The sketch_canvas to which the active Upload and Download commands apply.
	
		function setUtilEnabling (doc) {
			// Current implementation of util items (upload and download) are for the entire sketch, not page-by-page
			// It doesn't make sense to allow page-by-page prefs for functions that upload or download all pages of the current sketch.
			var uploadEnabled = PREF.getPref (doc, 'upload', 'util'),
					downloadEnabled = PREF.getPref (doc, 'download', 'util'),
					theButton = $(doc.canvasNode).parent().find(".util-menu-btn"),	// the button must live in the same element that contains the sketch
					eitherEnabled = uploadEnabled || downloadEnabled,
					numItems = 0,
					theContent,
					height,
					top;
					
			function showItem (target) {
				theButton.find (target).show();
				numItems++;
			}
			
			if (!eitherEnabled) 
				theButton.hide ();	// the easy case!
			else {
				theButton.show ();
				$(theButton.find (".util-menu-item")).hide();
				if (uploadEnabled) showItem (".util-upload");	// These should be classes, not id's
				if (downloadEnabled) showItem (".util-download");
				theContent = theButton.find (".util-menu-content");
				height = 0.25 + 1.45 * numItems;
				top = -height - 0.4;
				theContent.css ("height", height + "rem");
				theContent.css ("top", top + "rem");
			}
		}
		
		function hideUtilMenu () {
			$('.util-menu-content').hide ();
			$(window).off ("click", checkHideMenu);
		}

		function checkHideMenu (e) {		// Close the dropdown menu if the user clicks outside of it
			if (!$(e.target).hasClass("util-menu")) {
				hideUtilMenu ();
				return false;
			}
		}

		function downloadSketch (sketchDoc, title) {
			var pageData = sketchDoc.pageData,
					json, dataBlob, objUrl;
			if (!$("#util-fname")[0].validity.valid)
				return;
			if (title.slice(-5) !== ".json")
				title += ".json";
			var link = $('#downloadLink')[0];
			$.each (sketchDoc.docSpec.pages, function (index, item) {
				var id = item.metadata.id;
				if (pageData[id].session.traceData) {
					item.traceData = pageData[id].session.traceData;
				}
			});
			json = sketchDoc.sQuery().getSketchJSON();	// already stringified
			dataBlob = new Blob([json],{type:"text/plain"});
			objUrl = URL.createObjectURL(dataBlob);
			link.href = objUrl;
			link.download = title;
			link.click();
			saveSketchChecksum (sketchDoc);
			UTILMENU.closeModal ("download-modal", "save");
		}
		
		function doDownload () {	// Prepare a download of the sketch contents associated with the utilButton menu
			var $dialog = $('#download-modal');
			$dialog.css ('display', 'block');
			$dialog.find('.util-popup-content').tinyDraggable({exclude: ".dragExclude"});
			$('#util-fname').select();
		}
	
		function prepareUpload () {		// set up handlers for the upload dialog box
			hideUtilMenu ();
			$("#upload-modal").data ("sketchNode", curSketchNode);	// Target the dialog to the sketch
			$('#file-name-input').attr ("onchange", "UTILMENU.loadSketch(this.files[0]);");
		}
			
		function prepareDownload () {		// set up handlers for the download dialog box
			
			function confirm () {
				downloadSketch ($(curSketchNode).data ('document'), $('#util-fname')[0].value);
			}
			
			hideUtilMenu ();
			$("#download-modal").data ("sketchNode", curSketchNode);	// Target the dialog to the sketch
			var $outputNode = $('#downloadOK');
			$outputNode.focus ();
			// Find the sketch_canvas that's a previous sibling of the utility menu button
			$outputNode.on ("click", function () {
				confirm ();
			});
			$('#util-fname').on ("keyup", function (e) {
				var valid = $('#util-fname')[0].validity.valid;
				if (e.keyCode === 27) {
					UTILMENU.closeModal ('download-modal', 'cancel');
				} else if (e.keyCode === 13 && valid) {
					confirm ();
				}
			});
		}
		
		function doUpload (sketchNode) {
			var $dlg = $('#upload-modal'),
					warnUser;
			curSketchNode = sketchNode;
			warnUser = docHasChanged (sketchNode) && PREF.shouldEnableForCurrentPage ('util', 'download', $(sketchNode).data('document').focusPage);
			prepareUpload ();
			//	Warn user if the sketch has changed and downloads are enabled.
			if (warnUser) {
				prepareDownload (); // Give user a chance to save first
				$dlg.css ('display', 'block');	// Show dialog box to warn user about saving first
				$dlg.find('.util-popup-content').tinyDraggable ({exclude: ".dragExclude"});
				$('#downloadBeforeUpload').focus ();
				
				$dlg.on ("keyup", function (e) {
					if (e.keyCode === 27) {
						UTILMENU.closeModal ('upload-modal', 'cancel');
					} 
				});
			}
			else
				$('#file-name-input').click();	// trigger the input process
		}
		
/*globals b64_md5 */
		function saveSketchChecksum (doc) {	// Save the checksum of the delta (not the whole sketch) on sketch load or save operations
			var sketchID = doc.canvasNode[0].id,
					checksum = b64_md5 (JSON.stringify(doc.getCurrentSpecObject ()));
			$("#" + sketchID).data("prevChecksum", checksum);
		}
		
		function docHasChanged (sketch) {
			var doc = $(sketch).data("document"),
					curSpec = doc.getCurrentSpecObject (),
					checksum = b64_md5 (JSON.stringify(curSpec)),
					prevChecksum = $(sketch).data("prevChecksum");
			return checksum !== prevChecksum;
		}

		function initSketch (doc) {
			// Some sketches don't have a fontList resource, which can cause problems if they later acquire objects or tools that require a fontList.
			var defaultList = ["\"Times New Roman\", serif","\"Arial\", sans-serif"];
			
			// The fix here corrects erroneous export of sketches with font-family = "\"Times New Roman\", sans-serif"
			function fixString (s) {
				if (s && s.includes ('Times') && s.includes ('sans-serif'))
					s = s.replace ('sans-serif', 'serif');
				return s;
			}
			
			function fixFontList (list) {
				var i;
				for (i=0; i<list.length; ++i) {
					list[i] = fixString (list[i]);
				}
			}
			
			function fixPage (textDefaults) {
				$.each (textDefaults, function (key, value) {
					var v = value["font-family"];
					if (v)
						value["font-family"] = fixString (v);
					else if (value.label) {
						v = value.label["font-family"];
						if (v)
							value.label["font-family"] = fixString (v);
					}
				});
			}
			
			function fixFonts (doc) {
				fixFontList (doc.resources.fontList);
				if (doc.pageData) {	// fix the doc
					$.each(doc.pageData, function (key, value) {
						fixPage (value.spec.preferences.text.textTypes);
					});
				} else {	// fix the docSpec
					$.each(doc.pages, function (key, value) {
						fixPage (value.preferences.text.textTypes);
					});
				}
			}
			
			if (!doc.resources)
				doc.resources = {"fontList": defaultList};
			else if (!doc.resources.fontList)
				doc.resources.fontList =  defaultList;
			else fixFonts (doc);
			if (!doc.docSpec.resources)
				doc.docSpec.resources = {"fontList": defaultList};
			else if (!doc.docSpec.resources.fontList)
				doc.docSpec.resources.fontList = defaultList;
			else fixFonts (doc.docSpec);
			fixPage (doc.focusPage.preferences.text.textTypes);	// Fix the focus page as well.
			// Store the checksum so we can tell later if the sketch has changed.
			saveSketchChecksum (doc);
		}

	return {	// public functions and variables
		
		checkFName: function (validity) {
			$('#downloadOK').prop('disabled', !validity.valid);
		},

		closeModal: function (modalID, action) {
			$('#' + modalID).css ('display', 'none');
			if (modalID === "download-modal") {
				$('#util-fname').off ("keyup");
				$('#downloadOK').off ("click");
			}
			else if (modalID === "upload-modal") {
				switch (action) {
					case "save":	// save first, and then do the upload; deprecated until I figure out how upload can wait for download to finish
						//$("#download-modal").data ("callSave", true);
						doDownload ($(this).parents ('.util-menu-btn'));
						break;
					case "dont-save":		// go ahead with the upload
						$('#file-name-input').click();
				}
			}
		},
		
		download: function (ev) {
			curSketchNode = WIDGETS.relatedSketchNode (ev.target, ".sketch_canvas");
			if ($("#download-modal").data ("callSave")) {
				$("#download-modal").removeData ("callSave");
			}
			prepareDownload (curSketchNode);
			doDownload ();
		},

		loadSketch: function (file) {
			var reader = new FileReader(),
					$node = $(curSketchNode);									 
			reader.onload = function(e) {
				$node.data ('sourceDocument', e.target.result);
				$node.data ('fileName', file.name.replace (".json", ''));
				$node.WSP("loadSketch");
				$node.removeData ('sourceDocument');	// Once the data's loaded, it's no longer needed here
				WIDGETS.showWidgets (true, $node[0]);
				// A sketch with no content doesn't have a fontlist, which will cause problems if content is added later.
				//checkDocForFontlist ($node.data ("document"));
			};
			reader.readAsText(file);
		},
		
		upload: function (ev) {
			doUpload (WIDGETS.relatedSketchNode (ev.target, ".sketch_canvas"));
		},
		
		menuBtnClicked: function (inst) {
			// find the child of inst...
			var menu = $(inst.parentNode).find('.util-menu-content');
			menu.toggle();
			// Actually need to close any other util menus and show only the one that was clicked.
			if (menu.css ("display") === "block")
				$(window).on ("click", checkHideMenu);
		},
		
		addUtilMenu: function (button) {
			var scriptPath =  WIDGETS.getScriptPath(),
					newContent = '<div class="util-menu-btn util-menu">';
			newContent += '<img class = "util-menu" src="' + scriptPath + 'utility-icon.png" onclick="UTILMENU.menuBtnClicked(this);" />';
			newContent += '<div class="util-menu-content util-menu">';
			newContent += '<div class="util-menu-item util-menu util-download" onclick="UTILMENU.download(event)">Download...</div>';
			// newContent += '<div class="util-menu-item util-menu util-download" onclick="UTILMENU.download(' + "'" + selector + "'" + ');">Download...</div>';
			newContent += '<div class="util-menu-item util-menu util-upload" onclick="UTILMENU.upload(event);">Upload...</div>';
			// newContent += '<div class="util-menu-item util-menu util-upload" onclick="UTILMENU.upload(' + "'"+ selector + "'" + ');">Upload...</div>';
			newContent += '</div>';
			newContent += '</div>';
			button.replaceWith (newContent);
			return newContent;
		},
		
		initUtils: function () {
			var $sketches = $(".sketch_canvas");
			$sketches.on ("LoadDocument.WSP", function (event, context) {
				initSketch (context.document);
				setUtilEnabling (context.document);
			});
			$.each ($sketches, function (index, element) {
				var container = $(element).parent(),
						button = container.find (".util-menu-btn"),
						doc = $(element).data ('document');
				if (button.length === 1 && !button[0].firstElementChild) { //There's a single menu button, so insert the full html for it
					UTILMENU.addUtilMenu (button);
				}
				if (doc)
					initSketch (doc);
			});
		}
	};
})();

$(function() {
	WIDGETS.initWidget();
	PAGENUM.initPageControls ();
	UTILMENU.initUtils ();
});
