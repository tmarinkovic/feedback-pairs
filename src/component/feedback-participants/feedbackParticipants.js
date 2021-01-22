import React, {useState} from 'react';
import ChipInput from "material-ui-chip-input";
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch} from 'react-redux'
import {ADD_PARTICIPANT, REMOVE_PARTICIPANT} from "../../reducer/reducer";

export const FeedbackParticipants = () => {

    const [tags, setTags] = useState([]);

    const dispatch = useDispatch()

    const handleAddChip = (chip) => {
        setTags([...tags, chip])
        dispatch({
            type: ADD_PARTICIPANT,
            participant: chip
        })
    }

    const handleDeleteChip = (chip) => {
        const newTags = [...tags]
        const indexOfTagToRemove = newTags.indexOf(chip)
        newTags.splice(indexOfTagToRemove, 1)
        setTags(newTags)
        dispatch({
            type: REMOVE_PARTICIPANT,
            participant: chip
        })
    }

    const useStyles = makeStyles({
        input: {
            // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
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


    const ChipInputLabel = () => <span className="chip-input-label">Participants</span>

    const classes = useStyles();

    return (
        <div className="participant-input">
            <ChipInput
                label={<ChipInputLabel/>}
                classes={{
                    input: classes.input,
                    chip: classes.chip
                }}
                value={tags}
                onAdd={(chip) => handleAddChip(chip)}
                onDelete={(chip, index) => handleDeleteChip(chip, index)}
            />
        </div>
    )


}