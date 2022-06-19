/*!
 * ${copyright}
 */

// Provides control ui5-cc-dndashboard.Dashboard.
sap.ui.define([
	"ui5-cc-dndashboard/library", 
	"sap/ui/core/Control", 
	"ui5-cc-dndashboard/DashboardRenderer",
	"gridstack/dist/gridstack-h5",
	"sap/ui/dom/includeStylesheet"
], function (library, Control, DashboardRenderer,GridStack,includeStylesheet) {
	"use strict";


	includeStylesheet(sap.ui.require.toUrl("gridstack/dist/gridstack.min.css"));
	includeStylesheet(sap.ui.require.toUrl(`ui5-cc-dndashboard/Dashboard.css`));
	/**
	 * Constructor for a new <code>ui5con.dashboard.Example</code> control.
	 *
	 * @param {string} [sId] id for the new control, generated automatically if no id is given
	 * @param {object} [mSettings] initial settings for the new control
	 *
	 * @class
	 * Create an instance of an Drag and drop Dasboard
	 * @extends sap.ui.core.Control
	 *
	 * @author Pinaki Patra
	 * @version ${version}
	 *
	 * @constructor
	 * @public
	 * @alias ui5-cc-dndashboard.Dashboard
	 */
	var Dashboard = Control.extend("ui5-cc-dndashboard.Dashboard",  {
		metadata: {
			library: "ui5-cc-dndashboard",
			properties: {
				editable: {
					type: "boolean",
					defaultValue: false
				},
				float: {
					type: "boolean",
					defaultValue: true
				},
				height: {
					type: "string",
					defaultValue: "80vh"
				},
			},
			defaultAggregation: "tiles",
			aggregations:{
				tiles: {
					type: "ui5-cc-dndashboard.DashboardTile",
					multiple: true,
					visibility: "public"
				},
				header: {
					type: "sap.m.Toolbar",
					multiple: false,
					visibility: "public"
				}
			},
			events: {
				press: {}
			}
		},
		renderer: DashboardRenderer,
    onAfterRendering: function() {
		var grid = GridStack.init({
			disableResize :!this.getEditable(),
			disableDrag  : !this.getEditable(),
			cellHeight:'5rem',
			float : this.getFloat(),
			minRow : 4,
			float : true,
			margin : 5,
		});
		grid.on('resizestop', function(event, items) {
			sap.ui.getCore().byId(items.getAttribute('id')).setWidth(items.getAttribute('gs-w'));
			sap.ui.getCore().byId(items.getAttribute('id')).setHeight(items.getAttribute('gs-h'));

		});
		grid.on('dragstop', function(event, items) {
			sap.ui.getCore().byId(items.getAttribute('id')).setPosx(items.getAttribute('gs-x'));
			sap.ui.getCore().byId(items.getAttribute('id')).setPosy(items.getAttribute('gs-y'));

		});
    }
	});
	return Dashboard;

});
