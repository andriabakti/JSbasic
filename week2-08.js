// Minggu 2
// Soal 8

const palindrom = (word) => {
    let letter = word.toLowerCase();
    let check = letter.split("").reverse().join("")
    if(letter === check) {
        console.log("Ini palindrom")
    } else {
        console.log("Ini bukan palindrom")
    }
}

palindrom("Malam")
palindrom("Mala")
