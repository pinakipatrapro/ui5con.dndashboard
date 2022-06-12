sap.ui.define([
	"ui5con/dndashboard/library",
	"ui5con/dndashboard/Dashboard",
	"ui5con/dndashboard/DashboardTile",
	"ui5con/dndashboard/DashboardChart",
	"ui5con/dndashboard/FunnelChart",
	"sap/m/Page",
	"sap/m/App"
], function(library, Dashboard,DashboardTile,DashboardChart,FunnelChart,Page,App) {
	"use strict";

	var model = new sap.ui.model.json.JSONModel('./test-resources/ui5con/dndashboard//helper/Dashboard.json');
	var factoryFunction = function(sId,oContext){
		if(oContext.getProperty("cardType")==='dndChart'){
			return new DashboardTile({
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
		} else if(oContext.getProperty("cardType")==='image'){
			return new DashboardTile({
				"posx":"{posx}",
				"posy":"{posy}",
				"width": "{width}",
				"height":"{height}",
				"content": new sap.m.Image({
					height:"4rem",
					src:"{url}"
				})
			})
		}else if(oContext.getProperty("cardType")==='select'){
			return new DashboardTile({
				"posx":"{posx}",
				"posy":"{posy}",
				"width": "{width}",
				"height":"{height}",
				"content": new sap.m.VBox({
					items : [
						new sap.m.Label({
							text:"{text}"
						}),
						new sap.m.ComboBox({
							width:"100%",
							items : {
								path:"items",
								template: new sap.ui.core.Item({
									text:"{name}"
								})
							}
						})
					]
				})
			})
		}else if(oContext.getProperty("cardType")==='list'){
			return new DashboardTile({
				"posx":"{posx}",
				"posy":"{posy}",
				"width": "{width}",
				"height":"{height}",
				"content": new sap.m.List({
					mode:"MultiSelect",
					items : {
						path:"items",
						template: new sap.m.StandardListItem({
							title:"{name}"
						})
					}
				})
			})
		}else if(oContext.getProperty("cardType")==='funnel'){
			return new DashboardTile({
				"posx":"{posx}",
				"posy":"{posy}",
				"width": "{width}",
				"height":"{height}",
				"content": new FunnelChart({
					measure : "{measure}",
					dimension : "{dimension}",
					data : "{data}",
					measureColour : "{measureColour}"
				})
			})
		}
	}
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
			factory: factoryFunction
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
