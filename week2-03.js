// Minggu 2
// Soal 3

const seleksiNilai = (firstValue, lastValue, dataArray) => {
    if(firstValue > lastValue && dataArray.length <= 5) {
        console.log("Nilai akhir harus lebih besar dari nilai awal & jumlah data dalam dataArray harus lebih dari 5")
    } else if(firstValue > lastValue) {
        console.log("Nilai akhir harus lebih besar dari nilai awal")
    } else if(dataArray.length <= 5) {
        console.log("Jumlah data dalam dataArray harus lebih dari 5")
    } else {
        let result = dataArray.filter((value) => {
            return value > firstValue && value < lastValue
        })
        console.log(result.sort((a, b) => a-b))
    }
}

seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8])
seleksiNilai(20, 5, [2, 25, 4, 14, 17])
seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8])
seleksiNilai(4, 17, [2, 25, 4, 14, 17])
