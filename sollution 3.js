var obj = {
    name: {
        fName: 'mad',
        lName: "maxx"
    },
    ph: 475982163,
    prof: 'engineer',
}

function cloneObject(obj) {
    var clone = {};
    Object.keys(obj).forEach((key)=>{
      if(obj[key] != null &&  typeof(obj[key])=="object")
            clone[key] = cloneObject(obj[key]);
        else
            clone[key] = obj[key];
    }
    )
       return clone;

}

// console.log(cloneObject(obj))
var newObject=cloneObject(obj)

console.log(newObject)

