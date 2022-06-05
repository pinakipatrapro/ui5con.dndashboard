sap.ui.define([
    "sap/ui/core/Control"
], function ( Control) {
    "use strict";
    return {
        getData: function (oControl,options) {
                /*
                 The first measure will be x axis and second measure will be y axis measure
                 The first Dimension will be series (Country)
                */
                 var data = oControl.getData();
                 var measure = oControl.getMeasure();
                 var dimension = oControl.getDimension();
 
                 var series = [];
                 var seriesDimension = [...new Set(data.map(e => { return e[dimension[0]] }))];
 
                 seriesDimension.forEach(e => {
                     var validRows = data.filter((f) => {
                         return f[dimension[0]] == e
                     });
                     series.push({
                         name: e,
                         data: validRows.map(g => {
                             return {
                                 x: g[measure[0]],
                                 y: g[measure[1]],
                             }
                         })
                     })
                 });
                 return { series };
  
        },
        changeOptions : function(oControl,options){
            options.exportMenu.visible = true;
            return options;
        }
    };

});