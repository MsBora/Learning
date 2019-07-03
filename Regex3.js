function regexVar() {

    var re=/\b[0-9]\d*|\B[0-9]\d*/g
        
        return re;
    }

    const re = regexVar();
    const str='';
    
    const r = str.match(re);
    
    for (const e of r) {
        console.log(e);
    }