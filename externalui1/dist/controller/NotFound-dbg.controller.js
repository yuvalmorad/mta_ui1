sap.ui.define([
	"ns/reuse/controller/BaseController",
], function (BaseController) {
	"use strict";

	return BaseController.extend("ns.externalui1.controller.NotFound", {

		/**
		 * Navigates to the worklist when the link is pressed
		 * @public
		 */
		onLinkPressed : function () {
			this.getRouter().navTo("worklist");
		}

	});

});