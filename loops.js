//printing vowels and consonants together

var s = 'learnjavascriptloopsinhackerrankweekofcode';
var a =s.split('')
function vowelsAndConsonants(a) {
    for (var i = 0; i < a.length;i++){
        if (a[i] == 'a' || a[i] == 'e' || a[i] == 'i' || a[i] == 'o' || a[i] == 'u') {
            console.log(a[i]);
        }
    }
    for (var i = 0; i < a.length; i++) {
        if (a[i] != 'a' && a[i] != 'e' && a[i] != 'i' && a[i] != 'o' && a[i] != 'u') {
            console.log(a[i]);
        }
    }
    
}
vowelsAndConsonants(s);