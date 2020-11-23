/*global QUnit*/

sap.ui.define([
	"io/example/fcl/controller/FlexibleColumnLayout.controller"
], function (Controller) {
	"use strict";

	QUnit.module("FlexibleColumnLayout Controller");

	QUnit.test("I should test the FlexibleColumnLayout controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});