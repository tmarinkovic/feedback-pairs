const matcher = participants => {

    let matchedPairs = []
    let schedule = []
    let tryCounterPairs = 0;

    const createSessions = (pairs, sessionsPerTurn, numberOfTurns) => {
        let originalPairs = [...pairs]

        while (schedule.length !== numberOfTurns) {
            let tempPairs = pairs
            let possibleSession = []
            let alreadyAddedParticipant = []
            while (possibleSession.length !== sessionsPerTurn) {
                let randomPairIndex = Math.floor((Math.random() * pairs.length));
                let pair = pairs[randomPairIndex]
                if (matchedPairs.includes(pair)) {
                    continue
                }
                if (
                    pair === undefined ||
                    alreadyAddedParticipant.includes(pair[0]) ||
                    alreadyAddedParticipant.includes(pair[1])
                ) {
                    tryCounterPairs++
                    if (tryCounterPairs > 100) {
                        break
                    }
                    continue
                }
                tryCounterPairs = 0
                possibleSession.push(pairs[randomPairIndex])
                alreadyAddedParticipant.push(pair[0])
                alreadyAddedParticipant.push(pair[1])
                tempPairs.splice(randomPairIndex, 1)
            }

            if (tryCounterPairs > 100) {
                pairs = [...originalPairs]
                matchedPairs = []
                schedule = []
                tryCounterPairs = 0;
                continue
            }

            schedule.push(possibleSession)
            pairs = tempPairs
        }

        return schedule
    }

    const createPairs = participants => {
        let pairs = []
        for (let i = 0; i < participants.length; i++) {
            for (let j = i + 1; j < participants.length; j++) {
                pairs.push([participants[i], participants[j]])
            }
        }
        return pairs
    }

    return (() => {
        if (participants.length % 2 !== 0) {
            participants.push("Wait")
        }
        const sessionsPerTurn = participants.length / 2
        const numberOfTurns = participants.length - 1
        let pairs = createPairs(participants)
        return new Promise((resolve, reject) => {
            resolve(createSessions(pairs, sessionsPerTurn, numberOfTurns));
        });
    })()
}

export default matcher;

