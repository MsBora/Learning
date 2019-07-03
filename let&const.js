function circle(rad) {
    const radius =rad 
    var pi = Math.PI
    console.log(pi * radius * radius)
    console.log(2 * pi * radius)

    try {    
        PI = 0;
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}
circle(20)