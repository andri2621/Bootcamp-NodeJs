//reduce untuk calculation
let a = [1,2,3,4,5]
let b = a.map(x => x*2);
console.log(b)

//reduce mempunyai 2 parameter

let c = a.reduce((x,y) => x+y)
console.log("hasil : "+c)