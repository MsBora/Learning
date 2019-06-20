//slice() is a method of Array Object and String Object. 
//It is non-destructive since it return a new copy and it doesn’t change the content of input array. 
//slice() is normally used in function programming to avoid side-effect.

//The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end. 
//( end is not included ). 
//The original array will not be modified.

/*
The slice() method extracts a section of a string and return it as new string.
array.slice(begin, end)
string.slice(begin, end)
*/ 
//SLICE on an Array
var a=['a','b','c','d','e']
var sliceA=a.slice(1,3)
console.log(arr) //['a','b','c','d','e']
console.log(sliceA) //['b','c']
var b='abcde'


//SLICE on Strings
//works same as on Array 
var sliceB=b.slice(1,3)
console.log(b)  //abcde
console.log(sliceB) //bc