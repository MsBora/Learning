//what is functional programming
//require first class functions
    //-------------------first class functions
// 1-passing functions as parameters
// 2-return them from functions 

function mapForEach(arr,fn) {
    var arr1=[]
    for(var i=0;i<arr.length;i++){
        arr1.push(fn(arr[i]))
    }
    return arr1
}

var arr1_1=[1,2,3]
console.log(arr1_1)

var arr2=mapForEach(arr1_1,function(item){
    return item*2;
})

console.log(arr2)