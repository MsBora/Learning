var num1;
var num2;

num1 = prompt('enter number one')
num2 = prompt('enter number two')
var opt
opt = prompt('enter 1 for multiply OR 2 for divide')

switch(opt){
    case '1':
        {
            alert(num1*num2)
        }
        break;
    case '2':
        {
            alert(num1/num2)
        }
        break;
        default:
        {
            console.log('wrong input enter')
        }
        break;
}