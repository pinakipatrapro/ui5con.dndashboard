sap.ui.define([
	"ui5con/dndashboard/library",
	"ui5con/dndashboard/Dashboard",
	"ui5con/dndashboard/DashboardTile",
	"sap/m/Page",
	"sap/m/App"
], function(library, Dashboard,DashboardTile,Page,App) {
	"use strict";

	var model = new sap.ui.model.json.JSONModel('./test-resources/ui5con/dndashboard//helper/Dashboard.json');
	var DashboardColor = library.ExampleColor;
	let dashboard = new Dashboard({
		editable: true,
		height:"90rem",
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
		tiles : {
			path:"/tiles",
			template: new DashboardTile({
				"posx":"{posx}",
				"posy":"{posy}",
				"width": "{width}",
				"height":"{height}"
			})
		}
	});
	dashboard.addStyleClass('sapUiLargeMargin')
	let page = new Page({
		content : dashboard,
		title : "Test Page for ui5con.dndashboard.Dashboard"
	});

	page.setModel(model);
	
	new App({
		pages : page
	}).placeAt("content");
	

});
