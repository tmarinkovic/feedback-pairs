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
    const [colors, setColors] = useState({});
    const [display, setDisplay] = useState("none");
    const [notification, setNotification] = useState({show:false, text: ""});


    const getColors = pairs => {
        let assignedColors = {}

        const colorList = [
            '#b9f261',
            '#99b851',
            '#61f2ca',
            '#51b892',
            '#fae058',
            '#ffbf54',
            '#f76865',
            '#bf585e',
            '#41a6f6',
            '#73eff7',
            '#f4f4f4',
            '#94b0c2',
            '#ffcd75',
            '#38b764',
        ]

        let counter = 0
        pairs.forEach(pair=> {
            pair.forEach(participant=> {
                assignedColors[participant] = colorList[counter]
                counter++
            })
        })
       setColors(assignedColors)
    }

    const onButtonClick = () => {

        if (participants.length < 3) {
            setNotification({show:true, text: "Less than 3 participants is not supported!"})
            return
        }

        if (participants.length > 14) {
            setNotification({show:true, text: "More than 14 participants is not supported!"})
            return
        }

        if (participants.length !== 0) {
            setDisplay("block")
            setTimeout(function () {
                return matcher([...participants])
                    .then(result => {
                        getColors(result[0])
                        return setPairs(result)
                    })
                    .then(_ => setDisplay("none"))
                    .catch(error => {
                        setNotification({show:true, text: "We are having issue computing this! Please try again or try with less participants."})
                        setDisplay("none")
                    })
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
            <Schedule schedule={pairs} colors={colors}/>
        </div>
    );
}
export default App;
