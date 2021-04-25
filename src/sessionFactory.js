import {ADD_PARTICIPANT} from "./reducer/reducer";

const {v4: uuidv4} = require('uuid');
const fetchUrl = require("fetch").fetchUrl;

const backendURL = "https://4bcwdn36od.execute-api.eu-west-2.amazonaws.com/dev/session/";

export const storeSession = (id, pairs) => {
    const putMethod = {
        method: 'PUT', // Method itself
        headers: {
            'Content-type': 'application/json' // Indicates the content
        },
        body: JSON.stringify(pairs) // We send data in JSON format
    }

    fetchUrl(backendURL, putMethod, function(error, meta, body){
        console.log(body)
    })

}

export const initializeSessions = (dispatch, pairs, configurePairs) => {
    let sessionId = uuidv4()
    const pathName = window.location.pathname.split("/");
    const id = pathName[pathName.length - 1]
    let url = window.location.href.replace(/\/$/, "");
    if (id === '') {
        window.location.href = url
    }
    if (!url.includes('session::')) {
        url = url + '/session::' + sessionId
        window.location.href = url
    }
    else{
        if(pairs.length === 0){
            sessionId = id
            const url = backendURL + sessionId
            fetchUrl(url, function(error, meta, body){
                const response = JSON.parse(body.toString()).response;
                if(response === undefined){
                    return
                }
                const pairs = JSON.parse(response.pairs.S)
                configurePairs(pairs)

                pairs[0].flat().map(participant => dispatch({
                    type: ADD_PARTICIPANT,
                    participant: participant
                }))
            });
        }

    }


}



