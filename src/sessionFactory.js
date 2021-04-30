import {ADD_PARTICIPANT} from "./reducer/reducer";

const {v4: uuidv4} = require('uuid');
const fetchUrl = require("fetch").fetchUrl;
let runOnce = true;
const backendURL = "https://widfn7ivkg.execute-api.eu-west-2.amazonaws.com/dev/session/";

const getSessionId = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('sessionId');
}

export const storeSession = (pairs) => {
    const id = getSessionId()
    const putMethod = {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        payload: JSON.stringify({id, pairs})
    }

    fetchUrl(backendURL, putMethod, function (error, meta, body) {
        console.log(body.toString())
    })

}

export const initializeSessions = (dispatch, pairs, configurePairs) => {
    let sessionId = uuidv4()
    const id = getSessionId()
    let url = window.location.href.replace(/\/$/, "");
    if (id === null) {
        url = url + '?sessionId=' + sessionId
        window.location.href = url
    } else {
        if (runOnce) {
            runOnce = false
            sessionId = id
            const url = backendURL + sessionId
            fetchUrl(url, function (error, meta, body) {
                const response = JSON.parse(body.toString()).response;
                if (response === undefined) {
                    return
                }
                const pairs = JSON.parse(response.pairs.S)
                if(pairs.length !== 0){
                    configurePairs(pairs)
                    pairs[0].flat().map(participant => dispatch({
                        type: ADD_PARTICIPANT,
                        participant: participant
                    }))
                }
            });
        }
    }
}


