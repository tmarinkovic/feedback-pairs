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

const App = () => {
    const participants = useSelector(state => state.participants)
    const [pairs, setPairs] = useState([]);
    const dispatch = useDispatch()
    const [participantColors, setParticipantColors] = useState({});
    const [displayNotification, setDisplayNotification] = useState("none");
    const [notification, setNotification] = useState({show: false, text: ""});

    const configurePairs = result => {
        setPairs(result)
        setParticipantColors(getParticipantColors(result[0]))
    }

    initializeSessions(dispatch, pairs, configurePairs)

    const onButtonClick = () => {

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
                        storeSession(result)
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
                    onClick={() => onButtonClick()}>
                    Pair
                </Button>

            </div>
            <Schedule schedule={pairs} colors={participantColors}/>
        </div>
    );
}

export default App;
