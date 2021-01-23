import React from "react";
import {Session} from "../session/session";

export const Schedule = ({schedule, colors}) => {
    let sessionNumber = 0
    return (schedule.map(session => {
        sessionNumber++
        return <Session
            colors = {colors}
            key={`session-${sessionNumber}`}
            session={session}
            sessionNumber={sessionNumber}
        />
    }))
}