import {ADD_PARTICIPANT, SESSION_FETCHED, STORE_SESSION_ID, STORE_ZOOM_CODE} from "./reducer/reducer";
import {BACKEND_URL} from "./constants";

const fetch = require('node-fetch');
const {v4: uuidv4} = require('uuid');

const getSessionIdFromUrl = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('sessionId');
}

const getZoomCodeFromUrl = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('code');
}

export const initializeSessions = (dispatch, pairs, configurePairs, state) => {
    if (state.sessionId !== undefined) {
        return
    }
    let id = getSessionIdFromUrl()
    const zoomCode = getZoomCodeFromUrl()

    fetchSessionIfSessionIdIsSet(configurePairs, dispatch, id)
        .then(matchedPairs => storeZoomCodeIfPreset(zoomCode, dispatch, id, matchedPairs[0].length))
}

export const storeSession = (pairs, sessionId) => {

    fetch(BACKEND_URL + 'session/', {
        method: 'PUT',
        body: JSON.stringify({id: sessionId, pairs}),
        headers: {'Content-Type': 'application/json'},
    })
        .then(res => res.json())
        .then(json => console.log(json));

}

export const storeZoomUrls = (authCode, sessionId, pairsCount) => {

    const payload = {
        authCode: authCode,
        sessionId: sessionId,
        pairsCount: pairsCount
    }

    fetch(BACKEND_URL + 'zoom/', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {'Content-Type': 'application/json'},
    })
        .then(res => res.json())
        .then(json => console.log(json));
}

const fetchSessionIfSessionIdIsSet = (configurePairs, dispatch, id) => {
    if (id === null) {
        id = uuidv4()
    }

    dispatch({
        type: STORE_SESSION_ID,
        sessionId: id
    })

    let queryParameters = ''
    const zoomCode = getZoomCodeFromUrl()
    if (zoomCode === null) {
        queryParameters = `?sessionId=${id}`
    } else {
        queryParameters = `?code=${zoomCode}&sessionId=${id}`
    }
    window.history.replaceState(null, null, window.location.pathname + queryParameters);
    return fetchSession(configurePairs, dispatch, id)
        .then(result => {
            if (result === undefined) return [[]]
            return JSON.parse(result.pairs.S)
        })
}

const storeZoomCodeIfPreset = (zoomCode, dispatch, sessionId, pairsCount) => {
    if (zoomCode !== null) {
        dispatch({
            type: STORE_ZOOM_CODE,
            zoomCode: zoomCode
        })
        storeZoomUrls(zoomCode, sessionId, pairsCount)
    }
}


const fetchSession = (configurePairs, dispatch, id) => {
    const url = BACKEND_URL + 'session/' + id
    return fetch(url)
        .then(res => res.json())
        .then(json => {
            const response = json.response
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
            dispatch({type: SESSION_FETCHED})
            return response
        }).then(response => response)
}



