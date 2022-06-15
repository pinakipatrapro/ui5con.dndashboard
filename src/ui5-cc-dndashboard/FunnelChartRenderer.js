
sap.ui.define([
	"sap/ui/core/Core",
	"ui5-cc-dndashboard/library"
], function (Core, library) {
	"use strict";


	var FunnelChartRenderer = {
		apiVersion: 2 // usage of DOM Patcher
	};

	FunnelChartRenderer.render = function (rm, control) {

		rm.openStart("div",  control);
		rm.style("height","95%");
		rm.style("width","100%");
		rm.style("display","flex");
		rm.style("padding",".5rem");
		rm.openEnd( );
		rm.close("div");

	};

	return FunnelChartRenderer;

});
