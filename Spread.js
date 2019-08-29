
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
//Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) 
//or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) 
//are expected.

//For function calls: myFunction(...iterableObj);
function SpreadTest(a, b, c) {
    console.log(a + ' ' + b + ' ' + c)
}

SpreadTest('hi', 'there', 'jason')
var args = ['hi', 'there', 'jason']
SpreadTest.apply(null, args) //old style
SpreadTest(...args)  //new spread operator ES9

//For array literals or strings:
var parts = ['shoulders', 'knees']; 
var lyrics = ['head', ...parts, 'and', 'toes']; 
console.log(lyrics)

//For object literals (new in ECMAScript 2018):
//let objClone = { ...obj };
var dateFields = [1970, 0, 1];  // 1 Jan 1970
var d = new Date(...dateFields);
console.log(d)

var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };

var clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

var mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }