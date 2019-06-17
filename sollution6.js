var people = [
    { firstname : 'Mahatma', lastname: 'Gandhi', "age": 78 }, 
    { firstname : 'Goutam', lastname: 'buddha', age: 80},
    { firstname : "Karan", lastname: 'shah', age: 50},
    { firstname : 'Kapil', lastname: 'pandey', age: 23},
    { firstname : 'Ravi', lastname: 'bhakuni', age: 43},
    { firstname : 'somesh', lastname: 'joshi', age: 63},
    { firstname : 'Mahatma', lastname: 'Gandhi', "age": 78 }, 
    { firstname : 'Goutam', lastname: 'buddha', age: 80},

]
people[0].age;

function groupby(arr,prop){
  let ans=0;
 let cache ={};

    Object.keys(arr).forEach((key)=>{
      
      if(arr[key][prop] in cache)
      {
        

      }else{
        cache[arr[key][prop]]=arr[key][prop]
        Object.keys(arr).forEach((index)=>{
          if(arr[key][prop]==arr[index][prop])
          {
            console.log(arr[index])
          }
        })

      }

      console.log();
    
      
    })

}
console.log(groupby(people,"firstname"))



