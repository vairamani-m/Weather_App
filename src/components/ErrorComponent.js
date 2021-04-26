import React from 'react'
import { Button } from '@material-ui/core';
import './ErrorComponent.css'

const ErrorComponent = ({input, setInput, setTemp, setError}) => {
    return (
        <div className="error">
            <div className="error_box">
                <h1>Typo Error</h1>
                <p>There are no city by this name <h2>'{input}'</h2></p>
                <p>Please enter correctly</p><br />
                <Button variant="contained" color="default" onClick={()=>{setTemp(""); setInput(""); setError(false) }}>Back</Button>
            </div>
        </div>
    )
}

export default ErrorComponent
