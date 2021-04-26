import React from 'react';
import { Button } from '@material-ui/core';
import './ResultComponent.css'

const ResultComponent = ({input, setInput, temp, description, icon, setTemp}) => {
    let cityName = input.charAt(0).toUpperCase() + input.slice(1);
    return (
        <div className="result">
            <div className="result_box">
                <h1>{cityName} Temperature : {temp}°C</h1>
                <p>{description}</p>
                <img src={icon} alt="logo" /><br />
                <Button variant="contained" color="default" onClick={()=>{setTemp(""); setInput("") }}>Back</Button>
            </div>
        </div>
    )
}

export default ResultComponent