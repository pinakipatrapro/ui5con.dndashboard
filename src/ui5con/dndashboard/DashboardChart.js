sap.ui.define([
	"ui5con/dndashboard/library", 
	"sap/ui/core/Control", 
	"ui5con/dndashboard/DashboardChartRenderer",
	"ui5con/dndashboard/toastui/ChartFunctions"
], function (library, Control,DashboardChartRenderer, ChartFunction ) {
	"use strict";




	var DashboardChart = Control.extend("ui5con.dndashboard.DashboardChart",  {
		metadata: {
			library: "ui5con.dndashboard",
			properties: {
				title: {
					type: "string",
					defaultValue: ""
				},
				headerFontSize: {
					type: "string",
					defaultValue: '1.15rem'
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
				steppedLine: {
					type: "boolean",
					defaultValue: false
				},
				labels: {
					type: "object",
					defaultValue: []
				},
				radius: {
					type: "object",
					defaultValue: ""
				},
				enableFilledLine: {
					type: "boolean",
					defaultValue: false
				},
				borderColor: {
					type: "object",
					defaultValue: []
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
				size: {
					type: "string",
					defaultValue: "4x4"
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
				cardType: {
					type: "string",
					defaultValue: "chart" //chart //info //numeric // radial //measureBlock
				},
				info: {
					type: "string",
					defaultValue: "N/A"
				},
				mesL: {
					type: "string",
					defaultValue: ""
				},
				mesR: {
					type: "string",
					defaultValue: ""
				},
				labL: {
					type: "string",
					defaultValue: ""
				},
				labR: {
					type: "string",
					defaultValue: ""
				},
				radialPerc: {
					type: "string",
					defaultValue: ""
				},
				radialColor: {
					type: "string",
					defaultValue: ""
				},
				radialSummaryBase: {
					type: "string",
					defaultValue: "Total"
				},
				radialSummaryValue: {
					type: "string",
					defaultValue: "Sum Achieved"
				},
				measureBlock: {
					type: "object",
					defaultValue: []
				},
				progressVisible: {
					type: "boolean",
					defaultValue: true
				},
				cutOutPercentage: { //Only Applied to doughnut chart
					type: "float",
					defaultValue: 70
				},
				panDirection: {
					type: "string",
					defaultValue: 'x'
				},
				zoomDirection: {
					type: "string",
					defaultValue: 'x'
				},
				zoomEnabled: {
					type: "boolean",
					defaultValue: false
				},
				showBorder: {
					type: "boolean",
					defaultValue: true
				},
				fitToParent: {
					type: "boolean",
					defaultValue: false
				},
				draggable: {
					type: "boolean",
					defaultValue: false
				},
				_chart: {
					type: "string",
					defaultValue: ""
				},
				showLegend: {
					type: "boolean",
					defaultValue: true
				},
				measureChartType: {
					type: "object",
					defaultValue: ""
				},
				measureYAxis: {
					type: "object",
					defaultValue: ["y1","y1","y1","y1","y1","y1","y1","y1","y1","y1","y1","y1","y1","y1"]
				},
				stacked: {
					type: "boolean",
					defaultValue: false
				},
				background: {
					type: "string",
					defaultValue: "#fff"
				},
				sizeInPerc: {
					type: "boolean",
					defaultValue: false
				},
				renderBare: {
					type: "boolean",
					defaultValue: false
				},
				showULTitle: {
					type: "boolean",
					defaultValue: true
				},
				darkMode: {
					type: "boolean",
					defaultValue: false
				},
				dataPointSize: {
					type: "float",
					defaultValue: 5
				},
				legendPosition: {
					type: "string",
					defaultValue: 'top'
				},
				resizable: {
					type: "boolean",
					defaultValue: false
				},
				infoIcon: {
					type: "string",
					defaultValue: null
				},
				infoIconColor: {
					type: "string",
					defaultValue: 'grey'
				},
				infoText: {
					type: "string",
					defaultValue: ''
				},
				infoUOM: {
					type: "string",
					defaultValue: ''
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
				borderRadius: {
					type: "string",
					defaultValue: '0px'
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
