
function regexVar() {
    let re = /\ba\w*a\b|\be\w*e\b|\bi\w*i\b|\bo\w*o\b|\bu\b\w*u\b/i;

    return re;
}
const re = regexVar();
const str;
    
console.log(re.test(str));