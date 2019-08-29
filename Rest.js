//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
//Rest syntax looks exactly like spread syntax but is used for destructuring arrays and objects. 
//In a way, rest syntax is the opposite of spread syntax: spread 'expands' an array into its elements, while rest collects multiple elements and 'condenses' 
//them into a single element. See rest parameters.

//The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
//Rest parameters can be destructured (arrays only), that means that their data can be unpacked into distinct variables. 
//Syntax:
function f(a, b, ...theArgs) {
    // ...
  }

function sum(...theArgs) {
    return theArgs.reduce((previous, current) => {
      return previous + current;
    });
  }
  
  console.log(sum(1, 2, 3));
  // expected output: 6
  
  console.log(sum(1, 2, 3, 4));
  // expected output: 10