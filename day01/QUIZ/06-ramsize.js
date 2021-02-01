function ukRam(n){
    let mem = 1;
    let memS = "1";
    for (let i = 0; i <= n; i++){
        mem = mem *2;
        memS = memS + "," + mem;
    }
    return memS;
}
console.log(ukRam(8));