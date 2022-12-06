const getData = () => {
    let data = require("fs").readFileSync("day3.txt", 'utf8')
    data = data.split('\n')
    return data
}

const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

const traverseData = () => {
    let sum = 0
    const rucksackData = getData()
    for (let i = 0; i < rucksackData.length; i++) {
       sum += findCommonCharacters(rucksackData, i)
        
    }
    return sum
}

const findCommonCharacters = (rucksackData, i) => {
    const bothCompartments = rucksackData[i].length
    for (let j = 0; j < (bothCompartments) / 2; j++) {
        const currentChar = rucksackData[i][j]
        const secondCompartment = rucksackData[i].slice(bothCompartments / 2, bothCompartments)

        for (let k = 0; k < secondCompartment.length; k++) {
            if (currentChar === secondCompartment[k]) {
                return characters.indexOf(currentChar) + 1
            }

        }
    }
}

traverseData()