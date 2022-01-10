// This code enables two modal states, one for formatting tapped objects and one for hiding/showing tapped objects.
// A small draggable controller appears in the sketch, with a button for each of the two modalities. Format modality expands the controller into a larger widget to provide the appropriate UI.
// The modalities are targeted to a specific sketch by a DidChangeCurrentPage.WSP event, and untargeted by a WillChangeCurrentPage.WSP event. (Targeting could also be made to occur by means of HTML buttons or widgets if desired.)
// There's a single controller per web page, which resides in the same DOM node as the targeted sketch.
// If a page is loaded in a different DOM node, the widget reparents itself to be in the same DOM node as the sketch it's targeting.
// The user can retarget the widget to a different websketch on the same web page in several ways.
// Changing to a different page of a sketch always targets the widget to the newly loaded page.
// If there are several different sketches on a page and the user has activated a widget modality (styling or hide/show), tapping an object in any sketch will target the widget to that sketch.
// The code here depends on two modifications to build 1020: the first adds a Tap event notification, and the second moves up the trigger for WillChangeCurrentPage so that this message is sent before, rather than after, the page delta is recorded.
// Fixed a problem in which the click locations were affected by the font-size and line-height of the parent DOM node
// Modified the handling of toggleWidgets to allow the caller to indicate the DOM node to be targeted when turning the widgets on
// 
// Widget modality is now an object in its own right, using the prototype chain to support methods common to all modalities as well as methods specific to particular groups of widgets.
// A Widget has a name, an enabled state, functions to call when it becomes active or inactive, and an active status (with the restriction that at most one widget can be active at any time).
// A TapWidget also has functions that support the way it handles tapping of objects.
// We use __proto__ to access prototype functions, rather than Object.getPrototypeOf(), because it seems to be more widely supported, and is apparently a permanent feature despite being deprecated.

