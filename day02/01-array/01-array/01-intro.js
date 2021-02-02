//initial array
var array = new Array(3);

//array pada javascript, dapat menampung lintas tipe data. bisa dicampur campur
array[0]=3;
array[1]=4;
array[2]=5;
array[2]="CODE";
console.log(array);

// bisa array di dalam array (array bersarang)
array = ["code",["js","react"],"bootcampt",2021]
console.log(array);

//menambahkan elemen
var list = ["a","b","c"]
// push akan selalu menambahkan data ke dalam array indeks terakhir
list.push("j","k","l")
console.log(list)

//menghapus elemen dari indeks terakhir
list.pop()
console.log(list);

//menambahkan elemen di indeks pertama
list.unshift("z");
console.log(list)

//menghapus elemen pertama
list.shift()
console.log(list)

//meng-akses indeks tertentu
//meng-akses indeks ke-dua pada array
console.log(list[2]);

//looping for array
for( let i = 0; i < list.length; i++){
    const element = list[i];
    console.log(element)
}

//for of
for (const key of list){
    console.log(key);
}

//forEach
list.forEach(element =>{
    console.log(element);
})