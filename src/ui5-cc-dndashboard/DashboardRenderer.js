
sap.ui.define([
	"sap/ui/core/Core",
	"ui5-cc-dndashboard/library"
], function (Core, library) {
	"use strict";

	/**
	 * Example renderer.
	 * @namespace
	 */
	var DashboardRenderer = {
		apiVersion: 2 // usage of DOM Patcher
	};
	/**
	 * Renders the HTML for the given control, using the provided
	 * {@link sap.ui.core.RenderManager}.
	 *
	 * @param {sap.ui.core.RenderManager} rm The reference to the <code>sap.ui.core.RenderManager</code>
	 * @param {sap.ui.core.Control} control The control instance to be rendered
	 */
	DashboardRenderer.render = function (rm, control) {

		rm.openStart("div", control);
		rm.style("height", control.getHeight());
		rm.openEnd( );

			rm.renderControl(control.getAggregation('header'))
			
			
			rm.openStart("div");
			rm.class("grid-stack")
			rm.openEnd();
			
				control.getAggregation('tiles').map((e)=>{
					e.setEditable(control.getEditable())
					rm.renderControl(e)
				})
			rm.close("div");

		rm.close("div");


	};

	return DashboardRenderer;

});



// for(var i=0;i<5;i++){
// 	rm.openStart("div");
// 	rm.class("grid-stack-item")
// 	rm.openEnd( );
	
// 	rm.openStart("div");
// 	rm.class("grid-stack-item-content")
// 	rm.openEnd( );
// 	rm.text('Hello Semantic Rendering')
// 	rm.close("div");
// }

// `
// 		<div class="grid-stack">
//   <div class="grid-stack-item">
//     <div class="grid-stack-item-content">Item 1</div>
//   </div>
//   <div class="grid-stack-item" gs-w="2">
//     <div class="grid-stack-item-content">Item 2 wider</div>
//   </div>
// </div>
		
// 		`