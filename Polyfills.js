//Polyfill---
//CODE that adds a feature which the Engine MAY lack


//this code is checking if the Browser of Engine have the function "Object.create" 
//if not it will add this to the browsere/Engine


if(!Object.create){
    Object.create=function(o){
        if(arguments.length>1){
            throw new Error('Object.create implementation'+'only accepts the First person')
        }

        function F(){}
            F.prototype=o;
            return new F;
        
    };
}