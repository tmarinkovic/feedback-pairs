import {Grid} from "@material-ui/core";
import {Pair} from "../pair/pair";
import React from "react";

export const Session = ({session, sessionNumber}) => {
    return (
        <Grid className='session' container>
            <span className="session-title">{sessionNumber}</span>
            {session.map(pair =>
                <Pair
                    key={`pair-${pair}`}
                    pair={pair}/>
            )}
        </Grid>
    )
}