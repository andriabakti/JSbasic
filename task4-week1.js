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

let dataBaru = {
    name: "Andria Bakti Mahendra",
    email: "andr.bkti@gmail.com",
    hobby: [
        "Menonton Anime",
        "Membaca"
    ]
}

data2 = {...data, ...dataBaru};
console.log(data2)

const {street, city} = data.address
console.log(street)
console.log(city)
