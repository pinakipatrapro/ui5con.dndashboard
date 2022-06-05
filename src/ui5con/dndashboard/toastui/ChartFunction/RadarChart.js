sap.ui.define([
    "sap/ui/core/Control"
], function ( Control) {
    "use strict";
    return {
        getData: function (oControl,options) {
            var data = oControl.getData();
            var measure = oControl.getMeasure();
            var xDimension = oControl.getDimension()[0];
            var xDimension = [...new Set(data.map(e => { return e[xDimension] }))];
            var series = [];

            measure.forEach(e => {
                series.push({
                    name: e,
                    data: data.map(f => { return f[e] })
                })
            });


            return {
                categories: xDimension,
                series: series
            };
  
        },
        changeOptions : function(oControl,options){
            options.exportMenu.visible = true;
            return options;
        }
    };

});