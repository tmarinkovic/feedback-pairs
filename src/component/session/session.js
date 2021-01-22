import {Grid} from "@material-ui/core";
import {Pair} from "../pair/pair";
import React from "react";

export const Session = ({session, sessionNumber}) => {
    return (
        <Grid className='session' container xs={12} sm={8} md={8} lg={8} xl={8}>
            <span className="session-title">{sessionNumber}</span>
            {session.map(pair =>
                <Pair
                    key={`pair-${pair}`}
                    pair={pair}/>
            )}
        </Grid>
    )
}