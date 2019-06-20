/* 
split() is a method of String Object. It splits a string by separator into a new array.
-------------String.prototype.split()
*/

var string='This is the best string I ever wrote'
var arr=string.split(' ')
console.log(arr)

var sliced=string.split(' ',3)  //---- this will check for third whitespace and return the string before it.
console.log(sliced)