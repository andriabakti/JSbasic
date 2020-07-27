// Minggu 1
// Soal 2

const mtk = 45
const bahasaIndonesia = 86
const bahasaInggris = 94
const ipa = 77

if(typeof(mtk || bahasaIndonesia || bahasaInggris || ipa) == "string") {
    console.log("Input harus angka !!")
} else if((mtk && bahasaIndonesia && bahasaInggris && ipa) == null) {
    console.log("Semua nilai harus diisi !!")
} else if((mtk && bahasaIndonesia && bahasaInggris && ipa) != null) {
    let average = (mtk + bahasaIndonesia + bahasaInggris + ipa) /4;
    console.log(`Rata-rata = ${average}`);
    
    if(average <= 59) {
        console.log("Grade = E")
    } else if(average <= 69) {
        console.log("Grade = D")
    } else if(average <= 79) {
        console.log("Grade = C")
    } else if(average <= 89) {
        console.log("Grade = B")
    } else {
        console.log("Grade = A")
    }
}