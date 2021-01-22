import React, {useState} from 'react';
import ChipInput from "material-ui-chip-input";
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

    return (
        <div className="participant-input">
            <ChipInput
                label="Participants"
                value={tags}
                onAdd={(chip) => handleAddChip(chip)}
                onDelete={(chip, index) => handleDeleteChip(chip, index)}
            />
        </div>
    )


}