var index=0;
var len=1;
var greater=0;
var tempI;
var i,j;
var arry=new Array();
// entering elements in array 

arry=[3,2,3,4,2,2,4];

for(i=1;i<arry.length;i++)
{
    if(arry[i-1]<arry[i])
    {
        if(len==1)
        {
            index=i-1;
        }
        len=len+1; 
        
    }
    else{
    
        if(greater<len)
        {
            greater=len;
            tempI=index;
        }
        len=1;

    }

}
if(greater<len)
{
    greater=len;
    tempI=index;
}
console.log(tempI,greater);
for(j=tempI;j<(tempI+greater);j++)
{
    
    console.log(arry[j]);
}