gameData = open('day2.txt', 'r').read().split('\n')
rpsConfig = {
    'X': ['CX', 'AX'],
    'Y': ['AY', 'BY'],
    'Z': ['BZ', 'CZ']
}

def getShapeScore(el):
    return list(dict.keys(rpsConfig)).index(el) + 1

def partOne():
    totalPoints = 0
    for currentRound in gameData:
        myTurnIdx = currentRound[1]
        resultTypes = rpsConfig[myTurnIdx]
        totalPoints += getShapeScore(myTurnIdx)
        if resultTypes[0] == currentRound:
            totalPoints += 6
        elif resultTypes[1] == currentRound:
            totalPoints += 3
    return totalPoints

partOne()


myOptions = ['X', 'Y', 'Z']
elfOptions = ['A', 'B', 'C']

instructionTranslation = {
    'X': 2,
    'Y': 0,
    'Z': 1
}

def partTwo():
    totalPoints = 0
    myTurnIdx = 0
    for currentRound in gameData:
        myTurnIdx = (elfOptions.index(currentRound[0]) + instructionTranslation[currentRound[1]]) % len(myOptions)
        totalPoints += (myOptions.index(currentRound[1]) * 3) + getShapeScore(myOptions[myTurnIdx])

partTwo()

