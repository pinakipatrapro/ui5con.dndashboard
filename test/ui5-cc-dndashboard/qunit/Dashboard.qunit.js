/*global QUnit */
sap.ui.define([
	"sap/ui/qunit/QUnitUtils",
	"sap/ui/qunit/utils/createAndAppendDiv",
	"ui5-cc-dndashboard/library",
	"ui5-cc-dndashboard/Dashboard"
], function(qutils, createAndAppendDiv, library, Dashboard) {
	"use strict";

	// refer to library types
	// var ExampleColor = library.ExampleColor;

	// prepare DOM
	createAndAppendDiv("uiArea1");

	// module for basic checks
	QUnit.module("Example Tests");

	// example sync test
	QUnit.test("Sync", function(assert) {
		assert.expect(1);
		assert.ok(true, "ok");
	});

	// example async test
	QUnit.test("Async", function(assert) {
		assert.expect(1);
		return new Promise(function(resolve, reject) {
			assert.ok(true, "ok");
			resolve();
		});
	})

	// module for basic checks
	QUnit.module("Basic Control Checks");

	// some basic control checks
	QUnit.test("Test get properties", function(assert) {
		assert.expect(2);
		var oDashboard = new Dashboard({
		});
		assert.equal(oDashboard.getHeight(), "80vh", "Check height equals '80vh'");
		assert.equal(oDashboard.getEditable(), false, "Check default editable property");
	});

	// // some basic eventing check
	// QUnit.test("Test click event", function(assert) {
	// 	assert.expect(1);
	// 	var oExample = new Example("example", {
	// 		text: "Example",
	// 		press: function() {
	// 			assert.ok(true, "Event has been fired!")
	// 		}
	// 	}).placeAt("uiArea1");
	// 	return new Promise(function(resolve, reject) {
	// 		setTimeout(function() {
	// 			qutils.triggerMouseEvent("example", "click", 1, 1);
    //     resolve();
	// 		}, 100);
	// 	});
	// });

});
