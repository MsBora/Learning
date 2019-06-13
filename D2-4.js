//Compose
//act of putting two function to form a third function

const compose = (func1,func2) => (arg) => {
    return func1(func2(arg));
}

//basically output of one function goes as input for another function

const sum = (num) =>{
    return num+1;
}
const multiply = (num) =>{
    return num*2;
}

compose (multiply,sum)(9);