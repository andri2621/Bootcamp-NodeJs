//return indeks
let arr = ["makan","minum","mandi","olahraga"]
console.log(arr.indexOf("mandi"))

//convert array into string
let str = ["java", "js", "python", "golang"]
console.log(str.join(" - "))
console.log(typeof str)

//convert string to array
let com = "code.id"
console.log(com.split(" - "));

//arrow function
// let namaFunc = (value, param1, param2 => )
const passwordFor = value => value.split("").reverse("").join("")+value.length;
console.log(passwordFor("code.id"));
