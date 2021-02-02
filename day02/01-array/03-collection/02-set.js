//initial set, hanya menampung value unique
//jika ada yg sama , dia tidak akan muncul 2 kali
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add("code");
mySet.add(1); //tidak akan muncul

for (const my of mySet) {
    console.log(my)
}