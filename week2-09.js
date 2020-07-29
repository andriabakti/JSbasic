// Minggu 2
// Soal 9

// Tanpa Built-In Function
const reverseWords = (sentence) => {
    let word1 = ""
    for(let i = 0; i <= 3; i++) {
        word1 += sentence[i]
    }

    let word2 = ""
    for(let i = 5; i <= 11; i++) {
        word2 += sentence[i]
    }

    let word3 = ""
    for(let i = 13; i <= 22; i++) {
        word3 += sentence[i]
    }
    console.log(`${word3} ${word2} ${word1}`)
}

reverseWords("Saya belajar JavaScript")


// Dengan Built-In Function
const reverseLine = (line) => {
    let word = line.split(" ")
    let string = []
    for(let j = word.length-1; j >= 0; j--) {
        string.push(word[j])
    }
    console.log(string.join(" "))
}
reverseLine("Saya sedang belajar Javascript")
