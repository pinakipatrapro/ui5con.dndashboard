sap.ui.define([
	"ui5-cc-dndashboard/library", 
	"sap/ui/core/Control", 
	"ui5-cc-dndashboard/DashboardTileRenderer",
	"sap/ui/dom/includeStylesheet"
], function (library, Control, DashboardTileRenderer,includeStylesheet) {
	"use strict";


	includeStylesheet(sap.ui.require.toUrl("gridstack/dist/gridstack.min.css"));

	var DashboardTile = Control.extend("ui5-cc-dndashboard.DashboardTile",  {
		metadata: {
			library: "ui5-cc-dndashboard",
			properties: {
				editable: {
					type: "boolean",
					defaultValue: false
				},
				height: {
					type: "string",
					defaultValue: "1"
				},
				width: {
					type: "string",
					defaultValue: "1"
				},
				posx: {
					type: "string",
					defaultValue: 0
				},
				posy: {
					type: "string",
					defaultValue: 0
				}
			},
			defaultAggregation: "content",
			aggregations:{
				content: {
					type: "sap.ui.core.Control",
					multiple: false,
					visibility: "public"
				}
			},
			events: {
				press: {}
			}
		},
		renderer: DashboardTileRenderer,
		onAfterRendering: function() {

		},
		setWidth: function (value) {
			this.setProperty("width", value, true);
		},
		setHeight: function (value) {
			this.setProperty("height", value, true);
		},
		setPosx: function (value) {
			this.setProperty("posx", value, true);
		},
		setPosy: function (value) {
			this.setProperty("posy", value, true);
		},
	});
	return DashboardTile;

});
