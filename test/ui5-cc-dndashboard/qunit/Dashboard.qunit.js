/*global QUnit */
sap.ui.define([
	"sap/ui/qunit/QUnitUtils",
	"sap/ui/qunit/utils/createAndAppendDiv",
	"ui5-cc-dndashboard/library",
	"ui5-cc-dndashboard/Dashboard"
], function(qutils, createAndAppendDiv, library, Dashboard) {
	"use strict";


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


});
