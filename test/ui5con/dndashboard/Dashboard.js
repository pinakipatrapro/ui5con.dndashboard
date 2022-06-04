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
		editable: true,
		color: DashboardColor.Highlight,
		header : new sap.m.Toolbar({
			content : [
				new sap.m.Title({text:"My New Dashboard"}),
				new sap.m.ToolbarSpacer(),
				new sap.m.Button({
					text:"Edit",
					press : (oEvent)=>{
						oEvent.getSource().getParent().getParent().setEditable(!oEvent.getSource().getParent().getParent().getEditable())
					}
				})
			]
		}),
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
