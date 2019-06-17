var Obj = {  name: 'Manjula', age: 25, Profession: 'Software Engineer' };

var findprop=function(obj,x){
  counter=0;
  Object.keys(obj).forEach((key)=>{
    if(key==x)
    {
      counter=1;
    }
   
  })
   if(counter==0)
    {
      console.log('false');
    }
    else{
      console.log('true');
    }
  
};

findprop(Obj,'profession');