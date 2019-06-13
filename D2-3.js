//Currying
//a property that lets the function to take its arguments one at a time

const funcMultiply = (a,b,c) => {
    return a*b*c;
}
//a simple multiplication function (Arrow function)
// in above function ve have to provide arguments all at once like this-->      funcMultiply(2,3)

//curried function

const curriedMultiply = (a)=>(b)=>(c)=>{
    return a*b*c;
}

//here we provide functions like this-->   curriedmultiply(2)(3)(4);