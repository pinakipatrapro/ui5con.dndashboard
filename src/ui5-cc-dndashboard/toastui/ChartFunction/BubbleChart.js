sap.ui.define([
    "sap/ui/core/Control"
], function ( Control) {
    "use strict";
    return {
        getData: function (oControl,options) {
            /*
             The first measure will be x axis and second measure will be y axis measure. Radius will be the third axis
             The first Dimension will be label(city) and second dimension will be series (countries)
             
            */
            var data = oControl.getData();
            var measure = oControl.getMeasure();
            var dimension = oControl.getDimension();

            var series = [];
            var labelDimension = [...new Set(data.map(e => { return e[dimension[0]] }))];
            var seriesDimension = [...new Set(data.map(e => { return e[dimension[1]] }))];

            seriesDimension.forEach(e => {
                var xValues = [];
                labelDimension.forEach(f => {
                    let matchedObject = data.find(g => {
                        return g[dimension[0]] == f && g[dimension[1]] == e
                    });
                    if (matchedObject) {
                        xValues.push(
                            {
                                x: matchedObject[measure[0]],
                                y: matchedObject[measure[1]],
                                r: matchedObject[measure[2]],
                                label: matchedObject[dimension[0]]
                            }
                        )
                    }
                })
                series.push({
                    name: e,
                    data: xValues
                })
            })
            return { series };

        },
        changeOptions : function(oControl,options){
            options.exportMenu.visible = true;
            return options;
        }
    };

});