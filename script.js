/*
  This file provides example on how to use whyjs functions
*/

// outputting to console
_print("hello world");

// if else
const a = 10;
const b = 5;
const result = _do([
  { when: a > b, then: "a is bigger" },
  { when: a < b, then: "b is bigger" }
]);
_print(result); // output => a is bigger

// alert
//_a("hellos");

//Get the <h1>Hello</h1> tag and change Hello to OK
// _("h1")._html("OK")

// Bind value
/*
Now when we inspect element, it will look like 
<h1 bind-value="Lemon">Hello</h1>
*/ 
_find("h1")._bind("Lemon");