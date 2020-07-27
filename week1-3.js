// Minggu 1
// Soal 3

const printSegitiga = 6

if(typeof printSegitiga == "string") {
    console.log("Data harus number !!")
} else if(printSegitiga == null) {
    console.log("Data harus diisi !!")
} else if(printSegitiga != null) {
    for(let i = printSegitiga; i >= 1; i--) {
        let num = " ";
        for(let j = 1; j <= i; j++) {
            num += j;
        }
        console.log(num)
    }
}
