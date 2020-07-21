// Soal 1

// 1. forEach() = Method yang berfungsi untuk melakukan pengulangan terhadap setiap elemen dari suatu array.
// Contoh:
// const array = [1, 2, 3, 4, 5]
// array.forEach(item => {
//     console.log(item)
// })


// 2. includes() = Method yang berfungsi untuk memeriksa elemen array yang memenuhi suatu kondisi atau tidak.
// Contoh:
// const angka1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const benar = angka1.includes(2)
// const salah = angka1.includes(10)
// console.log(benar)
// console.log(salah)


// 3. some() = Method yang berfungsi untuk memeriksa setidaknya salah satu elemen array yang memenuhi kondisi.
// Contoh:
// const angka2 = [1, 2, 3, 4, 5]
// const genap = angka2.some(item => item % 2)
// console.log(genap)


// 4. every() = Method yang berfungsi untuk memeriksa setiap elemen dalam array yang memenuhi kondisi.
// Contoh:
// const angka3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const lebihBesar = angka3.every(item => item > 4)
// console.log(lebihBesar)


// 5. reduce() = Method yang berfungsi untuk mengurangi elemen aray menjadi nilai tunggal dengan menjumlah setiap elemennya (dari kiri ke kanan).
// Contoh:
// const angka4 = [1, 2, 3, 4, 5]

// const jumlah = angka4.reduce((total, value) => total + value, 0)
// console.log(jumlah)


// 6. concat() = Method yang berfungsi untuk menggabungkan dua array menjadi satu array.
// Contoh:
// const buah = ['apel', 'pir', 'mangga']
// const num = [1, 2, 3]

// const newArr = buah.concat(num)
// console.log(newArr)


// 7. join() = Method yang berfungsi menggabungkan elemen array menjadi sebuah string.
// Contoh:
// const arr1 = [1, 2, 3, 4, 5, 'a', 'b', 'c', 'd', 'e']

// console.log(arr1.join(""))
// console.log(arr1.join("."))
// console.log(arr1.join("|"))
// console.log(arr1.join("_"))


// 8. toString() = Method yang berfungsi untuk mengonversikan suatu array menjadi string.
// Contoh:
// const arr2 = [1, 2, 3, 4, 'a', 'b', 'c', 'd']

// console.log(arr2.toString())


// 9. reserve() = Method yang berfungsi untuk membalikkan urutan elemen dari suatu array.
// Contoh:
// const arr3 = [1, 2, 3, 4, 5, 'a', 'b', 'c', 'd', 'e']

// arr2.reverse()
// console.log(arr3.toString())


// 10. slice() = Method yang berfungsi untuk memotong suatu array menjadi array baru.
// Contoh:
// const arr4 = [1, 2, 3, 4, 5, 'a', 'b', 'c', 'd', 'e']

// const arrBaru = arr4.slice(2, 4)
// console.log(arrBaru)



// Soal 2
const searchName = (word, limit, callbackFun) => {
    const name = [
        'Abigail', 'Alexandra', 'Alison', 'Amanda',
        'Angela', 'Bella', 'Carol', 'Caroline',
        'Carolyn', 'Deirde', 'Diana', 'Elizabeth',
        'Ella', 'Faith', 'Olivia', 'Penelope']
        
    let find = name.filter((str)=>{
        return str.includes(word)
    })
    callbackFun(find, limit)
}

const limitValue = (search, val) => {
     let result = search.slice(0, val)
     console.log(result)
}

searchName("an", 2, limitValue)