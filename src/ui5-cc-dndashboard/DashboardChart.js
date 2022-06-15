sap.ui.define([
	"ui5-cc-dndashboard/library", 
	"sap/ui/core/Control", 
	"ui5-cc-dndashboard/DashboardChartRenderer",
	"ui5-cc-dndashboard/toastui/ChartFunctions"
], function (library, Control,DashboardChartRenderer, ChartFunction ) {
	"use strict";




	var DashboardChart = Control.extend("ui5-cc-dndashboard.DashboardChart",  {
		metadata: {
			library: "ui5-cc-dndashboard",
			properties: {
				title: {
					type: "string",
					defaultValue: ""
				},
				xGrid: {
					type: "boolean",
					defaultValue: false
				},
				yGrid: {
					type: "boolean",
					defaultValue: false
				},
				enableAxisLabels: {
					type: "boolean",
					defaultValue: true
				},
				chartType: {
					type: "string",
					defaultValue: "barChart"
				},
				enableFilledLine: {
					type: "boolean",
					defaultValue: false
				},
				xAxisLabel: {
					type: "string",
					defaultValue: ""
				},
				yAxisLabel: {
					type: "string",
					defaultValue: ""
				},
				y2AxisLabel: {
					type: "string",
					defaultValue: ""
				},
				measure: {
					type: "object",
					defaultValue: ""
				},
				measureColour: {
					type: "object",
					defaultValue: []
				},
				dimension: {
					type: "object",
					defaultValue: []
				},
				data: {
					type: "object",
					defaultValue: []
				},
				showLegend: {
					type: "boolean",
					defaultValue: true
				},
				darkMode: {
					type: "boolean",
					defaultValue: false
				},
				legendPosition: {
					type: "string",
					defaultValue: 'top'
				},
				smartNumberFormat: {
					type: "boolean",
					defaultValue: false
				},
				xAxisUOM: {
					type: "string",
					defaultValue: ''
				},
				yAxisUOM: {
					type: "string",
					defaultValue: ''
				},
				y2AxisUOM: {
					type: "string",
					defaultValue: ''
				},
				showDataPoints: {
					type: "boolean",
					defaultValue: false
				},
				dataPointColor: {
					type: "string",
					defaultValue: 'grey'
				},
				stacked:{
					type: "boolean",
					defaultValue: true
				}
			},
			events: {
				press: {}
			}
		},
		renderer: DashboardChartRenderer,
		onAfterRendering: function() {
			ChartFunction.createChart(
				this
			)
		}
	});
	DashboardChart.prototype.smartNumberFormat = function (num, digits, doFormat) {
		if (!doFormat ||   isNaN(num)) {
			return num;
		}
		num=parseFloat(num)
		var negativeFactor = num<0?-1:1;
		num=Math.abs(num)
		var si = [
			{ value: 1, symbol: "" },
			{ value: 1E3, symbol: "k" },
			{ value: 1E6, symbol: "M" },
			{ value: 1E9, symbol: "G" },
			{ value: 1E12, symbol: "T" },
			{ value: 1E15, symbol: "P" },
			{ value: 1E18, symbol: "E" }
		];
		var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
		var i;
		for (i = si.length - 1; i > 0; i--) {
			if (num >= si[i].value) {
				break;
			}
		}
		return (num / si[i].value).toFixed(digits).replace(rx, "$1")*negativeFactor + si[i].symbol;
	}
	return DashboardChart;

});
