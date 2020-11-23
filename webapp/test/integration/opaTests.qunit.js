/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"io/example/fcl/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});