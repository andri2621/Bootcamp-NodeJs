//spread operator

const x = [1,2,3]
const y = ["a","b","c"]
const z = [...x,...y,4,5,6,7]
console.log(z)

// rest Parameter
const {a, ...rest} = {a:1, b:2, c:3}
console.log(a)
console.log(rest)

//spread operator
const spread = {a:1 , b:2, c:3}
const myspread = {a:1, ...spread}
console.log(myspread)

//cara melihat itu spread atau rest, bisa dari letak value, kalo rest biasanya di sebelah kiri (contoh: rest) dari =
//jika spread, biasanya di sebelah kanan dari =