



export const totalSiswa = (...totalSis) => {
    return totalSis;
}

export const totalBeasiswa = (...totalBea) => {
    return totalBea;
}

export const totalReguler = (...totalReg) => {
    return totalReg;
}

export const totalInsentif = (...totalIns) => {
    return totalIns;
}

export const totalNetPrice = (...totalNet) => {
    return totalNet;
}


export const totalJenisBootcamp = (jenisBootcamp, ...list) => {
    let count = 0;
    for (const i of list) {
        if (i.jenisBootcamp === jenisBootcamp) {
            count++;
        }
    }
    return count;
}