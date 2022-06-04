sap.ui.define([
	"ui5con/dndashboard/library",
	"ui5con/dndashboard/Dashboard",
	"sap/m/Page",
	"sap/m/App"
], function(library, Dashboard,Page,App) {
	"use strict";

	var DashboardColor = library.ExampleColor;
	let dashboard = new Dashboard({
		text: "Dashboard",
		color: DashboardColor.Highlight
	});
	dashboard.addStyleClass('sapUiLargeMargin')
	let page = new Page({
		content : dashboard,
		title : "Test Page for ui5con.dndashboard.Dashboard",
		height: "80vh"
	});
	
	new App({
		pages : page
	}).placeAt("content");
	

});
