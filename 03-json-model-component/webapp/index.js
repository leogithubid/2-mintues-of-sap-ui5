sap.ui.define([
/*     "sap/m/Button", //load button control step 3 - these two are no longer required
    "sap/ui/core/mvc/XMLView" //load XML view  - replaced by Component Container*/ 
    "sap/ui/core/ComponentContainer"
], function(ComponentContainer) {
    'use strict';

    //create component container
    new ComponentContainer({
        name : "sap.ui.demo",
        settings : {
            id : "app"
        },
        async : true

    }).placeAt("content");

/*     XMLView.create({ //use create method and create a view
        viewName : "sap.ui.demo.view.App" //this is a new view created 
    }).then(function(oView){ //create method will return a promise - view
        oView.placeAt("content"); //use that promise return view and place it
    }); */

/*   step 2 - we no longer need this  
    //create button control
    new Button({
        text : "Hello World" //button text
    }).placeAt("content");//place it at the content */
    
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