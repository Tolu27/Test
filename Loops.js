function countvowels(str){
    const matches = str.match(/[aeiou]/gi)
    return matches ? matches.length : 0;
}
console.log(countvowels("Hello world"))