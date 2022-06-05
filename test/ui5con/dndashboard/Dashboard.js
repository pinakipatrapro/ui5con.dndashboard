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
					title: "{title}",
					headerFontSize : "{headerFontSize}",
					showULTitle : "{showULTitle}",
					infoIcon : "{infoIcon}",
					infoIconColor : "{infoIconColor}",
					infoText:"{infoText}",
					infoUOM : "{infoUOM}",
					size: "{size}",
					chartType: "{chartType}",
					cardType: "{cardType}",
					info: "{info}",
					mesL:"{mesL}",
					mesR:"{mesR}",
					labL:"{labL}",
					labR:"{labR}",
					background : "{background}",
					darkMode: "{darkMode}",
					fitToParent : "{fitToParent}",
					radialPerc: "{radialPerc}",
					radialColor: "{radialColor}",
					radialSummaryBase : "{radialSummaryBase}",
					radialSummaryValue : "{radialSummaryValue}",
					measureBlock : "{measureBlock}",
					progressVisible : "{progressVisible}",
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
					measureChartType : "{measureChartType}",
					borderColor : "{borderColor}",
					stacked : "{stacked}",
					enableFilledLine : "{enableFilledLine}",
					cutOutPercentage : "{cutOutPercentage}",
					labels : "{labels}",
					enableAxisLabels :"{enableAxisLabels}",
					label: "{label}",
					scatterLabel : "{scatterLabel}",
					zoomEnabled : "{zoomEnabled}",
					draggable : "{draggable}",
					zoomDirection: "{zoomDirection}",
					radius : "{radius}",
					sizeInPerc : "{sizeInPerc}",
					smartNumberFormat : "{smartNumberFormat}",
					xAxisUOM : "{xAxisUOM}",
					yAxisUOM : "{yAxisUOM}",
					showDataPoints : "{showDataPoints}",
					dataPointColor : "{dataPointColor}",
					measureYAxis : "{measureYAxis}",
					y2AxisUOM : "{y2AxisUOM}",
					y2AxisLabel : "{y2AxisLabel}",
					borderRadius:"{borderRadius}"
            
				})
			})
		}
	});
	dashboard.addStyleClass('sapUiSmallMargin')
	let page = new Page({
		content : dashboard,
		title : "Test Page for ui5con.dndashboard.Dashboard"
	});
	page.addStyleClass('sapUiSizeCompact')
	page.setModel(model);
	
	new App({
		pages : page
	}).placeAt("content");
	

});
