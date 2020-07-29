// Minggu 2
// Soal 5

const getMonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = [
            'January', 'February', 'March', 'April',
            'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December'
        ];
        if(!error) {
            callback(null, month)
        } else {
            callback(new Error('Sorry, Data Not Found'), [])
        }
    }, 4000)
}

const getData = (error, data) => {
    if(error == null) {
        data.map((item) => {
            console.log(item)
        })
    } else {
        console.log(error.message)
    }
}

getMonth(getData)
