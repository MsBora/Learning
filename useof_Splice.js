//splice is a method of Array object. 
//it is a "destructive function" since it changes/ modifies the array content
//it either removes the existing element or adds new element
var arr=['a','b','c','d']

//syntax : Array.splice(start,[delete counter],[item1],[item2])
//here item1 and item2 reffers to the element to be pushed inside the array
arr.splice(2,0,'e')
//starting from index 2 , removing 0 elements, add element 'e'
console.log(arr)

var copy = arr.splice(2,1)
//starting from index 2, remove 1 element
console.log(copy)
console.log(arr)

arr.splice(2,2,'r','q')
// starting from index 2 remove 2 elements and add elements 'r' and then 'q'
console.log(arr)



//using shift in splice

function shiftArray(arr) {
    // remove 1 item at 0-index position, return the deleted item 
    return arr.splice(0, 1); 
  }
  
  var a = [1, 2, 3];
  
  var b = a.shift();
  //shifts the array to the left
  console.log(a); // [2, 3]
  
  console.log(b); // 1
  
  var c = shiftArray(a);
  
  console.log(a); // [3]
  
  console.log(c); // [2]
  