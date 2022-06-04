/*!
 * ${copyright}
 */

// Provides control ui5con.dndashboard.Dashboard.
sap.ui.define([
	"ui5con/dndashboard/library", 
	"sap/ui/core/Control", 
	"ui5con/dndashboard/DashboardRenderer",
	"gridstack/dist/gridstack-h5",
	"sap/ui/dom/includeStylesheet"
], function (library, Control, DashboardRenderer,GridStack,includeStylesheet) {
	"use strict";

	// refer to library types
	var DashboardColor = library.ExampleColor;
	includeStylesheet(sap.ui.require.toUrl("gridstack/dist/gridstack.min.css"));
	/**
	 * Constructor for a new <code>ui5con.dndashboard.Dashboard</code> control.
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
	 * @alias ui5con.dndashboard.Dashboard
	 */
	var Dashboard = Control.extend("ui5con.dndashboard.Dashboard", /** @lends ui5con.dndashboard.Dashboard.prototype */ {
		metadata: {
			library: "ui5con.dndashboard",
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
					type: "ui5con.dndashboard.DashboardColor",
					group: "Appearance",
					defaultValue: DashboardColor.Default
				}
			},
			events: {
				/**
				 * Event is fired when the user clicks the control.
				 */
				press: {}
			}
		},
		renderer: DashboardRenderer,
    onAfterRendering: function() {
		var grid = GridStack.init({
			// disableResize :!this.getEditable(),
			// disableDrag  : !this.getEditable(),
			cellHeight:'10rem',
			// float : this.getFloat(),
			minRow : 3,
			float : true
			// margin : 10,
		});
    }
	});
	return Dashboard;

});
