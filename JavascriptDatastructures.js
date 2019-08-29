//Javascript does not really have a dictionary object but you can simulate one:
var dict = { HusbandsName: "Jason", WifesName: "Shannon" };

console.log(dict);
console.log(Object.keys(dict));
//The for...in statement iterates over all non-Symbol, enumerable properties of an object.
//Enumerable properties are those properties whose internal enumerable flag is set to true, which is the default for properties created via simple assignment or via a property initializer 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
for (key in dict) {
    if (dict.hasOwnProperty(key)) {
        console.log("key " + key + " has value " + dict[key]);
    }
}
console.log("");


//user defined iterator
var myIterable = { *[Symbol.iterator]() { yield "Jason"; yield "Shannon" } };

console.log(myIterable);
console.log(Object.keys(myIterable));
//The for...of statement creates a loop iterating over iterable objects,
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
for (let value of myIterable) {
    console.log(value);
}
console.log("");

//array
var myArray = ["Jason", "Shannon", "Buddy"];
console.log(myArray);
console.log(Object.keys(myArray));
//foreach is only for arrays, maps and sets
myArray.forEach(element => {
    console.log(element);
});
//you can also use for of for arrays since they are iterable
for (const iterator of myArray) {
    console.log(iterator);
}
//and sort an array
//anonymous function
myArray.sort(function(a, b) {
    return a.localeCompare(b);
})
//or using lambda (aka javascript arrow functios)
myArray.sort((a,b) => a.localeCompare(b));
console.log(myArray);
