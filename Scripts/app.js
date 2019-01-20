"use strict";
// self-executing anonymous function
// IIFE -- Immediately Invoked Function Expression
(function(){
    let myFunctionalVariable = 0;
     //closure
    function Start() {
        let myLocalVariable = 0;
        console.log(`%c App Started...${myFunctionalVariable}`,
        "font-size:20px; color:blue;font-weight:bold");
    }

    window.addEventListener("load", Start);
})();