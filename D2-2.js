//Arrow function

//older versions of functions
function first(){
    var greet="Hi this is Max";
    function second(){
        alert(greet);
    }
    return second;
}
 var newFunc=first();
 newFunc();

 //newer versions of functions

 const first =()=>{
     const greet="Hello there!!!";
     const second =()=>{
         alert(greet);
     }
     return second;
 }

 const newFunc = first ();
 newFunc();



 /* Closure--> the child scope always has access to parent scope */