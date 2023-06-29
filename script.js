/*
DEMO
- This file provides example whyjs functions
*/

// outputting to console
$$print("hello world");

// if else
const a = 10;
const b = 5;
const result = $$do([
  { when: a > b, then: "a is bigger" },
   {when: a < b, then: "b is bigger" }
]);
$$print(result); // output => a is bigger

// alert
//$$a("hellos");