function difference(src, target) {
    var arr=[]
    var c=0
    for(var i=0;i<src.length;i++){
      if(src[i]!=target[i]){
        arr.push(src[i])
      }
      
    }
    return arr
  
  }