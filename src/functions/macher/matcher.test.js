import matcher from "./Matcher";

const evenNumberOfParticipants = ["A","B","C","D","E","F"]
const oddNumberOfParticipants = ["A","B","C","D","E","F","G"]


test('create pairs for even number of participants',  done => {
    matcher(evenNumberOfParticipants)
        .then(result => {
            expect(result.length).toBe(5)
            result.forEach(session => {
                expect(session.length).toBe(3)
                session.forEach(pair => {
                    expect(pair.length).toBe(2)
                })
            })
            done()
        })
});

test('create pairs for odd number of participants', done => {
    matcher(oddNumberOfParticipants)
        .then(result => {
            expect(result.length).toBe(7)
            result.forEach(session => {
                expect(session.length).toBe(4)
                session.forEach(pair => {
                    expect(pair.length).toBe(2)
                })
            })
            done()
        })
});