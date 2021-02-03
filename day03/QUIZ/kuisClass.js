export default class Siswa{
    static totalSis = 0;
    constructor(namaSiswa, kota, pendTerakhir, ipk, tipe, jenisBootcamp,poinSkill, batch, tahun){
        this.namaSiswa = namaSiswa;
        this.kota = kota;
        this.pendTerakhir = pendTerakhir;
        this.ipk = ipk;
        this.tipe = tipe;
        this.jenisBootcamp = jenisBootcamp;
        this.poinSkill = poinSkill;
        this.batch = batch;
        this.tahun = tahun;
        Siswa.totalSis++;
    }
}


class Beasiswa extends Siswa{
    static totalBea = 0;
    static totalIns = 0;
    constructor(namaSiswa, kota, pendTerakhir, ipk, tipe, jenisBootcamp,poinSkill, batch, tahun,insentif){
        
        super(namaSiswa, kota, pendTerakhir, ipk, tipe, jenisBootcamp,poinSkill, batch, tahun);
        this.insentif = insentif;
        Beasiswa.totalBea++;
        Beasiswa.totalIns += insentif;
        
    }
}

class Reguler extends Siswa{
    static totalReg = 0;
    static totalNet = 0;
    constructor(namaSiswa, kota, pendTerakhir, ipk, tipe, jenisBootcamp,poinSkill, batch, tahun,netPrice){
        
        super(namaSiswa, kota, pendTerakhir, ipk, tipe, jenisBootcamp,poinSkill, batch, tahun);
        
        this.netPrice = netPrice;
        Reguler.totalReg++;
        Reguler.totalNet += netPrice;
        
    }
}


export {Siswa, Beasiswa, Reguler}