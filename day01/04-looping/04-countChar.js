//linear search, melakukan pencarian berurut mulai dari 0 (awal)
let z = "hello code.id";
for (let i = 0; i < z.length; i++){
    if (z[i] === "."){
        console.log(i);
    }
}

//linear search, melakukan pencarian berurut mulai dari 0 (awal)
let s = "hello code.id";

for (let i = 0; i < s.length; i++){
    if (s[i] === "."){
        console.log(i);
    }
}


//membalikkan string (reverse)
let x = "";
for (let i = s.length-1; i >= 0; i--){
    x += s[i];
  
}
console.log(x);
