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
		editable: false,
		height:"80vh",
		header : new sap.m.Toolbar({
			content : [
				new sap.m.Title({text:"My New Dashboard"}),
				new sap.m.ToolbarSpacer(),
				new sap.m.Button({
					text:"Toggle Edit",
					icon:"sap-icon://edit",
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
					title: "{title}",
					chartType: "{chartType}",
					darkMode: sap.ui.getCore().getConfiguration().getTheme().indexOf('dark')>0?true:false,
					chartType : "{chartType}",
					measure : "{measure}",
					dimension : "{dimension}",
					data : "{data}",
					measureColour : "{measureColour}",
					xGrid : "{xGrid}",
					yGrid : "{yGrid}",
					xAxisLabel:"{xAxisLabel}",
					yAxisLabel:"{yAxisLabel}",
					showLegend : "{showLegend}",
					legendPosition : "{legendPosition}",
					enableFilledLine : "{enableFilledLine}",
					enableAxisLabels :"{enableAxisLabels}",
					label: "{label}",
					scatterLabel : "{scatterLabel}",
					smartNumberFormat : "{smartNumberFormat}",
					xAxisUOM : "{xAxisUOM}",
					yAxisUOM : "{yAxisUOM}",
					showDataPoints : "{showDataPoints}",
					dataPointColor : "{dataPointColor}",
					y2AxisUOM : "{y2AxisUOM}",
					y2AxisLabel : "{y2AxisLabel}",
					stacked : "{stacked}"
            
				})
			})
		}
	});
	dashboard.addStyleClass('sapUiSmallMargin')
	let page = new Page({
		content : dashboard,
		customHeader : new sap.m.Toolbar({
			content : [
				new sap.m.Title({text:"Test Page for ui5con.dndashboard.Dashboard"}),
				new sap.m.ToolbarSpacer()
			]
		})
	});
	page.addStyleClass('sapUiSizeCompact')
	page.setModel(model);
	
	new App({
		pages : page
	}).placeAt("content");
	

});
