sap.ui.define([
    "sap/ui/core/Control"
], function ( Control) {
    "use strict";
    return {
        getData: function (oControl,options) {
            var data = oControl.getData();
            var measure = oControl.getMeasure()[0];
            
            
            var xDimension = oControl.getDimension()[0];
            var yDimension = oControl.getDimension()[1];

            var xCategories = [...new Set(data.map(e => { return e[xDimension] }))];
            var yCategories = [...new Set(data.map(e => { return e[yDimension] }))];

            var series = [];

            yCategories.forEach(e => {
                var xValues = [];
                xCategories.forEach(f => {
                    let matchedObject = data.find(g => {
                        return g[xDimension] == f && g[yDimension] == e
                    });

                    xValues.push(
                        matchedObject ? matchedObject[measure] : null
                    )
                })
                series.push(xValues)
            })

            return {
                categories: {
                    x: xCategories,
                    y: yCategories,
                },
                series: series,
            };
  
        },
        changeOptions : function(oControl,options){
            options.exportMenu.visible = true;
            return options;
        }
    };

});