const x = {}
// objek type
const product = {
    id:1,
    names : "Laptop Dell",
    price : 1500.00,
    variant : {
        type : "Gamer",
        core : "i7-9900HQ"
    }
}
//
const infoProduct = info => {
    return `Info Product : ${info.names}, ${info.price}`
}
console.log(infoProduct(product))
//
//destructuring object with rest parameter
const{id,...info} = product;
console.log(id)
console.log(info)


//mengambil info dan varian dari produk
const{variant,core} = product
console.log(variant)
console.log(info)

//menampilkan hanya core nya saja
const{variant:{core}} = product
console.log(core)

