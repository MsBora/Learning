function map(arr, func, ctx) {
    var ar1=[]
     if(ctx===undefined){
        for(var i=0;i<arr.length;i++){
          ar1.push(func(arr[i]))
        }
       
     }else{
       for(var j=0;j<arr.length;j++){
          ar1.push(func.call(ctx,arr[j]))
        }
     }
     
     return ar1
  }