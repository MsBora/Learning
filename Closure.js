function greet(whatToSay){
    return function(name){
        console.log(`${whatToSay} ! How are you ${name} ?`)
    }
}

var sayHi=greet('Hi')
sayHi("Tony")