function isString(value) {
    // if(typeof value=='string'){
    //   console.log('true')
    // }else{
    //   console.log('false')
    // }
    if(typeof value==='string'){
      return true
    }
    else if(typeof value=='object'&& value!==null && value!==undefined){
      var count=0
      Object.keys(value).forEach((k)=>{
        if(value[k].length==1){
          count++
        }
        
      })
      if(count>0){
        return true
      }else{
        return false
      }
    }
    else{
      return false
    }
  }