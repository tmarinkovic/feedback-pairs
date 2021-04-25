import React from 'react';
import ChipInput from "material-ui-chip-input";
import {makeStyles} from '@material-ui/core/styles';
import {useDispatch, useSelector} from 'react-redux'
import {ADD_PARTICIPANT, REMOVE_PARTICIPANT} from "../../reducer/reducer";

export const FeedbackParticipants = () => {

    const useStyles = makeStyles({
        input: {
            borderBottom: '1px solid #e94560 !important',
            color:'white'
        },
        chip: {
            background: '#0f3460',
            color: 'white',
            '&:hover': {
                background: "#1958A2",
            },
        },
    });

    const participants = useSelector(state => state.participants)
    const classes = useStyles();
    const dispatch = useDispatch()
    const ChipInputLabel = () => <span className="chip-input-label">Participants</span>

    const handleAddChip = (chip) => {
        dispatch({
            type: ADD_PARTICIPANT,
            participant: chip
        })
    }

    const handleDeleteChip = (chip) => {
        dispatch({
            type: REMOVE_PARTICIPANT,
            participant: chip
        })
    }

    return (
        <div className="participant-input">
            <ChipInput
                label={<ChipInputLabel/>}
                classes={{
                    input: classes.input,
                    chip: classes.chip
                }}
                value={participants}
                onAdd={(chip) => handleAddChip(chip)}
                onDelete={(chip, index) => handleDeleteChip(chip, index)}
            />
        </div>
    )
}