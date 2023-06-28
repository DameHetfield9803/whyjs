/*
whyjs - a better version of JavaScript
Sometimes I ask myself WHY JavaScript ><.
I mean there's Typescript, but why not make a better JavaScript without Typescript?
*/
(function(window) {

    // Selector
    // Using $$ to prevent clashing with jQuery :(
    window.$$ = function(a) {
        return document.querySelector(a);
    };

    /*
        console.log(a)
    */
    window.print = function (a){
        if(a == undefined)
            console.log("🤡");
        else
            console.log(a);
    }

    // if else
    window.$do = function condition(obj) {
        for (let i = 0; i < obj.length; i++) {
          const { when, then } = obj[i];
          if (when) {
            return then;
          }
        }
    }
    


})(window);