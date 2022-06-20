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
], function (library, Control, DashboardRenderer, GridStack, includeStylesheet) {
	"use strict";


	includeStylesheet(sap.ui.require.toUrl("gridstack/dist/gridstack.min.css"));
	/**
	 * Constructor for a new <code>Dashboard</code> control.
	 *<h3>Overview</h3>
	 * The ui5-cc-dndashboard.Dashboard is a container control that holds the dashboard .
	 * The Dashboard accepts aggregation <code>tiles</code> of type  <code>ui5-cc-dndashboard.DashboardTile</code> which is the draggable component.
	 * @param {string} [sId] id for the new control, generated automatically if no id is given
	 * @param {object} [mSettings] initial settings for the new control
	 * @param {boolean} mSettings.editable If dashboard layout is editable.If true enables user to drag and drop tiles.
	 * @param  {boolean} mSettings.float  If set to true, the DashboardTiles will auto arrange irrespective of the dropped location
	 * @param {CSS} mSettings.height Dashboard container height
	 * @param {ui5-cc-dndashboard.DashboardTile} mSettings.tiles Default aggregation dashboard tiles
	 * @param {sap.m.Toolbar} mSettings.header Header aggregation
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
	var Dashboard = Control.extend("ui5-cc-dndashboard.Dashboard", {
		metadata: {
			library: "ui5-cc-dndashboard",
			properties: {
				/**
				 * @param mSettings.editable If dashboard layout is editable.Enables user to drag and drop tiles.
				 * 
				 */
				editable: {
					type: "boolean",
					defaultValue: false
				},
				/**
				 * If set to true, the DashboardTiles will auto arrange irrespective of the dropped location
				 */
				float: {
					type: "boolean",
					defaultValue: true
				},
				/**
				 * Dashboard container height
				 */
				height: {
					type: "string",
					defaultValue: "80vh"
				},
			},
			defaultAggregation: "tiles",
			aggregations: {
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
		onAfterRendering: function () {
			var grid = GridStack.init({
				disableResize: !this.getEditable(),
				disableDrag: !this.getEditable(),
				cellHeight: '5rem',
				float: this.getFloat(),
				minRow: 4,
				float: true,
				margin: 5,
			});
			grid.on('resizestop', function (event, items) {
				sap.ui.getCore().byId(items.getAttribute('id')).setWidth(items.getAttribute('gs-w'));
				sap.ui.getCore().byId(items.getAttribute('id')).setHeight(items.getAttribute('gs-h'));

			});
			grid.on('dragstop', function (event, items) {
				sap.ui.getCore().byId(items.getAttribute('id')).setPosx(items.getAttribute('gs-x'));
				sap.ui.getCore().byId(items.getAttribute('id')).setPosy(items.getAttribute('gs-y'));

			});
		}
	});
	return Dashboard;

});
