var num
var optNum=prompt('enter a number btween 1-10')

var guess=Math.floor(Math.random()*11)
if(optNum===guess){
    alert("You win!!!")
}
else{
    console.log(guess)
}
