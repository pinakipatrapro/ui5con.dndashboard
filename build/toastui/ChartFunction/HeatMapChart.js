sap.ui.define(["sap/ui/core/Control"],function(e){"use strict";return{getData:function(e,r){var t=e.getData();var n=e.getMeasure()[0];n=n;var a=e.getDimension()[0];var i=e.getDimension()[1];var u=[...new Set(t.map(e=>e[a]))];var s=[...new Set(t.map(e=>e[i]))];var o=[];s.forEach(e=>{var r=[];u.forEach(u=>{let s=t.find(r=>r[a]==u&&r[i]==e);r.push(s?s[n]:null)});o.push(r)});return{categories:{x:u,y:s},series:o}},changeOptions:function(e,r){r.exportMenu.visible=true;return r}}});