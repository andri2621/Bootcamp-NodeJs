export default class Siswa{
    static totalCar = 0;
    constructor(merk, tahun){
        this.merk = merk;
        this.tahun = tahun;
        Siswa.totalCar++;
    }
}

class Beasiswa extends Siswa{
    constructor(merk, tahun, brand){
        super(merk, tahun); //supaya child bisa mengakses data di parents, gunakan super
        this.brand = brand;
    }

    
    info(){
            return console.log(this)
        }
    

    totalRevenue(rate, km){
        return rate * km;
    }
}

class Reguler extends Siswa{
    constructor(merk, tahun, rute){
        super(merk,tahun)
        this.rute = rute
    }

    seat(count){
        return count
    }
}

export {Beasiswa,Angkot} //cara export sekaligus