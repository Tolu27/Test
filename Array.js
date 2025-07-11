function filternegativenumbers(arr){
    return arr.filter(num => num >= 0)
}

const numbers = [1, 4, -2, -6, 9, -4]
const result = filternegativenumbers(numbers)

console.log(result)