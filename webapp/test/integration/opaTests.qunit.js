/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/rreyes/prueba_rreyes/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
