import Siswa,{Beasiswa,Angkot} from './car.js'
import {listSiswa}  from './ApiCar.js';



function main (){
    const hrv = new Siswa("Honda",2015)
    console.log(hrv)

    const juke = new Beasiswa("Nissan",2020, "grab")
    console.log(juke)
    console.log(juke.totalRevenue(4000.00,2))

    const mitsu = new Beasiswa("Mitsubishi",2020, "blue bird")
    const spin = new Beasiswa("suzuki",2020, "gojek")

    const ijo = new Angkot("doaibu",2020, "joglo-kebayoran")

    console.log(`Total Siswa : ${Siswa.totalCar}`);


}
main()