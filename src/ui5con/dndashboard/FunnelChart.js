sap.ui.define([
	"ui5con/dndashboard/library", 
	"sap/ui/core/Control", 
	"ui5con/dndashboard/FunnelChartRenderer",
	"funnel-graph-js/dist/js/funnel-graph.min.js",
	"sap/ui/dom/includeStylesheet"
], function (library, Control,FunnelChartRenderer ,FunnelGraph,includeStylesheet) {
	"use strict";



	includeStylesheet(sap.ui.require.toUrl("funnel-graph-js/dist/css/main.min.css"));
	includeStylesheet(sap.ui.require.toUrl("funnel-graph-js/dist/css/theme.min.css"));

	var FunnelChart = Control.extend("ui5con.dndashboard.FunnelChart",  {
		metadata: {
			library: "ui5con.dndashboard",
			properties: {
				direction: {
					type: "string",
					defaultValue: "vertical"
				},
				data: {
					type: "object",
					defaultValue: null
				},
				dimension: {
					type: "object",
					defaultValue: null
				},
				measure: {
					type: "object",
					defaultValue: null
				},
				measureColour: {
					type: "object",
					defaultValue: null
				}
			},
			events: {
				press: {}
			}
		},
		renderer: FunnelChartRenderer,
		onAfterRendering: function() {

			var dimension = this.getDimension()
			var measure = this.getMeasure()
			var data = this.getData()

			var data  = data.sort((a,b)=>{
				return b[measure[0]]-a[measure[0]]
			})
			var dataFormatted = {
				values:[],
				colors: this.getMeasureColour().map(e=>{
					return [`${e}05`,e]
				}),
				labels:data.map(e=>{return e[dimension[0]]}).filter((v, i, a) => a.indexOf(v) === i),
				subLabels:data.map(e=>{return e[dimension[1]]}).filter((v, i, a) => a.indexOf(v) === i)
			};

			dataFormatted.labels.forEach(e=>{
				var aValues = []
				dataFormatted.subLabels.forEach(f=>{
					aValues.push(data.filter(g=>{
						return g[dimension[0]]===e && g[dimension[1]]===f
					})[0][measure[0]])
				})
				dataFormatted.values.push(aValues)
			})


			console.log(dataFormatted)
			var graph = new FunnelGraph({
				container:  `#${this.getId()}`,
				gradientDirection: this.getDirection(),
				data: dataFormatted,
				displayPercent: true,
				direction: this.getDirection()
			});
			setTimeout(()=>{
				graph.draw();
			},0)
			
		}
	});
	return FunnelChart;

});
