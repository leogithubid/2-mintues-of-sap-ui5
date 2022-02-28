sap.ui.define([
    "sap/ui/core/UIComponent"
], function(UIComponent) {
    'use strict';
    //extend ui component
    return UIComponent.extend("sap.ui.demo.UIComponent",{
        //metadata
        metadata:{
            "interfaces" : ["sap.ui.core.IAsyncContentCreation"],
            manifest : "json"
/*   step4 - this is no longer required as we have outsourced that work to manifest.json         
             "rootView" : {
                "viewName" : "sap.ui.demo.view.App",
                "type" : "XML",
                "id" : "app"
            } */
        },
        //iniitalise
        init:function(){
            UIComponent.prototype.init.apply(this,arguments);
        }
    });
});