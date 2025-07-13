function MultiplicationTable(number){
    let table = []
    let times = 1
    while (times < 13){
        let result = (number * times)
        times += 1
        table.push(result)
    }
    console.log(table)
}
MultiplicationTable(5)