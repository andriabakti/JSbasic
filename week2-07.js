// Minggu 2
// Soal 7

fetch("http://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => {
    data.map(item => {
        console.log(item.name)
    })
})
.catch(err => console.log(err))
