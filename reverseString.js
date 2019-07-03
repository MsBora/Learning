function reverseString(s) {
    var x
     if (typeof s == 'string') {
         s = Array.from(s)
         x=s[s.length-1]
         for (var i = (s.length-2); i >= 0; i--)
         x=x+s[i]
     }
     
     else {
         console.log("s.split is not a function")
        x=s
     }
     
     console.log(x)
 }
var s
 reverseString(s);