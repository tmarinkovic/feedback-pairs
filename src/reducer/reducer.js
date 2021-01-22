export const ADD_PARTICIPANT = "UPDATE_PARTICIPANTS"
export const REMOVE_PARTICIPANT = "REMOVE_PARTICIPANTS"


const initState = {
    participants: []
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