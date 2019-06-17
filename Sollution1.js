dist = (p1,p2) =>{
    return Math.sqrt(Math.pow((p2.y-p1.y),2)+matchMedia.pow((p2.x-p1.x),2))
};




const p1 ={
    x:0,
    y:0
}
const p2 ={
    x:10,
    y:0
}
const p3 ={
    x:10,
    y:10
}

console.log(dist(p1,p2));

const area=(p1,p2,p3)=> Math.abs(0.5*(p1.x*(p2.y-p3.y)+p2.x*(p3.y-p1.y)+p3.x(p1.y-p2.y)))


if(area(p1,p2,p3)){
    console.log("triangle formed")
}
