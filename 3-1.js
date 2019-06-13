var index=0;
var len=1;
var greater=0;
var tempI;
var i,j;
var arry=new Array();
// entering elements in array 

arry=[2,1,1,2,3,3,2,2,2,1];
// for(i=0;i<arry.length;i++)
// {
//     console.log(arry[i]);
// }

//console.log(arry.length);
for(i=1;i<arry.length;i++)
{
    if(arry[i]==arry[i-1])
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
        len=1;

console.log(tempI,greater);
for(j=tempI;j<(tempI+greater);j++)
{
    
    console.log(arry[j]);
}