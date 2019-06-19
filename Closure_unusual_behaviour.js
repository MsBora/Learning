//some unusual output is there
// this is the property of closure
//the buildFunction is popped out of the stack still the inner function has access 
//to its variables

//note:the inner function is not invoked 



function buildFunctions(){
    var arr=[]
    for(var i=0;i<3;i++){
        arr.push(function(){
            console.log(i)
        })
    }
    return arr;
}
fs=buildFunctions();
fs[0]();
fs[1]();
fs[2]();

//But at last the result we get is totally correct because at the time of execution of innerfunction the value of i is 3