import {Grid, Paper} from "@material-ui/core";
import React from "react";

export const Pair = ({pair, colors}) => {
    return (
        <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
            <Paper key={`paper-${pair}`} className="paper">
                <span style={{color:colors[pair[0]]}}>{pair[0]}</span> - <span style={{color:colors[pair[1]]}}>{pair[1]}</span>
            </Paper>
            {/*<Button*/}
            {/*    className="join-zoom-button"*/}
            {/*    variant="contained"*/}
            {/*    color="default">*/}
            {/*    <img className="zoom-icon" src={process.env.PUBLIC_URL + '/zoom-icon.png'}  alt="zoom-icon"/>*/}
            {/*    <span>Join</span>*/}
            {/*    <span className="participant-info">*/}
            {/*         <img className="participant-icon" src={process.env.PUBLIC_URL + '/user.png'}  alt="zoom-icon"/>*/}
            {/*        <span className="participant-count">0</span>*/}
            {/*    </span>*/}
            {/*</Button>*/}
        </Grid>
    )
}