// Minggu 2
// Soal 2

const searchName = (word, limit, callback) => {
    const name = [
        'Abigail', 'Alexandra', 'Alison', 'Amanda',
        'Angela', 'Bella', 'Carol', 'Caroline',
        'Carolyn', 'Deirde', 'Diana', 'Elizabeth',
        'Ella', 'Faith', 'Olivia', 'Penelope'
    ]

    let find = name.filter((str) => {
        return str.toLowerCase().includes(word.toLowerCase())
    })
    callback(find, limit)
}

const limitValue = (search, lim) => {
     let result = search.slice(0, lim)
     console.log(result)
}

searchName("AN", 3, limitValue)