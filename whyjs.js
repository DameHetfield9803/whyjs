/*
whyjs - a better version of JavaScript
More like a library to make JS better
Sometimes I ask myself WHY JavaScript ><.
I mean there's Typescript, but why not make a better JavaScript without Typescript?

IMPORTANT:
whyjs.js have to be LOADED first before your actual <script> tag.

NOTE:
Any undefined or null value will be replaced with a 🤡 

Syntax:
why js functions starts with _ (underscore)
*/
(function(window) {
    
    // Constants
    const Z = 0;

    // Selector
    window._find = function(a) {
        if(a != null){
            return document.querySelector(a);
        }
        if(a == null){
            return "🤡";
        }
    };

    // Alert
    window._a = function(a) {alert(a);}

    // Print / console.log
    window._print = function(a){
        if(a == undefined)
            console.log("🤡");
        else
            console.log(a);
    }

    // if else
    /*
    Example:
        const a = 10;
        const b = 5;
        const result = $$do([
            { when: a > b, then: "a is bigger" },
            { when: a < b, then: "b is bigger" }
        ]);
    */
    window._do = function(o) {
        for (let i = Z; i < o.length; i++) {
          const { when, then } = o[i];
          if (when) {return then;}
        }
    }

    /*
    This is for TESTING only
    PLEASE do not use !
    */
    // window.$$js = function(a){
    //     if(a.trim() != ""){
    //         eval(a);
    //     }
    // }

    /*
    Sanitize string & remove all HTML special characters
    <h1>Hello</h1> --> h1hello/h1
    */ 
    window._clean = function(a){
        if(a.includes("<")){
            a = a.replaceAll("<", "");
        }
        if(a.includes(">")){
            a = a.replaceAll(">", "");
        }
        return a;
    }

    // HTTP methods
    // window.$$http = function(a){
    //     var method = a.method;
    //     var url = a.url;
    
    //     if(method == "GET"){
    //         return fetch(url)
    //             .then(response => response.json())
    //             .then(data => {
    //                 return JSON.stringify(data);
    //             })
    //             .catch(error => console.error(error));
    //     }
    // }
    
    // Inner HTML
    // This functions accept HTML passed as string
    window.Object.prototype._html = function(a){
        this.innerHTML = a;
    }

    // Bind value to element
    window.Object.prototype._bind = function(a) {
        this.value = a;
        this.setAttribute('bind-value', a);
    }

    // Localstorage (get & set)
    /*
    */
    window._ls = function(a){
        var result = "";

        var method = a.method;
        var key = a.key;
        var value = a.value;

        // Get
        if(method == "get" || method == "GET"){
            result = localStorage.getItem(key);
            return result;
        }

        // Set
        if(method == "set" || method == "SET"){
            localStorage.setItem(key, value);
            // Nothing is being returned
        }
    }


})(window);