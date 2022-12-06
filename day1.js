const getElfData = () => {
    let data = require("fs").readFileSync("day1.txt", 'utf8')
    data = data.split("\n\n").map((d) => d.split("\n"));
    return data
}

const findElfWithMostCals = () => {
    let mostElfCals = 0
    getElfData().forEach(elf => {
        const currentElfCals = elf.reduce((a, b) => {
            return a + parseInt(b)
        }, 0)
        if (currentElfCals > mostElfCals) {
            mostElfCals = currentElfCals
        }
    })
    return mostElfCals

} 

findElfWithMostCals()

const findTop3ElfCals = () => {
    const top3 = {
        first: 0,
        second: 0,
        third: 0
    }
    getElfData().forEach(elf => {
        const currentElfCals = elf.reduce((a, b) => {
            return a + parseInt(b)
        }, 0)

        for (const key in top3) {
            if (currentElfCals > top3[key]) {
                top3[key] = currentElfCals
                return
            }
        }
    })
    const sumOfTop3 = Object.values(top3).reduce((a, b) => a + b, 0)
    return(sumOfTop3)

}

findTop3ElfCals()