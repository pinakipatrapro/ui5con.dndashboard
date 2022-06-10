sap.ui.define([
    "ui5con/dndashboard/library", 
	"sap/ui/core/Control",
	"@toast-ui/chart/dist/toastui-chart.min.js",
    'ui5con/dndashboard/toastui/ChartFunction/BubbleChart',
    'ui5con/dndashboard/toastui/ChartFunction/PieChart',
    'ui5con/dndashboard/toastui/ChartFunction/AreaChart',
    'ui5con/dndashboard/toastui/ChartFunction/BarChart',
    'ui5con/dndashboard/toastui/ChartFunction/LineChart',
    'ui5con/dndashboard/toastui/ChartFunction/ColumnChart',
    'ui5con/dndashboard/toastui/ChartFunction/RadarChart',
    'ui5con/dndashboard/toastui/ChartFunction/RadarBarChart',
    'ui5con/dndashboard/toastui/ChartFunction/HeatMapChart',
    'ui5con/dndashboard/toastui/ChartFunction/NestedPieChart',
    'ui5con/dndashboard/toastui/ChartFunction/ScatterChart',
	"sap/ui/dom/includeStylesheet"

], function (library, Control,Chart, BubbleChart, PieChart, AreaChart, BarChart, LineChart, ColumnChart,
    RadarChart, RadarBarChart, HeatMapChart, NestedPieChart, ScatterChart,includeStylesheet) {
    "use strict";

	includeStylesheet(sap.ui.require.toUrl("@toast-ui/chart/dist/toastui-chart.min.css"));

    return {
        createChart: function (oControl) {
            const el = document.getElementById(oControl.getId());


            const options = {
                exportMenu: {
                    visible: false
                },
                theme: this.createTheme(oControl),
                chart: {
                    width: "auto",
                    height: "auto",
					title : oControl.getTitle(),
                },
                xAxis: {
                    title: oControl.getXAxisLabel(),
                    label: {
                        formatter: (value) => oControl.smartNumberFormat(value, 1, oControl.getSmartNumberFormat()) +
                            oControl.getXAxisUOM()
                    }
                },
                yAxis: {
                    title: oControl.getYAxisLabel(),
                    label: {
                        formatter: (value) => oControl.smartNumberFormat(value, 1, oControl.getSmartNumberFormat()) +
                            oControl.getYAxisUOM()
                    }
                },
                circularAxis: {
                    title: oControl.getXAxisLabel()
                },
                tooltip: {
                },
                legend: {
                    visible: oControl.getShowLegend(),
                    align: oControl.getLegendPosition()
                },
                series: {
                    stack: oControl.getStacked(),
                    dataLabels: {
                        visible: oControl.getShowDataPoints(),
                        formatter: (value) => oControl.smartNumberFormat(value, 1, oControl.getSmartNumberFormat())
                    },
                    showArea: oControl.getEnableFilledLine()
                },
                plot: {
                    type: 'circle'
                },
                circleLegend: {
                    visible: oControl.getShowLegend()
                }
            };
            const data = this.formatData[oControl.getChartType()](oControl, options);
            const chart = Chart[oControl.getChartType()]({ el, data, options });

            this.postChartRendering()
        },
        postChartRendering: function () {
            var vtoolTip = document.getElementsByClassName('toastui-chart-tooltip-container');
            vtoolTip[0].style.position = 'fixed';
            return vtoolTip;
        },
        createTheme: function (oControl) {
            var whiteIfDarkMode = oControl.getDarkMode() ? 'white' : '#000000';
            var whiteIfDarkModeTransparent = '#cecece1c'
            return {
                chart: {
                    backgroundColor: 'rgba(0,0,0,0)',
                },
				title: {
					color: whiteIfDarkMode
				},
                yAxis: {
                    label: {
                        color: oControl.getEnableAxisLabels() ? whiteIfDarkMode : 'rgba(0,0,0,0)',
                    },
                    color: whiteIfDarkMode
                },
                xAxis: {
                    label: {
                        color: oControl.getEnableAxisLabels() ? whiteIfDarkMode : 'rgba(0,0,0,0)',
                    },
                    color: whiteIfDarkMode
                },
                circularAxis: {
                    strokeStyle: oControl.getXGrid() ? whiteIfDarkModeTransparent : 'rgba(0,0,0,0)',
                    dotColor: whiteIfDarkModeTransparent,
                    label: {
                        color: oControl.getEnableAxisLabels() ? whiteIfDarkMode : 'rgba(0,0,0,0)',
                    },
                },
                verticalAxis: {
                    strokeStyle: whiteIfDarkModeTransparent,
                    dotColor: whiteIfDarkModeTransparent,
                    label: {
                        color: oControl.getShowDataPoints() ? whiteIfDarkMode : 'rgba(0,0,0,0)',
                        textBubble: {
                            visible: false,
                            borderRadius: 5,
                            backgroundColor: 'rgba(7, 59, 76, .01)',
                            paddingX: 5,
                            paddingY: 6,
                        },
                    }
                },
                series: {
                    colors: oControl.getMeasureColour(),
                    startColor: oControl.getMeasureColour()[0],
                    endColor: oControl.getMeasureColour()[1],
                    borderWidth: 1,
                    borderColor: '#ffffff00',
                    dataLabels: {
                        color: oControl.getDataPointColor(),
                        useSeriesColor: false,
                        formatter: (value) => oControl.smartNumberFormat(value, 1, oControl.getSmartNumberFormat())
                    },
                    iconTypes: ['rect', 'triangle', 'pentagon', 'star', 'diamond', 'cross', 'hexagon'],

                },
                legend: {
                    label: {
                        color: whiteIfDarkMode,
                    },
                },
                plot: {
                    vertical: {
                        lineColor: oControl.getYGrid() ? whiteIfDarkModeTransparent : 'rgba(0,0,0,0)',
                    },
                    horizontal: {
                        lineColor: oControl.getXGrid() ? whiteIfDarkModeTransparent : 'rgba(0,0,0,0)',
                    }
                }
            }
        },
        formatData: {
            heatmapChart: function (oControl, options) {
                // options = HeatMapChart.changeOptions(oControl,options);
                return HeatMapChart.getData(oControl, options);

            },

            bubbleChart: function (oControl, options) {
                // options = BubbleChart.changeOptions(oControl,options);
                return BubbleChart.getData(oControl, options);

            },
            pieChart: function (oControl, options) {
                // options = PieChart.changeOptions(oControl,options);
                return PieChart.getData(oControl, options);
            },
            areaChart: function (oControl, options) {
                // options = AreaChart.changeOptions(oControl,options);
                return AreaChart.getData(oControl, options);
            },
            barChart: function (oControl, options) {
                // options = BarChart.changeOptions(oControl,options);
                return BarChart.getData(oControl, options);
            },
            lineChart: function (oControl, options) {
                // options = LineChart.changeOptions(oControl,options);
                return LineChart.getData(oControl, options);
            },
            columnChart: function (oControl, options) {
                // options = ColumnChart.changeOptions(oControl,options);
                return ColumnChart.getData(oControl, options);
            },
            radarChart: function (oControl, options) {
                // options = RadarChart.changeOptions(oControl,options);
                return RadarChart.getData(oControl, options);
            },
            radialBarChart: function (oControl, options) {
                // options = RadarBarChart.changeOptions(oControl,options);
                return RadarBarChart.getData(oControl, options);
            },

            nestedPieChart: function (oControl, options) {
                // options = NestedPieChart.changeOptions(oControl,options);
                return NestedPieChart.getData(oControl, options);
            },
 
            scatterChart: function (oControl, options) {
                // options = ScatterChart.changeOptions(oControl,options);
                return ScatterChart.getData(oControl, options);
            }
        }
    };

});