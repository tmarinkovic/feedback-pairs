import {Grid, Paper} from "@material-ui/core";
import React from "react";

export const Pair = ({pair}) => {
    return (
        <Grid item xs={3}>
            <Paper key={`paper-${pair}`} className="paper">{pair[0]} - {pair[1]}</Paper>
        </Grid>
    )
}