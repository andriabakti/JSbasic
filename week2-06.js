// Minggu 2
// Soal 6

// Program 1
const logIn = (name) => {
    return new Promise((resolve, reject) => {
        const dataName = ['Mafty', 'Navue', 'Erin']
        let check = dataName.find((item) => {
            return item === name
        })
        if(check) {
            resolve(`Apa kabar ${check} ?`)
        } else {
            reject(new Error('Nama tidak dikenal'))
        }
    })
}

logIn('Mafty')
.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.log(err.message)
})

// Program 2
const lookNum = (num) => {
    return new Promise((resolve, reject) => {
        const dataNum = [1, 2, 3, 4, 5]
        let ceklagi = dataNum.find((item) => {
            return item == num
        })
        if(ceklagi) {
            resolve(`${number} ditemukan`)
        } else {
            reject(new Error('Angka tidak ada'))
        }
    })
}

lookNum(7).
then((res) => {
    console.log(res)
})
.catch((err) => {
    console.log(err.message)
})
