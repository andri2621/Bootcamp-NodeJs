//high order function
let employees =  ["Rais","Alif","Fahmi", "Ahmad", "Dafa", "Ale" , "Amar", "Rizki"]

//output : ["siaR", "filA"]
const passwordFor = value => value.split("").reverse("").join("")+value.length;

//method push manual, bisa gunakan loop untuk isi passwordList
let passwordList = [];
passwordList.push(passwordFor(employees[0]));
console.log(passwordList);

//2. functional method
let passwordEmps = employees.map(x => passwordFor(x))
console.log(passwordEmps)
