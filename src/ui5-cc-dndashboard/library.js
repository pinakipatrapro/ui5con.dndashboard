/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library ui5-cc-dndashboard.
 */
sap.ui.define([
	"sap/ui/core/library"
], function () {
	"use strict";

	// delegate further initialization of this library to the Core
	// Hint: sap.ui.getCore() must still be used to support preload with sync bootstrap!
	var thisLib  = sap.ui.getCore().initLibrary({
		name: "ui5-cc-dndashboard",
		version: "${version}",
		dependencies: [ // keep in sync with the ui5.yaml and .library files
			"sap.ui.core"
		],
		types: [
		],
		interfaces: [],
		controls: [
			"ui5-cc-dndashboard.Dashboard",
			"ui5-cc-dndashboard.DashboardTile",
			"ui5-cc-dndashboard.DashboardChart",
			"ui5-cc-dndashboard.FunnelChart"
		],
		elements: [],
		noLibraryCSS: false // if no CSS is provided, you can disable the library.css load here
	});

	/**
	 * Some description about <code>dndashboard</code>
	 *
	 * @namespace
	 * @name ui5-cc-dndashboard
	 * @author Pinaki Patra
	 * @version ${version}
	 * @public
	 */

	return thisLib;

});
