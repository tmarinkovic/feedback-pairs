const matcher = require('./Matcher').default;

const evenNumberOfParticipants = ["A","B","C","D","E","F"]
const oddNumberOfParticipants = ["A","B","C","D","E","F","G"]


test('create pairs for even number of participants', () => {
    const result = matcher(evenNumberOfParticipants)
    let allPairs = []
    expect(result.length).toBe(5)
    result.forEach(session => {
        expect(session.length).toBe(3)
        session.forEach(pair => {
            allPairs.push(pair)
            expect(pair.length).toBe(2)
        })
    })
});

test('create pairs for odd number of participants', () => {
    const result = matcher(oddNumberOfParticipants)
    let allPairs = []
    expect(result.length).toBe(7)
    result.forEach(session => {
        expect(session.length).toBe(4)
        session.forEach(pair => {
            allPairs.push(pair)
            expect(pair.length).toBe(2)
        })
    })

});