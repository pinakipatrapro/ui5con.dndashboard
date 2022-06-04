sap.ui.define([
	"ui5con/dndashboard/library",
	"ui5con/dndashboard/Dashboard",
	"ui5con/dndashboard/DashboardTile",
	"sap/m/Page",
	"sap/m/App"
], function(library, Dashboard,DashboardTile,Page,App) {
	"use strict";

	var DashboardColor = library.ExampleColor;
	let dashboard = new Dashboard({
		text: "Dashboard",
		color: DashboardColor.Highlight,
		tiles : [
			new DashboardTile(),
			new DashboardTile(),
			new DashboardTile(),
			new DashboardTile({text:'123'})
		]
	});
	dashboard.addStyleClass('sapUiLargeMargin')
	let page = new Page({
		content : dashboard,
		title : "Test Page for ui5con.dndashboard.Dashboard"
	});
	
	new App({
		pages : page
	}).placeAt("content");
	

});
