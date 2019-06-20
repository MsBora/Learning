var strng
strng = prompt('enter the string')

var arr=[] 
arr=strng.slice('')
var i=0
//1 way
    // if( arr[i]!=='P'){
    //     alert('Py'+ strng)
    // }
    // else if( arr[i]=='P'){
    //     if( arr[i+1]!=='y'){
    //         alert('Py'+strng)
    //     }
    //     else{
    //         alert(strng)
    //     }
    // }
    // else{
    //     alert(strng)
    // }
//2 way
    if(strng.includes('Py')){
        alert(strng)
    }
    else{
        alert('Py'+strng)
    }

    //----------------------------------------------------------------------------------------------------------------------------------------
    //checking the number of repetition of a perticular varaible
    var str2
    str2=prompt('enter the string')
    var opt = prompt('enter the variable to check for')

    function check(string,o){
        var str= string.slice('');
        c=0;
        return function check2(){
            Object.keys(str).forEach((key)=>{
                if(o==str[key])
                c=c+1
            })
            return c;
        }
    }

    var test=check(str2,opt)
    console.log(test())