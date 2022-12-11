let STACKS 
const STACKS_OBJECT = {}
let INSTRUCTIONS
const FORMATTED_STACKS = {}

const formatData = (func) => {
    let data = require("fs").readFileSync("day5.txt", 'utf8')
    data = data.split("\n\n").map((d) => d.split("\n"))
    STACKS = data[0]
    INSTRUCTIONS = data[1]

    STACKS.forEach(row => {
        row = row.replaceAll('[', ' ').replaceAll(']', ' ')
        row.split('').forEach((el, i) => {
            el = el.trim()
            const stacksObjectKey = (i).toString()
            if (el && !parseInt(el)) {

                if (!STACKS_OBJECT[stacksObjectKey]) {
                    STACKS_OBJECT[stacksObjectKey] = [el]
                }
                else {
                    STACKS_OBJECT[stacksObjectKey].push(el)
                }
            }
        })
    })
    
    for (let key in STACKS_OBJECT) {
        formattedKey = (Object.keys(STACKS_OBJECT).indexOf(key) + 1).toString()
        FORMATTED_STACKS[formattedKey] = STACKS_OBJECT[key]
    }
    processRearrangement(func)
    return FORMATTED_STACKS
}

const processRearrangement = (func) => {
    INSTRUCTIONS.forEach(inst => {
        inst = inst.split(' ').filter(el => parseInt(el))
        func(inst)

    })
    let topCrates = ''
    for (const key in FORMATTED_STACKS) {
        if (FORMATTED_STACKS[key][0]) {
            topCrates += FORMATTED_STACKS[key][0]
        }
    }
    console.log(topCrates)
    return topCrates
}

const partOne = (instruction) => {
    for (let i = 0; i < parseInt(instruction[0]); i++) {
        const temp = FORMATTED_STACKS[instruction[1]].shift()
        FORMATTED_STACKS[instruction[2]].unshift(temp)
    }
}

const partTwo = (instruction) => {
    const temp = FORMATTED_STACKS[instruction[1]].splice(0, instruction[0])
    FORMATTED_STACKS[instruction[2]] = temp.concat(FORMATTED_STACKS[instruction[2]])
}
formatData(partTwo)
formatData(partOne)