var arr = [1,2,1,4,1,3,4,1,111,3,2,1,'1'];

Array.prototype.remove=function(x){
    var j=0;
    var ary= new Array();
    for(var i=0;i<this.length;i++)
    {
        if(this[i]!==x)
        {
            ary[j]=this[i];
            j++;
        }
    }
    console.log(ary);
}

arr.remove(1);
