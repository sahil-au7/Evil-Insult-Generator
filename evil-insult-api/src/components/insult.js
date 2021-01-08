import React from 'react';
import { Button } from "@material-ui/core";
import InsultText from "./insultText";
const insult = ({ insult, setGenerate, isLoading }) => {
    return (
        <div className="insult">
            <div className="insult__container">
                <div className="insult__text">
                    <InsultText insult={insult} isLoading={isLoading}/>
                </div>
                <Button onClick={setGenerate(" ")} variant="outlined" size="large" color="secondary">
                    GENERATE
                </Button>
                </div>
        </div>
    )
}

export default insult
