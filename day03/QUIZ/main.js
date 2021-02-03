import Siswa,{ Beasiswa, Reguler} from './kuisClass.js'
import {totalSiswa, totalInsentif, totalNetPrice, totalJenisBootcamp}  from './apiKuis.js'

function main() {

 // TAMBAH SISWA




// ===============================================================
    // console.log(`Total Siswa : ${Siswa.totalSiswa}`);
    // console.log("total siswa : "+Siswa.totalSis);
// ===============================================================

    // TAMBAH BEASISWA

    const Asep = new Beasiswa("Asep", "Bandung", "S1", 3.45, "Beasiswa","Nodejs", 3, 1, 2019, 100000)
    // console.log(Asep) //beasiswa 1

    const Ami = new Beasiswa("Ami", "Bogor", "S1", 3.10, "Beasiswa","Nodejs", 3, 1, 2019, 100000)
    // console.log(Ami) //beasiswa 2

    const Budi = new Beasiswa("Budi", "Depok", "S1", 3.25, "Beasiswa", "Java",3, 2, 2020, 100000)
    // console.log(Budi) //beasiswa 3

    const Cindy = new Beasiswa("Cindy", "Jakarta", "D3", 3.30, "Beasiswa","Java", 3, 2, 2020, 100000)
    // console.log(Cindy) //beasiswa 4

    const Dedy = new Beasiswa("Dedy", "Bekasi", "S2", 2.98, "Beasiswa","Nodejs", 4, 1, 2019, 100000)
    // console.log(beaDedy) //beasiswa 5


    

    // TAMBAH REGULAR

    const Desta = new Reguler("Desta", "Jakarta", "S1", 3.15,"Reguler","Golang", 3, 3, 2021 ,5000000)
    // console.log(regDesta) //tambah siswa 6

    const Shinta = new Reguler("Shinta", "Jakarta", "S1", 3.15,"Reguler", "Golang", 4, 3, 2021, 5000000)
    // console.log(regShinta) //tambah siswa 7

    const Meita = new Reguler("Meita", "Jakarta", "S1", 3.00,"Reguler", "Phyton", 4, 3, 2021, 7000000)
    // console.log(regMeita) //tambah siswa 8

    


const nodejs = totalJenisBootcamp("Nodejs",Asep, Ami, Budi, Cindy, Dedy, Desta, Shinta, Meita);
const golang = totalJenisBootcamp("Golang",Asep, Ami, Budi, Cindy, Dedy, Desta, Shinta, Meita);
const phyton = totalJenisBootcamp("Phyton",Asep, Ami, Budi, Cindy, Dedy, Desta, Shinta, Meita);




// ===============================================================
    console.log("Jumlah Siswa : "+Siswa.totalSis);
// ===============================================================
    console.log(`Jumlah Siswa Beasiswa : ${Beasiswa.totalBea}`);
// ===============================================================
// ===============================================================
    console.log(`Jumlah Siswa Reguler : ${Reguler.totalReg}`);
// ===============================================================

    

// ===============================================================
    console.log(`Total Insentif : ${Beasiswa.totalIns}`);
// ===============================================================
    console.log(`Total Net Price : ${Reguler.totalNet}`);
// ===============================================================

    console.log("Nodejs : "+nodejs);
    console.log("Golang : "+golang);
    console.log("Phyton : "+phyton);

}

main()