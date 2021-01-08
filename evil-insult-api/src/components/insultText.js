import React from 'react'
import Spinner from "./spinner";

const insultText = ({isLoading,insult}) => {
    return isLoading ? (<Spinner />) : (<h1>{insult}</h1>)
}

export default insultText
