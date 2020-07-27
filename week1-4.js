// Minggu 1
// Soal 4

let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address:
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

let newData = {...data,
    name: "Andria Bakti Mahendra",
    email: "andr.bkti@gmail.com",
    hobby: [
        "Membaca",
        "Menonton Anime",
        "Mendengarkan Musik"
    ]
}
console.log(newData)

const {street, city} = data.address
console.log(`Jalan: ${street}
Kota: ${city}`)