import {ADD_PARTICIPANT, SESSION_FETCHED, STORE_SESSION_ID, STORE_ZOOM_CODE} from "./reducer/reducer";

const {v4: uuidv4} = require('uuid');
const fetchUrl = require("fetch").fetchUrl;
const backendURL = "https://widfn7ivkg.execute-api.eu-west-2.amazonaws.com/dev/session/";

const getSessionIdFromUrl = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('sessionId');
}

const getZoomCodeFromUrl = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('code');
}

export const storeSession = (pairs, sessionId) => {
    const putMethod = {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        payload: JSON.stringify({id: sessionId, pairs})
    }

    fetchUrl(backendURL, putMethod, function (error, meta, body) {
        console.log(body.toString())
    })

}

export const initializeSessions = (dispatch, pairs, configurePairs, state) => {
    if (state.sessionId !== undefined) {
        return
    }
    let id = getSessionIdFromUrl()
    const zoomCode = getZoomCodeFromUrl()
    // window.history.replaceState(null, null, window.location.pathname);

    fetchSessionIfSessionIdIsSet(configurePairs, dispatch, id)
    storeZoomCodeIfPreset(zoomCode, dispatch)
}

const fetchSession = (configurePairs, dispatch, id) => {
    const url = backendURL + id
    fetchUrl(url, function (error, meta, body) {
        const response = JSON.parse(body.toString()).response;
        if (response === undefined) {
            return
        }
        const pairs = JSON.parse(response.pairs.S)
        if (pairs.length !== 0) {
            configurePairs(pairs)
            pairs[0].flat().map(participant => dispatch({
                type: ADD_PARTICIPANT,
                participant: participant
            }))
        }
    });
    dispatch({type: SESSION_FETCHED})
}

const fetchSessionIfSessionIdIsSet = (configurePairs, dispatch, id) => {
    if (id === null) {
        id = uuidv4()
        let queryParameters = ''
        const zoomCode = getZoomCodeFromUrl()
        if(zoomCode === null){
            queryParameters = `?sessionId=${id}`
        }
        else{
            queryParameters = `?code=${zoomCode}&sessionId=${id}`
        }
        window.history.replaceState(null, null, window.location.pathname + queryParameters);
    } else {
        fetchSession(configurePairs, dispatch, id)
    }
    dispatch({
        type: STORE_SESSION_ID,
        sessionId: id
    })
}

const storeZoomCodeIfPreset = (zoomCode, dispatch) => {
    if (zoomCode !== null) {
        dispatch({
            type: STORE_ZOOM_CODE,
            zoomCode: zoomCode
        })
    }
}





