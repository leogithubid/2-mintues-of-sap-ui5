sap.ui.define([
    "sap/m/Button", //load button control 
    "sap/ui/core/mvc/XMLView" //load XML view
], function(Button,XMLView) {
    'use strict';

    XMLView.create({ //use create method and create a view
        viewName : "sap.ui.demo.App" //this is a new view created 
    }).then(function(oView){ //create method will return a promise - view
        oView.placeAt("content"); //use that promise return view and place it
    });

    //create button control
    new Button({
        text : "Hello World" //button text
    }).placeAt("content");//place it at the content
    
});

/*
Notes : Some additional that we have done
1.we initialised npm 
npm init -y and that created package.json 
2. then we installed ui5 cli globally 
npm install --global @ui5/cli
3. then we have initialised ui5 and created ui5.yaml 
4. we also moved everything to webapp
*/