export const listSiswa = (...list) =>{
    return list;
}

export const findCarByMerk=(listCar,merk)=>{
    return listCar.filter(x => x.merk=merk);
}