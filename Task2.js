const mtk = 45
const bahasaIndonesia = 86
const bahasaInggris = 94
const ipa = 77

let jumlah = mtk + bahasaIndonesia + bahasaInggris + ipa
if(mtk == null || bahasaIndonesia == null || bahasaInggris == null || ipa == null) {
    console.log("Semua nilai harus diisi !")
} else if (mtk != null && bahasaIndonesia != null && bahasaInggris != null && ipa != null) {
    var rata = jumlah/4
    console.log("Rata-rata = " + rata);
}

if(rata<=59) {
    console.log("Grade = E")
} else if (rata<=69) {
    console.log("Grade = D")
} else if (rata<=79) {
    console.log("Grade = C")
} else if (rata<=89) {
    console.log("Grade = B")
} else if (rata<=100) {
    console.log("Grade = A")
}
