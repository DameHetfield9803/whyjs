/*
whyjs - a better version of JavaScript
Sometimes I ask myself WHY JavaScript ><.
I mean there's Typescript, but why not make a better JavaScript without Typescript?
*/
(function(window) {

    // Selector
    window.$$ = function(a) {
        return document.querySelector(a);
    };

    // Console.log(a)
    window.print = function (a){
        console.log(a);
    }

})(window);