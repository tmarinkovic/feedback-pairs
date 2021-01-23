export const ADD_PARTICIPANT = "UPDATE_PARTICIPANTS"
export const REMOVE_PARTICIPANT = "REMOVE_PARTICIPANTS"


const initState = {
    participants: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    ]
}

const Reducer = (state = initState, action) => {
    switch (action.type) {

        case ADD_PARTICIPANT:
            return {
                ...state,
                participants: [...state.participants, action.participant]
            }

        case REMOVE_PARTICIPANT:
            const participants = [...state.participants]
            const indexOfParticipantToRemove = participants.indexOf(action.participant)
            participants.splice(indexOfParticipantToRemove, 1)
            return {
                ...state,
                participants: participants
            }

        default:
            return state
    }
}

export default Reducer