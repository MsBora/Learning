function isPositive(a) {
    if (a > 0) {
        throw new Error("YES")
    }
    else if (a == 0) {
        throw new Error("Zero Error")
    }
    else if (a < 0) {
        throw new Error("Negative Error")
    }
}
var n;
for (let i = 0; i < n; i++) {
    const a;
  
    try {
        console.log(isPositive(a));
    } catch (e) {
        console.log(e.message);
    }
}