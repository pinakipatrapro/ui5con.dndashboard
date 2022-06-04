sap.ui.define([
	"ui5con/dndashboard/library", 
	"sap/ui/core/Control", 
	"ui5con/dndashboard/DashboardRenderer",
	"gridstack/dist/gridstack-h5",
	"sap/ui/dom/includeStylesheet"
], function (library, Control, DashboardRenderer,GridStack,includeStylesheet) {
	"use strict";


	includeStylesheet(sap.ui.require.toUrl("gridstack/dist/gridstack.min.css"));

	var Dashboard = Control.extend("ui5con.dndashboard.Dashboard",  {
		metadata: {
			library: "ui5con.dndashboard",
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
			aggregations:{
				tiles: {
					type: "ui5con.dndashboard.DashboardTile",
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
