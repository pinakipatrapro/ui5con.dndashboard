
sap.ui.define([
	"sap/ui/core/Core",
	"ui5con/dndashboard/library"
], function (Core, library) {
	"use strict";


	var DashboardTileRenderer = {
		apiVersion: 2 // usage of DOM Patcher
	};

	DashboardTileRenderer.render = function (rm, control) {

		rm.openStart("div", control);
		rm.class("grid-stack-item");
		if(control.getEditable()){
			rm.class('dndashboardTileEditable')
		}
		rm.openEnd( );

			rm.openStart("div");
			rm.class("grid-stack-item-content")
			rm.openEnd( );
				rm.renderControl(new sap.m.Button())
			rm.close("div");
		rm.close("div");

	};

	return DashboardTileRenderer;

});
