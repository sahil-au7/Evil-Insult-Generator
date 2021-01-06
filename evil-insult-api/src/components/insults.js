import React from 'react'
import { Button } from "@material-ui/core";
const insults = ({ insult,refresh }) => {
    return (
        <div className="insult">
            <p></p>
            <h1>{insult}</h1>
            <Button variant="outlined" color="secondary">
            Secondary
            </Button>
        </div>
    )
}

export default insults
