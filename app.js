function MultiplicationTable(number){
    let table = []
    let times = 1
    while (times <13){
        let result = (number * times)
        times += 1
        table.push(result)
    }
    let count = 1
    for (let i = 0; i <= table.length -1; i++){
        console.log(number + "*" + count + "=" + table[i])
        count +=1
    }
}
MultiplicationTable(5)