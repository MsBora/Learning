//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

var array = [2,3,4,5,6,7,8,9]
function firstRecurringCharacter(input) {
  let cache={}
  for (let i = 0; i < input.length; i++) {
    if(input[i] in cache){
      return input[i]
    }
    else{
      cache[input[i]]=input[i]
    }
  }
  return undefined
}
firstRecurringCharacter(array)
