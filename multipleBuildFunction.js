function times(n, func) {
    var arr=[]
   if(typeof func=='function'){
     for(var i=0;i<n;i++){
       arr.push(func(i))
     }
   }else{
      for(var j=0;j<n;j++){
        if(func=='String'){
          arr.push(String(i))
        }
        else if(func=='Boolean'){
          arr.push(Boolean(j))
        }
      }
     
   }
   return arr
  }
  