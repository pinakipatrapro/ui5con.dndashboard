sap.ui.define([
	"ui5-cc-dndashboard/library",
	"ui5-cc-dndashboard/Dashboard",
	"ui5-cc-dndashboard/DashboardTile",
	"ui5-cc-dndashboard/DashboardChart",
	"ui5-cc-dndashboard/FunnelChart",
	"sap/m/Page",
	"sap/m/App"
], function(library, Dashboard,DashboardTile,DashboardChart,FunnelChart,Page,App) {
	"use strict";

	var model = new sap.ui.model.json.JSONModel('./test-resources/ui5-cc-dndashboard//helper/Dashboard.json');
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
		} else if(oContext.getProperty("cardType")==='button'){
			return new DashboardTile({
				"posx":"{posx}",
				"posy":"{posy}",
				"width": "{width}",
				"height":"{height}",
				"content": new sap.m.Button({
					text:"{text}",
					type:"Transparent",
					press : function(){
						var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
						'#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
						'#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
						'#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
						'#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
						'#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
						'#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
						'#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
						'#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
						'#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
						const shuffled = colorArray.sort(() => 0.5 - Math.random());
						let selected = shuffled.slice(0, 5);
						sap.ui.getCore().byId('__title0').getModel().oData.tiles.forEach(e=>{
						e.measureColour =selected
						})
						sap.ui.getCore().byId('__title0').getModel().updateBindings()
					}
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
				new sap.m.Title({text:"Test Page for ui5-cc-dndashboard.Dashboard"}),
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
