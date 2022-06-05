sap.ui.define([
	"ui5con/dndashboard/library",
	"ui5con/dndashboard/Dashboard",
	"ui5con/dndashboard/DashboardTile",
	"ui5con/dndashboard/DashboardChart",
	"sap/m/Page",
	"sap/m/App"
], function(library, Dashboard,DashboardTile,DashboardChart,Page,App) {
	"use strict";

	var model = new sap.ui.model.json.JSONModel('./test-resources/ui5con/dndashboard//helper/Dashboard.json');
	var DashboardColor = library.ExampleColor;
	let dashboard = new Dashboard({
		editable: true,
		height:"80vh",
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
				"height":"{height}",
				"content": new DashboardChart({
					"title": "Radar Bar Chart V2",
					"cardType": "chart",
					"zoomEnabled": false,
					"chartType": "barChart",
					"size": "5x5",
					"xGrid": true,
					"darkMode": true,
					"showLegend": true,
					"legendPosition": "bottom",
					"background": "white",
					"renderBare": true,
					"enableFilledLine": false,
					"dataPointColor": "teal",
					"measureColour": [
						"#0088FEAB",
						"#00C49FAB",
						"#FFBB28AB",
						"#FF8042AB"
					],
					"showDataPoints": true,
					"smartNumberFormat": true,
					"measure": [
						"Cases",
						"Recovered"
					],
					"dimension": [
						"Country"
					],
					"data": [
						{
							"Country": "China",
							"Recovered": 82,
							"Cases": 73
						},
						{
							"Country": "India",
							"Recovered": 56,
							"Cases": 60
						},
						{
							"Country": "USA",
							"Recovered": 165,
							"Cases": 70
						},
						{
							"Country": "Brazil",
							"Recovered": 78,
							"Cases": 86
						},
						{
							"Country": "Italy",
							"Recovered": 56,
							"Cases": 65
						}
					]
            
				})
			})
		}
	});
	dashboard.addStyleClass('sapUiSmallMargin')
	let page = new Page({
		content : dashboard,
		title : "Test Page for ui5con.dndashboard.Dashboard"
	});

	page.setModel(model);
	
	new App({
		pages : page
	}).placeAt("content");
	

});