var WIDGETS = (function() {	//define the WIDGETS namespace
	// private variables here



	var scriptPath;	// The url of this script, from which to locate image files.
	var theWidget = null;	// The jQuery widget object
	var targetNode = null;	// The jQuery node currently targeted by the widget, tracked separately so a new sketch in the same DOM node doesn't move the widget
	var activeWidget = null;	// the currently active widget
	var preserveActiveWidget = null;	// remember the last active widget in case of retargeting or hiding and showing widgets.
	var prevSketchPage;	// remember the last active page # in case of retargeting
	var widgetPrefs = [];	// stores user prefs for what widgets appear on what pages. Each array element is a triple containing the sketch_canvas id, the pref type, and the value.
	
	// The following vars belong to the style widget
	var currentPointStyle = -1, currentLineThickness = -1, currentLineStyle = -1, currentColor = -1;	// zero-based, so -1 means unchosen
	var radiusValue = [1.5, 2, 4, 6];
	var pathStyleValue = ["solid", "dashed", "dotted"];
	var pathWidthValue = [0.5, 1, 3, 5];
	
	// The following belongs to the visibility widget
	var visibilityColor;

// Private functions here, utility functions first

	var activeBgColor = "#ddf";
	var inactiveBgColor = "#fff";

	function genusIncludes (gobj, genus) {
		var genusArr = gobj.baseGenera;
		for (var i = 0; i <genusArr.length; i++) {
			if (genusArr[i] === genus)
				return true;
		}
		return false;
	}	//genusIncludes

	function extend(destination, source) { // From Oliver Caldwell (https://oli.me.uk/2013/06/01/prototypical-inheritance-done-right/)
			destination.prototype = Object.create(source.prototype);
			destination.__proto__.constructor = destination;
			return source.prototype;
	}

	function targetSketch () {
		return $(targetNode).data("document").sQuery.sketch;
	}
	
	// Widget constructor: first define properties
	function Widget (name) { // All widgets have a button that must be appropriately shown (when enabled) and highlighted (when active)
		this.name = name;
		this.domButtonSelector = "#widget_" + name + "ButtonID";	// e.g., the dom object with id = "#widget_styleButtonID"
		this.enabled = true;	// Don't show any widgets until they are activated.
	}
	
	// Define Widget methods on the prototype
	Widget.prototype.activate = function (sketch, inst) {	// must be a no-op if already active
		if (activeWidget && activeWidget !== inst)
			activeWidget.deactivate();
		activeWidget = inst;
		this.active = true;
		this.sketch = sketch;
		$(inst.domButtonSelector).css ("background", activeBgColor);
	};
	
	Widget.prototype.deactivate = function (inst) {	// must be a no-op if not already active
		// This prototype must be called last, because it sets the target sketch to null
		if (inst === activeWidget)
			activeWidget = null;
		this.active = false;
		this.sketch = null;
		$(inst.domButtonSelector).css ("background", inactiveBgColor);
	};

	Widget.prototype.toggle = function (sketch, inst) {
		if (this === activeWidget) this.deactivate(inst);
		else this.activate(sketch, inst);
		};
	
	function parsePagePref (raw) {	// Accepts a string: "all", "none", or a comma-delimited list of integers. Returns "all" or "none" unchanged, "none" if raw is empty, "all" if raw is null or undefined, or otherwise an array of the page numbers listed in the string.
			var pages, i;
			if (typeof raw !== "string") {
				if (typeof raw === "object" && raw.length > 0 && typeof raw[0] === "number")
					return raw;	// The raw object is an array containing at least one number, as in "visibilitywidget=5"
				else return ["all"];	// The raw object is neither a string nor a single number, so ignore it.
			}
			raw = raw.toLowerCase();
			if (raw === 'all' || raw === 'true') 
				return ['all'];
			if (raw === "" || raw === 'none' || raw === 'false')
				return ["none"];
			pages = raw.split (',');
			for (i = 0; i < pages.length; i+=1)
				{	pages[i] = parseInt(pages[i],10);}
			return pages;
		}

	Widget.prototype.shouldEnableForCurrentPage = function (sketch) {	// return true if the widget should be enabled, false if not.
		var pageNum = parseInt (sketch.metadata.id);	// Use numeric pageNum to check against array
		var enabledPages = sketch.document.getAuthorPreference (this.name.toLowerCase() + "widget");
		var retVal = (enabledPages[0] == "all" || enabledPages[0] === "true" || enabledPages.includes(pageNum));
		// Widget prefs set at runtime via widgetPrefs override any prefs set in the document.
		// Thus if both the name and the sketch match, we reset retVal
		for (var i = 0; i < widgetPrefs.length; i++) {
			if ((widgetPrefs[i].name == this.name || widgetPrefs[i].name == "all") && // widget matches
					(widgetPrefs[i].sketches.includes(sketch.anchorNode.context.id) || widgetPrefs[i].sketches[0] === "all")) // sketch matches
				retVal = (!widgetPrefs[i].pages || widgetPrefs[i].pages[0] == "all" || widgetPrefs[i].pages.includes(pageNum));
		}
		return retVal;
	};
	
	Widget.prototype.setEnablingForCurrentPage = function (sketch, widgetInstance) {	// return true if the widget's enabled, false if not. Side effect: deactivates the active widget if it's newly disabled.
		var retVal = this.shouldEnableForCurrentPage (sketch);
		widgetInstance.enabled = retVal;
		if (retVal)
			$(widgetInstance.domButtonSelector).show();
		else {
			if (this === activeWidget)
 				widgetInstance.deactivate();
			$(widgetInstance.domButtonSelector).hide();
		}
		return retVal;
	};
	
	//	A TapWidget is a widget that responds to taps on objects in the sketch. Such widgets must make all sketch objects selectable.
	function TapWidget (name) {
			Widget.call(this, name);
		}

	extend(TapWidget, Widget);
	
	TapWidget.prototype.preProcessGobj = function (ix, gobj) {
			if (!gobj.style.selectable) { gobj.style.wasUnselectable = true; gobj.style.selectable = true; if (gobj.kind === "Button") gobj.invalidateAppearance();}
	};
	
	TapWidget.prototype.postProcessGobj = function (ix, gobj) {
			if (gobj.style.wasUnselectable) { gobj.style.selectable = false; delete gobj.style.wasUnselectable; if (gobj.kind === "Button") gobj.invalidateAppearance();}
	};
	
	TapWidget.prototype.activate = function (sketch, inst) {
		this.__proto__.activate (sketch, inst);
		$(".sketch_canvas").on("Tap.WSP", inst.handleTap); // Detect taps for all sketches
		$(targetNode).on("ToolPlayed.WSP", callPreProcess);		// Toolplay is detected only for the currently-targeted sketch
		// Possible improvement: Toolplay in a different sketch calls targetControllerToDoc() if the toolplay sketch has widgets enabled.
		$(targetNode).on("WillUndoRedo.WSP", callPostProcess);		// Prepare for an undo/redo by postprocessing sketch objects
		$(targetNode).on("UndoRedo.WSP", callPreProcess);		// An undo/redo is done, so preprocess sketch objects 
		preProcessSketch (sketch);	// Get this sketch ready for the newly active widget
	};
	
	TapWidget.prototype.deactivate = function (inst) {
		$(".sketch_canvas").off("Tap.WSP", inst.handleTap);
		$(targetNode).off("ToolPlayed.WSP", callPreProcess);
		$(targetNode).off("WillUndoRedo.WSP", callPostProcess);
		$(targetNode).off("UndoRedo.WSP", callPreProcess);
		postProcessSketch (this.sketch);	// Return sketch objects to their proper selectability and visibility
		this.__proto__.deactivate (inst);
	};

	TapWidget.prototype.handleTap = function (event, context) {	// handle a tap on a gobj 
		// If the tapped gobj is in the current target sketch return the tapped gobj.
		// If the tapped gobj is in a different sketch with widgets, target that sketch and return the gobj.
		// If the tapped gobj is in a different sketch without widgets, targetControllerToDoc will fail, so return null.
		var newSketch = context.sQuery.sketch;
		if (newSketch === targetSketch() || targetControllerToDoc (context))  // gobj is now in targetSketch
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

	var widgetList = [styleWidget, visibilityWidget];
	

	styleWidget.activate = function (sketch) {
		this.cancelOnExit = false;
		this.__proto__.activate (sketch, this);
		$('.widget_pane').css ("display", "block");
	};

	styleWidget.deactivate = function () {
		this.__proto__.deactivate (this);	// Call multiple levels of post-processing
		$('.widget_pane').css ("display", "none");
		this.cancelOnExit = false;
	};

	styleWidget.postProcessGobj = function (ix, gobj) {
		if (gobj.oldStyle) {
			if (styleWidget.cancelOnExit) {
				gobj.style = Object.assign({}, gobj.oldStyle);
				if (gobj.style.label)
					gobj.style.label = Object.assign ({}, gobj.oldStyle.label);
				restoreTextColor (gobj);
				gobj.sQuery.sketch.invalidateAppearance(gobj);
			}
			delete (gobj.oldStyle);
		}
		styleWidget.__proto__.postProcessGobj (ix, gobj);	// undo any TapWidget pre-processing
	};
	
	function restoreTextColor (gobj)	{ // Restores the color of gobj to the color cached in either gobj.oldStyle.color (for Text objects) or in gobj.oldStyle.label.color (for geometric and Button objects).
		// By "restore" we mean that we're putting the original color back into sketch.renderRefCon and into the DOM node (if there is one). It would be better if we had a simple call to a function that feeds a single gobj into the renderRefCon => DOM pipeline.
		// It looks like prepareOneGObj() may do the job, but it's encapsulated in a process the prepares and renders the entire sketch. So for now we take the expedient approach, risking the possibility that different refCon structures are used for different environments.
		// MATT, LYN!! I need your thoughts on these two functions (restoreTextColor and changeTextColor)!!
		if (gobj.oldStyle) {
			var theColor = (gobj.baseKinds.includes ("Text")) ? gobj.oldStyle.color : gobj.oldStyle.label.color;
			changeTextColor (gobj, theColor);
		}
	}
	
	function changeTextColor (gobj, newColor) {	// Changing text color requires changing the gobj color and the color (if any) cached in the sketch's renderRefCon.
		// Unfortunately the text color is stored gobj.style.color for some objects (Text objects) and in gobj.style.label.color for others (geometric objects and buttons).
		// Also, Text and Button objects are in the DOM  and their color is cached in sketch.renderRefCon.gobj[gobj.id].baseStyles.color, 
		// but object labels have their color cached in sketch.renderRefCon.label[gobj.id].color.
		var sketch = gobj.sQuery.sketch;
		if (gobj.baseKinds.includes("Button") || gobj.baseKinds.includes("Text")) {	// These objects are in the DOM
			sketch.renderRefCon.gobj[gobj.id].baseStyles.color = newColor;	// Text color is cached in the renderRefCon
			if (gobj.baseKinds.includes("Text"))
				gobj.style.color = newColor;	
			else if (gobj.baseKinds.includes("Button"))
				gobj.style.label.color = newColor;
				// It seems that gobj.invalidateAppearance should redraw the object, but it doesn't seem to change the DOM element (at least for buttons), so we change that here
			var domNode = $(targetNode).find ("[wsp-id='" + gobj.id +"']");	// The domNode exists for text objects and buttons
			if (domNode[0]) {	// Change both the HTML and the color cached in the renderRefCon.
				domNode.css({"color": newColor});
				domNode.find ("*").css({"color": newColor});
			}
		}
		if (gobj.style.label && gobj.style.label.showLabel) {
			gobj.style.label.color = newColor;	// Set the color of a normal (non-text) object that's showing its label
			if (sketch.renderRefCon.label[gobj.id]) {	// If it's a label its color is cached here.
				sketch.renderRefCon.label[gobj.id].color = newColor;
			}
		}
	}
		
	styleWidget.handleTap = function (context, event) {
		var gobj, newColor;
		gobj = styleWidget.__proto__.handleTap (context, event);
		if (gobj) {
			if (!gobj.oldStyle) { // This is the first toggle for this object in the current formatting mode
				gobj.oldStyle = Object.assign({}, gobj.style);
				if (gobj.style.label)
					gobj.oldStyle.label = Object.assign({}, gobj.style.label);
			}
			// We assume that all objects with "radius" and "width" style attributes already have explicit values. But path objects are assumed to be solid if they have no line-style value, so we check whether they have "path" genus.
			// We don't bother deleting this attribute if we reset it to solid.
			if (gobj.style.radius && currentPointStyle >= 0)
				gobj.style.radius = radiusValue [currentPointStyle];
			if (genusIncludes (gobj, 'Path') && currentLineStyle >= 0)
				gobj.style['line-style'] = pathStyleValue [currentLineStyle];
			if (gobj.style.width && currentLineThickness >= 0)
				gobj.style.width = pathWidthValue [currentLineThickness];
			if (currentColor >= 0) {
				var row;
				var column = Math.floor(currentColor / 3);
				switch (currentColor-3*column) {
					case 0: row="a"; break;
					case 1: row="b"; break;
					case 2: row="c"; break;
				}
				newColor = $(".block"+column+row).css("background-color"); // Use .css to return the computed style, not the DOM style
				if (styleWidget.objectColorBox.checked) {
					gobj.style.color = newColor;	// Set the color of a geometric object, a text object, or a button handle
					if (gobj.baseKinds.includes("Text"))
						changeTextColor (gobj, newColor);
				}
				if (styleWidget.textColorBox.checked) {
					changeTextColor (gobj, newColor);
				}
			}	// currentColor >= 0
		} // if (gobj)
	};

	visibilityWidget.activate = function (sketch) {	// To activate the visibility widget it's sufficient to call the prototype.
		this.__proto__.activate (sketch, this);
	};

	visibilityWidget.deactivate = function () {
		this.__proto__.deactivate (this);	
	};

	visibilityWidget.preProcessGobj = function (ix, gobj) {
		var theStyle = gobj.style;
		if (theStyle.hidden) {
			theStyle.originalColor = theStyle.color;
			theStyle.color = visibilityColor;
			theStyle.newHidden = true;
			gobj.show();
		}
		visibilityWidget.__proto__.preProcessGobj (ix, gobj);
	};

	visibilityWidget.postProcessGobj = function (ix, gobj) {
		var theStyle = gobj.style;
		if (theStyle.originalColor) {
			theStyle.color = theStyle.originalColor;
			delete theStyle.originalColor;
			if (theStyle.newHidden)
				gobj.hide();
			else
				gobj.show();
			delete theStyle.newHidden;
		}
		visibilityWidget.__proto__.postProcessGobj (ix, gobj);
	};

	visibilityWidget.handleTap = function (context, event) {
		var gobj = visibilityWidget.__proto__.handleTap (context, event);
		if (gobj) {
			var theStyle = gobj.style;
			if (!theStyle.originalColor) { // This is the first toggle for this object in the current hide/show mode
				theStyle.originalColor = theStyle.color;
				theStyle.newHidden = theStyle.hidden;	// Track the original hidden value for possible future use (cancellation and/or undo).
			}
			theStyle.newHidden = !theStyle.newHidden;
			if (theStyle.newHidden)
				theStyle.color = visibilityColor;
			else
				theStyle.color = theStyle.originalColor;
			gobj.show();
		}
	};
	
	// Widget visibility needs to go through these functions to keep buttons associated with multiple sketches in sync
	function hideWidget () {
		theWidget.hide();
		$(".widget_button").removeClass ("widget_button_active");
	}
	
	function showWidget () {
		theWidget.show();
		$(".widget_button").removeClass ("widget_button_active");
		$(targetNode).parent().find(".widget_button").addClass ("widget_button_active");
	}
	
	function targetControllerToDoc (newDoc) {	// Position the widgets in newSketch.
		// if newSketch is null, disable all widgets, but remember the currently active widget and node for a later call
		// If widgets aren't enabled on the current page of the new sketch, don't retarget.
		var pageNum;	// Can we remove pageNum and prevSketchPage?
		var newSketch = newDoc.sQuery.sketch;
		var newNode = newSketch.document.canvasNode[0];
		if (targetNode)
			pageNum = targetSketch().metadata.id;
		var anyWidgetsEnabled = false;
		// Check whether the newSketch should have any widgets enabled
		widgetList.forEach (function (val) {	// Enable widgets for new sketch
			if (val.shouldEnableForCurrentPage (newSketch))
				anyWidgetsEnabled = true;
		});
		if (!anyWidgetsEnabled) { // No widgets enabled; what to do?
			if (!targetNode || newNode === targetNode) { // If same node, or no previous target, deactivate and hide widgets; if different, don't retarget at all
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
		if (newNode !== targetNode) {	// Reposition the widget only when the node changes
			// We'll place it as a child of the sketch_canvas' parent, located relative to the sketch child of the sketch_canvas.
			// That way it will move with the sketch_canvas--but we need to be sure this parent has position:relative;
			
			targetNode = newNode;
			var widgetParent = theWidget.parent(); // the <div> that serves as the widget's draggable_container
			var wspContainer = $(targetNode).find(".wsp-sketch-container");
			var canvasParent = $(newNode).parent();
			var pos = canvasParent.css("position");
			if (pos === '' || pos==="static")
				canvasParent.css("position", "relative");
			
			widgetParent.appendTo (canvasParent);
			var wspOffset = wspContainer.offset();
			var canvasOffset = canvasParent.offset();
			
			var widgetTop = wspOffset.top - canvasOffset.top + wspContainer.height() - theWidget.height() - 4 + "px";
			var widgetLeft = wspOffset.left - canvasOffset.left  - 22 +"px";
			widgetParent.css({"top": widgetTop, "left": widgetLeft});
			theWidget.css({"top": "0px", "left": "0px"}); // Reset the widget within its container
		}
		setVisibilityColor (newSketch);
		if (preserveActiveWidget && preserveActiveWidget.enabled)
			preserveActiveWidget.activate(newSketch, preserveActiveWidget);
		preserveActiveWidget = null;
		showWidget();
		return anyWidgetsEnabled;
	}

// Inject the widget into the DOM

	function injectWidgetContainer (target) {
		target.append ('\n<div id="widget_container">\n</div>');
	}

	function injectWidgetBody (target) {
		target.append ('\n<div id="widget" class="clearfix" style="display:none;">\n</div>');
	}

	function injectWidgetControl (widget) {
		widget.append ('<div id="widget_control" class="widget_controlWidth"><button id="widget_styleButtonID" class="widget_controlButton" onclick="WIDGETS.toggleStyleModality();"><img class="widget_controlIcon" src="' + scriptPath +'/styleIcon.png"/></button><button id="widget_visibilityButtonID" class="widget_controlButton" onclick="WIDGETS.toggleVisibilityModality();"><img class="widget_controlIcon" src="' + scriptPath +'/visibilityIcon.png"/></button></div>');
	}

	function injectPointPane (widget) {
		widget.append ('<div class="widget_pane widget_pointPaneWidth" >\n\t<img id="pointStyleCheckbox" class="widget_paneCheckbox" onclick="WIDGETS.pointCheckClicked(event);" src="' + scriptPath +'/unchecked.png">\n\t<div class="widget_paneBackground widget_pointImgWidth"></div>\n\t<img class="widget_paneContent widget_pointImgWidth" onclick="WIDGETS.pointGridClicked(event);" src="' + scriptPath +'/pointStyleGrid.png"/>\n\t<div id="pointStyleSelector" class="widget_paneSelector">&nbsp;</div>\n</div>\n');
	}

	function injectLinePane (widget) {
		widget.append ('<div id = "widget_lineStylePane" class="widget_pane">\n\t<img id="lineStyleCheckbox" class="widget_paneCheckbox" onclick="WIDGETS.lineCheckClicked(event);" src="' + scriptPath +'/unchecked.png">\n\t<div class="widget_paneBackground widget_lineStyleWidth"></div>\n\t<img class="widget_paneContent widget_lineStyleWidth" onclick="WIDGETS.lineGridClicked(event);" src="' + scriptPath +'/lineStyleGrid.png"/>\n\t<div id="widget_lineStyleSelector" class="widget_paneSelector">&nbsp;</div>\n</div>\n');
	}

	function addColorBlock (sel, index) { // Add one column to the color pane, with three blocks, with class names (e.g.) block0a, block0b, and block0c. Corresponding class colors are defined in widget.css.
		var leftEdge = 1.6875*(index);
		sel.append ('\t\t<div class="widget_color_column" style="left:'+leftEdge+'rem;">\n\t\t\t<div class="widget_color_block block'+index+'a"></div>\n\t\t\t<div class="widget_color_block block'+index+'b"></div>\n\t\t\t<div class="widget_color_block block'+index+'c"></div>\n\t\t</div>\n');
	}

	function injectColorPane (widget) {
		widget.append ('<div id = "widget_colorPane" class="widget_pane">\n\t</div>\n\t');
		var pane = $('#widget_colorPane');
		pane.append ('\t<img id="objectColorCheckbox" class="widget_paneCheckbox" onclick="WIDGETS.colorCheckClicked(event);" src="' + scriptPath +'/unchecked.png"> ');
		pane.append ('<img class="widget_colorIcon" src="' + scriptPath +'/objectIcon.png">\t\t');
		pane.append ('\t<img id="textColorCheckbox" class="widget_paneCheckbox" onclick="WIDGETS.labelCheckClicked(event);" src="' + scriptPath +'/unchecked.png"> ');
		pane.append ('<img class="widget_colorIcon" src="' + scriptPath +'/textIcon.png">');
		pane.append ('\t<div id="widget_colorGrid" class="widget_paneBackground" onclick="WIDGETS.colorGridClicked(event);">\n\t</div>\n');
		var grid = $('#widget_colorGrid');
		for (var i = 0; i<9; i++) {
			addColorBlock (grid, i);
		}
		grid.append ('\t<div id="widget_colorSelector" class="widget_paneSelector">&nbsp;</div>\n');
	}

	function injectDismissPane (widget) {
		widget.append ('<div id="widget_dismissPane" class="widget_pane">\n\t<img id="widget_confirmButton" onclick="WIDGETS.confirmStyleModality();" src="' + scriptPath +'/confirm.png"> <img id="widget_cancelButton" onclick="WIDGETS.cancelStyleModality();" src="' + scriptPath +'/cancel.png"\n</div>\n');
	}

	function injectWidget () {
		injectWidgetContainer ($("body"));
		injectWidgetBody ($("#widget_container"));
		var widget=$("#widget");
		injectWidgetControl (widget);
		injectPointPane (widget);
		injectLinePane (widget);
		injectColorPane (widget);
		injectDismissPane (widget);
		$("body").append ('<div style="clear:both;"> </div>\n');
		return widget;
	}

// Widget Support

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

	
// Style Widget Support
	function highlightLineGrid (thickness, style) {
		currentLineThickness = thickness;
		currentLineStyle = style;
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
	}

	function highlightPointGrid (style) {
		currentPointStyle = style;
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
	}

	function highlightColorGrid (column, row) {
		var selStyle = $('#widget_colorSelector')[0].style;
		if (column < 0) {
			selStyle.display = "none";
			check (styleWidget.objectColorBox, false);
			check (styleWidget.textColorBox, false);
			currentColor = -1;
		}
		else { // highlight the choice, and check the object-color box if the text-color box isn't checked
			currentColor = 3*column + row;
			selStyle.top=(1.56*row+0.13) + 'rem';
			selStyle.left=(1.69*column+0.1)+'rem';
			selStyle.display="block";
			styleWidget.defaultColor = {row: row, column: column};
			if (!styleWidget.textColorBox.checked)
				check (styleWidget.objectColorBox, true);
		}
	}

	function preProcessSketch (sketch) {	// Pass null for e to force redrawing the sketch.
		// Prepare all sketch objects to enable widget use, making all selectable and (for visibility widget) showing hidden objects
		// Some sketch objects may already have been pre-processed, so it's a requirement that the proProcessGobj function can be used multiple times on the same gobj without making further changes.
		if (activeWidget && activeWidget.preProcessGobj) {
			sketch.sQuery("*").each (activeWidget.preProcessGobj);
			sketch.isDirty = true;	// Possible code improvement: some widgets dirty the sketch and some don't
		}
	}
	
	function callPreProcess (e, context) {
		preProcessSketch (context.sketch);
		return true;	// propagate the message
	}
	
	function postProcessSketch (sketch) {
		// Return all sketch objects to their proper state, reversing the effects of pre-processing
		if (activeWidget && activeWidget.postProcessGobj) {
			sketch.sQuery("*").each (activeWidget.postProcessGobj);
			sketch.isDirty = true;	// Possible code improvement: some widgets dirty the sketch and some don't
		}
		return true;	// If this is a message handler, propagate the message
	}
	
	function callPostProcess (e, context) {
		postProcessSketch (context.sketch);
		return true;	// propagate the message
	}
	
	function setVisibilityColor (sketch) {
		// Set the visibilityColor to contrast with the background by adjusting each background color value toward the furthest extreme.
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
		visibilityColor = hsColor;
	}
	
// The startPage and stopPage functions handle page changes, either in the same DOM node or between DOM nodes.
// If the container has a .widget_button class, show or hide it as appropriate.
	function startPage (sketchDoc) {
		targetControllerToDoc (sketchDoc);
		var canvas = sketchDoc.canvasNode[0];
		var showButton = (targetNode === canvas) && (theWidget[0].style.display !== 'none');
		var parentNode = canvas.parentNode;
		var buttonNode = $(parentNode).find(".widget_button");
		if (showButton)
			buttonNode.show();
		else
			buttonNode.hide();
	}

	function stopPage (sketchDoc) {	// Clean up extra attributes added to sketch objects, but leave the modal-state flags unchanged as a signal to startPage
		if (activeWidget && sketchDoc.canvasNode[0] === targetNode) { // If the page being stopped is in targetNode, restore its state and deactivate its widget. 
			preserveActiveWidget = activeWidget;
			prevSketchPage = targetSketch().metadata.id;
			activeWidget.deactivate ();
		}
		// Leave targetNode unchanged so that targetControllerToDoc can decide whether or not to reposition the widget.
	}
	
	function parseSketches (raw) {	// Accepts a string: "all", "none", or a comma-delimited list of integers. Returns "all" or "none" unchanged, "none" if raw is empty, "all" if raw is null or undefined, or otherwise an array of the page numbers listed in the string.
		var sketchList, i;
		if (typeof raw !== "string")
			return ["all"];
		if (raw === 'all' || raw === '') 
			return ['all'];
		if (raw === 'none')
			return ["none"];
		sketchList = raw.split (',');
		for (i = 0; i < sketchList.length; i+=1)
			{	sketchList[i] = sketchList[i].trim();}
		return sketchList;
	}
			
	function WidgetPref(theName, thePages, theSketches) {	// construct a WidgetPref to store in the widgetPrefs array
		// Goal: combine this mechanism with the prefs code in document.js, not only for parsing PageArrayPrefType,
		// but to support both mechanisms: the WSP Preferences page in the sketch itself, and the mechanism here,
		// which can be called from a script in the HTML page.
		try {
			if (!theName || theName==="") this.name = "all";
			else this.name = theName.toLowerCase();
			if (this.name != 'style' && this.name != 'visibility' && this.name != "all")
				GSP.createError ("bad arguments to WidgetPref constructor");
			if (thePages)
				this.pages = parsePagePref(thePages);
			else
				this.pages = ["all"];	// the default
			if (theSketches) {
				this.sketches = parseSketches (theSketches);
			}
			else
				this.sketches = ["all"];
		}
		catch (err) {
			throw GSP.createError ("bad arguments to WidgetPref constructor");
    }
	}

	function injectButtonContent (sketchDoc) {	// Find any uninitialized .widget_button element matching this doc id, and initialize the buttons.
		var canvas = sketchDoc.canvasNode[0];
		var container = canvas.parentNode;
		if ($(container).hasClass ("sketch_container")) {
			var rect = canvas.getBoundingClientRect();
			$(container).css("width", rect.width + "px");
		}
		var button = $(container).find(".widget_button");
		if (button.length === 1) {	// There's a single widget button inside the container; set it to target the widget to this sketch.
			var newContent = '<button class="widget_button" onclick="WIDGETS.toggleWidgets(this);">Widgets</button>';
			button.replaceWith (newContent);
		}
	}
	
return {	// public functions and variables

	initWidget: function () {	// Ask for WillChangeCurrentPage and DidChangeCurrentPage events so we can reverse changes we've made to objects in the current page
		$.makeArray($("script[src]")).findIndex (function (aScript) {	// Determine the url to this script so we can locate the images to display
			if (aScript.src && aScript.src.endsWith ('/widgets.js')) {	// find the script element with a src attribute ending with "widgets.js"
				scriptPath = aScript.src.split('?')[0].split('/').slice(0, -1).join('/')+'/';	// This is the full url. Is there any reason to optimize it if the first part of it matches the site url? Probably not.
				return true;	// return true to terminate the findIndex search
			}
			else return false;	// Any error checking needed here? How would we recover? Disable the widgets entirely?
		});
		var canvasNodes = $('.sketch_canvas');
		canvasNodes.on("WillChangeCurrentPage.WSP", function (event, context) {
			stopPage(context.document);
		});
		canvasNodes.on("DidChangeCurrentPage.WSP", function (event, context) {
			startPage(context.document);
		});
		canvasNodes.on ("LoadDocument.WSP", function (event, context) {
			injectButtonContent (context.document);	// If there's a widget button, point it to its sketch
		});
		theWidget = injectWidget ();	// inject the widget code into the html page
		theWidget.tinyDraggable();
		styleWidget.objectColorBox = $('#objectColorCheckbox')[0];	// Can't set these fields till the widget is injected.
		styleWidget.textColorBox = $('#textColorCheckbox')[0];	// They'll get "checked" fields to keep track of their state
	},
	
	showWidgets: function (show, optionalTargetNode) {	// shows or hides the entire widget
		var optionalNode;
		if (optionalTargetNode) {	// if the caller specifies a DOM node, put the widgets in it.
			optionalNode = $(optionalTargetNode);
			var optionalDoc = optionalNode.data("document");
			targetControllerToDoc (optionalDoc);
		}
		if (!targetNode && show)	// Do nothing if there's no targetNode or if this call is aimed at a different sketch
			return;
		if (show) {
			showWidget();
			if (preserveActiveWidget) {
				preserveActiveWidget.activate (targetSketch(), preserveActiveWidget);
				preserveActiveWidget = null;
			}
		}
		else {
			if (activeWidget) {
				preserveActiveWidget = activeWidget;
				prevSketchPage = targetSketch().metadata.id;
				activeWidget.deactivate ();
			}
			hideWidget();
		}
	},

	toggleWidgets: function (element) {	// toggles the visibility of the entire widget, unless the optional target is different from targetNode, in which case we leave the widgets active and just retarget them
		// Side effect: change the appearance of all widget buttons to match visibility of the widget
		var doShow = theWidget.css("display")==="none";
		var sketchNode;
		if (element) {
			sketchNode = $(element.parentNode).find(".sketch_canvas")[0];
		}
		if (sketchNode && sketchNode !== targetNode)
			doShow = true;
		WIDGETS.showWidgets (doShow, sketchNode);
		return doShow;
	},

	confirmStyleModality: function () {
		styleWidget.cancelOnExit = false;
		styleWidget.deactivate();
	},

	cancelStyleModality: function () {
		styleWidget.cancelOnExit = true;
		styleWidget.deactivate();
	},

	toggleStyleModality: function () {
		if (activeWidget === styleWidget)
			styleWidget.deactivate(this);
		else if (targetNode && $(targetNode).data("document"))
			styleWidget.activate(targetSketch(), styleWidget);
	},

	toggleVisibilityModality: function () {
		if (activeWidget === visibilityWidget)
			visibilityWidget.deactivate(visibilityWidget);
		else if (targetNode && $(targetNode).data("document"))
			visibilityWidget.activate(targetSketch(), visibilityWidget);
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
		else if (currentColor < 0) {
			highlightColorGrid (styleWidget.defaultColor.column, styleWidget.defaultColor.row);
		}
	},

	labelCheckClicked: function () {
		var thisChecked = toggleCheck (styleWidget.textColorBox);
		if (!thisChecked && !styleWidget.objectColorBox.checked)
			highlightColorGrid (-1, 0);
		else if (currentColor < 0) {
			highlightColorGrid (styleWidget.defaultColor.column, styleWidget.defaultColor.row);
		}
	},
	
	colorGridClicked: function (e) {
		var zoom = findZoom();
		var x = e.pageX - $('#widget_colorGrid').offset().left;
		var y = e.pageY - $('#widget_colorGrid').offset().top;
		var column = Math.min(8, Math.floor(x/(27.2*zoom)));
		var row = Math.floor(y/(27*zoom));
		highlightColorGrid (column, row);
	},
	
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
	
	setWidgetsPrefs: function (prefArr) { // It may look neater to use a single call with an array containing all the prefs.
		// Example: WIDGETS.setWidgetsPrefs ([{widget: "visibility", pages: "2,4",sketch:"sketchDiv"}, {widget: "styleWidget", pages: "all"}]);
		// As the second of these two prefs shows, it's ok to omit the id to make the pref apply to all sketches
		if (prefArr.constructor === Array)
			for (var i = 0; i < prefArr.length; i++) {
				var pref = prefArr[i];
				widgetPrefs.push (new WidgetPref (pref.widget, pref.pages, pref.sketches));
			}
	}

	};	// return
})();


var PAGENUM = (function() {	// define the PAGENUM namespace, for the code that creates and handles page number controls
	// private variables and functions	
	// The init() function replaces this flag: '<span class = "page_buttons"></span>' with the actual page button control elements for the sketch in the same container as the page_buttons span.
	// If the sketch has only a single page, no buttons appear.
	// If a new sketch is loaded into this sketch_canvas, the LoadDocument.WSP handler will reset the page buttons.
	// If the document switches to a new page, the DidChangeCurrentPage.WSP handler resets the page # and the enabled appearance of the arrows
	
	function getCtl (sketchNode) {
		return $(sketchNode).parent().find(".page_buttons");
	}
	
	function getDoc (sketchNode) {
		return $(sketchNode).data("document");
	}
		
	function injectButtonElements (sketchDoc) {	// Find any uninitialized .page_buttons element with html matching this doc id, and initialize the buttons.
		var sketchNode = sketchDoc.canvasNode[0];
		var control = getCtl (sketchNode);
		if (control.length !== 1)
			return;		//	Insert error handler here if control.length > 1.
		if (sketchDoc.docSpec.pages.length < 2) {
			control.removeClass ("page_buttonsActive");			// One-page sketch, so no buttons.
			control.empty();
		}
		else {
			// Omit pageNum here; the pageNum will be set by the DidChangeCurrentPage handler.
			var newContent = '<span class="page_btn page_prevBtn">&nbsp;</span><div style="display:inline-block; position:relative;"><span class="page_num"></span></div><span class="page_btn page_nextBtn">&nbsp;</span></span>';
			control.html (newContent);
			control.addClass ("page_buttonsActive");
			control.find(".page_num").on ("click", {node: sketchNode}, function (e) {
				showPopup (e.data.node);
				return false;	// eat any clicks on the page number
			});
			control.find(".page_prevBtn").on ("click", {node: sketchNode}, function (e) {
				goto (e.data.node, -1, true);
				return false;	// eat clicks
			});
			control.find(".page_nextBtn").on ("click", {node: sketchNode}, function (e) {
				goto (e.data.node, +1, true);
				return false;	// eat clicks
			});
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
	
	function showPageNum (doc) {	// Set the page number in the control, and the opacity of the buttons
		var pageNum = doc.focusPage.metadata.id;
		var numPages = doc.docSpec.pages.length;
		var pageNumCtl = $(doc.canvasNode).parent().find(".page_buttons");
		if (pageNumCtl) {
			pageNumCtl.find (".page_num").html ("&nbsp;" + pageNum + "&nbsp;");
			pageNumCtl.find (".page_nextBtn").css ("opacity", pageNum < numPages ? "1" : "0.4");
			pageNumCtl.find (".page_prevBtn").css ("opacity", pageNum > 1 ? "1" : "0.4");		
			highlightPopup (doc);
		}
	}

	function init () {	// The buttons cannot be created until the sketch is loaded and we know whether it contains more than a single page.
		var canvasNodes = $('.sketch_canvas');
		canvasNodes.on ("LoadDocument.WSP", function (event, context) {
			injectButtonElements (context.document);
		});
		canvasNodes.on ("DidChangeCurrentPage.WSP", function (event, context) {
			showPageNum (context.document);
		});
	}
		
	function goto (sketchNode, pageNum, relative) {
		var doc = getDoc (sketchNode);
		if (relative)
			pageNum = +doc.focusPage.metadata.id + pageNum;
		if (pageNum > 0 && pageNum <= doc.docSpec.pages.length) {
			doc.switchPage (pageNum);	// the page control, and the popup (if active) will be updated by a DidChangeCurrentPage message 
		}
	}

	function showPopup (sketchNode) { // Put up a modal window above the page #
		
			function makeSpan (pageNum) {
				return '<span class="page_popupNum">&nbsp;' + pageNum + '&nbsp;</span>';
			}
	
		var pageNumCtl = getCtl (sketchNode);
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
			goto (e.data.node, this.innerText.trim());
		});
		pageNumCtl.find(".page_popupNum").on ("click", {node: sketchNode}, function (e) {
			goto (e.data.node, this.innerText.trim());
			hidePopup (e.data.node);
			return false;	// eat any clicks on the numbers
		});
		$(window).one ("click", {node: sketchNode}, function (e) {
			if (!$(e.target).hasClass(".page_num")) {
				hidePopup (e.data.node);
				return false;
			}
		});
		$(window).off ("keydown");	// turn off any already-active keydown handler
		$(window).on ("keydown", {node: sketchNode}, function (e) {
			var key = e.which;
			if (key >= 37 && key <= 40) {	// eat arrow keys, ignore others
				if (key <= 38) goto (e.data.node, -1, true);
				else goto (e.data.node, +1, true);
			return false;
			}
		});
	}
	
	function hidePopup (sketchNode) {
		// Remove the handlers for this popup.
		var p = getCtl (sketchNode);
		p.find(".page_popupNum").off ("mouseover");
		p.find(".page_popupNum").off ("click");
		p.find('.page_popup').remove();
		$(window).off ("keydown");
		}
		
	return {	// public functions and variables
			
		initPageControls: function () {
			init ();
		},
		
	};	// return
})();

$(function() {
	WIDGETS.initWidget();
	PAGENUM.initPageControls ();
});


