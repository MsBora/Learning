document.getElementById('res').value=''

function zero(){
    var x;
    x=document.getElementById('res').value;
    console.log(x)
    x=x+0;
    console.log(x)
    document.getElementById('res').value=x;
}
// ----------------------------------------------------------------------------------
function one(){
    var x;
    x=document.getElementById('res').value;
    console.log(x)
    x=x+1;
    console.log(x)
    document.getElementById('res').value=x;
}
// ----------------------------------------------------------------------------------
function clr(){
    document.getElementById('res').value=''

}
//-----------------------------------------------------------------------------------
function eql(){
    var y;
    var num1=[]
    var num2=[]
    var n1=0
    var n2=0
    var a=0
    var temp=true
    var opr
    y=document.getElementById('res').value;
    y=Array.from(y)
    // console.log(typeof y)

    for(var i=0;i<y.length;i++){
                                            //     if(y[i]!='+'||y[i]!='-'||y[i]!='*'||y[i]!='/'){
                                            //         if(temp==true){
                                            //             num1.push(y[i])
                                            //         }else{
                                            //             num2.push(y[i])
                                            //         }
                                            //     }else{
                                            //         temp=false
                                            //     }

        if(y[i]=="+"||y[i]=='-'||y[i]=='*'||y[i]=='/'){
            opr=y[i]
            temp=false
        }else{
            if(temp==true){
                num1.push(y[i])
            }else{
                num2.push(y[i])
            }
        }

    }
    //converting binary to decimal
    for(var i=(num1.length-1), j=0;i>=0;i--,j++)
    {
        n1= n1+(Math.pow(2,i)*num1[j])
    }
    
    for(var i=(num2.length-1), j=0;i>=0;i--,j++)
    {
        n2= n2+(Math.pow(2,i)*num2[j])
    }

    //Operation
    switch(opr){
        case '+':{
            a=n1+n2
            console.log(a)
        }break;
        case '-':{
            a=n1-n2
        }break;
        case '*':{
            a=n1*n2
        }break;
        case '/':{
            a=n1/n2
        }break;
    }

  toBinary(a)
    


    
}
//-----------------------------------------------------------------------------------
function plus(){
    var x;
    x=document.getElementById('res').value;
    console.log(x)
    x=x+'+';
    console.log(x)
    document.getElementById('res').value=x;
}
//--------------------------------------------------------------------------------------
function minus(){
    var x;
    x=document.getElementById('res').value;
    console.log(x)
    x=x+'-';
    console.log(x)
    document.getElementById('res').value=x;
}
//------------------------------------------------------------------------------------
function multi(){
    var x;
    x=document.getElementById('res').value;
    console.log(x)
    x=x+'*';
    console.log(x)
    document.getElementById('res').value=x;
}
//------------------------------------------------------------------------------------
function dev(){
    var x;
    x=document.getElementById('res').value;
    console.log(x)
    x=x+'/';
    console.log(x)
    document.getElementById('res').value=x;
}


function toBinary(x){
    var bin=[]
    var arr=[]
    
    if(x>0){
        while(x>=1){
         console.log(x,x%2)
        arr.push(x%2)
        x=parseInt(x/2);
    }
    for(var i=(arr.length-1);i>=0;i--){
        bin.push(arr[i])
    }
    
    console.log(bin)
    document.getElementById('res').value=bin.join('')
    }else{
        document.getElementById('res').value=0

    }
}