sap.ui.define([
	"ui5con/dndashboard/library", 
	"sap/ui/core/Control", 
	"ui5con/dndashboard/DashboardTileRenderer",
	"sap/ui/dom/includeStylesheet"
], function (library, Control, DashboardTileRenderer,includeStylesheet) {
	"use strict";


	includeStylesheet(sap.ui.require.toUrl("gridstack/dist/gridstack.min.css"));

	var DashboardTile = Control.extend("ui5con.dndashboard.DashboardTile", /** @lends ui5con.dndashboard.Dashboard.prototype */ {
		metadata: {
			library: "ui5con.dndashboard",
			properties: {
				editable: {
					type: "boolean",
					defaultValue: false
				}
			},
			events: {
				press: {}
			}
		},
		renderer: DashboardTileRenderer,
		onAfterRendering: function() {

		}
	});
	return DashboardTile;

});
