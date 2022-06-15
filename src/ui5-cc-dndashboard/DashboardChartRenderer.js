
sap.ui.define([
	"sap/ui/core/Core",
	"ui5-cc-dndashboard/library"
], function (Core, library) {
	"use strict";


	var DashboardTileElementsRenderer = {
		apiVersion: 2 // usage of DOM Patcher
	};

	DashboardTileElementsRenderer.render = function (rm, control) {

		rm.openStart("div",  control);
		rm.style("height","95%");
		rm.style("width","100%");
		rm.openEnd( );
		rm.close("div");

	};

	return DashboardTileElementsRenderer;

});
