import './App.css';
import {FeedbackParticipants} from "./component/feedback-participants/feedbackParticipants";
import {Button} from "@material-ui/core";
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Schedule} from "./component/schedule/schedule";
import {Loading} from "./component/loading/loading";
import {Notification} from "./component/notification/notification";

const matcher = require('./macher/Matcher').default;

const App = () => {
    const participants = useSelector(state => state.participants)
    const [pairs, setPairs] = useState([]);
    const [display, setDisplay] = useState("none");
    const [notification, setNotification] = useState({show:false, text: ""});


    const onButtonClick = () => {

        if (participants.length < 3) {
            setNotification({show:true, text: "Less than 3 participants not supported!"})
            return
        }



        if (participants.length !== 0) {
            setDisplay("block")
            setTimeout(function () {
                return matcher([...participants])
                    .then(result => setPairs(result))
                    .then(setDisplay("none"))
            }, 500);
        }
    }

    return (
        <div className="App">
            <Loading display={display}/>
            <div className="middle">
                <Notification
                    notification = {notification}
                    setNotification= {setNotification}
                />
                <FeedbackParticipants/>
                <Button
                    className="create-pairs-button"
                    variant="contained"
                    color="primary"
                    onClick={() => onButtonClick()}>
                    Generate pairs
                </Button>
            </div>
            <Schedule schedule={pairs}/>
        </div>
    );
}
export default App;
