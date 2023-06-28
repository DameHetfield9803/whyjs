/*
whyjs - a better version of JavaScript
Sometimes I ask myself WHY JavaScript ><.
I mean there's Typescript, but why not make a better JavaScript without Typescript?

IMPORTANT:
whyjs.js have to be LOADED first before your actual <script> tag.

NOTE:
Any undefined or null value will be replaced with a 🤡
*/
(function(window) {
    
    // Constants
    const Z = 0;

    // Selector
    // Using $$ to prevent clashing with jQuery :(
    window.$$ = function(a) {
        if(a != null){
            return document.querySelector(a);
        }
        if(a == null){
            return "🤡";
        }
    };

    // alert
    window.$$a = function(a) {
        alert(a);
    }

    /*
        console.log(a)
    */
    window.$$print = function(a){
        if(a == undefined)
            console.log("🤡");
        else
            console.log(a);
    }

    // if else
    window.$$do = function(o) {
        for (let i = Z; i < o.length; i++) {
          const { when, then } = o[i];
          if (when) {return then;}
        }
    }


})(window);