export const ADD_PARTICIPANT = "UPDATE_PARTICIPANTS"
export const REMOVE_PARTICIPANT = "REMOVE_PARTICIPANTS"
export const STORE_ZOOM_CODE = "STORE_ZOOM_CODE"
export const STORE_SESSION_ID = "STORE_SESSION_ID"
export const SESSION_FETCHED = "SESSION_FETCHED"


const initState = {
    participants: [],
    sessionFetched: false
}

const Reducer = (state = initState, action) => {
    switch (action.type) {

        case STORE_ZOOM_CODE:
            return {
                ...state,
                zoomCode: action.zoomCode
            }

        case SESSION_FETCHED:
            return {
                ...state,
                sessionFetched: true
            }

        case STORE_SESSION_ID:
            return {
                ...state,
                sessionId: action.sessionId
            }

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