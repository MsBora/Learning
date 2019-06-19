//Currying
// a property of providing arguments to function one-by-one

function multiply(num1,num2){
    return num1*num2
}
var multiplyByTwo = multiply.bind(this,2)
console.log(multiplyByTwo(4))

//this help us to create utility functions without re-writing similar code again.
// now we can have a Multiply function for any number as we wish...
//like this
var multiplyByThree = multiply.bind(this,3)
console.log(multiplyByThree(4))
//or even this
var multiplyByHundred = multiply.bind(this,100)
console.log(multiplyByHundred(4))

//Another method for currying
//using Arrow function

var multiply2 = (num1) => (num2) => num1*num2

var multiplyByTwo2=multiply2(2)
console.log(multiplyByTwo2(4))