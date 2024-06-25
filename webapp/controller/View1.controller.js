sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sap.kt.demo.piechart2.controller.View1", {
            onInit: function () {
               
            },
            onSelectedData:function(){
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteView2")
            }
        });
    });
