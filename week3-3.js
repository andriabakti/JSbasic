// Minggu 3
// Soal 3

const divideAndSort = (int) => {
    let convert = int.toString().split("")
    const arr1 = convert.slice(0, 6).sort((a, b) => a-b, (item) => {
        return item
    })
    
    const arr2 = convert.slice(7, 12).sort((a, b) => a-b, (item) => {
        return item
    })
    
    const arr3 = convert.slice(13, 15).sort((a, b) => a-b, (item) => {
        return item
    })
    let combine = arr1.concat(arr2, arr3)
    let result = combine.join("")
    console.log(parseInt(result))
}
divideAndSort(595656015966056)