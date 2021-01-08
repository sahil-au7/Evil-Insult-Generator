import React from "react";
import spinner from "../img/Pulse-1s-200px.gif";

const Spinner = () => {
    return (
        <img src={spinner}
            style={{ width: "50px", margin: "auto", display: "block" }}
            alt="loading"
        />
    )
}

export default Spinner



