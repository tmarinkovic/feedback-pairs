import './App.css';
import {FeedbackParticipants} from "./component/feedback-participants/feedbackParticipants";
import {Button} from "@material-ui/core";
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Schedule} from "./component/schedule/schedule";
import {Loading} from "./component/loading/loading";
import {Notification} from "./component/notification/notification";
import {getParticipantColors} from "./functions/colors-manager/colorsManager";
import matcher from "./functions/macher/Matcher";
import {initializeSessions, storeSession} from './sessionFactory'
import {REMOVE_PARTICIPANT} from "./reducer/reducer";
import useSound from 'use-sound';
import beep from '../src/sounds/beep.mp3';


const App = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const participants = state.participants
    const [play] = useSound(beep);
    const [pairs, setPairs] = useState([]);
    const [participantColors, setParticipantColors] = useState({});
    const [displayNotification, setDisplayNotification] = useState("none");
    const [notification, setNotification] = useState({show: false, text: ""});

    const displayZoomButton = pairs.length > 0

    const configurePairs = result => {
        setPairs(result)
        setParticipantColors(getParticipantColors(result[0]))
    }

    initializeSessions(dispatch, pairs, configurePairs, state)

    const onShareButtonClick = () => {
        const input = document.body.appendChild(document.createElement("input"));
        input.value = window.location
        input.focus();
        input.select();
        document.execCommand('copy');
        input.parentNode.removeChild(input);
        window.scrollTo(0, 0)
        setNotification({show: true, text: "Link copied to clipboard! Session will be valid for 24hours!"})
    }

    const onClearButtonClick = () => {

        play()

        participants.map(participant => dispatch({
            type: REMOVE_PARTICIPANT,
            participant: participant
        }))
        setPairs([])
        storeSession([], state.sessionId)
        setNotification({show: true, text: "Removed all participants!"})
    }

    const createZoomMeetings = () => {
        window.location = `https://zoom.us/oauth/authorize?response_type=code&client_id=RyQwP1rURHCGyq8nJN9Q&redirect_uri=https%3A%2F%2Ftmarinkovic.github.io%2Ffeedback-pairs%2F?sessionId=${state.sessionId}`
    }


    const onPairButtonClick = () => {

        if (participants.length < 3) {
            setNotification({show: true, text: "Less than 3 participants is not supported!"})
            return
        }

        if (participants.length > 14) {
            setNotification({show: true, text: "More than 14 participants is not supported!"})
            return
        }

        if (participants.includes("Wait")) {
            setNotification({show: true, text: "Wait is reserved word, please remove it from list of participants"})
            return
        }

        if (participants.length !== 0) {
            setDisplayNotification("block")
            setTimeout(function () {
                return matcher([...participants])
                    .then(result => {
                        configurePairs(result)
                        storeSession(result, state.sessionId)
                    })
                    .then(_ => setDisplayNotification("none"))
                    .catch(_ => {
                        setNotification({
                            show: true,
                            text: "We are having issue computing this! Please try again or try with less participants."
                        })
                        setDisplayNotification("none")
                    })
            }, 500);
        }
    }

    return (
        <div className="App">
            <Loading display={displayNotification}/>
            <div className="middle">
                <Notification
                    notification={notification}
                    setNotification={setNotification}
                />
                <FeedbackParticipants/>
                <div className="tooltip-container">
                    <span className="tooltip">add participant</span>
                    <img className="enter-button" src={process.env.PUBLIC_URL + '/enter-key.png'} alt="enter key"/>
                </div>
                <Button
                    className="create-pairs-button"
                    variant="contained"
                    color="primary"
                    onClick={() => onPairButtonClick()}>
                    Pair
                </Button>
                <Button
                    className="clear-pairs-button"
                    variant="contained"
                    color="primary"
                    onClick={() => onClearButtonClick()}>
                    Clear
                </Button>
                <Button
                    className="share-pairs-button"
                    variant="contained"
                    color="default"
                    onClick={() => onShareButtonClick()}>
                    Share
                </Button>
                {/*<Button*/}
                {/*    style={{*/}
                {/*        display: displayZoomButton ? 'block' : 'none'*/}
                {/*    }}*/}
                {/*    className="zoom-button"*/}
                {/*    variant="contained"*/}
                {/*    color="default"*/}
                {/*    onClick={() => createZoomMeetings()}>*/}
                {/*    Make it zoom meeting*/}
                {/*</Button>*/}
            </div>
            <Schedule schedule={pairs} colors={participantColors}/>
        </div>
    );
}

export default App;
