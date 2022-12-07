const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

const getData = () => {
    let data = require("fs").readFileSync("day3.txt", 'utf8')
    data = data.split('\n')
    return data
}

const traverseDataPartOne = (func) => {
    let sum = 0
    const rucksackData = getData()
    for (let i = 0; i < rucksackData.length; i++) {
       sum += func(rucksackData, i)
        
    }
    return sum
}

const findCommonCharactersPartOne = (rucksackData, i) => {
    const bothCompartments = rucksackData[i].length
    const secondCompartment = rucksackData[i].slice(bothCompartments / 2, bothCompartments)
    for (let j = 0; j < (bothCompartments) / 2; j++) {
        const currentChar = rucksackData[i][j]

        for (let k = 0; k < secondCompartment.length; k++) {
            if (currentChar === secondCompartment[k]) {
                return characters.indexOf(currentChar) + 1
            }

        }
    }
}

traverseDataPartOne(findCommonCharactersPartOne)

const traverseDataPartTwo = (func) => {
    let sum = 0
    let subArraySize = 3
    let rucksackData = getData()
    for (let i = 0; i < rucksackData.length; i += subArraySize)  {
        sum += func(rucksackData.slice(i, i + subArraySize), i)
    }
    return sum
}

const findCommonCharactersPartTwo = (group, i) => {

    for (let i = 0; i < group[0].length; i++) {
        for (let j = 0; j < group[1].length; j++) {
            for (let k = 0; k < group[2].length; k++) {
                if (group[0][i] === group[1][j] && group[1][j] === group[2][k]) {
                    return characters.indexOf(group[0][i]) + 1
                }
            }
        }  
    }

}
traverseDataPartTwo(findCommonCharactersPartTwo)