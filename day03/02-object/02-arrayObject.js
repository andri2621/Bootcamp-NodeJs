const listProduct = [
    {
        id:1,
        names : "Laptop Dell",
        price : 1500.00,
        variant : {
            type : "Gamer",
            core : "i7-9900HQ"
        }
    },

    {
    id:2,
    names : "Asus",
    price : 1800.00,
    variant : {
        type : "Gamer",
        core : "i7-9700HQ"
    }
}
];

const filterProductByPrice = (products,id) => {
    return products.filter(x => x.id ===id)
}

let result = filterProductByPrice(listProduct,2)

console.log(result)