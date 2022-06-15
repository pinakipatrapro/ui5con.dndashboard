/*!
 * ${copyright}
 */

// Provides control ui5-cc-dndashboard.Example.
sap.ui.define([
	"./library", 
	"sap/ui/core/Control", 
	"./ExampleRenderer"
], function (library, Control, ExampleRenderer) {
	"use strict";

	// refer to library types
	var ExampleColor = library.ExampleColor;

	/**
	 * Constructor for a new <code>ui5-cc-dndashboard.Example</code> control.
	 *
	 * @param {string} [sId] id for the new control, generated automatically if no id is given
	 * @param {object} [mSettings] initial settings for the new control
	 *
	 * @class
	 * Some class description goes here.
	 * @extends sap.ui.core.Control
	 *
	 * @author Pinaki Patra
	 * @version ${version}
	 *
	 * @constructor
	 * @public
	 * @alias ui5-cc-dndashboard.Example
	 */
	var Example = Control.extend("ui5-cc-dndashboard.Example", /** @lends ui5-cc-dndashboard.Example.prototype */ {
		metadata: {
			library: "ui5-cc-dndashboard",
			properties: {
				/**
				 * The text to display.
				 */
				text: {
					type: "string",
					group: "Data",
					defaultValue: null
				},
				/**
				 * The color to use (default to "Default" color).
				 */
				color: {
					type: "ui5-cc-dndashboard.ExampleColor",
					group: "Appearance",
					defaultValue: ExampleColor.Default
				}
			},
			events: {
				/**
				 * Event is fired when the user clicks the control.
				 */
				press: {}
			}
		},
		renderer: ExampleRenderer,
    onclick: function() {
      this.firePress();
    }
	});
	return Example;

});
