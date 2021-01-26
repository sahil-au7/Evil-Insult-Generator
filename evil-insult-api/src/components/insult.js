import React from "react";
import { Button } from "@material-ui/core";
import InsultText from "./InsultText";
const Insult = ({ insult, generate, setGenerate, isLoading }) => {
  const generateInsult = () => {
    if (generate) setGenerate(false);
    else setGenerate(true);
  };
  return (
    <div className="insult">
      <div className="insult__container">
        <div className="insult__text">
          <InsultText insult={insult} isLoading={isLoading} />
        </div>
        <Button
          onClick={generateInsult}
          variant="outlined"
          size="large"
          color="secondary"
        >
          GENERATE
        </Button>
      </div>
    </div>
  );
};

export default Insult;
