function duplicate(array) {
    var len=array.length;
    for(var i=0;i<len;i++){
       array.push(array[i])
     }
     return array
    }