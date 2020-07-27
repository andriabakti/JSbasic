// Minggu 2
// Soal 4

const checkWorkDay = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = [
                'senin', 'selasa', 'rabu',
                'kamis', 'jumat']
            let check = dataDay.find((item) => {
                return item === day
            })
            if(check) {
                resolve(check)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

checkWorkDay('kamis')
.then((res) => {
    console.log(`Then: ${res} adalah hari kerja` )
})
.catch((err) => {
    console.log(`Catch: ${err.message}`)
})

/* Penggunaan Then-Catch

Ketika Promise dibuat, maka proses tersebut belum diketahui hasilnya.
Untuk mengakses hasil dari Promise tersebut, digunakanlah Method Then-Catch.
Methdo Then digunakan untuk mengakses kondisi berhasil atau Fulfilled Promise.
Sementara Method Catch untuk mengakses kondisi gagal atau Rejected Promise.
*/

const workDay = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = [
                'senin', 'selasa', 'rabu',
                'kamis', 'jumat']
            let check = dataDay.find((item) => {
                return item === day
            })
            if(check) {
                resolve(check)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

const getData = async () => {
    try {
        let result = await workDay('senin')
        console.log(`Try: ${result} adalah hari kerja`)
    } catch (error) {
        console.log(`Catch: ${error.message}`)
    }
}
getData()

/* Penggunaan Try-Catch

Method Try digunakan untuk menguji apabila terjadi error pada hasil Promise.
Jika tidak terjadi Error, maka ia akan menampilkan hasil berhasil.
Sementara Catch untuk menampilkan hasil Promise jika terjadi error pada Method Try.
Penggunaan Method ini harus disertai Method Async/Await.
*/