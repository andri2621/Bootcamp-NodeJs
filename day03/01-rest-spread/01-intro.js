//kasus sum
const sum = (a,b) => {
    return a+b
}
console.log(sum(1,2))

//rest parameter
const sumRest = (...values) =>{
    let sum = 0
    values.forEach(element => {
        sum += element //sum = sum + element
    });
    return sum
}
console.log(sumRest(1,2,3,4,5))


//rest parameter
const firstName = "code"
const lastName = "id"
const gelar = "sarjana"

const greet = (...names) => {
    return names.join("-")
}
console.log(greet(firstName,lastName,gelar))
