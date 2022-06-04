sap.ui.define([
	"ui5con/dndashboard/library", 
	"sap/ui/core/Control", 
	"ui5con/dndashboard/DashboardRenderer",
	"gridstack/dist/gridstack-h5",
	"sap/ui/dom/includeStylesheet"
], function (library, Control, DashboardRenderer,GridStack,includeStylesheet) {
	"use strict";


	includeStylesheet(sap.ui.require.toUrl("gridstack/dist/gridstack.min.css"));

	var Dashboard = Control.extend("ui5con.dndashboard.Dashboard", /** @lends ui5con.dndashboard.Dashboard.prototype */ {
		metadata: {
			library: "ui5con.dndashboard",
			properties: {

			},
			aggregations:{
				tiles: {
					type: "sap.ui.core.Control",
					multiple: true,
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
