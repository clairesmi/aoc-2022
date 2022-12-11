let STACKS 
const STACKS_OBJECT = {}
let INSTRUCTIONS
const FORMATTED_STACKS = {}

const formatData = () => {
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
    processRearrangement()
    return FORMATTED_STACKS
}

const processRearrangement = () => {
    INSTRUCTIONS.forEach(inst => {
        inst = inst.split(' ').filter(el => parseInt(el))
        for (let i = 0; i < parseInt(inst[0]); i++) {
            const temp = FORMATTED_STACKS[inst[1]].shift()
            FORMATTED_STACKS[inst[2]].unshift(temp)
        }
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
formatData()