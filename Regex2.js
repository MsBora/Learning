function regexVar() {
   
    let re = /^Mr\.[a-zA-Z]+$|^Mrs\.[a-zA-Z]+$|^Ms\.[a-zA-Z]+$|^Dr\.[a-zA-Z]+$|^Er\.[a-zA-Z]+$/

    return re;
}
const re = regexVar();
const str;

console.log(!!str.match(re));