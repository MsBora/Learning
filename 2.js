console.log("1. strict comparison");
console.log("2. simple comparison");
var counter=0;
var arr1=new Array('a','j','a','y');
var arr2=new Array('A','J','A','Y','Y');

if(arr1.length==arr2.length)
    {
        for(var i=0;i<(arr1.length);i++)
            {
                if(arr1[i]==arr2[i])
                {
                        counter=counter+1;
                }
            }
              console.log(counter);  
            if(counter==(arr1.length))
                alert("string matched!!");
            else
                alert("strings not matched!!");
    }
else
    alert("strings length do not matched!!!");

