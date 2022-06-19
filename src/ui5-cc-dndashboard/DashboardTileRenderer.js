
sap.ui.define([
	"sap/ui/core/Core",
	"ui5-cc-dndashboard/library"
], function (Core, library) {
	"use strict";


	var DashboardTileRenderer = {
		apiVersion: 2 // usage of DOM Patcher
	};

	DashboardTileRenderer.render = function (rm, control) {

		rm.openStart("div", control);
		rm.class("grid-stack-item");
		//Set Positional Parameters
		rm.attr("gs-x", control.getPosx());
		rm.attr("gs-y", control.getPosy());
		rm.attr("gs-w", control.getWidth());
		rm.attr("gs-h", control.getHeight());

		if(control.getEditable()){
			rm.style("border", "2px dashed #495767");
		}
		rm.openEnd( );

			rm.openStart("div");
			rm.class("grid-stack-item-content")
			rm.openEnd( );
				rm.renderControl(control.getAggregation('content'))
			rm.close("div");
		rm.close("div");

	};

	return DashboardTileRenderer;

});
