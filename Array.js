const number = [1, 2, 3, 4, 5, 6, 7]
let count = 0
let sum = 0
let num = (number.length)
while(count < num){
    sum += number[count]
    count += 1
}
console.log(sum)