sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function(Controller,JSONModel) {
    'use strict';
    return Controller.extend("sap.ui.demo.controller.App",{

        //increment function called by the button
        addOne : function(){
            //get the text - remember we have initialised the value to 0 
            //otherwise it will give us Not a Number value NaN
            let text = this.getView().byId("counter");
            //get the text content and convert to integer
            let number = parseInt(text.getText());
            //add 1
            let newNumber = number + 1;
            //set this as text
            text.setText(newNumber);
        },

        //initialise
        onInit:function(){
            let oModel = new sap.ui.model.json.JSONModel();
            oModel.loadData("Data.json");//note - /sap/ui/demo/ - is not required
            this.getView().setModel(oModel);
        }
    });
});