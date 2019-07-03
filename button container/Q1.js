var temp;
var tem;
    
function clickHandler(){
    var d = document.getElementsByTagName('button')
    console.log(d[0].innerText)
    for(var i=0;i<d.length;i++){
        if(i==0){
            tem=d[i].innerText
            d[i].innerText=d[i+3].innerText
        }
        if(i==1){
            temp=d[i].innerText
            d[i].innerText=tem
        }
        if(i==2){
            tem=d[i].innerText
            d[i].innerText=temp
        }
        if(i==3){
            
            d[i].innerText=d[i+3].innerText
        }
        if(i==5){
            temp=d[i].innerText
            d[i].innerText=tem
        }
        if(i==6){
            // temp=d[i].innerText
            d[i].innerText=d[i+1].innerText
        }
        if(i==7){
            
            d[i].innerText=d[i+1].innerText
        }
        if(i==8){
            
            d[i].innerText=temp
        }
    }
}


// var l = "4";
// var a = ["1", "2", "3", "6", "9", "8", "7", "4"];
// var b = ["1", "2", "3", "6", "9", "8", "7", "4"];

// var rotate = function() {
//     for (var i = 7; i > 0; i--) {
//         a[i] = a[i - 1];
//     }
    
//     a[0] = l;
//     l = a[7];
    
//     for (var i = 0; i < 8; i++) {
//         document.getElementById("btn" + b[i]).innerText = a[i];
//     }
// }