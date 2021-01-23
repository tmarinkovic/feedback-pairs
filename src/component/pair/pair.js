import {Grid, Paper} from "@material-ui/core";
import React from "react";

export const Pair = ({pair, colors}) => {
    return (
        <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
            <Paper key={`paper-${pair}`} className="paper">
                <span style={{color:colors[pair[0]]}}>{pair[0]}</span> - <span style={{color:colors[pair[1]]}}>{pair[1]}</span>
            </Paper>
        </Grid>
    )
}