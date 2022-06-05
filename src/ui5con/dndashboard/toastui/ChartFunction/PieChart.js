sap.ui.define([
    "sap/ui/core/Control"
], function ( Control) {
    "use strict";
    return {
        getData: function (oControl,options) {
            
            var data = oControl.getData();
            var series = [];
            series = data; 
            return {
                categories: ['Browser'],
                series: series
            };

        },
        changeOptions : function(oControl,options){
            options.exportMenu.visible = true;
            return options;
        }
    };

});