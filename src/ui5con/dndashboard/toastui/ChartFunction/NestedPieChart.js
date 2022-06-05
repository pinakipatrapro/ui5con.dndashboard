sap.ui.define([
    "sap/ui/core/Control"
], function ( Control) {
    "use strict";
    return {
        getData: function (oControl,options) {
                /*
                 The first measure will be considered
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
                                     name: matchedObject[dimension[0]],
                                     data: matchedObject[measure[0]]
 
                                 }
                             )
                         }
                     })
                     series.push({
                         name: e,
                         data: xValues
                     })
                 });
                 series.splice(2, 5000)//Only 2 Layers are supported
                 return { series };
  
        },
        changeOptions : function(oControl,options){
            options.exportMenu.visible = true;
            return options;
        }
    };

});